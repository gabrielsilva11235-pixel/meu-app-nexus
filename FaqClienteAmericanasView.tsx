
import React from 'react';

interface FaqClienteAmericanasViewProps {
  onBack: () => void;
}

const FaqClienteAmericanasView: React.FC<FaqClienteAmericanasViewProps> = ({ onBack }) => {
  // Link de preview para exibição estável em iframe
  const pdfUrl = "https://drive.google.com/file/d/1NYj49_AVbbhaF7XY1c_Qw7jhfHSe2yC4/preview";

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header - Temática Americanas (Vermelho) */}
      <div className="relative h-[300px] w-full bg-gradient-to-br from-red-600 via-red-900 to-black shrink-0 border-b border-white/10 overflow-hidden">
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
              <span className="text-red-200 text-[10px] font-black uppercase tracking-[0.4em]">Suporte ao Cliente</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              FAQ CLIENTE <br />
              <span className="text-red-400">Americanas</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-8">
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black italic text-white uppercase tracking-tight flex items-center">
              <span className="w-1.5 h-6 bg-red-600 mr-4 rounded-full"></span>
              Documento de Orientação
            </h2>
            <a 
              href="https://drive.google.com/file/d/1NYj49_AVbbhaF7XY1c_Qw7jhfHSe2yC4/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-black text-red-400 uppercase tracking-widest border border-red-500/30 px-4 py-2 rounded-lg hover:bg-red-500/10 transition-all flex items-center space-x-2"
            >
              <span>Ver no Drive</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="w-full h-[800px] rounded-[2.5rem] border border-white/10 bg-black/40 overflow-hidden shadow-2xl relative group">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <iframe 
              src={pdfUrl}
              className="w-full h-full border-0"
              title="FAQ Cliente Americanas PDF"
            />
            <div className="absolute bottom-6 right-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 text-[8px] font-black text-white uppercase tracking-widest">
                Painel Interativo
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-red-500/20 transition-all">
            <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mb-3">Informação</p>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Utilize as perguntas e respostas deste documento para agilizar o atendimento e sanar dúvidas recorrentes dos clientes Americanas.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-red-500/20 transition-all">
            <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mb-3">Aviso</p>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Em caso de informações desatualizadas, reporte imediatamente à supervisão para correção do manual.
            </p>
          </div>
        </div>
      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default FaqClienteAmericanasView;
