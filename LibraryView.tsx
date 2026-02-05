
import React, { useState } from 'react';
import { AppItem } from '../constants';

interface LibraryViewProps {
  items: AppItem[];
  onSelectGame?: (id: string) => void;
  onPreviewImage?: (url: string, title: string) => void;
  initialCategory?: string;
}

const LibraryView: React.FC<LibraryViewProps> = ({ 
  items,
  onSelectGame, 
  onPreviewImage
}) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);

  return (
    <main className="flex-1 p-10 overflow-y-auto custom-scrollbar bg-gradient-to-br from-slate-900/50 to-transparent">
      <header className="mb-12">
        <h1 className="text-4xl font-black italic tracking-tighter text-white uppercase leading-none">PÁGINAS</h1>
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500 mt-2">Documentos, Manuais e Procedimentos</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
        {items.map((item, index) => (
          <div
            key={item.id}
            onClick={() => onSelectGame?.(item.id)}
            onMouseEnter={() => setFocusedIndex(index)}
            onMouseLeave={() => setFocusedIndex(-1)}
            className={`group relative aspect-video rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 border bg-slate-900 ${
              focusedIndex === index 
                ? 'ring-4 ring-blue-500/40 scale-[1.03] border-blue-500/50 shadow-[0_30px_60px_-15px_rgba(59,130,246,0.3)] z-10' 
                : 'border-white/5 opacity-100'
            }`}
          >
            <img 
              src={item.image} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt={item.title} 
              onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&h=600'; }}
            />
            {/* Overlay: Começa quase transparente (brilhante) e fica fosco (escuro) no hover */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/70 p-8 flex flex-col items-center justify-center text-center transition-all duration-500">
              <div className={`flex items-center justify-center space-x-2 mb-3 transition-opacity duration-500 ${focusedIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_#3b82f6]"></span>
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-300">{item.tag}</span>
              </div>
              
              {/* Título com sombra para ser visível mesmo na imagem brilhante */}
              <h3 className={`text-xl font-black text-white uppercase italic tracking-tighter leading-tight transition-all duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] ${focusedIndex === index ? 'scale-105' : 'scale-100'}`}>
                {item.title}
              </h3>
              
              {/* Descrição: Aparece apenas quando o fundo fica fosco */}
              <p className={`text-[10px] text-white mt-3 font-bold transition-all duration-500 max-w-[85%] drop-shadow-[0_1px_4px_rgba(0,0,0,1)] ${focusedIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                {item.description}
              </p>
              
              {/* Indicador visual de seleção ao centro */}
              {focusedIndex === index && (
                <div className="mt-5 w-10 h-1 bg-blue-500 rounded-full animate-in zoom-in duration-300 shadow-[0_0_10px_#3b82f6]"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default LibraryView;
