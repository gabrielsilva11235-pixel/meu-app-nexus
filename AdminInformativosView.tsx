
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { AppItem } from '../constants';

interface AdminInformativosViewProps {
  newsItems: AppItem[];
  onAddNews: (item: AppItem) => void;
  onUpdateNews: (item: AppItem) => void;
  onRemoveNews: (id: string) => void;
  onSetAllNews: (items: AppItem[]) => void;
  onBack: () => void;
  onNotify: (title: string, message: string, type: 'info' | 'warning' | 'success') => void;
}

const AdminInformativosView: React.FC<AdminInformativosViewProps> = ({ 
  newsItems, 
  onAddNews, 
  onUpdateNews,
  onRemoveNews, 
  onSetAllNews,
  onBack,
  onNotify
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [originalTitle, setOriginalTitle] = useState<string>('');
  const [isSyncing, setIsSyncing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    tag: 'COMUNICADO',
    color: 'blue'
  });

  const MASTER_BRIDGE_URL = "https://script.google.com/macros/s/AKfycbyhIcpWbtpGfG63tcuFrPOa6EoZfA4J2OfEV_PN4lh5At5RcEKdh1g-xzbJwT3qUAg2dg/exec";

  const handleSync = useCallback(async (isAuto = false) => {
    if (isSyncing) return;
    const fetchUrl = "https://docs.google.com/spreadsheets/d/1xP7W34m-vqIl0gebkbUNkEsly9nN3QaOT2IAJFfNBeY/export?format=csv&gid=143346580";

    setIsSyncing(true);
    try {
      const response = await fetch(`${fetchUrl}&cb=${Date.now()}`);
      const text = await response.text();
      const rows = text.split(/\r?\n/);
      const newNewsList: AppItem[] = [];

      for (let i = 1; i < rows.length; i++) {
        if (!rows[i].trim()) continue;
        const cols = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        if (cols.length >= 2 && cols[0].trim()) {
          const clean = (val: string) => val?.replace(/^"|"$/g, '').replace(/""/g, '"').trim() || "";
          newNewsList.push({
            id: `sync_${i}_${Date.now()}`,
            title: clean(cols[0]),
            description: clean(cols[1]),
            tag: clean(cols[2]) || "GERAL",
            color: clean(cols[3]).toLowerCase() || "blue",
            image: clean(cols[4]) || "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200&h=600"
          });
        }
      }
      if (newNewsList.length > 0) onSetAllNews(newNewsList);
    } catch (e) {
      console.error("Erro na sincronização:", e);
    } finally {
      setIsSyncing(false);
    }
  }, [isSyncing, onSetAllNews]);

  useEffect(() => {
    handleSync(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description || isSaving) return;

    setIsSaving(true);
    onNotify("Sincronizando", "Enviando alterações para a planilha...", "info");

    const scriptUrl = localStorage.getItem('nexus_apps_script_url') || MASTER_BRIDGE_URL;
    const processedDescription = formData.description.split('..').join('\n');

    const payload = {
      action: editingId ? "UPDATE_INFORMATIVO" : "ADD_INFORMATIVO",
      "TÍTULO": formData.title,
      "TÍTULO_ORIGINAL": editingId ? originalTitle : formData.title,
      "DESCRIÇÃO": processedDescription,
      "TAG": formData.tag,
      "COR": formData.color,
      "IMAGEM": formData.image,
      sheetName: "Informativos"
    };

    try {
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      onNotify("Sucesso", editingId ? "Alterações salvas em ambos locais." : "Nova linha adicionada em ambos locais.", "success");
      
      if (editingId) {
        onUpdateNews({ id: editingId, ...formData, description: processedDescription });
      } else {
        onAddNews({ id: `temp_${Date.now()}`, ...formData, description: processedDescription });
      }

      setFormData({ title: '', description: '', image: '', tag: 'COMUNICADO', color: 'blue' });
      setEditingId(null);
      setOriginalTitle('');
      
      setTimeout(() => handleSync(true), 3000);
    } catch (e) {
      console.error("Erro ao salvar:", e);
      onNotify("Erro", "Falha crítica na conexão com a planilha.", "warning");
    } finally {
      setIsSaving(false);
    }
  };

  const handleStartEdit = (item: AppItem) => {
    setEditingId(item.id);
    setOriginalTitle(item.title);
    setFormData({
      title: item.title,
      description: item.description,
      image: item.image,
      tag: item.tag,
      color: item.color
    });
    // Scroll suave para o formulário
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRemove = async (item: AppItem) => {
    if (!window.confirm(`Excluir "${item.title}" da planilha e do mural permanentemente?`)) return;

    const scriptUrl = localStorage.getItem('nexus_apps_script_url') || MASTER_BRIDGE_URL;
    onRemoveNews(item.id);
    onNotify("Removendo", "Excluindo registro da base remota...", "info");
    
    try {
      await fetch(scriptUrl, {
        method: 'POST', 
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          action: "DELETE_INFORMATIVO", 
          "TÍTULO": item.title, 
          sheetName: "Informativos" 
        })
      });
      onNotify("Removido", "Item excluído com sucesso em ambos.", "success");
      setTimeout(() => handleSync(true), 3000);
    } catch (e) {
      console.error("Erro na exclusão:", e);
      onNotify("Erro", "Não foi possível remover da planilha.", "warning");
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-hidden animate-in fade-in duration-700">
      {/* HEADER FIXO - Não rola com o conteúdo */}
      <header className="shrink-0 h-[180px] bg-gradient-to-br from-blue-700 via-slate-900 to-black border-b border-white/10 p-8 flex flex-col justify-end relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.15),transparent_70%)]"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <button onClick={onBack} className="flex items-center space-x-2 text-blue-400 font-black text-[9px] uppercase tracking-widest hover:text-white transition-colors mb-3">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 19l-7-7 7-7" /></svg>
              <span>Voltar ao Mural</span>
            </button>
            <h1 className="text-3xl lg:text-5xl font-black tracking-tighter italic text-white leading-none uppercase">
              Gestão de <span className="text-blue-500">Mural</span>
            </h1>
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500">Editor e Sincronizador de Dados Vitalício</p>
          </div>
          
          <div className="flex items-center space-x-4">
             <div className="bg-black/40 backdrop-blur-md border border-white/5 p-3 rounded-2xl flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-[7px] font-black text-slate-600 uppercase tracking-widest leading-none">Ponte de Dados</p>
                  <p className="text-[10px] font-black text-emerald-400 uppercase italic">Ativa</p>
                </div>
                <button 
                  onClick={() => handleSync(false)} 
                  disabled={isSyncing}
                  className={`w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-lg ${isSyncing ? 'animate-spin' : 'active:scale-90'}`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </button>
             </div>
          </div>
        </div>
      </header>

      {/* ÁREA DE CONTEÚDO ROLÁVEL */}
      <div className="flex-1 overflow-y-auto custom-scrollbar" ref={scrollRef}>
        <div className="max-w-[1400px] w-full mx-auto p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-32">
          
          {/* PAINEL DE EDIÇÃO (LADO ESQUERDO) */}
          <section className="lg:col-span-4" ref={formRef}>
            <div className="bg-[#111622] border border-white/5 rounded-[2.5rem] p-8 lg:p-10 shadow-2xl">
              <div className="flex items-center space-x-4 mb-8">
                 <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A2.401 2.401 0 013 11.416V6.584a2.401 2.401 0 012.436-2.267l1.203-.01M11 5.882l5.436-2.267a1.5 1.5 0 012.107 1.378v11.014a1.5 1.5 0 01-2.107 1.378L11 15.118" /></svg>
                 </div>
                 <div>
                   <h2 className="text-xl font-black text-white uppercase italic tracking-tighter leading-none">{editingId ? 'Editar Linha' : 'Nova Publicação'}</h2>
                   <p className="text-[8px] font-black text-blue-500 uppercase tracking-widest mt-1">Sincronização Bidirecional</p>
                 </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Título do Informativo</label>
                  <input 
                    type="text" 
                    value={formData.title} 
                    onChange={e => setFormData({...formData, title: e.target.value})} 
                    className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white font-bold text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center ml-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Descrição</label>
                    <span className="text-[8px] text-blue-400 font-bold uppercase italic">Use ".." p/ quebra</span>
                  </div>
                  <textarea 
                    value={formData.description} 
                    onChange={e => setFormData({...formData, description: e.target.value})} 
                    className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white font-bold min-h-[160px] text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all custom-scrollbar" 
                    placeholder="Seu texto aqui..." 
                    required 
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Tag</label>
                    <input type="text" value={formData.tag} onChange={e => setFormData({...formData, tag: e.target.value})} className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white font-bold text-xs uppercase" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Cor Tema</label>
                    <select value={formData.color} onChange={e => setFormData({...formData, color: e.target.value})} className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white font-black text-[10px] uppercase outline-none cursor-pointer">
                      <option value="blue">Blue</option>
                      <option value="emerald">Emerald</option>
                      <option value="red">Red</option>
                      <option value="amber">Amber</option>
                      <option value="indigo">Indigo</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-2">Link da Imagem</label>
                  <input type="text" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white font-bold text-xs" placeholder="https://..." />
                </div>

                <div className="pt-4 flex flex-col gap-3">
                  <button type="submit" disabled={isSaving} className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] shadow-xl transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center space-x-3">
                    {isSaving && <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>}
                    <span>{editingId ? 'Salvar em Ambos' : 'Publicar em Ambos'}</span>
                  </button>
                  {editingId && (
                    <button type="button" onClick={() => { setEditingId(null); setOriginalTitle(''); setFormData({title: '', description: '', image: '', tag: 'COMUNICADO', color: 'blue'}); }} className="w-full bg-white/5 border border-white/5 text-slate-500 py-4 rounded-2xl font-black text-[9px] uppercase tracking-widest hover:text-white transition-all">
                      Cancelar Edição
                    </button>
                  )}
                </div>
              </form>
            </div>
          </section>

          {/* PAINEL DE LISTAGEM (LADO DIREITO) */}
          <section className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <h2 className="text-xl font-black italic text-white uppercase tracking-tighter">Publicações Sincronizadas <span className="text-blue-500 ml-2">({newsItems.length})</span></h2>
              <div className="flex space-x-2">
                 <div className="px-3 py-1 bg-white/5 rounded-lg text-[8px] font-black uppercase text-slate-500">Atualizado: {new Date().toLocaleTimeString()}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsItems.map(item => (
                <div key={item.id} className="bg-[#111622] border border-white/5 p-6 rounded-[2.2rem] flex flex-col space-y-4 group hover:border-blue-500/20 transition-all shadow-xl">
                  <div className="flex items-start justify-between">
                    <div className="min-w-0 pr-4">
                      <span className="px-2 py-0.5 bg-blue-600/10 text-blue-400 text-[8px] font-black uppercase rounded border border-blue-500/20 mb-2 inline-block tracking-widest">{item.tag}</span>
                      <h3 className="text-lg font-black text-white italic truncate leading-tight uppercase tracking-tight">{item.title}</h3>
                      <p className="text-[10px] text-slate-500 font-medium line-clamp-2 mt-2 leading-relaxed italic">{item.description}</p>
                    </div>
                    
                    <div className="flex flex-col gap-2 shrink-0">
                       <button onClick={() => handleStartEdit(item)} className="w-9 h-9 rounded-xl bg-blue-600/10 text-blue-500 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-lg">
                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
                       </button>
                       <button onClick={() => handleRemove(item)} className="w-9 h-9 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all shadow-lg">
                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                       </button>
                    </div>
                  </div>
                  
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-black/40">
                     <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60 group-hover:opacity-100" alt="" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminInformativosView;
