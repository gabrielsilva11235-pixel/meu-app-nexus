
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AppItem } from '../constants';

interface InformativosViewProps {
  newsItems: AppItem[];
  readNewsIds?: string[];
  currentUser?: string | null;
  currentUserLevel?: string | null;
  isSyncing?: boolean;
  lastSyncTime?: Date | null;
  syncError?: string | null;
  onManualSync?: () => void;
  onMarkAsRead?: (id: string) => void;
  onPreviewImage?: (url: string, title: string) => void;
  onPreviewPdf?: (url: string, title: string) => void;
}

type ViewMode = 'gallery' | 'list';

const InformativosView: React.FC<InformativosViewProps> = ({ 
  newsItems = [], 
  readNewsIds = [], 
  currentUser,
  currentUserLevel,
  isSyncing = false,
  lastSyncTime = null,
  syncError = null,
  onManualSync,
  onMarkAsRead,
  onPreviewImage,
  onPreviewPdf
}) => {
  const [selectedNews, setSelectedNews] = useState<AppItem | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('gallery');
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSyncingLogs, setIsSyncingLogs] = useState(false);
  const [showAdminReadList, setShowAdminReadList] = useState(false);
  
  const MASTER_BRIDGE_URL = "https://script.google.com/macros/s/AKfycbyhIcpWbtpGfG63tcuFrPOa6EoZfA4J2OfEV_PN4lh5At5RcEKdh1g-xzbJwT3qUAg2dg/exec";
  const READ_LOGS_CSV_URL = "https://docs.google.com/spreadsheets/d/1xP7W34m-vqIl0gebkbUNkEsly9nN3QaOT2IAJFfNBeY/export?format=csv&gid=1990819835";
  
  const [readLogs, setReadLogs] = useState<Record<string, string[]>>(() => {
    const saved = localStorage.getItem('nexus_read_logs');
    return saved ? JSON.parse(saved) : {};
  });

  const carouselTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const PROGRESS_INTERVAL = 100;
  const CYCLE_DURATION = 8000;

  const normalize = (str: string | undefined | null) => str?.trim().toUpperCase() || "";

  const syncReadLogs = useCallback(async () => {
    if (isSyncingLogs) return;
    setIsSyncingLogs(true);
    try {
      const response = await fetch(`${READ_LOGS_CSV_URL}&cb=${Date.now()}`);
      if (!response.ok) throw new Error("Falha ao buscar logs");
      const text = await response.text();
      const rows = text.split(/\r?\n/);
      const newLogs: Record<string, string[]> = {};

      for (let i = 1; i < rows.length; i++) {
        if (!rows[i].trim()) continue;
        const cols = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        if (cols.length >= 2) {
          const clean = (val: string) => val?.replace(/^"|"$/g, '').replace(/""/g, '"').trim() || "";
          const newsTitle = clean(cols[0]);
          const userName = clean(cols[1]);
          if (newsTitle && userName) {
            const titleKey = normalize(newsTitle);
            const userKey = normalize(userName);
            if (!newLogs[titleKey]) newLogs[titleKey] = [];
            if (!newLogs[titleKey].includes(userKey)) newLogs[titleKey].push(userKey);
          }
        }
      }
      setReadLogs(newLogs);
      localStorage.setItem('nexus_read_logs', JSON.stringify(newLogs));
    } catch (e) {
      console.error("Erro na sincronização de logs:", e);
    } finally {
      setIsSyncingLogs(false);
    }
  }, [isSyncingLogs]);

  useEffect(() => {
    syncReadLogs();
    const interval = setInterval(syncReadLogs, 60000);
    return () => clearInterval(interval);
  }, [syncReadLogs]);

  useEffect(() => {
    if (newsItems.length <= 1) return;
    const startTimer = () => {
      carouselTimer.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setFeaturedIndex((current) => (current + 1) % Math.min(newsItems.length, 6));
            return 0;
          }
          return prev + (100 / (CYCLE_DURATION / PROGRESS_INTERVAL));
        });
      }, PROGRESS_INTERVAL);
    };
    startTimer();
    return () => { if (carouselTimer.current) clearInterval(carouselTimer.current); };
  }, [newsItems.length]);

  const handleSelectNews = (news: AppItem) => {
    setSelectedNews(news);
    setIsConfirming(false);
    setShowAdminReadList(false);
  };

  const handleConfirmReading = async () => {
    if (isConfirming || !selectedNews || !currentUser) return;
    setIsConfirming(true);
    const newsTitle = selectedNews.title;
    const normalizedTitle = normalize(newsTitle);
    const normalizedUser = normalize(currentUser);

    setReadLogs(prev => {
      const currentUsers = prev[normalizedTitle] || [];
      if (!currentUsers.includes(normalizedUser)) {
        const updated = { ...prev, [normalizedTitle]: [...currentUsers, normalizedUser] };
        localStorage.setItem('nexus_read_logs', JSON.stringify(updated));
        return updated;
      }
      return prev;
    });

    const scriptUrl = localStorage.getItem('nexus_apps_script_url') || MASTER_BRIDGE_URL;
    try {
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: "MARK_READ",
          "TÍTULO": newsTitle,
          "USUÁRIO": currentUser,
          sheetName: "Visualizados"
        })
      });
      onMarkAsRead?.(selectedNews.id);
      setTimeout(syncReadLogs, 5000);
    } catch (e) {
      console.error("Erro ao registrar leitura:", e);
    } finally {
      setTimeout(() => setIsConfirming(false), 2000);
    }
  };

  const isRead = (title: string | undefined) => {
    if (!currentUser || !title) return false;
    const usersWhoRead = readLogs[normalize(title)] || [];
    return usersWhoRead.includes(normalize(currentUser));
  };

  const getUsersWhoRead = (title: string | undefined) => {
    if (!title) return [];
    return readLogs[normalize(title)] || [];
  };

  const formatText = (text: string | undefined) => {
    if (!text) return "";
    return text.split('..').join('\n');
  };

  const currentFeatured = newsItems[featuredIndex] || newsItems[0];
  const featuredList = newsItems.slice(0, 6);
  const remainingNews = newsItems.slice(6);
  const isAdmin = currentUserLevel?.toUpperCase() === 'ADMINISTRADOR';

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#121212] h-full font-sans">
      <div className="relative z-10 flex-1 flex flex-col p-6 lg:p-10 overflow-y-auto custom-scrollbar">
        <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h1 className="text-3xl font-black italic tracking-tighter text-white uppercase leading-none">INFORMATIVOS</h1>
          <div className="flex items-center space-x-2 bg-black/40 p-1 rounded-xl border border-white/5">
            <button onClick={() => setViewMode('gallery')} className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${viewMode === 'gallery' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}>Destaques</button>
            <button onClick={() => setViewMode('list')} className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${viewMode === 'list' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}>Navegar</button>
          </div>
        </header>

        {viewMode === 'gallery' ? (
          <div className="animate-in fade-in duration-500 space-y-16">
            <section className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-4 h-[400px] lg:h-[500px]">
              <div 
                className="relative group cursor-pointer rounded-2xl overflow-hidden bg-slate-900 border border-white/5 shadow-2xl transition-all duration-500 hover:border-blue-500/30"
                onClick={() => handleSelectNews(currentFeatured)}
              >
                <img src={currentFeatured?.image} alt="" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-10 lg:p-16">
                  <div className="max-w-2xl space-y-6 animate-in slide-in-from-bottom-4 duration-700">
                    <span className="px-3 py-1 rounded-lg bg-blue-600 text-[10px] font-black uppercase tracking-widest text-white inline-block">{currentFeatured?.tag}</span>
                    <h2 className="text-2xl lg:text-4xl font-black text-white italic tracking-tighter leading-none uppercase">{currentFeatured?.title}</h2>
                    <p className="text-base lg:text-lg text-slate-300 font-medium leading-relaxed line-clamp-3 italic opacity-90 whitespace-pre-wrap">{formatText(currentFeatured?.description)}</p>
                    
                    <div className="flex items-center space-x-4">
                      <button className="bg-white text-black px-10 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-blue-50 transition-all active:scale-95 shadow-2xl">
                        Abrir Informativo
                      </button>
                      
                      <div className={`flex items-center space-x-2 px-6 py-4 rounded-xl border font-black text-[10px] uppercase tracking-widest transition-all ${isRead(currentFeatured?.title) ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-white/5 border-white/10 text-slate-500'}`}>
                        {isRead(currentFeatured?.title) ? (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
                            <span>Lido</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span>Pendente</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex flex-col gap-2 overflow-y-auto no-scrollbar">
                {featuredList.map((item, idx) => (
                  <button key={item.id} onClick={() => { setFeaturedIndex(idx); setProgress(0); }} className={`relative flex items-center w-full p-4 rounded-xl transition-all border text-left group overflow-hidden ${featuredIndex === idx ? 'bg-white/10 border-white/20 ring-1 ring-blue-500/50' : 'bg-transparent border-transparent hover:bg-white/5'}`}>
                    {featuredIndex === idx && <div className="absolute inset-0 bg-blue-500/10 pointer-events-none transition-all duration-100 ease-linear" style={{ width: `${progress}%` }} />}
                    <div className="w-12 h-16 rounded-lg overflow-hidden shrink-0 mr-4 border border-white/5 bg-slate-800"><img src={item.image} className="w-full h-full object-cover" alt="" /></div>
                    <div className="flex-1 min-w-0 z-10">
                      <h4 className={`text-[11px] font-black uppercase tracking-tight truncate ${featuredIndex === idx ? 'text-white' : 'text-slate-500'}`}>{item.title}</h4>
                      {isRead(item.title) ? (
                        <div className="flex items-center space-x-1 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                          <span className="text-[8px] font-black text-emerald-500 uppercase">Lido</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1 mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_#f59e0b]" />
                          <span className="text-[8px] font-black text-amber-500 uppercase">Pendente</span>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <h2 className="text-xl font-black italic text-white uppercase tracking-tighter">Mural de Notícias</h2>
                <button onClick={() => setViewMode('list')} className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white border border-white/10 px-4 py-2 rounded-lg transition-all">Ver Tudo</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {remainingNews.concat(featuredList).slice(0, 8).map((news) => {
                  const currentIsRead = isRead(news.title);
                  return (
                    <div 
                      key={news.id} 
                      onClick={() => handleSelectNews(news)} 
                      className="group flex flex-col space-y-3 cursor-pointer"
                    >
                      <div className={`relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 border transition-all duration-500 ${!currentIsRead ? 'border-amber-500/30' : 'border-emerald-500/30'} group-hover:border-blue-500/50 group-hover:-translate-y-2 shadow-2xl`}>
                        <img src={news.image} alt="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="absolute top-4 left-4">
                          {currentIsRead ? (
                            <div className="bg-emerald-600/90 backdrop-blur-md px-3 py-1 rounded-lg border border-emerald-400/30 flex items-center space-x-1 shadow-xl shadow-emerald-950/40">
                              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
                              <span className="text-[8px] font-black text-white uppercase tracking-wider">Lido</span>
                            </div>
                          ) : (
                            <div className="bg-amber-600/90 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-400/30 flex items-center space-x-1 shadow-xl shadow-amber-950/40 animate-attention">
                              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              <span className="text-[8px] font-black text-white uppercase tracking-wider">Pendente</span>
                            </div>
                          )}
                        </div>

                        <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                          <span className="bg-blue-600 text-white text-[8px] font-black uppercase px-4 py-1.5 rounded-md shadow-xl">Ver Detalhes</span>
                        </div>
                      </div>
                      <div className="px-1">
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{news.tag}</span>
                        <h3 className="text-sm font-black text-slate-200 group-hover:text-white transition-colors line-clamp-1 italic mt-1 uppercase">{news.title}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        ) : (
          <section className="flex-1 flex flex-col space-y-1 pb-20 animate-in slide-in-from-bottom-2 duration-500">
            {newsItems.map((news) => (
              <div key={news.id} onClick={() => handleSelectNews(news)} className="group relative flex items-center px-6 py-4 cursor-pointer transition-all border-b border-white/5 hover:bg-white/5">
                <div className="flex-1 ml-4 min-w-0"><h3 className="text-sm font-black text-slate-300 italic truncate group-hover:text-white uppercase">{news.title}</h3></div>
                <div className={`flex items-center px-4 py-1.5 rounded-lg border text-[9px] font-black uppercase tracking-widest transition-all ${isRead(news.title) ? 'bg-emerald-600/20 border-emerald-500/30 text-emerald-400' : 'bg-amber-600/20 border-amber-500/30 text-amber-400'}`}>
                  {isRead(news.title) ? 'Lido' : 'Pendente'}
                </div>
              </div>
            ))}
          </section>
        )}
      </div>

      {selectedNews && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-6 lg:p-12 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-300" onClick={() => !isConfirming && setSelectedNews(null)}>
          <div className="relative w-full max-w-4xl bg-[#121212] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <div className="absolute top-6 right-6 z-[600] flex items-center space-x-3">
              {isAdmin && (
                <button onClick={() => setShowAdminReadList(!showAdminReadList)} className={`w-12 h-12 rounded-full flex items-center justify-center transition-all backdrop-blur-xl border border-white/10 ${showAdminReadList ? 'bg-blue-600 text-white' : 'bg-black/40 text-slate-400 hover:text-white'}`}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></button>
              )}
              <button onClick={() => setSelectedNews(null)} className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg></button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
              <div className="relative w-full h-[400px] shrink-0 bg-slate-900">
                <img src={selectedNews.image} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
              </div>

              <div className="p-10 lg:p-14 space-y-12">
                {showAdminReadList && isAdmin ? (
                  <div className="animate-in slide-in-from-right-4 duration-500">
                    <h3 className="text-3xl font-black italic text-blue-500 uppercase tracking-tighter border-b border-white/10 pb-6 mb-8">Relatório de Visualização</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {getUsersWhoRead(selectedNews.title).map((userName, i) => (
                        <div key={i} className="flex items-center space-x-3 p-4 bg-white/5 rounded-2xl border border-white/5"><span className="text-[11px] font-black uppercase text-white truncate italic">{userName}</span></div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="space-y-6">
                      <span className="px-3 py-1 rounded-lg bg-blue-600/10 border border-blue-500/30 text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] italic inline-block">{selectedNews.tag}</span>
                      <h2 className="text-3xl lg:text-5xl font-black italic tracking-tighter text-white uppercase leading-none">{selectedNews.title}</h2>
                      <div className="h-px w-24 bg-blue-600 rounded-full"></div>
                      <div className="text-lg lg:text-2xl text-slate-300 leading-[1.8] font-medium whitespace-pre-wrap italic opacity-90 pb-8 border-b border-white/5">
                        {formatText(selectedNews.description)}
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-black/20 p-8 rounded-[2rem] border border-white/5">
                      <div className="space-y-1"><p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] italic">Confirmação de Ciência</p><p className="text-xs text-slate-400 font-medium">Ao confirmar, você declara estar ciente do informativo acima.</p></div>
                      <button 
                        onClick={handleConfirmReading} 
                        disabled={isConfirming || isRead(selectedNews.title)}
                        className={`transition-all duration-500 min-w-[280px] px-12 py-5 rounded-2xl font-black text-[12px] uppercase tracking-[0.2em] shadow-2xl active:scale-[0.98] ${isRead(selectedNews.title) ? 'bg-emerald-600 text-white cursor-default' : isConfirming ? 'bg-emerald-600 text-white animate-pulse' : 'bg-white text-black hover:bg-blue-50'}`}
                      >
                        {isRead(selectedNews.title) ? 'Leitura Confirmada' : isConfirming ? 'Processando...' : 'Confirmar Leitura Agora'}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InformativosView;
