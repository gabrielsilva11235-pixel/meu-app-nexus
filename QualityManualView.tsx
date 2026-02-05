
import React, { useState } from 'react';

interface QualityManualViewProps {
  onBack: () => void;
}

const QualityManualView: React.FC<QualityManualViewProps> = ({ onBack }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const scriptCards = [
    {
      title: "Cancelamento Conta/Cartão",
      color: "emerald",
      icon: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
      content: [
        { label: "Argumentação Geral", text: "Com o cartão BrasilCard VISA e a conta digital, você tem mais liberdade e praticidade. Seu cartão é aceito em todos os lugares, possui a segurança do cartão virtual para compras online, e você pode comprar no Brasil e no exterior sem preocupações." },
        { label: "Faturas em Aberto", text: "Com o cancelamento, você perderá todo o acesso ao aplicativo BrasilCard Digital... é preciso que entre em contato conosco mensalmente para que possamos enviar a sua fatura." }
      ]
    },
    {
      title: "Cancelamento SMS",
      color: "blue",
      icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
      content: [
        { label: "Sondagem de Valor", text: "Veja quantos benefícios você tem por apenas 0,23 centavos por dia: Você fica informado de promoções, sabe tudo sobre a fatura, notificação de fechamento e vencimento (38 dias para pagar), lembrete no dia evitando juros e controle total de compras." }
      ]
    },
    {
      title: "Atendimento Score Baixo",
      color: "amber",
      icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      content: [
        { label: "Análise Interna", text: "Senhor(a), sua conta está passando por uma análise interna para liberação, mas não se preocupe, estamos trabalhando para resolver. Vamos abrir uma solicitação ao setor responsável e assim eles entrarão em contato com você." }
      ]
    },
    {
      title: "Campanhas Ativas",
      color: "indigo",
      icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A2.401 2.401 0 013 11.416V6.584a2.401 2.401 0 012.436-2.267l1.203-.01M11 5.882l5.436-2.267a1.5 1.5 0 012.107 1.378v11.014a1.5 1.5 0 01-2.107 1.378L11 15.118",
      content: [
        { label: "Reativação", text: "Notamos que você não tem utilizado seu cartão há algum tempo e gostaríamos de saber se há algo em que possamos ajudar." },
        { label: "Desbloqueio", text: "Estou entrando em contato para confirmar se você já teve a oportunidade de desbloquear seu cartão. Este é um passo importante." }
      ]
    }
  ];

  const proceduralAccordions = [
    {
      id: 'validacao',
      title: 'VALIDAÇÃO (NOVA VALIDAÇÃO VISA)',
      content: "TODO ATENDIMENTO DEVE SER SOLICITADO O CPF. \n\nDESBLOQUEIO: Nome Completo, Telefone (DDD), Nascimento, 4 últimos dígitos.\nINFORMAÇÕES SIMPLES: Nome Completo.\nREENVIO/CONTESTAÇÃO: Nome, Endereço Completo, Telefone.\nALTERAÇÃO CADASTRAL: Nome, Endereços (Antigo/Atual), Telefone."
    },
    {
      id: 'acesso_bio',
      title: 'ACESSO BIO (QUANDO SOLICITAR)',
      content: "SOLICITAR SEMPRE: Voz divergente, divergência de dados, Desbloqueios, Envio de senha, Alteração cadastral, 2ª via, Reenvio, Contestação, Reset Token (voz divergente).\nNÃO SOLICITAR (Informação): Status cartão, 2ª via fatura, Saldos, Rastreio, Reset Token (titular ligando)."
    },
    {
      id: 'prazos',
      title: 'PRAZOS DE PROCEDIMENTOS',
      content: "Extrato: 7 dias úteis. \nEntrega Cartão: 15 a 20 dias úteis. \nBaixa Bancária: 2 dias úteis (Outros) / 30 min (Saldo). \nAprovação: 45 dias corridos. \nContestação: 120 dias corridos. \nEstorno Fatura: 1 a 2 ciclos."
    },
    {
      id: 'negociacao',
      title: 'QUANDO TRANSFERIR PARA NEGOCIAÇÃO?',
      content: "VISA: Status CRELIQ ou PERDA. \nPRIVATE: Protesto, Inadimplente Guardian, Renegociações em andamento, Quitação total. \nNÃO TRANSFERIR: Ativo, dúvidas simples de fatura, parcelamento auto disponível, envio de fatura."
    },
    {
      id: 'endereco_tel',
      title: 'ALTERAÇÃO DE TELEFONE E ENDEREÇO',
      content: "NÃO REALIZAMOS DIRETAMENTE. Enviar ao setor 'Alteração VISA' ou orientar via APP. Aos domingos, o próprio atendente realiza via acesso BIO."
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header */}
      <div className="relative h-[300px] w-full bg-gradient-to-br from-indigo-700 via-blue-900 to-black shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_70%)]"></div>
        
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
            <div className="inline-flex items-center space-x-2 bg-indigo-500/20 border border-indigo-500/40 px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
              <span className="text-indigo-200 text-[10px] font-black uppercase tracking-[0.4em]">Roteiros e Procedimentos</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              Manual e <br />
              <span className="text-indigo-400">Scripts</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-12 pb-24">
        
        {/* Grid de Scripts Principais */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scriptCards.map((card, idx) => (
            <div key={idx} className={`bg-white/5 border border-white/10 rounded-[2.5rem] p-10 space-y-6 group hover:border-${card.color}-500/30 transition-all`}>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-2xl bg-${card.color}-500/20 flex items-center justify-center text-${card.color}-400 border border-${card.color}-500/20`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={card.icon} /></svg>
                </div>
                <h3 className="text-xl font-black italic text-white uppercase tracking-tight">{card.title}</h3>
              </div>
              <div className="space-y-4">
                {card.content.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <p className={`text-[10px] font-black text-${card.color}-400 uppercase tracking-widest`}>{item.label}</p>
                    <p className="text-slate-300 text-sm italic font-medium leading-relaxed">"{item.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Accordions de Procedimentos */}
        <section className="space-y-6">
          <div className="flex items-center space-x-6">
            <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter">Procedimentos Operacionais</h2>
            <div className="h-px flex-1 bg-white/5"></div>
          </div>

          <div className="space-y-3">
            {proceduralAccordions.map((item) => (
              <div key={item.id} className={`border transition-all duration-300 rounded-[2rem] overflow-hidden ${expandedId === item.id ? 'bg-slate-900 border-indigo-500 shadow-2xl' : 'bg-white/5 border-white/5 hover:border-white/10'}`}>
                <button onClick={() => setExpandedId(expandedId === item.id ? null : item.id)} className="w-full text-left p-8 flex items-center justify-between group">
                  <h3 className={`text-lg font-black italic uppercase tracking-tight transition-colors ${expandedId === item.id ? 'text-indigo-400' : 'text-slate-400 group-hover:text-white'}`}>{item.title}</h3>
                  <div className={`transition-transform duration-300 ${expandedId === item.id ? 'rotate-180 text-indigo-400' : 'text-slate-600'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                {expandedId === item.id && (
                  <div className="px-8 pb-10 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="h-px bg-white/5 mb-8" />
                    <pre className="text-sm text-slate-300 whitespace-pre-wrap font-sans leading-relaxed italic">{item.content}</pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default QualityManualView;
