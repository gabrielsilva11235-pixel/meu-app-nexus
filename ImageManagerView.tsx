
import React, { useState } from 'react';
import { AppItem } from '../constants';

interface ImageManagerViewProps {
  items: AppItem[];
  onUpdateImage: (id: string, newUrl: string) => void;
  onResetAll: () => void;
  onBack: () => void;
  onNotify: (title: string, message: string, type: 'info' | 'warning' | 'success') => void;
}

const ImageManagerView: React.FC<ImageManagerViewProps> = ({ 
  items, 
  onUpdateImage, 
  onResetAll, 
  onBack,
  onNotify 
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempUrl, setTempUrl] = useState('');

  // Função para converter links do Drive ou validar extensões de imagem
  const transformImageUrl = (url: string): string => {
    let cleanUrl = url.trim();
    
    // Suporte para conversão de links do Google Drive para visualização direta
    if (cleanUrl.includes('drive.google.com')) {
      const idMatch = cleanUrl.match(/\/d\/([^/]+)/) || cleanUrl.match(/id=([^&]+)/);
      if (idMatch && idMatch[1]) {
        return `https://lh3.googleusercontent.com/d/${idMatch[1]}`;
      }
    }
    
    return cleanUrl;
  };

  const handleSave = (id: string) => {
    if (!tempUrl.trim()) {
      onNotify("Erro", "O link da imagem não pode estar vazio.", "warning");
      return;
    }

    const finalUrl = transformImageUrl(tempUrl);
    
    onUpdateImage(id, finalUrl);
    setEditingId(null);
    setTempUrl('');
    onNotify("Sucesso", "Capa fixada com sucesso.", "success");
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0b1119] overflow-y-auto animate-in fade-in duration-500 custom-scrollbar relative">
      <header className="h-24 bg-black/40 border-b border-white/5 flex items-center justify-between px-10 shrink-0">
        <div className="flex items-center space-x-6">
          <button onClick={onBack} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="space-y-1">
            <h1 className="text-2xl font-black italic text-white uppercase tracking-tighter">Customizar <span className="text-blue-500">Capas</span></h1>
            <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Os links inseridos são fixados permanentemente no seu navegador</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest italic">Modo Persistência Ativo</span>
          </div>
        </div>
      </header>

      <div className="p-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col group hover:border-blue-500/30 transition-all shadow-2xl">
              <div className="aspect-video relative overflow-hidden bg-slate-900">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={item.title} 
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x450/0f172a/64748b?text=Link+de+Imagem+Inv%C3%A1lido'; }}
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                  <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest mb-1">{item.tag}</span>
                  <h3 className="text-sm font-black text-white uppercase italic truncate">{item.title}</h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {editingId === item.id ? (
                  <div className="space-y-3 animate-in slide-in-from-top-2 duration-300">
                    <div className="flex justify-between items-center ml-1">
                      <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Nova URL da Capa</label>
                    </div>
                    <input 
                      type="text" 
                      autoFocus
                      value={tempUrl}
                      onChange={(e) => setTempUrl(e.target.value)}
                      placeholder="Cole o link da imagem (.png, .jpg ou Drive)"
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-xs font-bold focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-slate-700"
                    />
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleSave(item.id)}
                        className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-black text-[9px] uppercase tracking-widest transition-all shadow-lg"
                      >
                        Fixar Capa
                      </button>
                      <button 
                        onClick={() => { setEditingId(null); setTempUrl(''); }}
                        className="px-4 bg-white/5 text-slate-400 hover:text-white rounded-xl text-[9px] font-black uppercase tracking-widest transition-all"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                ) : (
                  <button 
                    onClick={() => { setEditingId(item.id); setTempUrl(item.image); }}
                    className="w-full bg-white/5 border border-white/5 hover:bg-white/10 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all flex items-center justify-center space-x-3"
                  >
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    <span>Alterar e Fixar</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="h-20 shrink-0" />
    </div>
  );
};

export default ImageManagerView;
