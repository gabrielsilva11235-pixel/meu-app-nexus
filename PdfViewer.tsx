
import React, { useState, useEffect } from 'react';

interface PdfViewerProps {
  url: string;
  title: string;
  onClose: () => void;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ url, title, onClose }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Tratamento especial para links do Google Drive para garantir que funcionem em iframes
  const getEmbedUrl = (link: string) => {
    if (link.includes('drive.google.com')) {
      if (link.includes('/view')) return link.replace('/view', '/preview');
      if (link.includes('?id=')) {
        const id = link.split('id=')[1].split('&')[0];
        return `https://drive.google.com/file/d/${id}/preview`;
      }
    }
    return link;
  };

  const embedUrl = getEmbedUrl(url);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Backspace') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[2500] bg-[#0b0f1a] flex flex-col animate-in fade-in duration-500">
      {/* Top Bar */}
      <header className="h-20 border-b border-white/10 flex items-center justify-between px-10 bg-black/40 backdrop-blur-xl shrink-0">
        <div className="flex items-center space-x-6">
          <button 
            onClick={onClose}
            className="group flex items-center space-x-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-2xl transition-all border border-white/5"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-black text-[10px] tracking-widest uppercase">Voltar</span>
          </button>
          <div>
            <h2 className="text-xl font-black italic tracking-tighter text-white uppercase truncate max-w-md">{title}</h2>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
              <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.3em]">Visualizador de Documento PDF Oficial</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[9px] font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 flex items-center space-x-2"
          >
            <span>Nova Aba</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </header>

      {/* Viewport */}
      <div className="flex-1 bg-[#111318] relative overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 z-0">
            <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] animate-pulse">Carregando Painel de Leitura...</p>
          </div>
        )}
        
        <iframe 
          src={embedUrl}
          className={`w-full h-full border-0 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          title="Document Viewer"
        />

        {/* Scroll Hint */}
        <div className="absolute bottom-8 right-8 pointer-events-none opacity-50">
           <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[7px] font-black text-white uppercase tracking-widest">
             Scroll habilitado no painel
           </div>
        </div>
      </div>

      {/* Footer Controls (Gamepad Style) */}
      <footer className="h-14 border-t border-white/5 bg-black/40 flex items-center justify-between px-10 shrink-0">
        <div className="flex items-center space-x-8">
           <div className="flex items-center space-x-2">
             <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white text-black text-[9px] font-black">B</span>
             <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Fechar Painel</span>
           </div>
           <div className="flex items-center space-x-2">
             <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white text-[9px] font-black">Y</span>
             <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Opções de Impressão</span>
           </div>
        </div>
        <span className="text-[8px] font-black text-slate-600 uppercase tracking-[0.4em] italic">Segurança BrasilCard - Protocolo de Criptografia Ativo</span>
      </footer>
    </div>
  );
};

export default PdfViewer;
