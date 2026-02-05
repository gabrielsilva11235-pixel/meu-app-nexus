
import React from 'react';

interface SobreFaturasViewProps {
  onBack: () => void;
}

const SobreFaturasView: React.FC<SobreFaturasViewProps> = ({ onBack }) => {
  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header */}
      <div className="relative h-[300px] w-full bg-gradient-to-br from-cyan-600 via-blue-900 to-black shrink-0 border-b border-white/10 overflow-hidden">
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
              <span className="text-cyan-200 text-[10px] font-black uppercase tracking-[0.4em]">Análise Financeira</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              Sobre <br />
              <span className="text-cyan-400">Faturas</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto p-8 lg:p-12 space-y-20 pb-24">
        
        {/* EXEMPLO 1 - PAGAMENTO TOTAL */}
        <section className="space-y-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter">Falando sobre Fatura</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed font-medium">
            "Vou mostrar alguns exemplos para esclarecer dúvidas frequentes. Vamos abordar a leitura da fatura e explicar cada item de forma clara e detalhada."
          </p>

          <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-all duration-700">
            <img 
              src="https://lh3.googleusercontent.com/sitesv/APaQ0SRuI8u_6IFXS6OsJwWBf5OCLfXlGAh5pmZ0x20Aahw2WpN_q-6uEWvy-KgdSdf_pVvcGsWtaACptwiBcd2Fyao2_RG5riIq3v3pDEcOtEjfoiDH4q8G56yHAgNGS2GV2vNP0niT-4o3JUjJmA2jSPKZtHxNnN7qAl-hHzo7-BFaQphM-_52N19RDUTHPkGD-SRjbac3gT1FENpvmL4oZdx-TNgg9CbC_UaX=w1280" 
              className="w-full h-auto" 
              alt="Exemplo Fatura 1" 
            />
            <div className="p-8 bg-black/40 backdrop-blur-md border-t border-white/5">
              <p className="text-slate-200 text-base italic leading-relaxed">
                "Na imagem acima podemos verificar que o cliente efetuou o pagamento do valor total da fatura passada, no caso <span className="text-white font-bold">R$703,21</span>. Esse valor está descrito nos créditos acima em vermelho."
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-xs font-black text-cyan-400 uppercase tracking-[0.3em]">Cálculo de Verificação</h3>
              <p className="text-xl font-bold text-white italic">Como sei que ele realmente pagou o total?</p>
            </div>
            <div className="bg-black/60 px-10 py-6 rounded-2xl border border-white/10 text-center">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Fórmula</p>
              <p className="text-white text-lg font-black tracking-widest uppercase">CRÉDITOS <span className="text-cyan-500">-</span> FATURA ANTERIOR <span className="text-emerald-500">=</span> ZERO</p>
              <p className="text-[9px] text-emerald-400 font-bold uppercase mt-2 italic">Se o resultado for zero, o pagamento foi TOTAL.</p>
            </div>
          </div>
        </section>

        {/* EXEMPLO 2 - REPROCESSAMENTO */}
        <section className="space-y-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-black italic text-white uppercase tracking-tight">Segundo Exemplo</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-all duration-700">
            <img 
              src="https://lh3.googleusercontent.com/sitesv/APaQ0STg8bUhrt06kzDUrL_8mIFRdCnDBsZs8bI98nh2cCnoZhGI3CTyaz6pDtzRAf2JrlipVhvpuXBS8hkmYGgLCe6U2EAxwH8vBclW0wxHZN8-iiSJi8bQHo0t0Pr1TD9t5lvEhPf5wM9SdxTTP6zOS7NnD22dU0RHZBMq8a0ND9eWVd6Qs6zkrROH_b9ho3o6EO4-VKaQ3cv4Y_EVAZDDi_eaSq0kVDI9Uyl4=w1280" 
              className="w-full h-auto" 
              alt="Exemplo Fatura 2" 
            />
            <div className="p-8 bg-black/40 backdrop-blur-md border-t border-white/5 space-y-4">
              <p className="text-slate-200 text-base italic leading-relaxed">
                "Neste exemplo, observamos que o valor da fatura anterior é superior ao total de créditos. A diferença entre os valores é: <span className="text-white font-bold">R$ 1.761,66 - R$ 1.200,00 = R$ 561,66</span>. Esse valor foi reprocessado e incluído na fatura atual."
              </p>
              <p className="text-slate-200 text-base italic leading-relaxed">
                "Assim, ao somarmos os R$ 561,66 com os R$ 1.328,19 (débitos do mês), obtemos o total de <span className="text-cyan-400 font-bold">R$ 1.889,85</span>, que corresponde ao saldo atual da fatura."
              </p>
            </div>
          </div>
        </section>

        {/* EXEMPLO 3 - CRÉDITO SOBRESSALENTE */}
        <section className="space-y-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-black italic text-white uppercase tracking-tight">Terceiro Exemplo</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-all duration-700">
            <img 
              src="https://lh3.googleusercontent.com/sitesv/APaQ0ST6xobH8QrLhp7_mBWizDA-W-YZkGkLLGSINKBKFPeAHPwLmLv66OZT7J2-SxL5aIAfx6DMwa8loRicS0Jls675d57BuuE04_sos_2Hu0oKcqBZ96D9ndWSmKMAkpvqNNwEL4PIQjwRmQjlqGbmBD1KoU27Nxsif827hlQPawIx9VUFC2cK6tYXWMQG3h77J4us3WnDJgPDOgDqIYVRaElf9YXKy_5qK3TeX1g=w1280" 
              className="w-full h-auto" 
              alt="Exemplo Fatura 3" 
            />
            <div className="p-8 bg-black/40 backdrop-blur-md border-t border-white/5 space-y-4">
              <p className="text-slate-200 text-base italic leading-relaxed">
                "No exemplo acima, vemos que o valor de créditos está diferente em relação à fatura anterior. Neste caso, o valor de créditos é maior do que o valor da fatura anterior. Fazendo a diferença entre os valores (R$ 419,58 - R$ 399,68), encontramos <span className="text-emerald-400 font-bold">R$ 19,90</span>. Esse valor representa o crédito restante da fatura anterior que foi transferido para a fatura atual."
              </p>
              <p className="text-slate-200 text-base italic leading-relaxed">
                "Agora, subtraímos esse valor restante (R$ 19,90) dos débitos do mês. A diferença entre R$ 80,46 e R$ 19,90 resulta em <span className="text-cyan-400 font-bold">R$ 60,56</span>, que é o saldo atual que a cliente deverá pagar."
              </p>
            </div>
          </div>
        </section>

        {/* RASTREIO DE CARTÃO */}
        <section className="space-y-10 pt-10">
          <div className="flex items-center space-x-6">
            <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter">Rastreio de Cartão</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                 <h3 className="text-xl font-black text-white italic uppercase tracking-tight">O Código de Rastreio</h3>
                 <p className="text-slate-400 text-sm font-medium">"Você já teve dúvidas sobre como ele funciona? A partir de hoje, isso não será mais um problema!"</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-600/10 border border-red-500/20 p-6 rounded-2xl flex items-start space-x-4">
                   <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0 animate-pulse"></div>
                   <div>
                     <p className="text-white font-black text-xs uppercase tracking-widest">Entrega não Efetuada</p>
                     <p className="text-slate-400 text-xs italic">Ciclo do cartão encerrado, solicite 2ª VIA.</p>
                   </div>
                </div>

                <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-2xl flex items-start space-x-4">
                   <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0 animate-pulse"></div>
                   <div>
                     <p className="text-white font-black text-xs uppercase tracking-widest">Aguardando Validação</p>
                     <p className="text-slate-400 text-xs italic">Cartão já está com a Bcard, solicite reenvio.</p>
                   </div>
                </div>

                <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center italic">
                  Qualquer outra informação: Peça para o cliente aguardar!
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
               <div className="group relative rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-all duration-700">
                  <img 
                    src="https://lh3.googleusercontent.com/sitesv/APaQ0SQcYp9UBJJI4i-0zjkOukpfStkeDdRaPiInbLgUEXg4yBht9cV5fBefabzYYv4l3PhwnPZUskBQmKaPNiUz9EEjIJ-IJfBJt3pe-zzmvcLdHjJjDxIHroZltMfRuiOA2rSUQ27XhysxNiG_R6MkdGWTkltdW-Ed-vK09qEVFwj7HDJwJ4Qk5KwoEbG9DnByBKLWXene0GabYEeF-HzxnsrYkrgL2EktulDJUzQ=w1280" 
                    className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" 
                    alt="Leitura Flash Rastreio" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                     <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Visualização Logística Flash</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-cyan-600/10 border border-cyan-500/20 p-12 rounded-[3rem] text-center space-y-4">
           <h3 className="text-2xl font-black italic text-white uppercase tracking-tight">Dúvidas?</h3>
           <p className="text-slate-400 font-medium">"Viu como é simples? Mas, se ainda restar alguma dúvida, é só chamar um monitor ou supervisor. Estamos aqui para te ajudar!"</p>
        </div>

      </div>
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default SobreFaturasView;
