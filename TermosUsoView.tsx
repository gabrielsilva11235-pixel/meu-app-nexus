
import React from 'react';

interface TermosUsoViewProps {
  onBack: () => void;
}

const TermosUsoView: React.FC<TermosUsoViewProps> = ({ onBack }) => {
  const pdfUrl = "https://www.brasilcarddigital.com.br/pdf/Termo%20Uso%20Aplicativo%20-%20BrasilCard%20Conta%20Digital.pdf";

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header */}
      <div className="relative h-[300px] w-full bg-gradient-to-br from-slate-700 via-slate-900 to-black shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]"></div>
        
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
              <span className="text-slate-200 text-[10px] font-black uppercase tracking-[0.4em]">Documentação Regulatória</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none max-w-3xl">
              Termos e Condições <br />
              <span className="text-blue-500">do Aplicativo BrasilCard Digital</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-8">
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black italic text-white uppercase tracking-tight flex items-center">
              <span className="w-1.5 h-6 bg-blue-600 mr-4 rounded-full"></span>
              Visualizador de Termos de Uso
            </h2>
            <div className="flex space-x-4">
              <a 
                href={pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] font-black text-blue-400 uppercase tracking-widest border border-blue-500/30 px-4 py-2 rounded-lg hover:bg-blue-500/10 transition-all flex items-center space-x-2"
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
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <iframe 
              src={pdfUrl}
              className="w-full h-full border-0"
              title="Termos de Uso PDF"
            />
            {/* Overlay sutil para indicar que o painel é interativo */}
            <div className="absolute bottom-6 right-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 text-[8px] font-black text-white uppercase tracking-widest">
                Scroll Ativado
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all">
            <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-3">Privacidade</p>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Este documento detalha como seus dados são tratados dentro da nossa plataforma digital segura.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all">
            <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-3">Segurança</p>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Conheça as responsabilidades e camadas de proteção que garantem a integridade das suas transações.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all">
            <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-3">Transparência</p>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Regulamentos claros sobre a utilização de serviços bancários e produtos de crédito BrasilCard.
            </p>
          </div>
        </div>
      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default TermosUsoView;
