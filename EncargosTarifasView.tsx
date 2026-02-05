
import React from 'react';

interface EncargosTarifasViewProps {
  onBack: () => void;
}

const EncargosTarifasView: React.FC<EncargosTarifasViewProps> = ({ onBack }) => {
  const tariffGroups = [
    {
      title: "Utilização do Cartão",
      items: [
        { label: "Classic, Gold e Platinum", value: "R$ 19,90 a.m", icon: "💳" },
        { label: "Produto Infinite", value: "R$ 59,99 a.m", icon: "✨" },
        { label: "Produto SMS", value: "R$ 6,99 a.m", icon: "📱" }
      ]
    },
    {
      title: "Saques e Transações",
      items: [
        { label: "Saque - Tarifa", value: "R$ 14,90", icon: "🏧" },
        { label: "Saque - Encargos", value: "15,99%", icon: "📈" },
        { label: "Saque Débito", value: "R$ 2,00", icon: "💸" },
        { label: "TED", value: "R$ 1,00", icon: "🏦" }
      ]
    },
    {
      title: "Juros e Multas",
      items: [
        { label: "Juros Rotativo", value: "19,99%", icon: "🔄" },
        { label: "Multa", value: "2%", icon: "⚠️" },
        { label: "Mora", value: "1%", icon: "⏳" },
        { label: "Limite Ultrapassado", value: "R$ 14,90", icon: "🛑" }
      ]
    },
    {
      title: "Tributos e Internacional",
      items: [
        { label: "IOF Nacional", value: "0,38% + 0,0082% a.d", icon: "🇧🇷" },
        { label: "IOF Internacional", value: "5,38%", icon: "🌎" },
        { label: "Spread Internacional", value: "4%", icon: "💱" }
      ]
    },
    {
      title: "Outros Serviços",
      items: [
        { label: "Segunda Via de Cartão", value: "R$ 19,90", icon: "🔄" }
      ]
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header */}
      <div className="relative h-[300px] w-full bg-gradient-to-br from-amber-600 via-orange-900 to-slate-950 shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.2),transparent_70%)]"></div>
        
        <div className="absolute top-8 left-8 z-50">
          <button 
            onClick={onBack}
            className="flex items-center space-x-3 text-white bg-black/30 hover:bg-black/50 px-6 py-3 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl transition-all group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-black text-xs tracking-[0.3em] uppercase italic">Biblioteca</span>
          </button>
        </div>

        <div className="absolute inset-0 p-12 flex flex-col justify-end max-w-7xl mx-auto w-full">
          <div className="space-y-2 animate-in slide-in-from-left-12 duration-1000">
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 border border-amber-500/40 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
              <span className="text-amber-200 text-[10px] font-black uppercase tracking-[0.4em]">Tabela de Tarifas Oficial</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              Encargos e <br />
              <span className="text-amber-400">Tarifas</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-12">
        {/* Parcelamento Highlight */}
        <section className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 p-8 rounded-[2.5rem] backdrop-blur-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl -z-10 group-hover:bg-blue-500/20 transition-colors"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white italic uppercase tracking-tight">Condições de Parcelamento</h3>
              <p className="text-blue-200/70 font-medium">Taxas competitivas para flexibilidade financeira.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="bg-black/40 px-6 py-4 rounded-2xl border border-white/10 text-center min-w-[140px]">
                <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Até 6x</p>
                <p className="text-xl font-black text-white">18,99%</p>
              </div>
              <div className="bg-black/40 px-6 py-4 rounded-2xl border border-white/10 text-center min-w-[140px]">
                <p className="text-[10px] font-black text-slate-500 uppercase mb-1">7x até 15x</p>
                <p className="text-xl font-black text-white">12,99%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tariffGroups.map((group, gIdx) => (
            <section key={gIdx} className="space-y-4">
              <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.4em] italic flex items-center">
                <span className="w-1 h-4 bg-amber-500 mr-3 rounded-full"></span>
                {group.title}
              </h3>
              <div className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden">
                {group.items.map((item, iIdx) => (
                  <div 
                    key={iIdx} 
                    className={`flex items-center justify-between p-6 hover:bg-white/5 transition-colors ${
                      iIdx !== group.items.length - 1 ? 'border-b border-white/5' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm font-bold text-slate-300">{item.label}</span>
                    </div>
                    <span className="text-sm font-black text-white uppercase tracking-wider">{item.value}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Info */}
        <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5 text-center">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
            As tarifas e encargos estão sujeitos a alterações conforme política de crédito vigente. <br />
            Consulte sempre o contrato atualizado para condições específicas de cada produto.
          </p>
        </div>
      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default EncargosTarifasView;
