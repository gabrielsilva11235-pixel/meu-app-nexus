
import React from 'react';

interface LinksImportantesViewProps {
  onBack: () => void;
}

const LinksImportantesView: React.FC<LinksImportantesViewProps> = ({ onBack }) => {
  const tools = [
    { 
      name: 'Vox', 
      icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z', 
      color: 'from-blue-600 to-blue-800', 
      url: 'https://vmbcardapp01.grupoadrianocobuccio.com.br:9100/vosagent/' 
    },
    { 
      name: 'BCA', 
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', 
      color: 'from-emerald-600 to-teal-800', 
      url: '#' 
    },
    { 
      name: 'Bate Ponto', 
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', 
      color: 'from-indigo-600 to-purple-800', 
      url: 'https://adfs.grupoadrianocobuccio.com.br/adfs/ls/?SAMLRequest=fZLPT4MwFMfv%2FhWk9wIlOFwzMMumiYle1GnixTxK2Rqhxb6HUf96O%2BaMXjy2%2Bf54%2Fbwuzt%2F7LnrTHo2zJRNxyiJtlWuM3ZZsc3%2FJz9h5dbJA6LtskMuRdvZWv44aKVoiak%2FBt3IWx177O%2B3fjNKb2%2BuS7YgGlElSe0DTKfANH5wlR7qLIaTEI3INSFzE0MOnC51ba8jFyvXJ1JaYZvAagws1i9ah0VigacxjODQtxls%2FDg4ab8A65epRKTOlxLWfBEmHCYuu1iV7ntdFk7ei4NnpDHjeiBmf17OCQ32qoKjTTIg2SBFHfWWRwFLJsjSb8VTwbH4vCpnlMk3jXMyfWPRwpJbtqQWOFuWBU8lGb6ULL0dpodcoScm75c21DFI5eEdh0o5VB6xyKvTRpfM90P%2Fe%2FY1peDtJpbZk6ONP9%2F92OK6MVXvZgbz8Ri9xkD9bec5vVuuXi8d2WCS%2Fp6y%2Bj3%2F%2FQvUF&RelayState=H4sIAAAAAAAAAHWRX2_aMBTFv4ufSWqTEBOkCtGSpoy2UUvb0E1V5H8JhtgOiQNdp333mUndE3vylc65xz_d8wsQMAF95wnSWQ8V4f31fJfkZQMGgDqFtqSTNSMt9xqjrbGidgpzSrSHPGZ9oHlvO8Uh24qtHMNSCmfgzrCxtukmFxeUWPF31_9K8JlRPm2nfSfaojGmLiS_PMMwZbUU2p7U__825UYRqS_PkwoHwgw_MZVuXM3u79xYgckPQI6dA6m0dGSddK_2T0A-4Urq06qLPUWYRmjJ3dBsjD4FNa0pZS3A-wDsXKas1DEJVqFGCdkZdDXDYfFzTZcv8c3iWH3L8VN6l9cf10Y09xLBYpn185t0qdKjYOn-OMrraP8pV8mBFQlaZEiPsz6bdQ9DbNPnYSEfWDSb29m-YBlUVbOrXlZQv96q9lZ3ddKvh28tVmqx2m9y8ZhV7ZNKvu_SK73esrfDOn9dLuvnZKF41j46-Pp8qT7p7cb_14FPFPk0-us8ri-3qsAE4SjGEIchdGcAk5LUnRiA1mWOKGIxFLEHGRt7ISu5RwI68sYC0jEPYoSDwGVYZy1iinlYIuwNRxHxQo4iL6YR9ggdMYIpHCJUOu_BtfT--w-ZUs7KogIAAA.H4sIAAAAAAAAAAEgAN__kYwVnR8iWehE1JO1tIDsl4uCvv2GsaaOsNEPUa6qB9wtxpyWIAAAAA.4' 
    },
    { 
      name: 'Acesso Bio', 
      icon: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z', 
      color: 'from-amber-500 to-orange-700', 
      url: '#' 
    },
    { 
      name: 'BackOffice', 
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', 
      color: 'from-slate-700 to-slate-900', 
      url: 'https://backoffice.bcarddigital.com.br/admin/login' 
    },
    { 
      name: 'ID Unico', 
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', 
      color: 'from-cyan-500 to-blue-600', 
      url: '#' 
    },
    { 
      name: 'Tela Web', 
      icon: 'M9.75 17L9 20l-2.25 3h10.5l-2.25-3-.75-3m4.5-12V3a1.5 1.5 0 00-1.5-1.5h-9A1.5 1.5 0 004.5 3v9m15 0V9a1.5 1.5 0 00-1.5-1.5h-9A1.5 1.5 0 004.5 9v3m15 0a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5z', 
      color: 'from-rose-600 to-red-800', 
      url: '#' 
    },
    { 
      name: 'Calcular Idade', 
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', 
      color: 'from-teal-500 to-emerald-700', 
      url: '#' 
    },
    { 
      name: 'Rocket', 
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', 
      color: 'from-red-600 to-rose-800', 
      url: 'https://chat.brasilcard.net/group/EQ.VISABCARD' 
    },
    { 
      name: 'H-H Crediário', 
      icon: 'M13 10V3L4 14h7v7l9-11h-7z', 
      color: 'from-yellow-500 to-amber-700', 
      url: '#' 
    },
  ];

  const handleToolClick = (url: string) => {
    if (url === '#') return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header */}
      <div className="relative h-[240px] w-full bg-[#0a1830] shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-transparent to-[#0b0f1a]"></div>
        <div className="absolute top-6 left-6 z-50">
          <button 
            onClick={onBack}
            className="flex items-center space-x-3 text-white bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-xl backdrop-blur-2xl border border-white/10 shadow-2xl transition-all group"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-black text-[10px] tracking-[0.3em] uppercase italic">Voltar</span>
          </button>
        </div>

        <div className="absolute inset-0 p-10 flex flex-col justify-end max-w-7xl mx-auto w-full">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 bg-indigo-500/20 border border-indigo-400/50 px-4 py-1.5 rounded-full mb-2">
              <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
              <span className="text-indigo-100 text-[9px] font-black uppercase tracking-[0.4em]">Central de Acessos</span>
            </div>
            <h1 className="text-5xl font-black tracking-tighter italic text-white leading-none uppercase">
              Links <span className="text-blue-500">Importantes</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-10 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <button 
              key={index}
              onClick={() => handleToolClick(tool.url)}
              className={`group relative overflow-hidden bg-gradient-to-br ${tool.color} p-8 rounded-[2.5rem] border border-white/10 shadow-2xl transition-all hover:-translate-y-2 hover:scale-[1.05] active:scale-95 text-center flex flex-col items-center justify-center space-y-6 ${tool.url === '#' ? 'opacity-60 cursor-not-allowed grayscale' : ''}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -translate-y-12 translate-x-12 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="w-16 h-16 rounded-3xl bg-black/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner group-hover:rotate-12 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={tool.icon} />
                </svg>
              </div>
              
              <div className="space-y-1 min-w-0 w-full">
                <h3 className="text-white font-black text-sm uppercase tracking-widest leading-tight truncate">
                  {tool.name}
                </h3>
                <div className="h-0.5 w-6 bg-white/30 mx-auto rounded-full group-hover:w-12 transition-all"></div>
              </div>

              {tool.url === '#' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[8px] font-black text-white uppercase tracking-widest bg-red-600 px-3 py-1 rounded-full">Link Indisponível</span>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="mt-20 p-10 bg-white/5 border border-white/5 rounded-[3rem] relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 text-center md:text-left">
                 <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">Precisa de ajuda?</h3>
                 <p className="text-sm text-slate-500 font-medium max-w-xl">
                   Caso algum link não esteja funcionando ou você precise de um novo acesso, entre em contato com o suporte técnico através do <span className="text-blue-500 font-bold">Rocket Chat</span> ou sinalize ao seu supervisor.
                 </p>
              </div>
              <div className="flex space-x-4">
                 <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
              </div>
           </div>
        </div>
      </div>
      
      <div className="h-20 shrink-0" />
    </div>
  );
};

export default LinksImportantesView;
