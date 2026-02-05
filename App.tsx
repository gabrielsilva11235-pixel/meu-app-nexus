
import React, { useState, useEffect, useCallback } from 'react';
import { NavTab } from './types';
import HomeView from './components/HomeView';
import LibraryView from './components/LibraryView';
import InformativosView from './components/InformativosView';
import AdminInformativosView from './components/AdminInformativosView';
import ImageManagerView from './components/ImageManagerView';
import RegraRestricaoView from './components/RegraRestricaoView';
import RegraRSView from './components/RegraRSView';
import LimiteVencerView from './components/LimiteVencerView';
import LimiteVencidoPrejuizoView from './components/LimiteVencidoPrejuizoView';
import VisaRoutinesTeresinaView from './components/VisaRoutinesTeresinaView';
import DivergenciasView from './components/DivergenciasView';
import PausasView from './components/PausasView';
import EnderecosView from './components/EnderecosView';
/* Add missing import for EnderecoView */
import EnderecoView from './components/EnderecoView';
import SugestoesView from './components/SugestoesView';
import LinksImportantesView from './components/LinksImportantesView';
import EncargosTarifasView from './components/EncargosTarifasView';
import TermosUsoView from './components/TermosUsoView';
import TermosUsoContaView from './components/TermosUsoContaView';
import SupportView from './components/SupportView';
import SettingsView from './components/SettingsView';
import ImageViewer from './components/ImageViewer';
import PdfViewer from './components/PdfViewer';
import PersistentSidebar from './components/PersistentSidebar';
import InicioView from './components/InicioView';
import LoginView from './components/LoginView';
import QueEBrasilCardView from './components/QueEBrasilCardView';
import FaqClienteAmericanasView from './components/FaqClienteAmericanasView';
import ScriptsView from './components/ScriptsView';
import DicasSucessoView from './components/DicasSucessoView';
import SobreFaturasView from './components/SobreFaturasView';
import FuncionalidadesAppView from './components/FuncionalidadesAppView';
import AvalieTmaView from './components/AvalieTmaView';
import AmericanasView from './components/AmericanasView';
import QualityDashboardView from './components/QualityDashboardView';
import CommunicationView from './components/CommunicationView';
import ConsolidadoGeralView from './components/ConsolidadoGeralView';
import QualityMetricsView from './components/QualityMetricsView';
import QualityManualView from './components/QualityManualView';
import MuralView from './components/MuralView';
import RegraAmericanasView from './components/RegraAmericanasView';
import LimiteLimiteVencerView from './components/LimiteLimiteVencerView';
import QualityAuditView from './components/QualityAuditView';
import MetaJanuary2026View from './components/MetaJanuary2026View';
import ManualColaboradorView from './components/ManualColaboradorView';
import HorarioPausaView from './components/HorarioPausaView';
import { APP_ITEMS, AppItem } from './constants';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success';
}

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => sessionStorage.getItem('nexus_auth') === 'true');
  const [currentUser, setCurrentUser] = useState<string | null>(() => sessionStorage.getItem('nexus_user'));
  const [currentUserLevel, setCurrentUserLevel] = useState<string | null>(() => sessionStorage.getItem('nexus_level'));
  const [activeTab, setActiveTab] = useState<NavTab>('INICIO');
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [previewImage, setPreviewImage] = useState<{ url: string; title: string } | null>(null);
  const [previewPdf, setPreviewPdf] = useState<{ url: string; title: string } | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<Date | null>(null);
  const [syncError, setSyncError] = useState<string | null>(null);
  
  const MASTER_NEWS_URL = "https://docs.google.com/spreadsheets/d/1xP7W34m-vqIl0gebkbUNkEsly9nN3QaOT2IAJFfNBeY/export?format=csv&gid=143346580";
  const MASTER_BRIDGE_URL = "https://script.google.com/macros/s/AKfycbyhIcpWbtpGfG63tcuFrPOa6EoZfA4J2OfEV_PN4lh5At5RcEKdh1g-xzbJwT3qUAg2dg/exec";
  const READ_LOGS_CSV_URL = "https://docs.google.com/spreadsheets/d/1xP7W34m-vqIl0gebkbUNkEsly9nN3QaOT2IAJFfNBeY/export?format=csv&gid=1990819835";

  const [dynamicAppItems, setDynamicAppItems] = useState<AppItem[]>(() => {
    const saved = localStorage.getItem('nexus_app_items');
    // IDs que devem ter capas fixas e não podem ser alteradas pelo cache antigo ou edição manual
    const fixedIds = [
      'auditoria_qualidade', 'aba_da_qualidade', 'faq_cliente_americanas', 
      'regra_americanas', 'links_importantes', 'mural', 
      'manual_colaborador', 'regra_restricao', 'visa_routines_teresina', 
      'meta_janeiro_2026', 'horario_pausa', 'enderecos', 'sugestoes', 
      'divergencias', 'limite_limite_vencer', 'limite_vencido_prejuizo', 
      'dicas_sucesso', 'encargos_tarifas', 'consolidado_geral'
    ];

    if (saved) {
      try {
        const savedItems = JSON.parse(saved);
        if (Array.isArray(savedItems)) {
          return APP_ITEMS.map(baseItem => {
            if (fixedIds.includes(baseItem.id)) return baseItem; // Prioriza sempre o fixo da constante
            const savedItem = savedItems.find((si: any) => si.id === baseItem.id);
            return savedItem ? { ...baseItem, image: savedItem.image } : baseItem;
          });
        }
      } catch (e) {
        console.error("Erro ao mesclar capas salvas:", e);
      }
    }
    return APP_ITEMS;
  });

  const [dynamicNews, setDynamicNews] = useState<AppItem[]>(() => {
    const saved = localStorage.getItem('nexus_news');
    return saved ? JSON.parse(saved) : [];
  });

  const [readLogs, setReadLogs] = useState<Record<string, string[]>>(() => {
    const saved = localStorage.getItem('nexus_read_logs');
    return saved ? JSON.parse(saved) : {};
  });

  const [visitCounts, setVisitCounts] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('visitCounts');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('nexus_apps_script_url', MASTER_BRIDGE_URL);
    localStorage.setItem('nexus_app_items', JSON.stringify(dynamicAppItems));
  }, [dynamicAppItems]);

  const handleNavigate = (tab: NavTab) => {
    setActiveTab(tab);
    setSelectedGameId(null);
  };

  const syncReadLogs = useCallback(async () => {
    try {
      const response = await fetch(`${READ_LOGS_CSV_URL}&cb=${Date.now()}`);
      if (!response.ok) return;
      const text = await response.text();
      const rows = text.split(/\r?\n/);
      const newLogs: Record<string, string[]> = {};
      const normalize = (s: string) => s.trim().toUpperCase();

      for (let i = 1; i < rows.length; i++) {
        if (!rows[i].trim()) continue;
        const cols = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        if (cols.length >= 2) {
          const clean = (val: string) => val?.replace(/^"|"$/g, '').replace(/""/g, '"').trim() || "";
          const title = normalize(clean(cols[0]));
          const user = normalize(clean(cols[1]));
          if (title && user) {
            if (!newLogs[title]) newLogs[title] = [];
            if (!newLogs[title].includes(user)) newLogs[title].push(user);
          }
        }
      }
      setReadLogs(newLogs);
      localStorage.setItem('nexus_read_logs', JSON.stringify(newLogs));
    } catch (e) {
      console.error("Erro sync read logs:", e);
    }
  }, []);

  const runDataBridgeSync = useCallback(async (isManual = false) => {
    if (isSyncing) return;
    setIsSyncing(true);
    setSyncError(null);
    try {
      const response = await fetch(`${MASTER_NEWS_URL}&t=${Date.now()}`);
      if (!response.ok) throw new Error("Planilha inacessível.");
      
      const text = await response.text();
      const rows = text.split(/\r?\n/);
      const syncedNews: AppItem[] = [];

      for (let i = 1; i < rows.length; i++) {
        if (!rows[i].trim()) continue;
        const cols = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        if (cols.length >= 2) {
          const clean = (val: string) => val?.replace(/^"|"$/g, '').replace(/""/g, '"').trim() || "";
          const title = clean(cols[0]);
          if (title) {
            syncedNews.push({
              id: `row_${i}_${title.substring(0, 5).toLowerCase().replace(/\W/g, '')}`,
              title,
              description: clean(cols[1]),
              image: clean(cols[4]) || "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200&h=600",
              tag: clean(cols[2]) || "INFORMATIVO",
              color: clean(cols[3]).toLowerCase() || "blue"
            });
          }
        }
      }

      if (syncedNews.length > 0) {
        setDynamicNews(syncedNews);
        localStorage.setItem('nexus_news', JSON.stringify(syncedNews));
        setLastSyncTime(new Date());
        await syncReadLogs();
        if (isManual) addNotification("Sincronizado", `${syncedNews.length} informativos carregados.`, "success");
      }
    } catch (e: any) {
      setSyncError(e.message);
    } finally {
      setIsSyncing(false);
    }
  }, [isSyncing, syncReadLogs]);

  useEffect(() => {
    if (isAuthenticated) {
      runDataBridgeSync();
      const interval = setInterval(() => runDataBridgeSync(), 45000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated, runDataBridgeSync]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const addNotification = useCallback((title: string, message: string, type: 'info' | 'warning' | 'success') => {
    const id = Date.now().toString();
    setNotifications(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 2000);
  }, []);

  const handleLogin = (username: string, level: string) => {
    setIsAuthenticated(true);
    setCurrentUser(username);
    setCurrentUserLevel(level);
    sessionStorage.setItem('nexus_auth', 'true');
    sessionStorage.setItem('nexus_user', username);
    sessionStorage.setItem('nexus_level', level);
    addNotification("Acesso Autorizado", `Bem-vindo, ${username}`, "success");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.clear();
  };

  const unreadCount = dynamicNews.filter(n => {
    const titleKey = n.title.trim().toUpperCase();
    const userKey = currentUser?.trim().toUpperCase() || "";
    const usersWhoRead = readLogs[titleKey] || [];
    return !usersWhoRead.includes(userKey);
  }).length;

  const renderContent = () => {
    if (selectedGameId) {
      if (selectedGameId === 'horario_pausa') return <HorarioPausaView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'manual_colaborador') return <ManualColaboradorView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'meta_janeiro_2026') return <MetaJanuary2026View onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'auditoria_qualidade') return <QualityAuditView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'limite_limite_vencer') return <LimiteLimiteVencerView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'regra_americanas') return <RegraAmericanasView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'links_importantes') return <LinksImportantesView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'mural') return <MuralView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'consolidado_geral') return <ConsolidadoGeralView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'indicadores_qualidade') return <QualityMetricsView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'manual_scripts_qualidade') return <QualityManualView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'que_e_brasilcard') return <QueEBrasilCardView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'aba_da_qualidade') return <QualityDashboardView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'americanas') return <AmericanasView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'avalie_tma') return <AvalieTmaView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'funcionalidades_app') return <FuncionalidadesAppView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'sobre_faturas') return <SobreFaturasView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'dicas_sucesso') return <DicasSucessoView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'scripts') return <ScriptsView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'faq_cliente_americanas') return <FaqClienteAmericanasView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'regra_restricao') return <RegraRestricaoView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'regra_rs') return <RegraRSView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'limite_vencido_prejuizo') return <LimiteVencidoPrejuizoView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'visa_routines_teresina') return <VisaRoutinesTeresinaView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'divergencias') return <DivergenciasView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'pausas') return <PausasView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'enderecos') return <EnderecosView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'sugestoes') return <SugestoesView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'encargos_tarifas') return <EncargosTarifasView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'termos_uso') return <TermosUsoView onBack={() => setSelectedGameId(null)} />;
      if (selectedGameId === 'termos_uso_conta') return <TermosUsoContaView onBack={() => setSelectedGameId(null)} />;
    }

    switch (activeTab) {
      case 'INICIO': return (
        <InicioView 
          onSelectGame={(id) => {
            setVisitCounts(v => ({...v, [id]: (v[id] || 0) + 1}));
            setSelectedGameId(id);
          }} 
          mostVisitedItems={dynamicAppItems.map(i => ({...i, visits: visitCounts[i.id] || 0})).sort((a,b) => b.visits - a.visits)}
          unreadCount={unreadCount}
          onConsultarCrediario={() => handleNavigate('INFORMATIVOS')}
        />
      );
      case 'HOME': return <HomeView onNotify={addNotification} />;
      case 'MESSAGES': return <CommunicationView currentUser={currentUser} currentUserLevel={currentUserLevel} onNotify={addNotification} />;
      case 'INFORMATIVOS': return (
        <InformativosView 
          newsItems={dynamicNews} 
          currentUser={currentUser} 
          currentUserLevel={currentUserLevel}
          isSyncing={isSyncing}
          lastSyncTime={lastSyncTime}
          syncError={syncError}
          onManualSync={() => runDataBridgeSync(true)}
          onMarkAsRead={() => syncReadLogs()}
          onPreviewImage={(url, title) => setPreviewImage({url, title})}
          onPreviewPdf={(url, title) => setPreviewPdf({url, title})}
        />
      );
      case 'PAGINAS': return <LibraryView items={dynamicAppItems} onSelectGame={setSelectedGameId} />;
      case 'IMAGE_MANAGER': return (
        <ImageManagerView 
          items={dynamicAppItems}
          onUpdateImage={(id, url) => setDynamicAppItems(prev => prev.map(i => i.id === id ? {...i, image: url} : i))}
          onResetAll={() => {
            addNotification("Aviso", "O reset global foi desativado para segurança dos links fixos.", "info");
          }}
          onBack={() => handleNavigate('INICIO')}
          onNotify={addNotification}
        />
      );
      case 'SETTINGS': return <SettingsView appItems={dynamicAppItems} onUpdateAppItemImage={(id, url) => setDynamicAppItems(prev => prev.map(i => i.id === id ? {...i, image: url} : i))} onResetAppItems={() => {}} onNotify={addNotification} onBack={() => handleNavigate('INICIO')} />;
      case 'ADMIN_INFORMATIVOS': return (
        <AdminInformativosView 
          newsItems={dynamicNews}
          onAddNews={(item) => {
            setDynamicNews([item, ...dynamicNews]);
            runDataBridgeSync();
          }}
          onUpdateNews={(updated) => setDynamicNews(prev => prev.map(n => n.id === updated.id ? updated : n))}
          onRemoveNews={(id) => setDynamicNews(prev => prev.filter(n => n.id !== id))}
          onSetAllNews={(items) => setDynamicNews(items)}
          onBack={() => handleNavigate('INFORMATIVOS')}
          onNotify={addNotification}
        />
      );
      default: return null;
    }
  };

  if (!isAuthenticated) return <LoginView onLogin={handleLogin} />;

  return (
    <div className="h-screen w-screen flex bg-[#0b1119] text-white select-none overflow-hidden relative animate-in fade-in duration-1000">
      <PersistentSidebar 
        activeTab={activeTab} 
        currentTime={currentTime} 
        currentUser={currentUser} 
        currentUserLevel={currentUserLevel} 
        onNavigate={handleNavigate}
        onLogout={handleLogout}
      />
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {renderContent()}
        <div className="fixed top-8 right-8 z-[1000] flex flex-col space-y-4 max-w-sm pointer-events-none">
          {notifications.map(n => (
            <div key={n.id} className={`pointer-events-auto p-6 bg-blue-600/30 backdrop-blur-xl border border-blue-500/50 rounded-[2rem] shadow-2xl animate-in slide-in-from-right-10`}>
              <h4 className="text-[10px] font-black uppercase tracking-widest">{n.title}</h4>
              <p className="text-xs font-bold mt-1 leading-tight">{n.message}</p>
            </div>
          ))}
        </div>
        <footer className="h-12 bg-black/40 backdrop-blur-xl flex items-center justify-between px-8 border-t border-white/5 shrink-0 z-10 text-slate-500">
          <div className="flex items-center space-x-4">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] italic">NexusDeck v2.5 Online</span>
          </div>
          <div className="flex items-center space-x-6 text-[9px] font-black uppercase">
            <span>A: Selecionar</span>
            <span onClick={() => setSelectedGameId(null)} className="cursor-pointer">B: Voltar</span>
            <span onClick={handleLogout} className="text-red-500 cursor-pointer">X: Sair</span>
          </div>
        </footer>
      </main>
      {previewImage && <ImageViewer src={previewImage.url} title={previewImage.title} onClose={() => setPreviewImage(null)} />}
      {previewPdf && <PdfViewer url={previewPdf.url} title={previewPdf.title} onClose={() => setPreviewPdf(null)} />}
    </div>
  );
};

export default App;
