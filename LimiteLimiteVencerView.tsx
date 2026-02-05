
import React from 'react';

interface LimiteLimiteVencerViewProps {
  onBack: () => void;
}

const LimiteLimiteVencerView: React.FC<LimiteLimiteVencerViewProps> = ({ onBack }) => {
  // Endpoint direto LH3 para a imagem do Google Drive solicitada
  const mainImage = "https://lh3.googleusercontent.com/d/1yY1vR7zXgL67uGsz20sMyR6x5wJYr8-8";

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header - Temática Financeira (Azul Profundo) */}
      <div className="relative h-[280px] w-full bg-gradient-to-br from-blue-700 via-indigo-900 to-black shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)]"></div>
        
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
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-500/40 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-blue-200 text-[10px] font-black uppercase tracking-[0.4em]">Gestão de Crédito</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              LIMITE / <br />
              <span className="text-blue-400 font-black">LIMITE E A VENCER</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-12 pb-24">
        
        {/* Seção da Imagem Documental */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black italic text-white uppercase tracking-tight flex items-center">
              <span className="w-1.5 h-8 bg-blue-600 mr-4 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></span>
              Diretriz Operacional de Limites
            </h2>
            <a 
              href="https://drive.google.com/file/d/1yY1vR7zXgL67uGsz20sMyR6x5wJYr8-8/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 px-6 py-2 rounded-xl border border-blue-500/30 text-[10px] font-black uppercase tracking-widest transition-all flex items-center space-x-2"
            >
              <span>Ver Original</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>

          <div className="group relative rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-blue-500/30">
             <div className="p-6 bg-black/40 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div>
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Documento Oficial</span>
                </div>
                <span className="text-[8px] font-bold text-slate-600 uppercase italic">regra_limite_v1.png</span>
             </div>
             
             <div className="bg-black/20 p-4 lg:p-12 flex items-center justify-center">
                <img 
                  src={mainImage} 
                  className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-1000 group-hover:scale-[1.01]" 
                  alt="Diretrizes Limite e a Vencer"
                  onError={(e) => { 
                    e.currentTarget.src = "https://placehold.co/1200x800/1e293b/ffffff?text=Documento+Indispon%C3%ADvel"; 
                  }}
                />
             </div>
             
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </section>

        {/* Info Card */}
        <div className="bg-blue-500/10 border border-blue-500/20 p-10 rounded-[3rem] relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 text-center md:text-left">
                 <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">Nota de Gestão</h3>
                 <p className="text-sm text-slate-400 font-medium max-w-2xl leading-relaxed italic">
                   A correta identificação dos limites disponíveis e saldos a vencer é essencial para evitar o superendividamento do cliente e garantir a segurança da operação financeira da BrasilCard.
                 </p>
              </div>
           </div>
        </div>
      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default LimiteLimiteVencerView;
