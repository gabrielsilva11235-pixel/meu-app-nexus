
import React from 'react';

interface QualityAuditViewProps {
  onBack: () => void;
}

const QualityAuditView: React.FC<QualityAuditViewProps> = ({ onBack }) => {
  // Planilha formatada para visualização (Preview)
  const spreadsheetUrl = "https://docs.google.com/spreadsheets/d/1v0PMlFT8Xfce3gy75YwBW7FfYTZIKXo7a-jIcs2WKsY/preview?widget=true&headers=false";
  
  // Imagens do Drive convertidas para endpoint direto LH3
  const imgOratoria = "https://lh3.googleusercontent.com/d/1157-ySNhD9N2Ysnsm4oSKgabxiM9s9vj";
  const imgAtencao = "https://lh3.googleusercontent.com/d/1kWVqAjSyGROABaj3QrOEjAWdXc01XU9U";
  
  // Novas imagens da seção "Como Externar"
  const externarImages = [
    "https://lh3.googleusercontent.com/d/1SVUrJeb3YF76Gj6PTw2P4n18KsUixgEw",
    "https://lh3.googleusercontent.com/d/1b8Lgk2nq527S3b1chsy1TJ588ya2UjVr",
    "https://lh3.googleusercontent.com/d/1kgdm_6PIP8zU8mfvreRINndJDel3bJfO",
    "https://lh3.googleusercontent.com/d/1QJY6K9fjp0N_Qyomc3pA0e6JkbAGBiVj",
    "https://lh3.googleusercontent.com/d/1FVaA8ZuJEe46kSwBoe3yubQ6dIJi7W_J",
    "https://lh3.googleusercontent.com/d/1FrxZ5254MvJN4XCaaK0lUNrP0Wdxtbzo"
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Header Estilo Hero */}
      <div className="relative h-[300px] w-full bg-gradient-to-br from-teal-600 via-cyan-900 to-slate-950 shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.2),transparent_70%)]"></div>
        
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
            <div className="inline-flex items-center space-x-2 bg-teal-500/20 border border-teal-500/40 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
              <span className="text-teal-200 text-[10px] font-black uppercase tracking-[0.4em]">Monitoramento de Performance</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase">
              Auditoria de <span className="text-teal-400">Qualidade</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-16">
        
        {/* Painel da Planilha */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black italic text-white uppercase tracking-tight flex items-center">
              <span className="w-1.5 h-6 bg-teal-500 mr-4 rounded-full"></span>
              Painel de Visualização - Google Sheets
            </h2>
            <a 
              href="https://docs.google.com/spreadsheets/d/1v0PMlFT8Xfce3gy75YwBW7FfYTZIKXo7a-jIcs2WKsY/edit" 
              target="_blank" 
              className="text-[10px] font-black text-teal-400 uppercase tracking-widest border border-teal-500/30 px-4 py-2 rounded-lg hover:bg-teal-500/10 transition-all"
            >
              Abrir Planilha Original
            </a>
          </div>
          <div className="w-full h-[600px] rounded-[2rem] border border-white/10 bg-black/40 overflow-hidden shadow-2xl relative">
            <iframe 
              src={spreadsheetUrl}
              className="w-full h-full border-0"
              title="Auditoria Spreadsheet"
            />
          </div>
        </section>

        {/* Seção Oratória */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter leading-none">
              Dicas de oratória para <span className="text-teal-400">atendimento ao cliente</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed font-medium italic">
              Ser um bom orador não depende apenas do domínio do conteúdo apresentado, mas também de como se estrutura a fala, fazendo uso estratégico de pausas e entonação para criar sentido ao que se fala. Esses elementos combinados à simpatia e ao carisma são a chave da boa oratória.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl w-full max-w-[320px]">
              <img src={imgOratoria} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" alt="Dicas de Oratória" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </section>

        {/* Banner de Atenção */}
        <section className="bg-red-500/10 border border-red-500/20 rounded-[3rem] p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-3xl">🚨</span>
                <h3 className="text-3xl font-black italic text-red-500 uppercase tracking-tighter">ATENÇÃO</h3>
              </div>
              <p className="text-slate-200 text-xl font-bold leading-snug italic">
                O medo de falar em público ou em atendimento pode atrapalhar a capacidade das pessoas em defender suas ideias, e até mesmo causar um nervosismo excessivo em situações delicadas, como ter que lidar com clientes reativos no ambiente de trabalho, por exemplo.
              </p>
            </div>
            <div className="lg:col-span-4">
              <img src={imgAtencao} className="rounded-2xl shadow-2xl border border-white/10 rotate-2 group-hover:rotate-0 transition-transform duration-500" alt="Atenção Oratória" />
            </div>
          </div>
        </section>

        {/* Pilares da Oratória */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-black italic text-white uppercase tracking-widest mb-2 leading-tight">Pilares da oratória essenciais para uma comunicação assertiva</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/5 p-10 rounded-[2.5rem] hover:bg-white/10 hover:border-teal-500/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400 font-black text-xl mb-6 group-hover:scale-110 transition-transform">1</div>
              <h4 className="text-lg font-black text-white mb-4 uppercase italic">Domínio da Língua</h4>
              <p className="text-slate-400 text-sm leading-relaxed italic">
                Fundamental para qualquer orador. Inclui conhecer regras gramaticais e usar a linguagem de forma eficaz para transmitir clareza, usando entonação, ritmo e pausa para destacar pontos importantes.
              </p>
            </div>

            <div className="bg-white/5 border border-white/5 p-10 rounded-[2.5rem] hover:bg-white/10 hover:border-teal-500/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400 font-black text-xl mb-6 group-hover:scale-110 transition-transform">2</div>
              <h4 className="text-lg font-black text-white mb-4 uppercase italic">Organização do Discurso</h4>
              <p className="text-slate-400 text-sm leading-relaxed italic">
                Um bom discurso deve ter introdução clara, corpo detalhado e conclusão que reforce a mensagem central, utilizando ferramentas retóricas como repetição e comparação.
              </p>
            </div>

            <div className="bg-white/5 border border-white/5 p-10 rounded-[2.5rem] hover:bg-white/10 hover:border-teal-500/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center text-teal-400 font-black text-xl mb-6 group-hover:scale-110 transition-transform">3</div>
              <h4 className="text-lg font-black text-white mb-4 uppercase italic">Postura e Expressão</h4>
              <p className="text-slate-400 text-sm leading-relaxed italic">
                Inclui o controle da voz para transmitir emoções. Manter uma boa postura no local de trabalho reforça a autoconfiança e segurança ao transmitir informações em atendimento.
              </p>
            </div>
          </div>
        </section>

        {/* Como Externar Informações */}
        <section className="space-y-8">
          <div className="flex items-center space-x-6 mb-12">
            <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter">Como externar as informações em atendimento:</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {externarImages.map((src, index) => (
              <div key={index} className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl group cursor-pointer">
                <img 
                  src={src} 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105" 
                  alt={`Externar Informação ${index + 1}`} 
                  onClick={() => window.open(src, '_blank')}
                />
              </div>
            ))}
          </div>
        </section>

      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default QualityAuditView;
