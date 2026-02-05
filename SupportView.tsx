
import React from 'react';

const SupportView: React.FC = () => {
  const faqs = [
    { q: 'Como solicito a segunda via do cartão?', icon: 'M12 4v16m8-8H4' },
    { q: 'Esqueci minha senha, o que fazer?', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    { q: 'Qual o limite inicial do meu cartão?', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { q: 'Onde pago minha fatura BrasilCard?', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
  ];

  return (
    <div className="flex-1 p-10 flex flex-col overflow-y-auto animate-in fade-in duration-500 bg-[#0d131b] custom-scrollbar">
      <div className="max-w-4xl mx-auto w-full space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-black italic tracking-tighter text-teal-400 uppercase">Suporte</h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-xs">Estamos aqui para ajudar você</p>
          <div className="relative max-w-2xl mx-auto mt-10">
            <svg className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input 
              type="text" 
              placeholder="Qual sua dúvida hoje?" 
              className="w-full bg-white/5 border border-white/10 rounded-[2rem] py-6 pl-16 pr-8 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all placeholder:text-slate-600 shadow-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <button key={i} className="flex items-center space-x-6 p-8 bg-slate-900/40 border border-white/5 rounded-3xl hover:bg-teal-500/10 hover:border-teal-500/30 transition-all group text-left">
               <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={faq.icon} /></svg>
               </div>
               <span className="flex-1 font-bold text-slate-300 group-hover:text-white transition-colors">{faq.q}</span>
               <svg className="w-5 h-5 text-slate-700 group-hover:text-teal-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 pt-10">
           <button className="flex flex-col items-center p-8 bg-black/20 rounded-[2rem] border border-white/5 hover:bg-white/5 transition-all space-y-4">
              <div className="text-teal-400 font-black text-xl italic tracking-tighter">CHAT</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Online Agora</span>
           </button>
           <button className="flex flex-col items-center p-8 bg-black/20 rounded-[2rem] border border-white/5 hover:bg-white/5 transition-all space-y-4">
              <div className="text-teal-400 font-black text-xl italic tracking-tighter">EMAIL</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Resposta 24h</span>
           </button>
           <button className="flex flex-col items-center p-8 bg-black/20 rounded-[2rem] border border-white/5 hover:bg-white/5 transition-all space-y-4">
              <div className="text-teal-400 font-black text-xl italic tracking-tighter">LIGAR</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">0800 Gratuitamente</span>
           </button>
        </div>
      </div>
    </div>
  );
};

export default SupportView;
