
import React, { useState, useEffect } from 'react';
import { AppItem } from '../constants';

interface SettingsViewProps {
  appItems: AppItem[];
  onUpdateAppItemImage: (id: string, newUrl: string) => void;
  onResetAppItems: () => void;
  onNotify: (title: string, message: string, type: 'info' | 'warning' | 'success') => void;
  onBack: () => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ 
  appItems, 
  onUpdateAppItemImage, 
  onResetAppItems,
  onNotify, 
  onBack 
}) => {
  const [loginBankUrl, setLoginBankUrl] = useState('');
  const [newsBankUrl, setNewsBankUrl] = useState('');
  const [appsScriptUrl, setAppsScriptUrl] = useState('');
  const [messagesBridgeUrl, setMessagesBridgeUrl] = useState('');
  
  // URLS MASTER E DEFAULTS
  const MASTER_BRIDGE_URL = "https://script.google.com/macros/s/AKfycbyhIcpWbtpGfG63tcuFrPOa6EoZfA4J2OfEV_PN4lh5At5RcEKdh1g-xzbJwT3qUAg2dg/exec";
  const DEFAULT_MESSAGES_URL = "https://script.google.com/macros/s/AKfycbyMtLWavIqevd2PUt3vT9CCYM-bj1VXUTIi10yhsLxuVHPGejqvmhPr15oMeNrbOxOirg/exec";
  const DEFAULT_LOGIN_URL = "https://docs.google.com/spreadsheets/d/10bW-QsfQ6gRWqfsDSVZ-2OjBRe9X-zUYEgg1CfpzMFo/edit";
  const DEFAULT_NEWS_URL = "https://docs.google.com/spreadsheets/d/1xP7W34m-vqIl0gebkbUNkEsly9nN3QaOT2IAJFfNBeY/edit?gid=143346580";

  useEffect(() => {
    setLoginBankUrl(localStorage.getItem('nexus_login_bank_url') || DEFAULT_LOGIN_URL);
    setNewsBankUrl(localStorage.getItem('nexus_news_bank_url') || DEFAULT_NEWS_URL);
    setMessagesBridgeUrl(localStorage.getItem('nexus_messages_bridge_url') || DEFAULT_MESSAGES_URL);
    
    setAppsScriptUrl(MASTER_BRIDGE_URL);
    localStorage.setItem('nexus_apps_script_url', MASTER_BRIDGE_URL);
  }, []);

  const handleSaveSettings = () => {
    localStorage.setItem('nexus_login_bank_url', loginBankUrl);
    localStorage.setItem('nexus_news_bank_url', newsBankUrl);
    localStorage.setItem('nexus_messages_bridge_url', messagesBridgeUrl);
    localStorage.setItem('nexus_apps_script_url', MASTER_BRIDGE_URL);
    onNotify("Configurações Salvas", "Os bancos de dados e pontes de comunicação foram atualizados.", "success");
  };

  return (
    <div className="flex-1 flex flex-col p-8 lg:p-12 overflow-y-auto custom-scrollbar bg-slate-950 relative">
      <header className="relative z-10 mb-12 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black italic tracking-tighter text-white uppercase leading-none">CONFIGURAÇÕES</h1>
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500 mt-2">Painel de Controle de Dados</p>
        </div>
        <button onClick={onBack} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </header>

      <div className="relative z-10 max-w-4xl space-y-8 uppercase">
        {/* CARD: PONTE DE DADOS MENSAGENS */}
        <section className="bg-gradient-to-br from-indigo-600/20 to-transparent border border-indigo-500/30 rounded-[3rem] p-10 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-500 border border-indigo-500/40 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            </div>
            <div>
              <h2 className="text-xl font-black italic text-white uppercase tracking-tight">Ponte de Dados Mensagens</h2>
              <p className="text-[8px] font-black text-indigo-500/60 tracking-widest mt-1">Conexão Ativa: ABA MENSAGENS</p>
            </div>
          </div>
          <div className="relative">
            <input 
              type="text" 
              value={messagesBridgeUrl}
              onChange={(e) => setMessagesBridgeUrl(e.target.value)}
              className="w-full bg-black/60 border border-indigo-500/20 rounded-2xl px-6 py-5 text-indigo-100 font-bold text-[10px] tracking-wider"
              placeholder="URL da Ponte de Mensagens..."
            />
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-500 border border-blue-500/40 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h2 className="text-xl font-black italic text-white uppercase tracking-tight">Ponte de Dados Master</h2>
          </div>
          <input 
            type="text" 
            readOnly
            value={appsScriptUrl}
            className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-slate-500 font-bold text-xs cursor-not-allowed"
          />
        </section>

        <section className="bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-600/20 text-slate-400 border border-slate-500/20 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h2 className="text-xl font-black italic text-white uppercase tracking-tight">Banco de Logins</h2>
          </div>
          <input 
            type="text" 
            value={loginBankUrl}
            onChange={(e) => setLoginBankUrl(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold text-xs"
          />
        </section>

        <button 
          onClick={handleSaveSettings}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] shadow-2xl transition-all active:scale-95"
        >
          Confirmar Configurações
        </button>
      </div>
    </div>
  );
};

export default SettingsView;
