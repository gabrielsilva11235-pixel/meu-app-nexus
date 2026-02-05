
import React from 'react';

const DigitalAccountView: React.FC = () => {
  const operations = [
    { id: 1, label: 'Pix', icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: 'indigo' },
    { id: 2, label: 'Pagar', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', color: 'violet' },
    { id: 3, label: 'Transferir', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', color: 'purple' },
    { id: 4, label: 'Cartões', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', color: 'fuchsia' },
  ];

  return (
    <div className="flex-1 p-10 flex flex-col overflow-y-auto animate-in fade-in slide-in-from-right-8 duration-500 bg-[#0d131b] custom-scrollbar">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-10">
          <div>
            <h1 className="text-4xl font-black italic tracking-tighter text-indigo-500 uppercase">Conta Digital</h1>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mt-2">Gestão financeira integrada BrasilCard</p>
          </div>
          <div className="bg-indigo-600/10 border border-indigo-500/20 px-8 py-4 rounded-[2rem] flex items-center space-x-6 backdrop-blur-md">
            <div>
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block mb-1">Saldo Disponível</span>
              <span className="text-2xl font-black tracking-tight italic">R$ 1.240,50</span>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-500 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg shadow-indigo-600/20">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </button>
          </div>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {operations.map((op) => (
            <button key={op.id} className="group relative bg-white/5 border border-white/5 p-8 rounded-[2.5rem] flex flex-col items-center justify-center space-y-4 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300">
               <div className={`w-16 h-16 rounded-[1.5rem] bg-${op.color}-500/10 border border-${op.color}-500/20 flex items-center justify-center text-${op.color}-400 group-hover:scale-110 transition-transform`}>
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={op.icon} /></svg>
               </div>
               <span className="text-xs font-black uppercase tracking-[0.2em]">{op.label}</span>
            </button>
          ))}
        </div>

        <section className="bg-slate-900/50 rounded-[3rem] border border-white/5 p-10 overflow-hidden relative">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500"></div>
           <h2 className="text-sm font-black text-slate-500 uppercase tracking-[0.4em] mb-8 italic">Atividade Recente</h2>
           <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-black/20 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="font-bold text-sm tracking-tight">Compra no Crédito - Supermercado</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Ontem às 14:20</p>
                    </div>
                  </div>
                  <span className="text-sm font-black text-white">- R$ 156,00</span>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default DigitalAccountView;
