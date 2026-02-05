
import React from 'react';

interface EnderecoViewProps {
  onBack: () => void;
}

const EnderecoView: React.FC<EnderecoViewProps> = ({ onBack }) => {
  const imgDistrito = "https://lh3.googleusercontent.com/d/1QdcMvvoRWYf2w5yf7eXDE4cuLfSZ-jTl";
  const imgParImpar = "https://lh3.googleusercontent.com/d/1pWj4nXRf0_z1ECirxRK48OQRVTMTBLN-";

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header - Temática Cyan para Dados e Precisão */}
      <div className="relative h-[300px] w-full bg-gradient-to-br from-cyan-600 via-blue-900 to-slate-950 shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_70%)]"></div>
        
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
            <div className="inline-flex items-center space-x-2 bg-cyan-500/20 border border-cyan-500/40 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <span className="text-cyan-200 text-[10px] font-black uppercase tracking-[0.4em]">Validação de Dados</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              Regras de <br />
              <span className="text-cyan-400">Endereço</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-16">
        
        {/* Seção 1: Distritos */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter flex items-center">
              <span className="w-1.5 h-8 bg-cyan-500 mr-4 rounded-full"></span>
              Distritos e CEPs Gerais
            </h2>
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md space-y-4">
              <p className="text-slate-300 leading-relaxed font-medium">
                Sempre que o retorno do <span className="text-cyan-400 font-bold italic">Busca CEP</span> trouxer apenas o bairro e a cidade, o analista deve obrigatoriamente classificar como <span className="text-white font-black underline">DISTRITO</span> no campo do bairro.
              </p>
              <div className="bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/20">
                <p className="text-xs font-bold text-cyan-200 leading-relaxed">
                  Exemplo prático: Caso no Busca CEP conste apenas CIDADE e BAIRRO, no sistema deve-se preencher: <br />
                  <span className="text-white font-black">DISTRITO [NOME DO BAIRRO]</span>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="group relative rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-all duration-700">
              <img 
                src={imgDistrito} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000" 
                alt="Exemplo de Distrito no Busca CEP" 
                onError={(e) => { e.currentTarget.src = "https://placehold.co/800x400/1a1a1a/ffffff?text=Exemplo+Distrito"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Exemplo: DISTRITO HUMILDES</p>
              </div>
            </div>
          </div>
        </section>

        {/* Divisor Visual */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* Seção 2: Lado Par e Ímpar */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
             <div className="group relative rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-all duration-700">
              <img 
                src={imgParImpar} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000" 
                alt="Exemplo Lado Par e Ímpar" 
                onError={(e) => { e.currentTarget.src = "https://placehold.co/800x400/1a1a1a/ffffff?text=Exemplo+Par+Impar"; }}
              />
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter flex items-center justify-end">
              Lado Par e Ímpar
              <span className="w-1.5 h-8 bg-amber-500 ml-4 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"></span>
            </h2>
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md space-y-4 text-right">
              <p className="text-slate-300 leading-relaxed font-medium">
                <span className="text-amber-500 font-black">ATENÇÃO REDOBRADA:</span> Sempre que o Busca CEP retornar <span className="italic text-white underline">Lado Par ou Lado Ímpar</span>, verifique com precisão o número da residência do cliente.
              </p>
              <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/20 text-left">
                <p className="text-xs font-bold text-amber-200 leading-relaxed">
                  Lembre-se: Dependendo de qual lado a casa esteja localizada, tanto o <span className="text-white">BAIRRO</span> quanto o <span className="text-white">CEP</span> podem sofrer alterações drásticas na mesma rua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alerta Final */}
        <section className="bg-blue-600/10 border border-blue-500/20 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-8 group">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-1">Dica de Segurança</h4>
            <p className="text-slate-400 text-xs font-medium">Erros no preenchimento do endereço são a principal causa de falhas na entrega física de cartões. Valide cada detalhe antes de prosseguir.</p>
          </div>
        </section>

      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default EnderecoView;
