
import React from 'react';

interface ConsolidadoGeralViewProps {
  onBack: () => void;
}

const ConsolidadoGeralView: React.FC<ConsolidadoGeralViewProps> = ({ onBack }) => {
  const spreadsheetUrl = "https://docs.google.com/spreadsheets/d/1cKSVL6SJmBc06fp9_rH8PiGdtkJzwr-QaemOfkt3Kno/preview?gid=126886245";

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header */}
      <div className="relative h-[300px] w-full bg-gradient-to-br from-slate-600 via-slate-800 to-black shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.1),transparent_70%)]"></div>
        
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
            <div className="inline-flex items-center space-x-2 bg-slate-500/20 border border-slate-500/40 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-slate-400 animate-pulse"></div>
              <span className="text-slate-200 text-[10px] font-black uppercase tracking-[0.4em]">Relatórios Estratégicos</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              Consolidado <br />
              <span className="text-slate-400">Geral</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-8 pb-24">
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black italic text-white uppercase tracking-tight flex items-center">
              <span className="w-1.5 h-6 bg-slate-500 mr-4 rounded-full shadow-[0_0_15px_#94a3b8]"></span>
              Painel de Dados Consolidados
            </h2>
            <div className="flex space-x-4">
              <a 
                href="https://docs.google.com/spreadsheets/d/1cKSVL6SJmBc06fp9_rH8PiGdtkJzwr-QaemOfkt3Kno/edit?gid=126886245#gid=126886245" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-500/30 px-4 py-2 rounded-lg hover:bg-slate-500/10 transition-all flex items-center space-x-2"
              >
                <span>Abrir Completo</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full h-[800px] rounded-[3.5rem] border border-white/10 bg-black/40 overflow-hidden shadow-2xl relative group">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-12 h-12 border-4 border-slate-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <iframe 
              src={spreadsheetUrl}
              className="w-full h-full border-0"
              title="Consolidado Geral Spreadsheets"
            />
            <div className="absolute bottom-6 right-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 text-[8px] font-black text-white uppercase tracking-widest">
                Visualização de Dados
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-slate-500/20 transition-all">
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-3">Sincronização</p>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Este painel é atualizado dinamicamente conforme os dados da planilha mestre são alimentados pela coordenação.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-slate-500/20 transition-all">
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-3">Acesso</p>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Utilize os filtros nativos do Google Sheets para navegar entre os períodos e categorias de dados.
            </p>
          </div>
        </div>
      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default ConsolidadoGeralView;
