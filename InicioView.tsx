
import React, { useState, useEffect } from 'react';
import { AppItem } from '../constants';

interface InicioViewProps {
  onSelectGame?: (id: string) => void;
  onConsultarCrediario?: () => void;
  mostVisitedItems?: (AppItem & { visits: number })[];
  unreadCount?: number;
}

const InicioView: React.FC<InicioViewProps> = ({ onSelectGame, onConsultarCrediario, mostVisitedItems = [], unreadCount = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoSource = "https://drive.google.com/uc?id=1R6TTldVErFmYNL53RD9aSJzRCer8ik7W";

  // Exibe todas as páginas na lista conforme solicitado
  const featuredItems = mostVisitedItems;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (!isPaused && featuredItems.length > 0) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveIndex((idx) => (idx + 1) % featuredItems.length);
            return 0;
          }
          return prev + (100 / (7000 / 100));
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPaused, featuredItems.length]);

  const activeItem = featuredItems[activeIndex];

  if (featuredItems.length === 0) return null;

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-slate-950 h-full">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30">
          <source src={videoSource} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1119] via-[#0b1119]/60 to-black/80"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col p-6 lg:p-10 overflow-y-auto custom-scrollbar">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black italic tracking-tighter text-white uppercase leading-none">EM DESTAQUE</h1>
            <p className="text-[8px] font-black uppercase tracking-[0.6em] text-blue-400 mt-1">NexusDeck Premium Gallery</p>
          </div>
          
          <div className="relative">
            {unreadCount > 0 && (
              <div className="absolute -top-3 -right-3 z-50 animate-success-pop">
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-30"></div>
                <div className="relative bg-gradient-to-br from-red-500 to-red-700 text-white text-[11px] font-black w-7 h-7 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.6)] border-2 border-white/20">
                  {unreadCount}
                </div>
              </div>
            )}

            <button 
              onClick={onConsultarCrediario}
              className="bg-blue-600/20 hover:bg-blue-600/40 pl-4 pr-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-blue-500/50 transition-all backdrop-blur-xl text-white shadow-2xl flex items-center space-x-4"
            >
              <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 20l-7-7m0 0l-7 7m7-7V3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Ver Informativos</span>
            </button>
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-[7fr,3fr] gap-6 mb-12 items-stretch">
          <div className="relative min-h-[350px] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl border border-white/5 bg-slate-900 transition-all duration-500" onClick={() => onSelectGame?.(activeItem.id)}>
            <div className="absolute inset-0 z-0"><img src={activeItem.image} className="w-full h-full object-cover opacity-30 blur-2xl scale-125" alt="" /><div className="absolute inset-0 bg-black/40"></div></div>
            <img src={activeItem.image} className="relative z-10 w-full h-full object-contain transition-all duration-1000 group-hover:scale-105" alt={activeItem.title} />
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-10 lg:p-14 flex flex-col justify-end">
              <div className="max-w-2xl">
                <div className="flex items-center space-x-3 mb-4"><span className="text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-lg bg-blue-600 text-white">{activeItem.tag}</span></div>
                <h2 className="text-2xl lg:text-4xl font-black mb-3 tracking-tighter italic text-white uppercase leading-tight">{activeItem.title}</h2>
                <button className="bg-white text-black px-8 py-3.5 rounded-2xl font-black text-[9px] tracking-widest uppercase hover:bg-blue-50 transition-all shadow-xl">Abrir Agora</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 h-full overflow-y-auto custom-scrollbar lg:max-h-[calc(70vh)] pr-2">
            {featuredItems.map((item, idx) => (
              <button key={item.id} onClick={() => { setActiveIndex(idx); setProgress(0); setIsPaused(true); }} className={`relative flex items-center w-full p-4 lg:p-5 rounded-[1.8rem] transition-all text-left border overflow-hidden shrink-0 ${activeIndex === idx ? 'bg-blue-600/10 border-blue-500 shadow-lg' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}>
                {activeIndex === idx && <div className="absolute inset-0 bg-blue-500/10 transition-all duration-100 pointer-events-none" style={{ width: `${progress}%` }} />}
                <div className="w-16 h-20 overflow-hidden shrink-0 mr-6 bg-transparent"><img src={item.image} className="relative z-10 w-full h-full object-contain" alt={item.title} /></div>
                <div className="flex-1 relative z-10 min-w-0"><h4 className={`text-[10px] lg:text-[11px] font-black uppercase tracking-tight truncate mb-1 ${activeIndex === idx ? 'text-white' : 'text-slate-400'}`}>{item.title}</h4></div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default InicioView;
