
import React from 'react';

interface EnderecosViewProps {
  onBack: () => void;
}

const EnderecosView: React.FC<EnderecosViewProps> = ({ onBack }) => {
  // Conversão de links do Drive para visualização direta (LH3)
  const imgDistrito = "https://lh3.googleusercontent.com/d/1QdcMvvoRWYf2w5yf7eXDE4cuLfSZ-jTl";
  const imgParImpar = "https://lh3.googleusercontent.com/d/1pWj4nXRf0_z1ECirxRK48OQRVTMTBLN-";

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header */}
      <div className="relative h-[300px] w-full bg-gradient-to-br from-cyan-600 via-blue-900 to-slate-950 shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_70%)]"></div>
        
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
            <div className="inline-flex items-center space-x-2 bg-cyan-500/20 border border-cyan-500/40 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <span className="text-cyan-200 text-[10px] font-black uppercase tracking-[0.4em]">Validação Cadastral</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              Manual de <br />
              <span className="text-cyan-400">Endereços</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-16 pb-32">
        
        {/* Seção 1: CEP Bairro e Cidade (Distritos) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-4">
               <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter">Quando o CEP retorna apenas BAIRRO e CIDADE</h2>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md space-y-6">
              <p className="text-slate-300 leading-relaxed font-medium italic">
                Sempre que o CEP retornar apenas bairro e a cidade no <span className="text-cyan-400 font-bold">Busca CEP</span>, o analista deve colocar como <span className="text-white font-black underline">distrito</span> no campo do bairro.
              </p>
              <div className="p-6 bg-cyan-600/10 border border-cyan-500/30 rounded-2xl space-y-2">
                 <p className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Exemplo Correto:</p>
                 <p className="text-xl font-black text-white italic">DISTRITO HUMILDES</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Todo caso em que no busca cep constar apenas <span className="text-white">CIDADE e BAIRRO</span> será classificado como um <span className="text-white">DISTRITO</span>.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="group relative rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-cyan-500/30">
               <div className="p-6 bg-black/40 border-b border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] italic">Busca_CEP_Exemplo.png</span>
               </div>
               <div className="p-4 lg:p-10 bg-black/20 flex items-center justify-center">
                  <img 
                    src={imgDistrito} 
                    className="w-full h-auto rounded-xl transition-transform duration-1000 group-hover:scale-[1.01]" 
                    alt="Exemplo de CEP Geral"
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/800x400/1a1a1a/ffffff?text=Exemplo+Distrito"; }}
                  />
               </div>
            </div>
          </div>
        </section>

        {/* Divisor Visual */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* Seção 2: Lado Par e Ímpar */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="group relative rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-amber-500/30">
               <div className="p-6 bg-black/40 border-b border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] italic">Lado_Par_Impar_Alerta.png</span>
               </div>
               <div className="p-4 lg:p-10 bg-black/20 flex items-center justify-center">
                  <img 
                    src={imgParImpar} 
                    className="w-full h-auto rounded-xl transition-transform duration-1000 group-hover:scale-[1.01]" 
                    alt="Lado Par e Impar"
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/800x400/1a1a1a/ffffff?text=Exemplo+Lado+Par+Impar"; }}
                  />
               </div>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="flex items-center space-x-4 justify-end">
               <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter text-right">LADO PAR E LADO ÍMPAR <br /> <span className="text-amber-500">( ATENÇÃO )</span></h2>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md space-y-6 text-right">
              <p className="text-slate-300 leading-relaxed font-medium italic">
                Sempre que no Busca Cep retornar <span className="text-amber-500 font-bold">Lado Par ou Lado Ímpar</span>, fique atento ao número da residência informado pelo cliente.
              </p>
              <div className="p-6 bg-amber-600/10 border border-amber-500/30 rounded-2xl text-left">
                 <p className="text-xs font-bold text-amber-200 leading-relaxed">
                   🚩 <span className="uppercase tracking-widest">Detalhe Crítico:</span> Dependendo de qual lado a casa fique, o <span className="text-white underline">bairro e o CEP também mudarão</span>, mesmo na mesma logradouro.
                 </p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                A validação correta do número garante a entrega física do cartão e evita devoluções por "Endereço Inexistente".
              </p>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <div className="bg-cyan-500/10 border border-cyan-500/20 p-10 rounded-[3rem] relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-2 h-full bg-cyan-600"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2">
                 <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">Resumo de Qualidade</h3>
                 <p className="text-sm text-slate-400 font-medium max-w-2xl leading-relaxed italic">
                   Erros no preenchimento do endereço impactam diretamente no TMA de reanálise e nos custos logísticos de reenvio. Valide sempre os dados no site oficial dos Correios.
                 </p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
                 <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
           </div>
        </div>
      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default EnderecosView;
