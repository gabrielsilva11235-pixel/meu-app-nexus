
import React from 'react';

const BenefitsView: React.FC = () => {
  const rewards = [
    { title: 'Farmácias', desc: 'Até 40% OFF em genéricos', color: 'rose', img: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=400&h=200' },
    { title: 'Cinemas', desc: 'Meia entrada garantida', color: 'pink', img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=400&h=200' },
    { title: 'Supermercados', desc: 'Cashback de 5% em redes parceiras', color: 'fuchsia', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400&h=200' },
    { title: 'Viagens', desc: 'Acumule pontos 2x mais rápido', color: 'purple', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=400&h=200' },
  ];

  return (
    <div className="flex-1 p-10 flex flex-col overflow-y-auto animate-in fade-in duration-700 bg-[#0d131b] custom-scrollbar">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl font-black italic tracking-tighter text-rose-500 uppercase">Clube de Vantagens</h1>
          <div className="h-1 w-24 bg-rose-500 rounded-full"></div>
          <p className="text-slate-400 font-bold text-lg max-w-2xl italic leading-tight">Exclusividades que só quem tem BrasilCard aproveita. Explore seus benefícios ativos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rewards.map((reward, i) => (
            <div key={i} className="group relative h-64 rounded-[2.5rem] overflow-hidden border border-white/5 bg-slate-900 shadow-2xl hover:border-rose-500/30 transition-all duration-500">
               <img src={reward.img} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 group-hover:opacity-50 transition-all duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0d131b] via-[#0d131b]/40 to-transparent p-10 flex flex-col justify-end">
                  <span className={`text-[10px] font-black uppercase tracking-[0.4em] text-${reward.color}-400 mb-2`}>{reward.title}</span>
                  <h3 className="text-2xl font-black italic text-white leading-tight">{reward.desc}</h3>
                  <div className="mt-6 flex space-x-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    <button className="bg-rose-600 text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">Ativar Cupom</button>
                    <button className="bg-white/10 text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest backdrop-blur-md">Saiba Mais</button>
                  </div>
               </div>
            </div>
          ))}
        </div>

        <div className="bg-rose-600/10 border border-rose-500/20 p-12 rounded-[3rem] text-center space-y-6 relative overflow-hidden">
           <div className="absolute -top-12 -right-12 w-48 h-48 bg-rose-500/10 blur-[60px] rounded-full"></div>
           <h2 className="text-3xl font-black italic tracking-tighter text-white">Próximo Nível: BrasilCard Prime</h2>
           <p className="text-rose-200/60 font-medium max-w-xl mx-auto">Em breve, um novo programa de fidelidade com benefícios ainda maiores para clientes selecionados. Fique atento às notificações!</p>
           <button className="bg-rose-500 text-white px-12 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl">Entrar na Lista de Espera</button>
        </div>
      </div>
    </div>
  );
};

export default BenefitsView;
