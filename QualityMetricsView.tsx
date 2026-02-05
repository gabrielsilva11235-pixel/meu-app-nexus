
import React from 'react';

interface QualityMetricsViewProps {
  onBack: () => void;
}

const QualityMetricsView: React.FC<QualityMetricsViewProps> = ({ onBack }) => {
  const spreadsheetUrl = "https://docs.google.com/spreadsheets/d/1B0xifoBZmaNlcAHn_HSWjyHmLoN6I-HZ3l2wwwTQSzc/preview?gid=1341782835";
  
  const tabulacoes = [
    "https://lh3.googleusercontent.com/sitesv/APaQ0STKdQKy0RpN3IGSqnA4qJVsxOWEI1h9cTZYkB0VqW5sAajIkQiNIQkao4Wffd-TFurFQu6iwhtdXarkpN_ZWYTEGBqVsf0Ne2AhOMMMA7OOdoQW1mJTtmA0Yr9rlhpuFmLQNyJ5zG-e4xiU3o8JN2cT8zU0FfnXOUMXB4PmFPRkhNi1b_Y4ZNKQpiUGYEJl9KtWUJES0rhoRqwIRclub38Vt8SYXcioPCW0f2I=w1280",
    "https://lh3.googleusercontent.com/sitesv/APaQ0SQaXtIJiZlC6VXCkz0uLs8npbkG9qlQxInFwTB6Tacm6_v7EC-osVnqMyrxZmCPsXUnlHronwgn4Z-w-l9JBC6tU6sQClUBaMaXwYyGEd8KtKxZTLGQy5FjixebTwIjDnTw5ZGs5BFKhiymvhaVpGqSUVBit6qF8WjOTmECOORWFXPn61BXCWreSELOtyOT_PzUR2lxPBQUgSF85rlrWpD1URCqqIaODmha=w1280",
    "https://lh3.googleusercontent.com/sitesv/APaQ0SQ80Axxz9aDsqYvO3x_HC6N9-0084r2UEZBfThOExEpONmCd8_2rArNzqL8KKXRp2XQQiRZs_ALFBn1yhTNDTnq0zrdH2xMwFXCgXwAKybXRDJ1p-P06Z6DxGAX6cfkqKnL3I0s8lpj0pyJrP6g7POzX8l9kk0GXiPCx7Ypzcx-LmqB5Ck4TWMW_oE3MoS0cQqqO9ZBQmHZJTva_xO3UcRYpQEAh8R6c2-E-SM=w1280",
    "https://lh3.googleusercontent.com/sitesv/APaQ0ST74MgU7iILIPz3i2NhD32HFlppxf0oJEBCeLFpnILjvKu0k_3YPDrbvq-BStYMD8mfaDBfzuSdY9Vz-Xec6HTBvaqreCPPS4bXFsWRD5kFQdCGolGfPqj5D4k5Tju6Tsz_f6vlyENghzhZ5bap8Q9iUCzUH4w_XUuqAfu19Obp6ial2QO_xYFwElQgk1rRu0Al4ciZbEgxYXH3wJCHG8blihGcy8mciMFFUB8=w1280",
    "https://lh3.googleusercontent.com/sitesv/APaQ0SRTK2bVuyP-Ah-rfIHXaHgPVex2m8H1nttkNOVvVuOrCosc6fQf9tX_AfxMr_BlkYYAXaRhswR9tfogIYYRJ28b0z_9K7ES-_hAjPnGLuL_KdDeJSQm5fNaMeNWls8q2SfMBdwJ01XxdKxkzKu_jMRxH9i6tSs4FLdlJWii7oAaHcUwcHKbuAOpoczGSIuOlno_GPiny4jyr2Ci4eCc3BPkCRzjBTPNN04_L5Y=w1280",
    "https://lh3.googleusercontent.com/sitesv/APaQ0SThD1bujzrGlSNQo-4lTPwYZCJmWyF0HrQwl1Vhzghj_1hHvHyUM__aI2tLKoa6aoEAeq6Yt1T9LInigIVhTpI0GW_a6C9MbR9M-xRM9LC8fNDzF5ie0nnUTNWcJKP9KPnE2whGvSZIcHy3pIoBWo3eQsFPOAjsR17YZGzMfS1ocwicw0TAQoaByH71SB6EqZFV-6GymJy_70lT8LqTEB8vCb08iAFeLVX0=w1280",
    "https://lh3.googleusercontent.com/sitesv/APaQ0STunjfCPeocw9_6RWv__Xvrbou_6Yo1YsA1A6xxT2hKj5owj3AMDGkn843prIjme1x0f6eFvxYqimrJVdVfEQBho48vAGViUJFM6xEGtq3kfTA6K8lrhsHfXOZwk1dgV_j7lZ8ikjo70xn90jTClKmCP4-ddk8cNi6i_YqyAw2BhF7TlXKkzen0Oxz4yqTNOcZ4pphvekhsgbq8BXt_VnIcEiRVuPPUykTsgTc=w1280",
    "https://lh3.googleusercontent.com/sitesv/APaQ0STLbEGXJ_ESfjoFBkCas9hTytsKuGgOv5fTjuI2GAPw5ZWrKSqx99FhqwMzIFvvkCVztVXv90BH4ngvdvVy2mX2J5zGLWfX9mYnLT1QNY3IQFcFMIkhN7Iw52LsmOiks6ub_SlTqHovkxdlAiTrS39CXEjxh5GyBsG-rkIISfIkZT2WaknsBWes7wZSBxL9j_n9jmQPiWXiuHqssm6DnWFxVA1H36UzLeAJ=w1280"
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header */}
      <div className="relative h-[300px] w-full bg-gradient-to-br from-emerald-600 via-teal-900 to-black shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.15),transparent_70%)]"></div>
        
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
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/40 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-emerald-200 text-[10px] font-black uppercase tracking-[0.4em]">Performance de Qualidade</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              Indicadores <br />
              <span className="text-emerald-400">de Qualidade</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-16 pb-24">
        
        {/* Planilha de Notas */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black italic text-white uppercase tracking-tight flex items-center">
              <span className="w-1.5 h-6 bg-emerald-500 mr-4 rounded-full shadow-[0_0_15px_#10b981]"></span>
              Classificação Geral e Notas - VISA
            </h2>
            <div className="flex space-x-4">
              <a 
                href="https://docs.google.com/spreadsheets/d/1FBBbchHTahvToNScpms-mmRi0s2y4Kp-r3XVVRp9tiw/edit?gid=453381597" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] font-black text-emerald-400 uppercase tracking-widest border border-emerald-500/30 px-4 py-2 rounded-lg hover:bg-emerald-500/10 transition-all flex items-center space-x-2"
              >
                <span>Acessar Checklist</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>

          <div className="w-full h-[700px] rounded-[3.5rem] border border-white/10 bg-black/40 overflow-hidden shadow-2xl relative">
            <iframe src={spreadsheetUrl} className="w-full h-full border-0" title="Planilha de Notas" />
          </div>
        </section>

        {/* Galeria de Tabulações */}
        <section className="space-y-8">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-black italic text-white uppercase tracking-tight">Guia de Tabulações</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tabulacoes.map((src, idx) => (
              <div key={idx} className="group relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl cursor-pointer hover:scale-105 transition-all duration-500" onClick={() => window.open(src, '_blank')}>
                <img src={src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={`Tabulação ${idx + 1}`} />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Ampliar Imagem</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default QualityMetricsView;
