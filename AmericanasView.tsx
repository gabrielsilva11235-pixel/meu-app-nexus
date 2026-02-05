
import React from 'react';

interface AmericanasViewProps {
  onBack: () => void;
}

const AmericanasView: React.FC<AmericanasViewProps> = ({ onBack }) => {
  const pdfUrl = "https://drive.google.com/file/d/1kWUT6qbjpvKvHZ4wfrlnJ1iUkTZrfWAt/preview";

  const buttons = [
    { 
      name: 'Solicitações Americanas', 
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfMASFkfMWCVPGXmFE6sC6y1OWpGuXWMw2eDaja_nMqxVtMog/closedform',
      color: 'from-red-600 to-red-800'
    },
    { 
      name: 'Fraseologias Americanas', 
      link: 'https://docs.google.com/document/d/125J_rUhB8lS879Br1T-ZiAknCHZRg9rGL0p4psZEyPA/edit?tab=t.71tmzq3dp7ih#heading=h.wpyjdavon5re',
      color: 'from-slate-700 to-slate-900'
    },
    { 
      name: 'Alteração de Email e reset de senha', 
      link: 'https://docs.google.com/forms/d/1icPJJDqrfxAJnjVZART87mvy6kdEh2pQP0Z32xCoUSY/viewform?edit_requested=true',
      color: 'from-blue-600 to-blue-800'
    },
    { 
      name: 'token com erro', 
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfp28VxDCgluFiJ2T_rLDDzRXRdA2N5v8y6g8a7OF0WxOJYpw/viewform',
      color: 'from-amber-600 to-amber-700'
    },
    { 
      name: 'Score baixo da americanas', 
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSf_aQepAi5xx-emcq8sUZsILIj453ouVElNbfQa7Vva9Panug/viewform',
      color: 'from-rose-600 to-rose-800'
    },
    { 
      name: 'Forms Contestação Americanas', 
      link: 'https://docs.google.com/forms/d/e/1FAIpQLScEQlrZoaAaKulmLGqJWvYrF4H7cdP0q9nj3GX49zxVYgcW_g/viewform',
      color: 'from-indigo-600 to-indigo-800'
    },
    { 
      name: 'Escala de Pausa Fortics', 
      link: 'https://docs.google.com/spreadsheets/d/1OEEipKdo2gBi-Jvsbo-Vafm_NOE27_4ocnSxbF3sPBM/edit?gid=0#gid=0',
      color: 'from-emerald-600 to-emerald-800'
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header */}
      <div className="relative h-[300px] w-full bg-gradient-to-br from-red-600 via-red-900 to-black shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.2),transparent_70%)]"></div>
        
        <div className="absolute top-8 left-8 z-50">
          <button 
            onClick={onBack}
            className="flex items-center space-x-3 text-white bg-black/30 hover:bg-black/50 px-6 py-3 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl transition-all group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-black text-xs tracking-[0.3em] uppercase italic">Páginas</span>
          </button>
        </div>

        <div className="absolute inset-0 p-12 flex flex-col justify-end max-w-7xl mx-auto w-full">
          <div className="space-y-2 animate-in slide-in-from-left-12 duration-1000">
            <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/40 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
              <span className="text-red-200 text-[10px] font-black uppercase tracking-[0.4em]">Operação Setorial</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              AMERICANAS
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-16 pb-24">
        
        {/* PDF Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black italic text-white uppercase tracking-tight flex items-center">
              <span className="w-1.5 h-6 bg-red-600 mr-4 rounded-full shadow-[0_0_15px_#dc2626]"></span>
              Documento de Procedimentos
            </h2>
          </div>

          <div className="w-full h-[800px] rounded-[3rem] border border-white/10 bg-black/40 overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <iframe 
              src={pdfUrl}
              className="w-full h-full border-0"
              title="Americanas PDF"
              allowFullScreen
            />
          </div>
        </section>

        {/* Buttons Grid */}
        <section className="space-y-8">
          <div className="flex items-center space-x-4">
             <h2 className="text-xl font-black italic text-white uppercase tracking-tight">Acessos Rápidos</h2>
             <div className="h-px flex-1 bg-white/10"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {buttons.map((btn, idx) => (
              <button 
                key={idx}
                onClick={() => window.open(btn.link, '_blank', 'noopener,noreferrer')}
                className={`group relative overflow-hidden bg-gradient-to-br ${btn.color} p-8 rounded-[2.5rem] border border-white/10 shadow-2xl transition-all hover:-translate-y-2 hover:scale-[1.02] active:scale-95 text-center flex flex-col items-center justify-center min-h-[160px]`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 blur-3xl rounded-full -translate-y-8 translate-x-8 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="text-white font-black text-sm uppercase tracking-[0.1em] leading-tight group-hover:scale-105 transition-transform">
                  {btn.name}
                </h3>
                <div className="mt-4 h-0.5 w-6 bg-white/30 rounded-full group-hover:w-12 transition-all"></div>
              </button>
            ))}
          </div>
        </section>
      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default AmericanasView;
