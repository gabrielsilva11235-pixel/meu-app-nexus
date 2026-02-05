
import React from 'react';

interface RegraRSViewProps {
  onBack: () => void;
}

const RegraRSView: React.FC<RegraRSViewProps> = ({ onBack }) => {
  // Endpoint direto LH3 para a imagem do Google Drive fornecida
  const mainImage = "https://lh3.googleusercontent.com/d/1yzLr8zPP024zmdjZLwrhS6SQR4X4bkaM";

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header - Temática Regional (Cores do RS: Verde, Vermelho, Amarelo) */}
      <div className="relative h-[320px] w-full bg-gradient-to-br from-green-700 via-yellow-600 to-red-700 shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.15),transparent_70%)]"></div>
        
        <div className="absolute top-8 left-8 z-50">
          <button 
            onClick={onBack}
            className="flex items-center space-x-3 text-white bg-black/40 hover:bg-black/60 px-6 py-3 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl transition-all group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-black text-xs tracking-[0.3em] uppercase italic">Páginas</span>
          </button>
        </div>

        <div className="absolute inset-0 p-12 flex flex-col justify-end max-w-7xl mx-auto w-full">
          <div className="space-y-2 animate-in slide-in-from-left-12 duration-1000">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Diretriz Regional</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              Regra - <span className="text-yellow-400">Rio Grande do Sul</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-16 pb-24">
        
        {/* Seção da Imagem Documental */}
        <section className="space-y-10">
          <div className="flex items-center space-x-6">
            <h2 className="text-2xl font-black italic text-white uppercase tracking-tighter flex items-center">
              <span className="w-1.5 h-8 bg-yellow-500 mr-4 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"></span>
              Documentação Oficial de Operação
            </h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="group relative rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-yellow-500/30">
             <div className="p-6 bg-black/40 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_#f59e0b]"></div>
                   <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Visualização em Alta Definição</span>
                </div>
                <span className="text-[8px] font-bold text-slate-600 uppercase italic">regra_rs_v2.png</span>
             </div>
             
             <div className="bg-black/20 p-4 lg:p-8 flex items-center justify-center">
                <img 
                  src={mainImage} 
                  className="w-full h-auto rounded-xl transition-transform duration-1000 group-hover:scale-[1.01]" 
                  alt="Regra Rio Grande do Sul"
                  onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/1a1a1a/ffffff?text=Imagem+N%C3%A3o+Dispon%C3%ADvel"; }}
                />
             </div>
             
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </section>

        {/* Info Card */}
        <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-1.5 h-full bg-yellow-600"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2">
                 <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">Observação Regional</h3>
                 <p className="text-sm text-slate-400 font-medium max-w-2xl leading-relaxed italic">
                   Estas diretrizes são específicas para a região do Rio Grande do Sul e devem ser consultadas em conjunto com as regras gerais de restrição da BrasilCard. O não cumprimento destes procedimentos pode impactar os indicadores de qualidade da filial.
                 </p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-yellow-600/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500">
                 <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
           </div>
        </div>
      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default RegraRSView;
