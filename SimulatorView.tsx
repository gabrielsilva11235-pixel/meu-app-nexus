
import React, { useState } from 'react';

const SimulatorView: React.FC = () => {
  const [amount, setAmount] = useState(1500);
  const [installments, setInstallments] = useState(12);

  const monthlyRate = 0.045; // 4.5% interest
  const total = amount * Math.pow(1 + monthlyRate, installments);
  const monthly = total / installments;

  return (
    <div className="flex-1 p-10 flex flex-col overflow-y-auto animate-in fade-in zoom-in-95 duration-500 bg-[#0d131b] custom-scrollbar">
      <div className="max-w-5xl mx-auto w-full space-y-12">
        <div className="flex items-center justify-between border-b border-white/10 pb-8">
          <div>
            <h1 className="text-4xl font-black italic tracking-tighter text-amber-500">SIMULADOR</h1>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mt-2">Simule seu limite e parcelas BrasilCard</p>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8 bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md">
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Valor do Crédito</label>
                <span className="text-2xl font-black text-amber-400">R$ {amount.toLocaleString()}</span>
              </div>
              <input 
                type="range" min="500" max="10000" step="100" 
                value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-slate-600 font-bold uppercase tracking-wider">
                <span>R$ 500</span>
                <span>R$ 10.000</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Parcelas</label>
                <span className="text-2xl font-black text-amber-400">{installments}x</span>
              </div>
              <input 
                type="range" min="1" max="24" step="1" 
                value={installments} onChange={(e) => setInstallments(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-slate-600 font-bold uppercase tracking-wider">
                <span>1 mês</span>
                <span>24 meses</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-amber-900 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-200 opacity-60">Estimativa de Parcela</span>
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold text-amber-200">R$</span>
                <span className="text-7xl font-black italic tracking-tighter text-white">{monthly.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-white/10">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-amber-200/60 uppercase tracking-wider">Total a pagar:</span>
                <span className="text-white">R$ {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <button className="w-full bg-white text-amber-900 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl">
                Contratar Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulatorView;
