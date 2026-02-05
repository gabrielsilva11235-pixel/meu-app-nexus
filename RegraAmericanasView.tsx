
import React from 'react';

interface RegraAmericanasViewProps {
  onBack: () => void;
}

const RegraAmericanasView: React.FC<RegraAmericanasViewProps> = ({ onBack }) => {
  const image1 = "https://lh3.googleusercontent.com/d/1E_y4zOgZtsXd95Xun6KRkMx2I31hCwaC";
  const image2 = "https://lh3.googleusercontent.com/d/11XvRpFycr97rsPLWxvQb7qTLxJWTSXvp";

  const lojas = [
    "265 - L265 - SHC ALAMEDA TAGUATINGA", "42 - L042 - PORTO ALEGRE", "1235 - 1235 - SHC JUA GARDEN",
    "506 - L506 - LARGO TREZE DE MAIO", "148 - L148 - SHC IGUATEMI FORT", "499 - L499 - CAJAZEIRAS",
    "5070 - 5070 - SHC PARTAGE SHOPP NATAL", "108 - L108 - CAXIAS 2", "1365 - 1365 - PALMARES",
    "350 - L350 - LAURO DE FREITAS", "200 - L200 - SHC JEQUITIBA PLAZA", "92 - L092 - SHC MACEIO",
    "129 - L129 - ITANHAEM", "1397 - 1397 - BELFORD ROXO MARKET CENTER", "638 - L638 - SANTA CRUZ DA SERRA",
    "156 - L156 - SHC CIDADE BH", "298 - L298 - 7 DE SETEMBRO", "1333 - 1333 - SHC METRÓPOLE ANANINDEUA",
    "8 - L008 - SANTOS", "1496 - 1496 - SHC BOULEVARD CARAPICUIBA", "753 - L753 - SHC METRO TUCURUVI",
    "1314 - 1314 - SHC IGARA", "261 - L261 - SHC BURITIS GUARA", "5087 - 5087 - CHAPADAO DO SUL",
    "311 - L311 - JUAZEIRO DO NORTE", "1367 - 1367 - PRESIDENTE PRUDENTE", "1378 - 1378 - VIGIA DE NAZARÉ",
    "1393 - 1393 - SHC PARQUE S. JOSE", "343 - L343 - SOBRAL", "113 - L113 - CUIABA CPA",
    "485 - L485 - QUIXADA", "422 - L422 - SHC BONSUCESSO", "1564 - 1564 - LABREA",
    "48 - L048 - BELEM", "731 - L731 - LEOPOLDINA", "497 - L497 - CANDEIAS",
    "5078 - 5078 - CAIEIRAS", "1141 - 1141 - SHC CAMARÁ", "1164 - 1164 - ITABERABA",
    "978 - L978 - PROMISSÃO", "421 - L421 - ICOARACI", "30 - L030 - VALENCA",
    "334 - L334 - ITABORAI", "95 - L095 - SHC CAMPO GRANDE", "623 - L623 - SHC ESTAÇÃO QUEIMADOS",
    "564 - L564 - GUARULHOS 2", "1161 - 1161 - SHC PÁTIO RORAIMA", "318 - L318 - SHC MACAE",
    "467 - L467 - PERUIBE", "486 - L486 - FRANCISCO SA", "1076 - 1076 - SHC PARQUE MACEIÓ",
    "1441 - 1441 - ARAPIRACA 2", "452 - L452 - RONDONOPOLIS", "307 - L307 - NAZARE",
    "302 - L302 - XV DE NOVEMBRO", "1066 - 1066 - ESTANCIA", "333 - L333 - CRATO",
    "96 - L096 - RIO DAS OSTRAS", "1052 - 1052 - SHC IGUATEMI SÃO JOSÉ DO RIO P", "5226 - 5226 - MOJU",
    "1308 - 1308 - PARAGOMINAS", "19 - L019 - TIJUCA", "327 - L327 - SHC VIA SUL",
    "1178 - 1178 - BETIM", "21 - L021 - SAO JOSE DO RIO PRETO", "271 - L271 - FEIRA DE SANTANA",
    "281 - L281 - TRES RIOS", "413 - L413 - SHC PARALELA", "993 - L993 - BELA VISTA",
    "516 - L516 - TAUBATE", "5263 - 5263 - SANTA CRUZ DO RIO PARDO", "984 - L984 - SAO MIGUEL",
    "458 - L458 - SHC SOBRAL", "5164 - 5164 - PACIENCIA", "610 - L610 - SAO PEDRO DA ALDEIA",
    "88 - L088 - SHC RECIFE", "24 - L024 - RIBEIRAO PRETO", "1597 - 1597 - HUMAITA",
    "1130 - 1130 - SHC JUREMA", "1402 - 1402 - DISTRITO INDUSTRIAL", "1149 - 1149 - SALINAS",
    "300 - L300 - GOVERNADOR VALADARES", "5297 - 5297 - TRAIRI", "1486 - 1486 - NACOES UNIDAS",
    "46 - L046 - LARANJEIRAS", "39 - L039 - TAGUATINGA", "526 - L526 - PIRATININGA",
    "303 - L303 - CARIACICA", "751 - L751 - BERTIOGA", "5255 - 5255 - SANTA IZABEL DO PARA",
    "620 - L620 - SHC SERRAMAR", "446 - L446 - PORTO VELHO", "5288 - 5288 - BARREIROS",
    "5365 - 5365 - PARAIPABA", "495 - L495 - SHC SANTA MARIA", "455 - L455 - PAULO AFONSO",
    "627 - L627 - GRAVATA", "490 - L490 - SHC IMPERIAL", "1150 - 1150 - SHC MARANGUAPE MALL",
    "199 - L199 - SHC BENFICA"
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header */}
      <div className="relative h-[280px] w-full bg-gradient-to-br from-red-700 via-red-900 to-black shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.15),transparent_70%)]"></div>
        
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
            <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/40 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
              <span className="text-red-200 text-[10px] font-black uppercase tracking-[0.4em]">Operação Parceira</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              Regra <span className="text-red-500">Americanas</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-16 pb-24">
        
        {/* Seção das Imagens */}
        <section className="space-y-10">
          <div className="flex items-center space-x-6">
            <h2 className="text-2xl font-black italic text-white uppercase tracking-tighter">Documentação Visual</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-all duration-700 hover:border-red-500/30">
               <div className="p-5 bg-black/40 border-b border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Diretriz Parte 01</span>
               </div>
               <img src={image1} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" alt="Regra Americanas 1" />
            </div>

            <div className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl transition-all duration-700 hover:border-red-500/30">
               <div className="p-5 bg-black/40 border-b border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">Diretriz Parte 02</span>
               </div>
               <img src={image2} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" alt="Regra Americanas 2" />
            </div>
          </div>
        </section>

        {/* Seção das Lojas */}
        <section className="space-y-10">
          <div className="flex items-center space-x-6">
            <h2 className="text-2xl font-black italic text-white uppercase tracking-tighter">Lojas Autorizadas</h2>
            <div className="h-px flex-1 bg-white/10"></div>
            <span className="bg-red-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">{lojas.length} Unidades</span>
          </div>

          <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 lg:p-12 shadow-inner">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
                {lojas.map((loja, idx) => (
                  <div key={idx} className="flex items-start space-x-3 group py-1 border-b border-white/[0.03] last:border-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors cursor-default tracking-tight">
                      {loja}
                    </span>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Footer Info */}
        <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] text-center">
           <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
             Esta listagem é mantida pela coordenação de parcerias BrasilCard. <br />
             Em caso de divergência no cadastro de lojas, reporte imediatamente ao suporte.
           </p>
        </div>
      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default RegraAmericanasView;
