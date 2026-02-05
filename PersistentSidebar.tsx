
import React, { useState, useEffect, useCallback } from 'react';
import { NavTab } from '../types';
import { 
  FlashIcon,
  TimerIcon,
  LibraryIcon, 
  NexusIcon, 
  SettingsIcon, 
  SearchIcon,
  NewsIcon,
  ChartIcon,
  MessageSquareIcon,
  LogoutIcon,
  PhotoIcon
} from './Icons';

interface PersistentSidebarProps {
  onNavigate: (tab: NavTab) => void;
  onLogout: () => void;
  activeTab: NavTab;
  currentTime: Date;
  currentUser?: string | null;
  currentUserLevel?: string | null;
}

const PersistentSidebar: React.FC<PersistentSidebarProps> = ({ 
  onNavigate, 
  onLogout,
  activeTab, 
  currentTime, 
  currentUser,
  currentUserLevel
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const DASH_LINK = "https://ai.studio/apps/drive/1472eSjeyex1qzUUr3Qhwt1DeuG-g-FM4?fullscreenApplet=true";

  // LÓGICA DE BADGE DE MENSAGENS
  const checkUnreadMessages = useCallback(async () => {
    if (!currentUser) return;
    
    const DEFAULT_URL = "https://script.google.com/macros/s/AKfycbyMtLWavIqevd2PUt3vT9CCYM-bj1VXUTIi10yhsLxuVHPGejqvmhPr15oMeNrbOxOirg/exec";
    const bridgeUrl = localStorage.getItem('nexus_messages_bridge_url') || DEFAULT_URL;
    const normalizedUser = currentUser.toUpperCase();

    try {
      const response = await fetch(`${bridgeUrl}?cb=${Date.now()}`);
      if (!response.ok) return;
      const data = await response.json();
      
      const unread = data.filter((m: any) => {
        const to = String(m.DESTINATARIO || '').toUpperCase();
        const from = String(m.REMETENTE || '').toUpperCase();
        const readBy = m.LIDO_POR ? String(m.LIDO_POR).split('|').map(u => u.trim().toUpperCase()) : [];
        
        // Mensagem é para mim ou Geral, não foi enviada por mim e eu não li
        return (to === normalizedUser || to === 'GERAL') && 
               from !== normalizedUser && 
               !readBy.includes(normalizedUser);
      });

      setUnreadCount(unread.length);
    } catch (e) {
      console.error("Erro ao checar unread no background");
    }
  }, [currentUser]);

  useEffect(() => {
    checkUnreadMessages();
    const interval = setInterval(checkUnreadMessages, 10000); // Checa a cada 10s
    return () => clearInterval(interval);
  }, [checkUnreadMessages]);

  const libraryItems = [
    { id: 'INICIO', label: 'Início', icon: FlashIcon },
    { id: 'PAGINAS', label: 'Páginas', icon: LibraryIcon },
    { id: 'INFORMATIVOS', label: 'Informativos', icon: NewsIcon },
    { id: 'HOME', label: 'Timer Pausa', icon: TimerIcon },
  ];

  const systemItems = [
    { id: 'DASH_CREDIARIO', label: 'Dash Crediário', icon: ChartIcon },
    { id: 'MESSAGES', label: 'Mensagens', icon: MessageSquareIcon, badge: unreadCount },
  ];

  const renderNavButton = (item: any) => {
    const Icon = item.icon;
    const isActive = activeTab === item.id;

    return (
      <button
        key={item.id}
        onClick={() => {
          if (item.id === 'DASH_CREDIARIO') {
            window.open(DASH_LINK, '_blank', 'noopener,noreferrer');
          } else {
            onNavigate(item.id as NavTab);
          }
        }}
        className={`w-full relative flex items-center h-14 transition-all duration-300 group overflow-hidden ${
          isActive 
            ? 'bg-gradient-to-r from-blue-600/20 to-transparent' 
            : 'hover:bg-white/5'
        }`}
      >
        <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
          isActive ? 'bg-blue-500 shadow-[0_0_15px_#3b82f6]' : 'bg-transparent'
        }`} />

        <div className={`w-[72px] shrink-0 flex items-center justify-center transition-all duration-300 relative ${
          isActive ? 'text-blue-400 scale-110' : 'text-slate-500 group-hover:text-white group-hover:scale-110'
        }`}>
          <Icon className="w-5 h-5" />
          {item.badge > 0 && !isExpanded && (
            <div className="absolute top-3 right-5 w-4 h-4 bg-red-600 rounded-full border-2 border-[#0b0e14] flex items-center justify-center shadow-lg">
               <span className="text-[7px] font-black text-white">{item.badge > 9 ? '9+' : item.badge}</span>
            </div>
          )}
        </div>
        
        <div className={`flex-1 flex items-center justify-between pr-4 transition-all duration-500 ${
          isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <span className={`font-black text-[11px] tracking-[0.2em] uppercase italic whitespace-nowrap ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
            {item.label}
          </span>
          {item.badge > 0 && (
            <span className="bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-lg shadow-red-500/20 animate-pulse">
              {item.badge}
            </span>
          )}
        </div>

        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors pointer-events-none" />
      </button>
    );
  };

  const isAtendente = currentUserLevel?.toUpperCase() === 'ATENDENTE';

  return (
    <aside 
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`h-full bg-[#0b0e14]/98 backdrop-blur-[60px] border-r border-white/5 flex flex-col shadow-[20px_0_40px_-20px_rgba(0,0,0,0.5)] z-[100] shrink-0 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
        isExpanded ? 'w-64' : 'w-[72px]'
      }`}
    >
      <div className="pt-6 pb-4 flex flex-col items-center">
        <div 
          onClick={() => onNavigate('INICIO')}
          className={`w-full flex items-center mb-8 px-4 cursor-pointer group transition-all`}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 shrink-0 group-hover:shadow-blue-500/40 transition-all group-active:scale-90">
            <NexusIcon className="w-5 h-5 text-white" />
          </div>
          <div className={`ml-4 transition-all duration-500 overflow-hidden ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
            <h1 className="text-sm font-black tracking-tighter italic uppercase text-white leading-none">Nexus<span className="text-blue-500">Deck</span></h1>
            <p className="text-[7px] font-black uppercase tracking-[0.4em] text-slate-500 mt-1">Enterprise 2.5</p>
          </div>
        </div>

        <div className={`w-full px-4 mb-4 transition-all duration-300 ${isExpanded ? 'opacity-100 h-10' : 'opacity-0 h-0 overflow-hidden'}`}>
          {!isAtendente && (
            <div className="flex items-center space-x-2 bg-white/5 rounded-xl p-1 border border-white/5 h-full">
               <button 
                 onClick={() => onNavigate('ADMIN_INFORMATIVOS')}
                 className="flex-1 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-slate-500 hover:text-blue-400 transition-all"
                 title="Administração Informativos"
               >
                 <SearchIcon className="w-4 h-4" />
               </button>
               <button 
                 onClick={() => onNavigate('IMAGE_MANAGER')}
                 className={`flex-1 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-all ${activeTab === 'IMAGE_MANAGER' ? 'text-blue-400 bg-white/5' : 'text-slate-500 hover:text-white'}`}
                 title="Personalizar Capas"
               >
                 <PhotoIcon className="w-4 h-4" />
               </button>
               <button 
                 onClick={() => onNavigate('SETTINGS')}
                 className={`flex-1 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-all ${activeTab === 'SETTINGS' ? 'text-blue-400 bg-white/5' : 'text-slate-500 hover:text-white'}`}
                 title="Configurações"
               >
                 <SettingsIcon className="w-4 h-4" />
               </button>
            </div>
          )}
        </div>
      </div>

      <nav className="flex-1 py-4 overflow-y-auto no-scrollbar">
        <div className="mb-6">
           <p className={`px-6 text-[8px] font-black uppercase tracking-[0.5em] text-slate-600 mb-4 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 translate-x-[-20px]'}`}>Biblioteca</p>
           <div className="flex flex-col">
             {libraryItems.map(item => renderNavButton(item))}
           </div>
        </div>

        <div>
           <p className={`px-6 text-[8px] font-black uppercase tracking-[0.5em] text-slate-600 mb-4 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 translate-x-[-20px]'}`}>Operacional</p>
           <div className="flex flex-col">
             {systemItems.map(item => renderNavButton(item))}
           </div>
        </div>
      </nav>

      <div className={`mt-auto transition-all duration-500 ${isExpanded ? 'p-4' : 'p-2'}`}>
        <div className={`bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 ${isExpanded ? 'p-3' : 'p-0 h-12'}`}>
          <div className={`flex items-center ${isExpanded ? 'mb-3' : 'justify-center h-full'}`}>
            <div className="relative">
              <div className={`${isExpanded ? 'w-10 h-10' : 'w-8 h-8'} rounded-xl bg-gradient-to-tr from-slate-700 to-slate-900 border border-white/10 p-0.5 shadow-xl overflow-hidden`}>
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${currentUser || 'Nexus'}`} 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-[#0b0e14] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            </div>

            <div className={`ml-4 transition-all duration-500 ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 absolute'}`}>
               <p className="text-[10px] font-black uppercase tracking-widest text-white truncate max-w-[120px]">
                 {currentUser || 'Operador'}
               </p>
               <p className={`text-[7px] font-black uppercase tracking-tighter mt-0.5 ${currentUserLevel?.toUpperCase() === 'ADMINISTRADOR' ? 'text-amber-400' : 'text-blue-400'}`}>
                 {currentUserLevel || 'Nível: Operador'}
               </p>
            </div>
          </div>

          {isExpanded && (
            <div className="pt-3 border-t border-white/5 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[7px] font-black text-slate-500 uppercase tracking-widest">Sessão Ativa</span>
                <span className="text-xs font-black italic text-white tracking-tighter">
                  {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <div 
                onClick={onLogout}
                className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer shadow-lg active:scale-90"
                title="Sair do Sistema"
              >
                <LogoutIcon className="w-4 h-4" />
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default PersistentSidebar;
