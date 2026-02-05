
import React from 'react';

interface DicasSucessoViewProps {
  onBack: () => void;
}

const DicasSucessoView: React.FC<DicasSucessoViewProps> = ({ onBack }) => {
  const pdfUrl = "https://drive.google.com/file/d/1mvpPW56uTHE-qgvrzwlD926caEu_jVww/preview";
  
  const galleryImages = [
    "https://lh3.googleusercontent.com/sitesv/APaQ0SQ-fvIoIdLWq7w2V7y-5d0egH1zdap4uLdw_1eW4QmnVmyHEuMRmWticWohIJZfWQpuKhC9wHvagM99HsGWLN0wXXy4CziQC0OsWUbv6a5nXa0LBohsV3wNvXqjUxtsiVmI53-WQri-qOzZr21LTf89sKMu4bkU-GCuVgfs0DTXNirdkWa9cEEG4vH6zR-CNznLE1-4HdP4DGr2UvF1BgIJQdxg5H5zmES-fhQ=w1280",
    "https://lh3.googleusercontent.com/sitesv/APaQ0STC4ig0V33J27VFlPtTKXF9lIYK6GqhLEVqMFD9Nq7fbsk-5gYkSlmrg_TKpWWJnY1pPYBR6YEvyWHFq0qAodMdRV9i0EtKJI5CWseBives045UArj63tboIqbVO_KkcGIS1bn02thH8QYMRfipByKHhQ3cZkMhVX7EHIIaV5m1G1fqccOF-fAx_VTD1tFVkDAz5lpOT0HO4cxb36qoq2F1KAn_XO_KW5Ra52Q=w1280",
    "https://lh3.googleusercontent.com/sitesv/APaQ0ST3Jg1gYR_DHrf4PegPT2vDHNQffp7CV1Y2RhjIJhrLs5IQiJB7faQFlZ8bu1MXsUrAoimvbInAWzwiIMTq3W3LCNcI9TtWmsiT98tkOqKQbbO1C7o0AmbqV1MBIFBCktKAiUgd2t2L51kNmvy-utcCGmZXxrmPw0RHs9yVQZZtXwwwA4bPyqAxXfjxxxNiso-OcNx8d0K_WgpwiL3tDM1spsZCkejGrcUb=w1280",
    "https://lh3.googleusercontent.com/sitesv/APaQ0STJZz28hZ8fpgYuVYfz4y4ktUsf8Tpaw2SfF-UyZSYnw_Fq2S_By4f3jvfK5v6gv8D5ZEj7zfD77a6a6UhgIBhCz9yT4iTOtoenCHcoYvYTKKpm__hEezvfmVecJdOBpiswysS2n2aZ0TS1HRohZakxRELA2vJQwPLcoZap7wjOM6zSsZAX-l2qwjM2s9XdxRezpf41JlCwzae1CRerITMvpIhb-fnEGXVurhI=w1280",
    "https://lh3.googleusercontent.com/sitesv/APaQ0SSNI3bV3V68bE21pAqlEnJG1S-XN0rGmE8KBc6C4D2QcAPd1KpKZScbC-LnsKoNoQsqeajsHuXbY2cY1GKpNh8r6LbbxIuKUM2Uf-qxHSpq2HDPWnsqpFih0DHxDHYt3f-4E5Rqy6l1-dB-JCHNtZaHXubvcgTdTdqMFfpnMNE6fQuCfPba8SLKJt0jMgvSveWRNXewpL9a37C2xQ_bKY7rX7jENK8hCHmGKEY=w1280"
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header */}
      <div className="relative h-[300px] w-full bg-gradient-to-br from-amber-500 via-orange-900 to-black shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.15),transparent_70%)]"></div>
        
        <div className="absolute top-8 left-8 z-50">
          <button 
            onClick={onBack}
            className="flex items-center space-x-3 text-white bg-black/30 hover:bg-black/50 px-6 py-3 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl transition-all group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-black text-xs tracking-[0.3em] uppercase italic">Páginas</span>
          </button>
        </div>

        <div className="absolute inset-0 p-12 flex flex-col justify-end max-w-7xl mx-auto w-full">
          <div className="space-y-2 animate-in slide-in-from-left-12 duration-1000">
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 border border-amber-500/40 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
              <span className="text-amber-200 text-[10px] font-black uppercase tracking-[0.4em]">Alta Performance</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              DICAS DE <br />
              <span className="text-amber-400">SUCESSO</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-20 pb-24">
        
        {/* Painel do PDF */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black italic text-white uppercase tracking-tight flex items-center">
              <span className="w-1.5 h-8 bg-amber-500 mr-4 rounded-full shadow-[0_0_15px_#f59e0b]"></span>
              Guia de Boas Práticas (PDF)
            </h2>
            <a 
              href="https://drive.google.com/file/d/1mvpPW56uTHE-qgvrzwlD926caEu_jVww/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-black text-amber-400 uppercase tracking-widest border border-amber-500/30 px-4 py-2 rounded-lg hover:bg-amber-500/10 transition-all flex items-center space-x-2"
            >
              <span>Download Original</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>

          <div className="w-full h-[800px] rounded-[3rem] border border-white/10 bg-black/40 overflow-hidden shadow-2xl relative group">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <iframe 
              src={pdfUrl}
              className="w-full h-full border-0"
              title="Dicas de Sucesso PDF"
            />
          </div>
        </section>

        {/* Galeria de Imagens */}
        <section className="space-y-12">
          <div className="flex items-center space-x-6">
            <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter">Insights e Visualização</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          {/* Imagens 1 a 4 em Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.slice(0, 4).map((src, index) => (
              <div 
                key={index} 
                className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-all duration-700 hover:border-amber-500/50"
              >
                <img 
                  src={src} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.1]" 
                  alt={`Dica de Sucesso ${index + 1}`} 
                  onError={(e) => { e.currentTarget.src = "https://placehold.co/400x600/1a1a1a/ffffff?text=Imagem+N%C3%A3o+Dispon%C3%ADvel"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <p className="text-[9px] font-black text-white uppercase tracking-[0.3em] leading-relaxed">Visualização Detalhada {index + 1}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Imagem 5 em Tamanho Total */}
          {galleryImages[4] && (
            <div className="mt-12 space-y-6">
              <div className="flex items-center space-x-4">
                 <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.5em]">Destaque Final</span>
                 <div className="h-px flex-1 bg-white/5"></div>
              </div>
              <div className="group relative rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-amber-500/50">
                <img 
                  src={galleryImages[4]} 
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-[1.02]" 
                  alt="Dica de Sucesso 5 - Visão Completa" 
                  onError={(e) => { e.currentTarget.src = "https://placehold.co/1280x720/1a1a1a/ffffff?text=Imagem+N%C3%A3o+Dispon%C3%ADvel"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 lg:p-16">
                   <h3 className="text-2xl lg:text-4xl font-black text-white italic uppercase tracking-tighter drop-shadow-2xl">Visualização Detalhada 5</h3>
                   <p className="text-amber-400 text-[10px] font-black uppercase tracking-[0.4em] mt-2">Documentação Consolidada de Sucesso</p>
                </div>
              </div>
            </div>
          )}
        </section>

      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default DicasSucessoView;
