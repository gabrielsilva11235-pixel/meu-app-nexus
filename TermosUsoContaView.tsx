
import React from 'react';

interface TermosUsoContaViewProps {
  onBack: () => void;
}

const TermosUsoContaView: React.FC<TermosUsoContaViewProps> = ({ onBack }) => {
  const pdfUrl = "https://www.brasilcarddigital.com.br/pdf/Termos%20e%20Condi%C3%A7%C3%B5es%20de%20Uso%20da%20Conta%20Digital.pdf";

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header */}
      <div className="relative h-[300px] w-full bg-gradient-to-br from-indigo-700 via-slate-900 to-black shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_70%)]"></div>
        
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
              <span className="text-indigo-200 text-[10px] font-black uppercase tracking-[0.4em]">Contrato de Conta Digital</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none max-w-3xl">
              Termos de Uso <br />
              <span className="text-indigo-500">da Conta BrasilCard Digital</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-8">
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black italic text-white uppercase tracking-tight flex items-center">
              <span className="w-1.5 h-6 bg-indigo-600 mr-4 rounded-full"></span>
              Visualizador de Regulamento
            </h2>
            <div className="flex space-x-4">
              <a 
                href={pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] font-black text-indigo-400 uppercase tracking-widest border border-indigo-500/30 px-4 py-2 rounded-lg hover:bg-indigo-500/10 transition-all flex items-center space-x-2"
              >
                <span>Ver em Nova Aba</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Iframe Panel */}
          <div className="w-full h-[800px] rounded-[2.5rem] border border-white/10 bg-black/40 overflow-hidden shadow-2xl relative group">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <iframe 
              src={pdfUrl}
              className="w-full h-full border-0"
              title="Termos de Uso Conta PDF"
            />
            {/* Overlay sutil para indicar que o painel é interativo */}
            <div className="absolute bottom-6 right-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 text-[8px] font-black text-white uppercase tracking-widest">
                Scroll Ativado
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-indigo-500/20 transition-all">
            <p className="text-indigo-500 text-[10px] font-black uppercase tracking-widest mb-3">Compromisso</p>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              O presente termo estabelece as diretrizes para uma relação transparente entre a instituição financeira e o correntista.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-indigo-500/20 transition-all">
            <p className="text-indigo-500 text-[10px] font-black uppercase tracking-widest mb-3">Atualização</p>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Este documento é revisado periodicamente para atender às normas do Banco Central e garantir sua segurança jurídica.
            </p>
          </div>
        </div>
      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default TermosUsoContaView;
