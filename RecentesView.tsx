
import React from 'react';
import { APP_ITEMS, AppItem } from '../constants';

interface RecentesViewProps {
  onSelectGame?: (id: string) => void;
  mostVisitedItems?: (AppItem & { visits: number })[];
}

const RecentesView: React.FC<RecentesViewProps> = ({ onSelectGame, mostVisitedItems = [] }) => {
  const recentItems = mostVisitedItems.filter(item => item.visits > 0);

  return (
    <div className="flex-1 flex flex-col p-10 overflow-y-auto custom-scrollbar bg-slate-950">
      <header className="mb-12">
        <h1 className="text-4xl font-black italic tracking-tighter text-white uppercase leading-none">RECENTES</h1>
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500 mt-2">Histórico de Acessos Operacionais</p>
      </header>

      {recentItems.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-slate-600 space-y-4">
           <div className="w-20 h-20 rounded-full border-2 border-dashed border-slate-800 flex items-center justify-center">
              <svg className="w-8 h-8 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
           </div>
           <p className="font-bold tracking-widest uppercase text-xs">Nenhum acesso registrado ainda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-12">
          {recentItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectGame?.(item.id)}
              className="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 border border-white/5 hover:border-blue-500/50 hover:scale-[1.03] shadow-2xl"
            >
              <img 
                src={item.image} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" 
                alt={item.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 flex flex-col justify-end">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-[8px] font-black uppercase tracking-widest text-blue-400">{item.tag}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                  <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">{item.visits} Visitas</span>
                </div>
                <h3 className="text-lg font-black text-white italic tracking-tighter uppercase leading-tight group-hover:text-blue-200 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentesView;
