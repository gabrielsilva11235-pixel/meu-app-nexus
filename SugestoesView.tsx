
import React from 'react';

interface SugestoesViewProps {
  onBack: () => void;
}

const SugestoesView: React.FC<SugestoesViewProps> = ({ onBack }) => {
  // IDs convertidos para o endpoint LH3 (visualização estável do Drive)
  const imgAlerta = "https://lh3.googleusercontent.com/d/15LLU6wNIkXSF2pNvpofH1yr4UWVKWhbY";
  const imgHistorico = "https://lh3.googleusercontent.com/d/1sokKtSJ-itXzq9iO-N_iXzBlh_SwRWk3";

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header */}
      <div className="relative h-[300px] w-full bg-gradient-to-br from-amber-600 via-orange-900 to-slate-950 shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.15),transparent_70%)]"></div>
        
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
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 border border-amber-500/40 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
              <span className="text-amber-200 text-[10px] font-black uppercase tracking-[0.4em]">Melhores Práticas de Análise</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              Sugestões de <br />
              <span className="text-amber-400">Operação</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-20 pb-32">
        
        {/* Seção 1: Nome da Mãe (Abreviado) */}
        <section className="space-y-12">
          <div className="flex items-center space-x-6">
            <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter flex items-center">
              <span className="w-1.5 h-10 bg-amber-500 mr-4 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"></span>
              NOME DA MÃE ( Abreviado )
            </h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Regra de NÃO deixar abreviado */}
            <div className="bg-red-500/5 border border-red-500/20 p-10 rounded-[3rem] backdrop-blur-md space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[80px] -z-10 group-hover:bg-red-500/10 transition-colors"></div>
              <div className="flex items-center space-x-4">
                 <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                 </div>
                 <h3 className="text-xl font-black italic text-white uppercase tracking-tight">Quando NÃO deixar?</h3>
              </div>
              <div className="space-y-4 text-slate-300 italic font-medium leading-relaxed">
                <p>
                  Sempre que analisar proposta com nome da mãe abreviado, <span className="text-red-400 font-black">ATIVE O SINAL DE ALERTA !!!</span>
                </p>
                <p className="text-sm">
                  De imediato verificar os docs e/ou nome do cliente. Se o documento contiver os sobrenomes abreviados, considere este por estar completo. Caso os Docs também estejam abreviados, verifique se o cliente possui algum dos sobrenomes abreviados completos!
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-2">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Exemplo Correto:</p>
                 <div className="text-[11px] text-slate-400 space-y-1">
                    <p>Mãe no SPC - <span className="text-white">Maria Pereira J Chaves</span></p>
                    <p>Nome do cliente - <span className="text-white">Francisco Pereira Juvencio Apolito</span></p>
                    <p className="text-emerald-400 font-bold uppercase mt-2">Correto: Maria Pereira Juvencio Chaves</p>
                 </div>
              </div>
            </div>

            {/* Regra de QUANDO deixar abreviado */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 p-10 rounded-[3rem] backdrop-blur-md space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[80px] -z-10 group-hover:bg-emerald-500/10 transition-colors"></div>
              <div className="flex items-center space-x-4">
                 <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                 </div>
                 <h3 className="text-xl font-black italic text-white uppercase tracking-tight">Quando deixar?</h3>
              </div>
              <div className="space-y-4 text-slate-300 italic font-medium leading-relaxed">
                <p>
                  Somente se o documento estiver abreviado e o nome do cliente possuir sobrenome abreviado.
                </p>
                <p className="text-sm">
                  Neste caso, não há fonte confiável de expansão do nome, portanto a abreviação deve ser mantida conforme as fontes consultadas.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-2">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Exemplo Mantendo:</p>
                 <div className="text-[11px] text-slate-400 space-y-1">
                    <p>Mãe no SPC - <span className="text-white">Maria Pereira J Chaves</span></p>
                    <p>Nome do cliente - <span className="text-white">Francisco Pereira Borges Apolito</span></p>
                    <p className="text-blue-400 font-bold uppercase mt-2">Correto: Maria Pereira J Chaves</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 2: Tela de Alerta */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter flex items-center">
              <span className="w-1.5 h-8 bg-red-600 mr-4 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"></span>
              Atenção ao Alerta
            </h2>
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md space-y-6">
              <p className="text-slate-300 leading-relaxed font-medium italic">
                Sempre se atentar a essa tela de alerta no sistema.
              </p>
              <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl">
                 <p className="text-sm font-bold text-red-200 leading-relaxed italic">
                   🚩 <span className="uppercase tracking-widest">Protocolo:</span> No alerta vimos que o cliente já aderiu a um cartão e que está inadimplente, <span className="text-white underline">mesmo assim sempre é preciso abrir as faturas</span> e ver se o cliente realmente está devendo algo.
                 </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="group relative rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-red-500/30">
               <div className="p-5 bg-black/40 border-b border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] italic">alerta_inadimplencia.png</span>
               </div>
               <div className="p-4 lg:p-10 bg-black/20">
                  <img 
                    src={imgAlerta} 
                    className="w-full h-auto rounded-xl transition-transform duration-1000 group-hover:scale-[1.01]" 
                    alt="Exemplo de Alerta de Inadimplência" 
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/800x400/1a1a1a/ffffff?text=Exemplo+Alerta"; }}
                  />
               </div>
            </div>
          </div>
        </section>

        {/* Divisor Visual */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* Seção 3: Histórico do Cliente */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
             <div className="group relative rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-blue-500/30">
               <div className="p-5 bg-black/40 border-b border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] italic">historico_cliente.png</span>
               </div>
               <div className="p-4 lg:p-10 bg-black/20">
                  <img 
                    src={imgHistorico} 
                    className="w-full h-auto rounded-xl transition-transform duration-1000 group-hover:scale-[1.01]" 
                    alt="Exemplo de Histórico do Cliente" 
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/800x400/1a1a1a/ffffff?text=Exemplo+Hist%C3%B3rico"; }}
                  />
               </div>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter flex items-center justify-end">
              Próximo Passo
              <span className="w-1.5 h-8 bg-blue-500 ml-4 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></span>
            </h2>
            <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md text-right">
              <p className="text-slate-300 leading-relaxed font-medium italic text-2xl uppercase tracking-tighter">
                O próximo passo é verificar o <span className="text-blue-400 font-black">histórico do cliente</span> minuciosamente.
              </p>
              <div className="mt-8 flex justify-end">
                 <div className="inline-flex items-center space-x-3 bg-blue-600/10 border border-blue-500/30 px-6 py-3 rounded-2xl">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                    <span className="text-[10px] font-black text-blue-100 uppercase tracking-widest">Análise de Risco Completa</span>
                 </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default SugestoesView;
