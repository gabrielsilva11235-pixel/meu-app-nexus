
import React from 'react';

interface LimiteVencerViewProps {
  onBack: () => void;
}

const LimiteVencerView: React.FC<LimiteVencerViewProps> = ({ onBack }) => {
  // LH3 é o endpoint mais estável para exibir imagens hotlinked do Drive. 
  // ID atualizado conforme solicitado pelo usuário.
  const mainImage = "https://lh3.googleusercontent.com/d/1yY1vR7zXgL67uGsz20sMyR6x5wJYr8-8";

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      <div className="relative h-[350px] w-full bg-gradient-to-br from-blue-700 via-indigo-900 to-slate-950 shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.2),transparent_70%)]"></div>
        
        <div className="absolute top-8 left-8 z-50">
          <button 
            onClick={onBack}
            className="flex items-center space-x-3 text-white bg-black/30 hover:bg-black/50 px-6 py-3 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl transition-all group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-black text-xs tracking-[0.3em] uppercase italic">Timer Pausa</span>
          </button>
        </div>

        <div className="absolute inset-0 p-12 flex flex-col justify-end max-w-7xl mx-auto w-full">
          <div className="space-y-2 animate-in slide-in-from-left-12 duration-1000">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-500/40 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-blue-200 text-[10px] font-black uppercase tracking-[0.4em]">Gestão de Contas</span>
            </div>
            <h1 className="text-7xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase">
              Limite <span className="text-blue-400">e a Vencer</span>
            </h1>
            <p className="text-white/60 text-xl font-bold tracking-widest uppercase italic">
              BrasilCard Financeiro
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-12 space-y-16">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md">
              <h3 className="text-xl font-black italic text-blue-500 uppercase tracking-tight mb-4">Informações Financeiras</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Este guia detalha os procedimentos para consulta de limites disponíveis, limites a vencer e as regras de parcelamento vigentes.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500 border-b border-white/5 pb-2">
                  <span>Atualizado</span>
                  <span className="text-white">Março 2024</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="group relative rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-all duration-700">
               <div className="p-8 bg-black/40 border-b border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Documentacao_Limite.png</span>
               </div>
               <div className="p-8 bg-black/20 flex items-center justify-center min-h-[400px]">
                  <img 
                    src={mainImage} 
                    alt="Documento Limite" 
                    className="w-full h-auto rounded-xl shadow-2xl border border-white/5 transition-transform duration-1000 group-hover:scale-[1.02]"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/1200x800/1a1a1a/ffffff?text=Documento+Limite+(PNG)";
                    }}
                  />
               </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LimiteVencerView;
