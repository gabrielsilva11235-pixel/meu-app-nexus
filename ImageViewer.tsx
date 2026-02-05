
import React, { useState, useEffect } from 'react';

interface ImageViewerProps {
  src: string;
  title: string;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ src, title, onClose }) => {
  const [zoom, setZoom] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Backspace') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col animate-in fade-in duration-300">
      {/* Top Bar */}
      <header className="h-20 border-b border-white/10 flex items-center justify-between px-10 bg-black/40">
        <div className="flex items-center space-x-6">
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all active:scale-90"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h2 className="text-xl font-black italic tracking-tighter text-white uppercase">{title}</h2>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Visualizador de Documentos .PNG</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex bg-white/5 rounded-xl p-1 border border-white/10">
            <button 
              onClick={() => setZoom(prev => Math.max(0.5, prev - 0.25))}
              className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors text-white font-bold"
            >
              -
            </button>
            <div className="px-4 py-2 text-xs font-black text-blue-400 flex items-center min-w-[80px] justify-center">
              {Math.round(zoom * 100)}%
            </div>
            <button 
              onClick={() => setZoom(prev => Math.min(3, prev + 0.25))}
              className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors text-white font-bold"
            >
              +
            </button>
          </div>
          <button 
            onClick={() => setZoom(1)}
            className="px-6 py-2 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all"
          >
            Resetar
          </button>
        </div>
      </header>

      {/* Image Area */}
      <div className="flex-1 overflow-auto flex items-center justify-center p-12 custom-scrollbar">
        <div className="relative group">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img 
            src={src} 
            alt={title}
            onLoad={() => setIsLoaded(true)}
            style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s ease-out' }}
            className={`max-w-full max-h-[80vh] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] rounded-lg transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>

      {/* Footer Hints */}
      <footer className="h-16 border-t border-white/10 bg-black/60 flex items-center justify-center space-x-12">
        <div className="flex items-center space-x-3">
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-black text-[10px] font-black">B</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fechar Visualizador</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <span className="w-8 h-5 flex items-center justify-center rounded bg-white/10 border border-white/20 text-[8px] font-black">LT</span>
            <span className="w-8 h-5 flex items-center justify-center rounded bg-white/10 border border-white/20 text-[8px] font-black">RT</span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Zoom In/Out</span>
        </div>
      </footer>
    </div>
  );
};

export default ImageViewer;
