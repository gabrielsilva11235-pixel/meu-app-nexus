
import React from 'react';

interface MetaJanuary2026ViewProps {
  onBack: () => void;
}

const MetaJanuary2026View: React.FC<MetaJanuary2026ViewProps> = ({ onBack }) => {
  // IDs convertidos para o endpoint direto LH3 para carregamento estável
  const metaImage1 = "https://lh3.googleusercontent.com/d/187pZf2VCtCxd-IlM6ScpC3OOmMB9sOlz";
  const metaImageMiddle = "https://lh3.googleusercontent.com/d/1jOcMyyt6_fXNlvOoWn_dguOWIVUvTyOc";
  const metaImage2 = "https://lh3.googleusercontent.com/d/1aXuI-8BAgj4szDDfAmqmW04bucv-S7Ex";

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header - Dourado Estratégico */}
      <div className="relative h-[350px] w-full bg-gradient-to-br from-amber-600 via-orange-900 to-slate-950 shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.2),transparent_70%)]"></div>
        
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
          <div className="space-y-4 animate-in slide-in-from-left-12 duration-1000">
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 border border-amber-500/40 px-4 py-1.5 rounded-full backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
              <span className="text-amber-200 text-[10px] font-black uppercase tracking-[0.4em]">Visão Estratégica 2026</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              Meta Geral <br />
              <span className="text-amber-400">Janeiro 2026</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-16">
        {/* Painel de Metas em Vertical */}
        <section className="space-y-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black italic text-white uppercase tracking-tight flex items-center">
              <span className="w-1.5 h-8 bg-amber-500 mr-4 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"></span>
              Documentação de Metas e Objetivos
            </h2>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/5">Q1 2026</span>
          </div>

          <div className="group relative rounded-[3.5rem] overflow-hidden border border-white/10 bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-amber-500/30">
            <div className="p-8 bg-black/40 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]"></div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] italic">planejamento_janeiro_2026.png</span>
              </div>
              <div className="flex space-x-2">
                <div className="w-1 h-1 rounded-full bg-white/20"></div>
                <div className="w-1 h-1 rounded-full bg-white/20"></div>
                <div className="w-1 h-1 rounded-full bg-white/20"></div>
              </div>
            </div>
            
            <div className="p-4 lg:p-10 bg-black/20 flex flex-col items-center space-y-16">
              {/* Slide 1 */}
              <div className="w-full relative">
                <img 
                  src={metaImage1} 
                  alt="Meta Janeiro 2026 Slide 1" 
                  className="w-full h-auto rounded-2xl shadow-2xl border border-white/5 transition-transform duration-1000 group-hover:scale-[1.005]"
                  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/1a1a1a/ffffff?text=Meta+Janeiro+2026+Slide+1"; }}
                />
              </div>

              {/* Divisor Visual */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

              {/* Slide Meio */}
              <div className="w-full relative">
                <img 
                  src={metaImageMiddle} 
                  alt="Meta Janeiro 2026 Slide Intermediário" 
                  className="w-full h-auto rounded-2xl shadow-2xl border border-white/5 transition-transform duration-1000 group-hover:scale-[1.005]"
                  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/1a1a1a/ffffff?text=Meta+Janeiro+2026+Slide+Meio"; }}
                />
              </div>

              {/* Divisor Visual */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

              {/* Slide 2 */}
              <div className="w-full relative">
                <img 
                  src={metaImage2} 
                  alt="Meta Janeiro 2026 Slide 2" 
                  className="w-full h-auto rounded-2xl shadow-2xl border border-white/5 transition-transform duration-1000 group-hover:scale-[1.005]"
                  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/1a1a1a/ffffff?text=Meta+Janeiro+2026+Slide+2"; }}
                />
              </div>
            </div>

            {/* Rodapé Interno do Card */}
            <div className="p-8 bg-black/40 border-t border-white/5 flex items-center justify-between">
               <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">BrasilCard Financeiro & Comercial</p>
               <button 
                 onClick={() => window.open("https://drive.google.com/file/d/187pZf2VCtCxd-IlM6ScpC3OOmMB9sOlz/view", "_blank")}
                 className="text-[8px] font-black text-amber-500 uppercase tracking-[0.2em] hover:text-white transition-colors"
               >
                 Acessar Originais no Drive
               </button>
            </div>
          </div>
        </section>

        {/* Info Box Final */}
        <div className="bg-amber-500/10 border border-amber-500/20 p-10 rounded-[3rem] relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
           <div className="relative z-10">
              <h3 className="text-xl font-black text-white uppercase italic tracking-tighter mb-2">Compromisso com Resultados</h3>
              <p className="text-sm text-slate-400 font-medium max-w-3xl leading-relaxed italic">
                O atingimento destas metas é fundamental para o crescimento sustentável da BrasilCard em 2026. Alinhe suas atividades diárias com estes indicadores para garantir o sucesso da nossa operação.
              </p>
           </div>
        </div>
      </div>

      <div className="h-24 shrink-0" />
    </div>
  );
};

export default MetaJanuary2026View;
