
import React from 'react';

interface QueEBrasilCardViewProps {
  onBack: () => void;
}

const QueEBrasilCardView: React.FC<QueEBrasilCardViewProps> = ({ onBack }) => {
  // IDs estáveis do Drive para as imagens internas
  const imgInstitucional = "https://lh3.googleusercontent.com/d/1VNBCb9ZMvfAqQ1FKvVL07gtz2OsoyohP";
  const imgPrivateVisa = "https://lh3.googleusercontent.com/d/1MJAmI0cYXczBLCQIGw7UGHYrgdrLgDvA";
  const imgCTA = "https://lh3.googleusercontent.com/d/1IkrDrZ6YMh7OPaqA-2golyyZtszz_CAm";

  return (
    <div className="flex-1 flex flex-col bg-[#081221] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header com Iluminação Azul Cinematográfica */}
      <div className="relative h-[260px] w-full bg-[#0a1830] shrink-0 border-b border-blue-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-transparent to-[#081221]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.25),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 pointer-events-none"></div>
        
        <div className="absolute top-6 left-6 z-50">
          <button 
            onClick={onBack}
            className="flex items-center space-x-3 text-white bg-blue-900/40 hover:bg-blue-600/30 px-5 py-2.5 rounded-xl backdrop-blur-2xl border border-blue-400/20 shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all group"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-black text-[10px] tracking-[0.3em] uppercase italic">Páginas</span>
          </button>
        </div>

        <div className="absolute inset-0 p-10 flex flex-col justify-end max-w-7xl mx-auto w-full">
          <div className="space-y-3 animate-in slide-in-from-left-12 duration-1000">
            <div className="inline-flex items-center space-x-2.5 bg-blue-500/30 border border-blue-400/50 px-5 py-2 rounded-full mb-2 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              <div className="w-2 h-2 rounded-full bg-blue-300 animate-pulse shadow-[0_0_12px_#93c5fd]"></div>
              <span className="text-blue-100 text-[9px] font-black uppercase tracking-[0.6em] drop-shadow-sm">BrasilCard Corporativo</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black tracking-tighter italic text-white drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)] uppercase leading-none">
              Crediário <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-400 text-glow-strong">Visa</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto p-6 lg:p-10 space-y-20 pb-20">
        
        {/* Seção 1: Institucional - IMAGEM CENTRALIZADA EM BOX QUADRADO */}
        <section className="flex flex-col items-center text-center space-y-10">
          <div className="max-w-3xl space-y-6 animate-in slide-in-from-bottom-8 duration-1000">
            <h2 className="text-2xl lg:text-3xl font-black italic text-white uppercase tracking-tighter inline-block relative text-glow-soft">
              Quem Somos
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-400 rounded-full shadow-[0_0_25px_#60a5fa]"></div>
            </h2>
            <div className="space-y-4 text-blue-100/80 text-lg leading-relaxed font-medium drop-shadow-sm italic">
              <p>
                A <span className="text-white font-black text-glow-soft border-b border-blue-400/30">BrasilCard</span> é referência nacional em Administração de Cartões, com presença sólida em todos os Estados brasileiros.
              </p>
              <p>
                Inovando com excelência, fomos a primeira administradora a oferecer a <span className="text-blue-300 font-black tracking-tight text-glow-soft">APROVAÇÃO AUTOMÁTICA</span> no Brasil.
              </p>
            </div>
          </div>

          {/* BOX QUADRADO CENTRALIZADO COM ILUMINAÇÃO */}
          <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center group">
            {/* Efeitos de Luz de Fundo (Aura) */}
            <div className="absolute inset-0 bg-blue-400/20 blur-[100px] rounded-full scale-75 group-hover:scale-100 transition-all duration-[2000ms] animate-pulse"></div>
            
            {/* Moldura de Vidro Quadrada */}
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-blue-400/20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] transition-all duration-1000 group-hover:scale-[1.02] bg-blue-900/30 backdrop-blur-2xl flex items-center justify-center p-10">
              <img 
                src={imgInstitucional} 
                className="w-full h-full object-contain filter brightness-125 contrast-110 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] group-hover:rotate-1 transition-transform duration-1000" 
                alt="BrasilCard Institucional" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            {/* Detalhe de Borda Neon Azul */}
            <div className="absolute -inset-px rounded-[2.5rem] border border-blue-400/30 pointer-events-none group-hover:border-blue-300/50 transition-colors"></div>
          </div>
          
          <a href="https://www.brasilcard.net/" target="_blank" className="relative overflow-hidden group/btn bg-blue-600/10 border border-blue-500/30 px-8 py-3.5 rounded-xl text-blue-200 font-black text-[9px] uppercase tracking-[0.5em] hover:bg-blue-600 hover:text-white transition-all shadow-[0_10px_20px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <span className="relative z-10">Portal Corporativo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
          </a>
        </section>

        {/* Seção 2: Private / Visa - TAMANHOS REDUZIDOS */}
        <section className="space-y-10">
          <div className="flex items-center space-x-8">
            <h2 className="text-xl font-black italic text-white uppercase tracking-tighter drop-shadow-xl text-glow-soft">Private / Visa</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-400/40 via-blue-900 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 flex justify-center relative group">
              <div className="absolute -inset-10 bg-blue-500/10 blur-[100px] rounded-full opacity-60 transition-all duration-1000"></div>
              <div className="relative max-w-[400px] rounded-[2.5rem] overflow-hidden border border-blue-400/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] bg-[#0a1830] p-6">
                <img src={imgPrivateVisa} className="w-full h-auto brightness-110 group-hover:scale-[1.03] transition-transform duration-1000" alt="Cartões Private e Visa" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="p-8 bg-blue-900/20 border border-blue-500/20 rounded-[2rem] hover:border-blue-400/40 transition-all group shadow-xl backdrop-blur-2xl text-glow-soft-container">
                <h3 className="text-lg font-black text-blue-300 uppercase tracking-widest mb-3 italic text-glow-soft">Cartão Private</h3>
                <p className="text-blue-100/70 text-sm font-medium leading-relaxed italic">
                  Continue com seu BrasilCard Fidelidade para compras locais com praticidade máxima.
                </p>
              </div>
              <div className="p-8 bg-blue-600/10 border border-blue-400/30 rounded-[2rem] hover:border-blue-300/50 transition-all group shadow-xl backdrop-blur-2xl">
                <h3 className="text-lg font-black text-white uppercase tracking-widest mb-3 italic drop-shadow-md text-glow-soft">BrasilCard Visa</h3>
                <p className="text-blue-50 text-sm font-medium leading-relaxed italic">
                  Conquiste novas fronteiras com o poder da bandeira <span className="font-black text-white underline decoration-blue-400 underline-offset-4">VISA</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 3: APP - TEMA AZUL PROFUNDO */}
        <section className="bg-[#0c1b33] border border-blue-400/20 rounded-[3rem] p-8 lg:p-14 relative overflow-hidden group shadow-[0_0_80px_rgba(0,0,0,0.6)]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-3">
                <span className="text-[9px] font-black text-blue-300 uppercase tracking-[0.6em] drop-shadow-md">Nexus Digital</span>
                <h2 className="text-3xl lg:text-5xl font-black text-white italic uppercase tracking-tighter leading-none">O APP É A SUA <span className="text-glow-strong">CONTA</span></h2>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "PIX E TED INSTANTÂNEOS",
                  "SAQUES EM TODA REDE",
                  "PAGAMENTO DE BOLETOS",
                  "GESTÃO DE LIMITES",
                  "CONTROLE EM TEMPO REAL"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 p-3 bg-blue-950/40 rounded-xl border border-blue-400/10 hover:bg-blue-600/10 transition-all group/item backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#3b82f6] group-hover/item:scale-125 transition-transform"></div>
                    <span className="text-[10px] font-black text-blue-100 uppercase tracking-widest italic">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-blue-400/20 flex flex-col sm:flex-row items-center gap-6">
                <div className="bg-blue-900/60 p-5 rounded-2xl border border-blue-400/20 shadow-xl backdrop-blur-xl">
                   <p className="text-[8px] font-black text-blue-400/60 uppercase tracking-[0.4em] mb-1">Central de Atendimento</p>
                   <p className="text-xl font-black text-white italic tracking-tighter text-glow-soft">(35) 3573-2600</p>
                </div>
                <button className="relative overflow-hidden bg-white text-blue-900 px-8 py-3.5 rounded-xl font-black text-[9px] uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-xl active:scale-95 group/down">
                  <span className="relative z-10">Download Nexus APP</span>
                  <div className="absolute inset-0 bg-blue-50 translate-y-full group-hover/down:translate-y-0 transition-transform"></div>
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-4 flex items-center justify-center">
               <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900 flex items-center justify-center text-white shadow-[0_0_40px_rgba(37,99,235,0.4)] rotate-12 group-hover:rotate-0 transition-all duration-1000 scale-105 border border-blue-300/20">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
               </div>
            </div>
          </div>
        </section>

        {/* Seção 4: CTA Final - ALTO CONTRASTE E IMAGEM COMPACTA */}
        <section className="bg-gradient-to-br from-[#0e2241] to-[#081221] rounded-[3.5rem] border border-blue-400/30 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] overflow-hidden group relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center relative z-10">
            {/* Bloco de Texto */}
            <div className="lg:col-span-7 p-8 lg:p-16 space-y-8 animate-in slide-in-from-left-8 duration-1000">
              <div className="space-y-5">
                <div className="w-10 h-1 bg-blue-400 rounded-full shadow-[0_0_15px_#60a5fa]"></div>
                <p className="text-2xl lg:text-4xl font-black text-white italic tracking-tighter leading-tight drop-shadow-2xl uppercase">
                  Um cartão <span className="text-blue-300 text-glow-strong">Sem Burocracia</span> para você.
                </p>
                <p className="text-blue-200/60 text-base lg:text-lg font-medium italic leading-relaxed">
                  Conta digital e crédito aprovado em segundos.
                </p>
              </div>
              
              <button className="group/btn relative overflow-hidden bg-blue-600 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.4em] shadow-xl transition-all active:scale-95 flex items-center space-x-3">
                <span className="relative z-10">Peça o seu!</span>
                <svg className="w-4 h-4 relative z-10 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Bloco de Imagem - IMAGEM REDUZIDA CENTRALIZADA */}
            <div className="lg:col-span-5 bg-blue-900/40 lg:border-l border-blue-400/20 h-full min-h-[400px] flex items-center justify-center p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3)_0%,transparent_70%)]"></div>
              
              <div className="relative w-full max-w-[260px] aspect-square flex items-center justify-center group-hover:scale-105 transition-transform duration-[2000ms]">
                <div className="absolute inset-0 bg-blue-400/20 blur-[50px] rounded-full animate-pulse-glow"></div>
                <img 
                  src={imgCTA} 
                  className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter brightness-110 contrast-110" 
                  alt="BrasilCard Visa Premium" 
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="h-24 shrink-0" />
      
      <style dangerouslySetInnerHTML={{ __html: `
        .text-glow-strong {
          text-shadow: 0 0 15px rgba(59, 130, 246, 0.9), 0 0 30px rgba(59, 130, 246, 0.4);
        }
        .text-glow-soft {
          text-shadow: 0 0 12px rgba(59, 130, 246, 0.6);
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 5s ease-in-out infinite;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.3);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.5);
        }
      `}} />
    </div>
  );
};

export default QueEBrasilCardView;
