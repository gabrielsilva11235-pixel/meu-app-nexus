
import React from 'react';

interface RegraRestricaoViewProps {
  onBack: () => void;
}

const RegraRestricaoView: React.FC<RegraRestricaoViewProps> = ({ onBack }) => {
  // IDs convertidos para carregamento direto e estável (LH3)
  const img1 = "https://lh3.googleusercontent.com/d/1vcwvX_s0RTvfyzXtwefwgZbLxsayxF2z";
  const img2 = "https://lh3.googleusercontent.com/d/1_I0iN5aSIwZiok-pxzGOOOZdnqC-xjlz";

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header - Temática de Alerta/Diretriz (Vermelho Profundo) */}
      <div className="relative h-[280px] w-full bg-gradient-to-br from-red-700 via-red-900 to-black shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.15),transparent_70%)]"></div>
        
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
              <span className="text-red-200 text-[10px] font-black uppercase tracking-[0.4em]">Análise de Perfil</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              Regra <span className="text-red-500">Restrição</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-16 pb-24">
        
        {/* Seção das Imagens */}
        <section className="space-y-12">
          <div className="flex items-center space-x-6">
            <h2 className="text-2xl font-black italic text-white uppercase tracking-tighter">Documentação de Diretrizes</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {/* Imagem 1 */}
            <div className="group relative rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-red-500/30">
               <div className="p-6 bg-black/40 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]"></div>
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Diretriz Parte 01</span>
                  </div>
                  <span className="text-[8px] font-bold text-slate-600 uppercase">Visualização em Alta Definição</span>
               </div>
               <div className="bg-black/20 flex items-center justify-center p-4">
                  <img 
                    src={img1} 
                    className="w-full h-auto rounded-xl transition-transform duration-1000 group-hover:scale-[1.01]" 
                    alt="Regra Restrição 01"
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/1a1a1a/ffffff?text=Imagem+N%C3%A3o+Dispon%C3%ADvel"; }}
                  />
               </div>
            </div>

            {/* Imagem 2 */}
            <div className="group relative rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-red-500/30">
               <div className="p-6 bg-black/40 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]"></div>
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Diretriz Parte 02</span>
                  </div>
                  <span className="text-[8px] font-bold text-slate-600 uppercase">Documento Atualizado</span>
               </div>
               <div className="bg-black/20 flex items-center justify-center p-4">
                  <img 
                    src={img2} 
                    className="w-full h-auto rounded-xl transition-transform duration-1000 group-hover:scale-[1.01]" 
                    alt="Regra Restrição 02"
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/1a1a1a/ffffff?text=Imagem+N%C3%A3o+Dispon%C3%ADvel"; }}
                  />
               </div>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <div className="bg-red-500/10 border border-red-500/20 p-10 rounded-[3rem] relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2">
                 <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">Observação Importante</h3>
                 <p className="text-sm text-slate-400 font-medium max-w-2xl leading-relaxed italic">
                   Estas diretrizes de restrição devem ser seguidas rigorosamente durante o processo de análise de crédito. Em caso de dúvida sobre um cenário específico não listado nestas imagens, consulte imediatamente sua supervisão.
                 </p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500">
                 <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
           </div>
        </div>
      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default RegraRestricaoView;
