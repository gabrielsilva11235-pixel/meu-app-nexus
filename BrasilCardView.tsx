
import React from 'react';

interface BrasilCardViewProps {
  onBack: () => void;
}

const BrasilCardView: React.FC<BrasilCardViewProps> = ({ onBack }) => {
  return (
    <div className="flex-1 flex flex-col bg-[#0b1119] overflow-y-auto animate-in fade-in zoom-in-95 duration-500 scroll-smooth">
      {/* Header / Hero Area */}
      <div className="relative h-72 w-full bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 shrink-0">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 p-12 flex flex-col justify-end max-w-7xl mx-auto w-full">
          <button 
            onClick={onBack}
            className="absolute top-8 left-8 flex items-center space-x-3 text-white/70 hover:text-white transition-all group z-20 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10"
          >
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/20 group-hover:bg-blue-500/40 transition-colors">←</span>
            <span className="font-bold text-xs tracking-[0.2em] uppercase">Voltar ao Menu</span>
          </button>
          <h1 className="text-7xl font-black tracking-tighter italic drop-shadow-2xl animate-in slide-in-from-left-8 duration-700">BrasilCard</h1>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-12 space-y-20">
        {/* Main Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in slide-in-from-left-12 duration-700">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">Institucional</div>
            <h2 className="text-4xl font-black text-white leading-tight">Sobre a BrasilCard</h2>
            <p className="text-slate-300 leading-relaxed text-xl">
              A BrasilCard é uma empresa Administradora de Cartões que se faz presente em todos os Estados do país, 
              trabalhando com os mais diversos ramos de atividades que, variam desde farmácias, supermercados, 
              confecções, materiais de construção etc.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg">
              Acompanhando sempre o mercado e inovando com seus produtos e serviços, a BrasilCard foi a primeira 
              empresa administradora de cartões a oferecer aos lojistas e clientes a modalidade de 
              <strong> APROVAÇÃO AUTOMÁTICA DE CLIENTES</strong>.
            </p>
            <div className="bg-blue-600/20 border-l-4 border-blue-500 p-6 rounded-r-2xl">
              <p className="text-base italic text-blue-200">
                Vantagem de sobra para o credenciado que só tende a atrair clientes para sua loja, oferecendo mais 
                comodidade e praticidade na liberação dos cadastros que, aliados à tecnologia, garantem a aprovação 
                mais rápida do Brasil!
              </p>
            </div>
          </div>
          
          {/* Main Card Image */}
          <div className="relative group perspective-1000">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-[2.5rem] blur-3xl group-hover:bg-blue-500/20 transition-all duration-1000"></div>
            <div className="relative aspect-[1.6/1] bg-gradient-to-br from-white/5 to-white/[0.02] rounded-[2rem] border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl backdrop-blur-sm">
              <img 
                src="https://www.brasilcarddigital.com.br/images/card.png" 
                className="w-4/5 h-4/5 object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] group-hover:scale-110 group-hover:rotate-2 transition-all duration-1000" 
                alt="Cartão BrasilCard Oficial"
              />
            </div>
          </div>
        </section>

        {/* Products Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-slate-900/40 p-10 rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors"></div>
            <h3 className="text-2xl font-black mb-8 flex items-center text-white">
              <span className="w-1.5 h-8 bg-blue-600 mr-5 rounded-full shadow-[0_0_15px_#2563eb]"></span>
              Private / Visa
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-blue-400 font-black text-sm uppercase tracking-widest mb-3">Private</h4>
                <p className="text-slate-400 leading-relaxed font-medium">
                  Você pode continuar com o seu cartão BrasilCard Fidelidade, aquele que você usa na farmácia, 
                  na padaria, supermercados e lojas da sua cidade.
                </p>
              </div>
              <div className="pt-8 border-t border-white/5">
                <h4 className="text-indigo-400 font-black text-sm uppercase tracking-widest mb-3">BrasilCard Digital</h4>
                <p className="text-slate-400 leading-relaxed font-medium">
                  E agora, pode solicitar também o seu novo <strong>BRASILCARD VISA</strong>. 
                  Um cartão com múltiplas possibilidades para você realizar novas conquistas.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/40 p-10 rounded-[2rem] border border-white/5 hover:border-indigo-500/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl -z-10 group-hover:bg-indigo-500/10 transition-colors"></div>
            <h3 className="text-2xl font-black mb-8 flex items-center text-white">
              <span className="w-1.5 h-8 bg-indigo-600 mr-5 rounded-full shadow-[0_0_15px_#4f46e5]"></span>
              APP
            </h3>
            <p className="text-indigo-400 font-bold mb-6">O app é a sua conta digital: Brasilcard Digital</p>
            <ul className="grid grid-cols-1 gap-4">
              {[
                'Faça Pix e TED',
                'Realize saques',
                'Pague boletos',
                'Controle saldo e limites',
                'Pague sua fatura'
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.04] transition-colors">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]"></div>
                  <span className="text-sm font-bold text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stretched CTA Section with Original Text */}
        <section className="w-full relative group">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="relative w-full bg-[#111827] rounded-[3rem] border border-white/10 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
              
              {/* Text Side */}
              <div className="lg:col-span-7 p-12 lg:p-20 flex flex-col justify-center space-y-10">
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                  <p className="text-3xl font-bold leading-relaxed text-white tracking-tight italic">
                    Que tal um cartão de crédito sem burocracia, de fácil aprovação e com todas as facilidades da bandeira Visa? 
                    Ah, e ainda vem com uma conta digital pra facilitar sua vida.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-6 items-center">
                  <button className="group/btn relative bg-white hover:bg-blue-50 text-blue-900 px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)] hover:-translate-y-1 active:scale-95">
                    <span className="relative z-10 flex items-center space-x-4">
                      <span>Peça já o seu!</span>
                      <svg className="w-7 h-7 transform group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                  <p className="text-slate-500 font-black text-xs uppercase tracking-widest hidden sm:block">Aprovação imediata*</p>
                </div>
              </div>

              {/* Image Side - Full Format Showcase */}
              <div className="lg:col-span-5 relative bg-gradient-to-br from-blue-900/20 to-indigo-900/10 flex items-center justify-center p-12 lg:p-16 border-l border-white/5">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
                </div>
                
                <div className="relative w-full aspect-square max-w-[400px] animate-float">
                  <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full animate-pulse-slow"></div>
                  <div className="relative w-full h-full p-8 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden group-hover:border-white/40 transition-all duration-700">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhXelhFyQKzoZ3yW9VJOIMHn92SZ-uGn9Rw&s" 
                      alt="App Showcase"
                      className="w-full h-full object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] transform scale-125 group-hover:scale-135 transition-transform duration-1000"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Footer Contact */}
        <footer className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 pb-16">
          <div className="space-y-4 text-center md:text-left">
            <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">Site Oficial</p>
            <div className="flex items-center space-x-6">
              <img src="https://www.brasilcarddigital.com.br/images/card.png" className="h-8 opacity-50 grayscale hover:grayscale-0 transition-all" alt="Mini Card" />
              <button className="text-2xl font-black text-white hover:text-blue-500 transition-colors tracking-tighter">
                APP Brasilcard digital
              </button>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4">
             <div className="bg-blue-600 px-10 py-8 rounded-[2rem] shadow-2xl shadow-blue-600/30 text-center hover:bg-blue-500 transition-all cursor-pointer transform hover:-translate-y-2">
                <p className="text-blue-100 text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-80">Central de Atendimento Visa</p>
                <p className="text-3xl font-black text-white">(35) 3573-2600</p>
             </div>
             <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Disponível para você em todo o país</p>
          </div>
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}} />
    </div>
  );
};

export default BrasilCardView;
