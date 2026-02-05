
import React from 'react';

interface HorarioPausaViewProps {
  onBack: () => void;
}

const HorarioPausaView: React.FC<HorarioPausaViewProps> = ({ onBack }) => {
  // Link da planilha formatado para visualização em iframe (versão preview para evitar interface de edição pesada)
  const spreadsheetUrl = "https://docs.google.com/spreadsheets/d/1JFW4QzLp98eb1S5htgPSLrlLFRLobyGxGf5Y4cHug_g/preview?gid=2097717859";

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header - Temática Violeta/Púrpura para Escalas */}
      <div className="relative h-[260px] w-full bg-gradient-to-br from-violet-600 via-purple-900 to-black shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_70%)]"></div>
        
        <div className="absolute top-8 left-8 z-50">
          <button 
            onClick={onBack}
            className="flex items-center space-x-3 text-white bg-black/30 hover:bg-black/50 px-6 py-3 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl transition-all group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-black text-xs tracking-[0.3em] uppercase italic">Páginas</span>
          </button>
        </div>

        <div className="absolute inset-0 p-10 flex flex-col justify-end max-w-7xl mx-auto w-full">
          <div className="space-y-2 animate-in slide-in-from-left-12 duration-1000">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/40 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
              <span className="text-purple-200 text-[10px] font-black uppercase tracking-[0.4em]">Gestão de Intervalos</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              Horário de <br />
              <span className="text-purple-400">Pausa</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-8 pb-24">
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black italic text-white uppercase tracking-tight flex items-center">
              <span className="w-1.5 h-6 bg-purple-500 mr-4 rounded-full shadow-[0_0_15px_#a855f7]"></span>
              Visualização da Escala Oficial
            </h2>
            <a 
              href="https://docs.google.com/spreadsheets/d/1JFW4QzLp98eb1S5htgPSLrlLFRLobyGxGf5Y4cHug_g/edit?gid=2097717859#gid=2097717859" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-black text-purple-400 uppercase tracking-widest border border-purple-500/30 px-4 py-2 rounded-lg hover:bg-purple-500/10 transition-all flex items-center space-x-2"
            >
              <span>Abrir na Planilha</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="w-full h-[750px] rounded-[2.5rem] border border-white/10 bg-black/40 overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <iframe 
              src={spreadsheetUrl}
              className="w-full h-full border-0"
              title="Horário de Pausa Spreadsheets"
            />
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
            <p className="text-purple-500 text-[10px] font-black uppercase tracking-widest mb-2">Atenção aos Horários</p>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">Siga rigorosamente a escala definida pela supervisão para não comprometer o TMA da equipe.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
            <p className="text-purple-500 text-[10px] font-black uppercase tracking-widest mb-2">Atualizações</p>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">Qualquer mudança na escala será refletida nesta planilha instantaneamente.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
            <p className="text-purple-500 text-[10px] font-black uppercase tracking-widest mb-2">Dúvidas</p>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">Em caso de conflito de horários, reporte imediatamente ao seu monitor direto.</p>
          </div>
        </div>
      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default HorarioPausaView;
