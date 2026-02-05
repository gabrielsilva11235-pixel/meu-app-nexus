
import React from 'react';

interface ComunidadeFocoViewProps {
  onBack: () => void;
}

const ComunidadeFocoView: React.FC<ComunidadeFocoViewProps> = ({ onBack }) => {
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
    "8 - L088 - SHC RECIFE", "24 - L024 - RIBEIRAO PRETO", "1597 - 1597 - HUMAITA",
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
      <div className="relative h-[300px] w-full bg-gradient-to-br from-red-600 via-red-900 to-slate-950 shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.2),transparent_70%)]"></div>
        <div className="absolute top-8 left-8 z-50">
          <button onClick={onBack} className="flex items-center space-x-3 text-white/70 hover:text-white transition-all group bg-black/20 hover:bg-black/40 px-6 py-3 rounded-2xl backdrop-blur-xl border border-white/10">
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-black text-xs tracking-[0.3em] uppercase italic">Voltar</span>
          </button>
        </div>
        <div className="absolute inset-0 p-12 flex flex-col justify-end max-w-7xl mx-auto w-full">
           <h1 className="text-7xl font-black italic text-white uppercase tracking-tighter">Regra <span className="text-white/40">Americanas</span></h1>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <img src={image1} className="rounded-3xl border border-white/10 shadow-2xl" onError={(e) => e.currentTarget.src = "https://placehold.co/600x400/1a1a1a/ffffff?text=Doc+Americanas+1"} />
            <img src={image2} className="rounded-3xl border border-white/10 shadow-2xl" onError={(e) => e.currentTarget.src = "https://placehold.co/600x400/1a1a1a/ffffff?text=Doc+Americanas+2"} />
        </div>
      </div>
    </div>
  );
};

export default ComunidadeFocoView;
