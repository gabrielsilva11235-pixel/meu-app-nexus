
import React from 'react';

interface QualityAuditApprovedViewProps {
  onBack: () => void;
}

const QualityAuditApprovedView: React.FC<QualityAuditApprovedViewProps> = ({ onBack }) => {
  // Conversão dos links do Drive para exibição direta (LH3)
  const reportImage1 = "https://lh3.googleusercontent.com/d/1hbNsFZlTIfsmBUF_yfhjfbrrlfAQaVw4";
  const reportImage2 = "https://lh3.googleusercontent.com/d/1M6L9lMQ4CqsmHHZ2n4MJsGekZqk13PFj";

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Header Estilo Hero - Temática Verde/Ciano para Aprovados */}
      <div className="relative h-[350px] w-full bg-gradient-to-br from-emerald-600 via-teal-900 to-slate-950 shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),transparent_70%)]"></div>
        
        <div className="absolute top-8 left-8 z-50">
          <button 
            onClick={onBack}
            className="flex items-center space-x-3 text-white bg-black/30 hover:bg-black/50 px-6 py-3 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl transition-all group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-black text-xs tracking-[0.3em] uppercase italic">Qualidade</span>
          </button>
        </div>

        <div className="absolute inset-0 p-12 flex flex-col justify-end max-w-7xl mx-auto w-full">
          <div className="space-y-4 animate-in slide-in-from-left-12 duration-1000">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/40 px-4 py-1.5 rounded-full backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-emerald-200 text-[10px] font-black uppercase tracking-[0.4em]">Relatório Semanal</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              Auditoria de Qualidade <br />
              <span className="text-emerald-400">APROVADOS</span>
            </h1>

            <div className="flex items-center space-x-3 text-white/60 font-bold tracking-widest uppercase italic bg-black/20 self-start px-4 py-2 rounded-lg border border-white/5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Período: 16/09 a 23/09</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-12 space-y-16">
        {/* Seção do Painel de Resultados Único */}
        <section className="space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black italic text-white uppercase tracking-tight flex items-center">
              <span className="w-1.5 h-8 bg-emerald-500 mr-4 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></span>
              Painel de Performance Consolidado
            </h2>
          </div>

          {/* Card Único com as duas imagens */}
          <div className="group relative rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-700">
             <div className="p-8 bg-black/40 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                   <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] italic">relatorios_aprovados_consolidados.png</span>
                </div>
                <span className="text-[10px] font-black text-emerald-500/50 uppercase tracking-widest italic">Acompanhamento Semanal e Indicadores</span>
             </div>
             
             <div className="p-10 bg-black/20 flex flex-col items-center space-y-12">
                {/* Primeira Imagem */}
                <div className="w-full">
                  <img 
                    src={reportImage1} 
                    alt="Relatório de Auditoria 1" 
                    className="w-full h-auto rounded-2xl shadow-2xl border border-white/5 transition-transform duration-1000 group-hover:scale-[1.005]"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/1200x800/1a1a1a/ffffff?text=Relatorio+Auditoria+1";
                    }}
                  />
                </div>

                {/* Divisor Visual */}
                <div className="w-full h-px bg-white/5"></div>

                {/* Segunda Imagem */}
                <div className="w-full">
                  <img 
                    src={reportImage2} 
                    alt="Relatório de Auditoria 2" 
                    className="w-full h-auto rounded-2xl shadow-2xl border border-white/5 transition-transform duration-1000 group-hover:scale-[1.005]"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/1200x800/1a1a1a/ffffff?text=Relatorio+Auditoria+2";
                    }}
                  />
                </div>
             </div>
          </div>
        </section>
      </div>

      <div className="h-20 shrink-0" />
    </div>
  );
};

export default QualityAuditApprovedView;
