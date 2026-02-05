
import React from 'react';

interface VisaRoutinesTeresinaViewProps {
  onBack: () => void;
}

const VisaRoutinesTeresinaView: React.FC<VisaRoutinesTeresinaViewProps> = ({ onBack }) => {
  // IDs convertidos para carregamento direto via LH3
  const metaImage1 = "https://lh3.googleusercontent.com/d/1jIv7iJ0BTGbZpJhgB2_bG4aOOTB6dVrn";
  const metaImage2 = "https://lh3.googleusercontent.com/d/1rz65adCTSPRoAKFzsZZh3Gzt4eY7rARe";

  const buttons = [
    { name: "Link Forms - Auditoria de Análises", color: "from-blue-600 to-indigo-800" },
    { name: "Link Forms - Conversão de Pendentes", color: "from-emerald-600 to-teal-800" },
    { name: "Resumo Geral - Auditoria de Análises", color: "from-slate-700 to-slate-900" },
    { name: "Reanálise de Pendentes", color: "from-amber-600 to-orange-800" },
    { name: "Resumo Erros - Auditoria de aprovados", color: "from-rose-600 to-red-800" },
    { name: "Relação Auditoria Visa - Arquivos", color: "from-purple-600 to-violet-800" },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header */}
      <div className="relative h-[320px] w-full bg-gradient-to-br from-indigo-700 via-blue-900 to-black shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_70%)]"></div>
        
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
            <div className="inline-flex items-center space-x-2 bg-indigo-500/20 border border-indigo-500/40 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
              <span className="text-indigo-200 text-[10px] font-black uppercase tracking-[0.4em]">Regional Piauí</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              Rotinas Visa <br />
              <span className="text-indigo-400">Teresina</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-20 pb-24">
        
        {/* Seção de Botões de Acesso */}
        <section className="space-y-8">
          <div className="flex items-center space-x-4">
             <h2 className="text-2xl font-black italic text-white uppercase tracking-tight flex items-center">
               <span className="w-1.5 h-8 bg-indigo-600 mr-4 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></span>
               Links para os acessos
             </h2>
             <div className="h-px flex-1 bg-white/10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buttons.map((btn, idx) => (
              <button 
                key={idx}
                className={`group relative overflow-hidden bg-gradient-to-br ${btn.color} p-8 rounded-[2.5rem] border border-white/10 shadow-2xl transition-all hover:-translate-y-2 hover:scale-[1.02] active:scale-95 text-left flex flex-col justify-center min-h-[140px]`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 blur-3xl rounded-full -translate-y-8 translate-x-8 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="text-white font-black text-sm uppercase tracking-widest leading-tight relative z-10">
                  {btn.name}
                </h3>
                <div className="mt-4 flex items-center space-x-2 text-white/40 text-[9px] font-black uppercase tracking-widest group-hover:text-white transition-colors relative z-10">
                   <span>Abrir Portal</span>
                   <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Seção de Metas */}
        <section className="space-y-12">
          <div className="flex items-center space-x-6">
            <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter">Proposta de meta - <span className="text-indigo-400">Setembro 2025</span></h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {/* Meta Slide 1 */}
            <div className="group relative rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-indigo-500/30">
               <div className="p-6 bg-black/40 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]"></div>
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Proposta de Meta 01</span>
                  </div>
                  <span className="text-[8px] font-bold text-slate-600 uppercase">Visualização em Alta Definição</span>
               </div>
               <div className="bg-black/20 flex items-center justify-center p-4 lg:p-10">
                  <img 
                    src={metaImage1} 
                    className="w-full h-auto rounded-xl transition-transform duration-1000 group-hover:scale-[1.01]" 
                    alt="Meta Setembro 1"
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/1a1a1a/ffffff?text=Imagem+N%C3%A3o+Dispon%C3%ADvel"; }}
                  />
               </div>
            </div>

            {/* Meta Slide 2 */}
            <div className="group relative rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-indigo-500/30">
               <div className="p-6 bg-black/40 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]"></div>
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Proposta de Meta 02</span>
                  </div>
                  <span className="text-[8px] font-bold text-slate-600 uppercase">Análise de Performance</span>
               </div>
               <div className="bg-black/20 flex items-center justify-center p-4 lg:p-10">
                  <img 
                    src={metaImage2} 
                    className="w-full h-auto rounded-xl transition-transform duration-1000 group-hover:scale-[1.01]" 
                    alt="Meta Setembro 2"
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/1a1a1a/ffffff?text=Imagem+N%C3%A3o+Dispon%C3%ADvel"; }}
                  />
               </div>
            </div>
          </div>
        </section>
      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default VisaRoutinesTeresinaView;
