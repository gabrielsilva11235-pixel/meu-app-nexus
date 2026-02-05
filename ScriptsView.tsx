
import React from 'react';

interface ScriptsViewProps {
  onBack: () => void;
}

const ScriptsView: React.FC<ScriptsViewProps> = ({ onBack }) => {
  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header */}
      <div className="relative h-[300px] w-full bg-gradient-to-br from-indigo-600 via-slate-900 to-black shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_70%)]"></div>
        
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
            <div className="inline-flex items-center space-x-2 bg-indigo-500/20 border border-indigo-500/40 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
              <span className="text-indigo-200 text-[10px] font-black uppercase tracking-[0.4em]">Roteiros de Atendimento</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              SCRIPTS <br />
              <span className="text-indigo-400">Operacionais</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto p-8 lg:p-12 space-y-12 pb-24">
        
        {/* SCRIPT DE CANCELAMENTO / ARGUMENTAÇÃO */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black italic text-white uppercase tracking-tight flex items-center">
            <span className="w-1.5 h-8 bg-indigo-600 mr-4 rounded-full"></span>
            Script de Cancelamento
          </h2>
          
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 space-y-8 backdrop-blur-md">
            <div className="space-y-4">
              <h3 className="text-sm font-black text-indigo-400 uppercase tracking-widest">Argumentação Geral</h3>
              <p className="text-slate-300 text-lg leading-relaxed font-medium italic">
                "Com o cartão BrasilCard VISA e a conta digital, você tem mais liberdade e praticidade. Seu cartão é aceito em todos os lugares, possui a segurança do cartão virtual para compras online, e você pode comprar no Brasil e no exterior sem preocupações."
              </p>
              <p className="text-slate-300 text-lg leading-relaxed font-medium italic">
                "A sua conta digital permite transferências PIX e TED, saques e pagamento de boletos e de faturas. Além disso, você realiza recarga de celular pelo aplicativo BrasilCard Digital."
              </p>
            </div>

            <div className="h-px bg-white/5"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/40 p-8 rounded-3xl border border-white/5 space-y-4">
                <h4 className="text-xs font-black text-red-400 uppercase tracking-widest">Tipos de Cancelamento</h4>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shrink-0"></div>
                    <p className="text-slate-300"><span className="text-white font-bold">Cancelado CLIENTE:</span> Cancelamento definitivo de Cartão e Conta. (SEM DÉBITO)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shrink-0"></div>
                    <p className="text-slate-300"><span className="text-white font-bold">Cancelado TARJA:</span> Cancelamento definitivo de Cartão e Conta. (COM DÉBITO)</p>
                  </div>
                  <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-[11px] font-bold text-amber-200 italic">
                    Obs: Lembrando sempre de pedir no ato do cancelamento a retirada de qualquer valor e chave PIX que ele tenha em conta.
                  </div>
                </div>
              </div>

              <div className="bg-black/40 p-8 rounded-3xl border border-white/5 space-y-4">
                <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest">Geração de 2ª Via</h4>
                <p className="text-white font-bold text-sm italic">Cancelado TARJA: Quando há necessidade de gerar 2ª via.</p>
                <ul className="space-y-3 text-xs text-slate-400 font-medium">
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">•</span>
                    <span>Cancelamento SOMENTE do cartão de crédito.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">•</span>
                    <span>Perda, Roubo e Contestação SOMENTE cartão que teve a compra.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* QUESTÕES FREQUENTES */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 space-y-4 group hover:border-blue-500/30 transition-all">
            <h3 className="text-xs font-black text-blue-400 uppercase tracking-[0.3em]">Cliente Questiona sobre UCC</h3>
            <p className="text-slate-200 text-lg italic font-medium leading-relaxed">
              "Lembre-se que a taxa de utilização só é cobrada quando o cartão é utilizado. Por isso, você pode deixar o seu cartão bloqueado, e nenhuma tarifa será cobrada."
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 space-y-4 group hover:border-emerald-500/30 transition-all">
            <h3 className="text-xs font-black text-emerald-400 uppercase tracking-[0.3em]">Cliente Questiona sobre Limite</h3>
            <p className="text-slate-200 text-lg italic font-medium leading-relaxed">
              "Quanto mais você utiliza seu cartão, mais seu limite pode aumentar, e isso de forma automática. Mas enquanto espera, você pode solicitar o aumento de limite pelo aplicativo."
            </p>
          </div>
        </section>

        {/* FRASEOLOGIAS DE ATENDIMENTO */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black italic text-white uppercase tracking-tight flex items-center">
            <span className="w-1.5 h-8 bg-amber-500 mr-4 rounded-full"></span>
            Fraseologias de Atendimento
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {/* Score Baixo */}
            <div className="bg-black/40 border border-white/5 rounded-[2rem] p-8 space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 blur-2xl group-hover:bg-amber-500/10 transition-colors"></div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-400 text-[9px] font-black uppercase tracking-widest">Score Baixo</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest italic">Verificar antes de usar</span>
              </div>
              <p className="text-white text-xl italic font-medium leading-relaxed">
                "Senhor(a), sua conta está passando por uma análise interna para liberação, mas não se preocupe, estamos trabalhando para resolver. Vamos abrir uma solicitação ao setor responsável e assim eles entrarão em contato com você para resolver."
              </p>
            </div>

            {/* Já possui solicitação */}
            <div className="bg-black/40 border border-white/5 rounded-[2rem] p-8 space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
              <span className="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-400 text-[9px] font-black uppercase tracking-widest inline-block mb-2">Solicitação em Aberto</span>
              <p className="text-white text-xl italic font-medium leading-relaxed">
                "Verifiquei que já consta uma solicitação em aberto, peço que aguarde, que em breve será atendida."
              </p>
            </div>

            {/* Demora na solução */}
            <div className="bg-red-950/20 border border-red-500/20 rounded-[2.5rem] p-10 space-y-6 relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-600/10 blur-[60px] rounded-full group-hover:bg-red-600/20 transition-all"></div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-black text-white uppercase italic tracking-tight">Solicitação com Muito Tempo</h4>
                  <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">Protocolo de Prioridade</p>
                </div>
              </div>
              <p className="text-white text-2xl italic font-medium leading-relaxed relative z-10">
                "Senhor(a), peço desculpas em nome da BrasilCard VISA. Identifiquei que já consta uma solicitação em aberto. Nesse caso, vou encaminhar seus dados para meus superiores, para solicitar prioridade para que seja resolvido o mais rápido possível."
              </p>
              <div className="flex items-center space-x-3 pt-4 border-t border-red-500/20">
                 <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                 <p className="text-[11px] font-bold text-red-300 uppercase tracking-wider italic">
                   Sinalize ao supervisor sobre a insatisfação do cliente para que o caso seja atendido mais rápido.
                 </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ScriptsView;
