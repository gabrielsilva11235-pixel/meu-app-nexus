
import React from 'react';

interface FuncionalidadesAppViewProps {
  onBack: () => void;
}

const FuncionalidadesAppView: React.FC<FuncionalidadesAppViewProps> = ({ onBack }) => {
  const pdfUrl = "https://drive.google.com/file/d/1zOM6XNo1PlMW4SgQSIazV9_9H4v7hZ2H/preview";

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header */}
      <div className="relative h-[300px] w-full bg-gradient-to-br from-indigo-600 via-blue-900 to-black shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.15),transparent_70%)]"></div>
        
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
              <span className="text-indigo-200 text-[10px] font-black uppercase tracking-[0.4em]">Exploração Digital</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              Funcionalidades <br />
              <span className="text-indigo-400">do APP</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-8 pb-24">
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black italic text-white uppercase tracking-tight flex items-center">
              <span className="w-1.5 h-6 bg-indigo-600 mr-4 rounded-full shadow-[0_0_15px_#4f46e5]"></span>
              Guia de Recursos do Aplicativo
            </h2>
            <a 
              href="https://drive.google.com/file/d/1zOM6XNo1PlMW4SgQSIazV9_9H4v7hZ2H/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-black text-indigo-400 uppercase tracking-widest border border-indigo-500/30 px-4 py-2 rounded-lg hover:bg-indigo-500/10 transition-all flex items-center space-x-2"
            >
              <span>Download Guia</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>

          <div className="w-full h-[850px] rounded-[3rem] border border-white/10 bg-black/40 overflow-hidden shadow-2xl relative group">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <iframe 
              src={pdfUrl}
              className="w-full h-full border-0"
              title="Funcionalidades do App PDF"
            />
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-indigo-500/20 transition-all">
            <p className="text-indigo-500 text-[10px] font-black uppercase tracking-widest mb-3">Conectividade</p>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Explore como a conta digital integra todas as necessidades financeiras do cliente em um só lugar, desde pagamentos até transferências instantâneas.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-indigo-500/20 transition-all">
            <p className="text-indigo-500 text-[10px] font-black uppercase tracking-widest mb-3">Facilidade</p>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Este manual serve como base para orientar o cliente sobre as melhores formas de utilizar o saldo, limite e as ferramentas de segurança do App.
            </p>
          </div>
        </div>
      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default FuncionalidadesAppView;
