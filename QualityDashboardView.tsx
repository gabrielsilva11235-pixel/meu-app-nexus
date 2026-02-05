
import React, { useState } from 'react';

interface QualityDashboardViewProps {
  onBack: () => void;
}

const QualityDashboardView: React.FC<QualityDashboardViewProps> = ({ onBack }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const spreadsheetUrl = "https://docs.google.com/spreadsheets/d/1B0xifoBZmaNlcAHn_HSWjyHmLoN6I-HZ3l2wwwTQSzc/preview?gid=1341782835";

  const accordionItems = [
    {
      id: 'validacao',
      title: 'VALIDAÇÃO (NOVA VALIDAÇÃO VISA)',
      content: (
        <div className="space-y-4 text-slate-300">
          <p className="text-amber-400 font-black text-[10px] uppercase tracking-widest">Todo atendimento deve ser solicitado o CPF</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <h4 className="text-white font-black text-[10px] uppercase mb-2">Desbloqueio / Redefinição</h4>
              <ul className="text-xs space-y-1 list-disc list-inside">
                <li>Nome Completo</li>
                <li>Telefone (com DDD)</li>
                <li>Data de Nascimento</li>
                <li>4 últimos dígitos do cartão</li>
              </ul>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <h4 className="text-white font-black text-[10px] uppercase mb-2">Informações Simples</h4>
              <ul className="text-xs space-y-1 list-disc list-inside">
                <li>Nome Completo</li>
              </ul>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <h4 className="text-white font-black text-[10px] uppercase mb-2">Envio/Reenvio/Contestação</h4>
              <ul className="text-xs space-y-1 list-disc list-inside">
                <li>Nome Completo</li>
                <li>Endereço Completo</li>
                <li>Telefone (com DDD)</li>
              </ul>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <h4 className="text-white font-black text-[10px] uppercase mb-2">Alteração Cadastral</h4>
              <ul className="text-xs space-y-1 list-disc list-inside">
                <li>Nome Completo</li>
                <li>Endereço Antigo e Atual</li>
                <li>Telefone (com DDD)</li>
              </ul>
            </div>
          </div>
          <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
            <h4 className="text-blue-400 font-black text-[10px] uppercase mb-2">Score Baixo</h4>
            <p className="text-xs italic">Sem movimentação: Preencher forms (verificar ocorrências). Com info/fatura: Nome, Email, CEP, RG e Nascimento.</p>
          </div>
        </div>
      )
    },
    {
      id: 'orientacoes',
      title: 'ORIENTAÇÕES SOBRE OS PROCEDIMENTOS',
      content: (
        <div className="space-y-6">
          <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-3xl">
            <h4 className="text-red-400 font-black text-xs uppercase mb-4 tracking-tighter">Cenário de Voz Divergente</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-[10px] font-black text-emerald-400 uppercase mb-2">Pode Realizar:</p>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  <li>Info básicas e envio fatura</li>
                  <li>Contestação (sem 2ª via)</li>
                  <li>Redefinição de tentativas</li>
                  <li>Alteração cadastral</li>
                  <li>Cancelamento (retenção)</li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-black text-red-400 uppercase mb-2">NÃO Pode Realizar:</p>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  <li>Envio de senha</li>
                  <li>Desbloqueio de cartão/token</li>
                  <li>Segunda via / Reenvio</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-[10px] font-bold text-slate-400 italic">OBS: Setores só realizarão via acesso BIO e se for procedente.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-3xl space-y-4">
             <h4 className="text-white font-black text-xs uppercase">Fraseologias Recomendadas</h4>
             <p className="text-xs italic text-slate-400">"Senhor, no momento não consigo atender à sua solicitação. Peço, por gentileza, que entre em contato em outro momento."</p>
             <p className="text-xs italic text-slate-400">"No momento, estou impossibilitado(a) de prosseguir com o atendimento por motivos operacionais. Agradeço a compreensão."</p>
          </div>
        </div>
      )
    },
    {
      id: 'tabulacoes',
      title: 'TABULAÇÕES (VISUALIZAÇÃO)',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "https://lh3.googleusercontent.com/sitesv/APaQ0STKdQKy0RpN3IGSqnA4qJVsxOWEI1h9cTZYkB0VqW5sAajIkQiNIQkao4Wffd-TFurFQu6iwhtdXarkpN_ZWYTEGBqVsf0Ne2AhOMMMA7OOdoQW1mJTtmA0Yr9rlhpuFmLQNyJ5zG-e4xiU3o8JN2cT8zU0FfnXOUMXB4PmFPRkhNi1b_Y4ZNKQpiUGYEJl9KtWUJES0rhoRqwIRclub38Vt8SYXcioPCW0f2I=w1280",
            "https://lh3.googleusercontent.com/sitesv/APaQ0SQaXtIJiZlC6VXCkz0uLs8npbkG9qlQxInFwTB6Tacm6_v7EC-osVnqMyrxZmCPsXUnlHronwgn4Z-w-l9JBC6tU6sQClUBaMaXwYyGEd8KtKxZTLGQy5FjixebTwIjDnTw5ZGs5BFKhiymvhaVpGqSUVBit6qF8WjOTmECOORWFXPn61BXCWreSELOtyOT_PzUR2lxPBQUgSF85rlrWpD1URCqqIaODmha=w1280",
            "https://lh3.googleusercontent.com/sitesv/APaQ0SQ80Axxz9aDsqYvO3x_HC6N9-0084r2UEZBfThOExEpONmCd8_2rArNzqL8KKXRp2XQQiRZs_ALFBn1yhTNDTnq0zrdH2xMwFXCgXwAKybXRDJ1p-P06Z6DxGAX6cfkqKnL3I0s8lpj0pyJrP6g7POzX8l9kk0GXiPCx7Ypzcx-LmqB5Ck4TWMW_oE3MoS0cQqqO9ZBQmHZJTva_xO3UcRYpQEAh8R6c2-E-SM=w1280",
            "https://lh3.googleusercontent.com/sitesv/APaQ0ST74MgU7iILIPz3i2NhD32HFlppxf0oJEBCeLFpnILjvKu0k_3YPDrbvq-BStYMD8mfaDBfzuSdY9Vz-Xec6HTBvaqreCPPS4bXFsWRD5kFQdCGolGfPqj5D4k5Tju6Tsz_f6vlyENghzhZ5bap8Q9iUCzUH4w_XUuqAfu19Obp6ial2QO_xYFwElQgk1rRu0Al4ciZbEgxYXH3wJCHG8blihGcy8mciMFFUB8=w1280",
            "https://lh3.googleusercontent.com/sitesv/APaQ0SRTK2bVuyP-Ah-rfIHXaHgPVex2m8H1nttkNOVvVuOrCosc6fQf9tX_AfxMr_BlkYYAXaRhswR9tfogIYYRJ28b0z_9K7ES-_hAjPnGLuL_KdDeJSQm5fNaMeNWls8q2SfMBdwJ01XxdKxkzKu_jMRxH9i6tSs4FLdlJWii7oAaHcUwcHKbuAOpoczGSIuOlno_GPiny4jyr2Ci4eCc3BPkCRzjBTPNN04_L5Y=w1280",
            "https://lh3.googleusercontent.com/sitesv/APaQ0SThD1bujzrGlSNQo-4lTPwYZCJmWyF0HrQwl1Vhzghj_1hHvHyUM__aI2tLKoa6aoEAeq6Yt1T9LInigIVhTpI0GW_a6C9MbR9M-xRM9LC8fNDzF5ie0nnUTNWcJKP9KPnE2whGvSZIcHy3pIoBWo3eQsFPOAjsR17YZGzMfS1ocwicw0TAQoaByH71SB6EqZFV-6GymJy_70lT8LqTEB8vCb08iAFeLVX0=w1280",
            "https://lh3.googleusercontent.com/sitesv/APaQ0STunjfCPeocw9_6RWv__Xvrbou_6Yo1YsA1A6xxT2hKj5owj3AMDGkn843prIjme1x0f6eFvxYqimrJVdVfEQBho48vAGViUJFM6xEGtq3kfTA6K8lrhsHfXOZwk1dgV_j7lZ8ikjo70xn90jTClKmCP4-ddk8cNi6i_YqyAw2BhF7TlXKkzen0Oxz4yqTNOcZ4pphvekhsgbq8BXt_VnIcEiRVuPPUykTsgTc=w1280",
            "https://lh3.googleusercontent.com/sitesv/APaQ0STLbEGXJ_ESfjoFBkCas9hTytsKuGgOv5fTjuI2GAPw5ZWrKSqx99FhqwMzIFvvkCVztVXv90BH4ngvdvVy2mX2J5zGLWfX9mYnLT1QNY3IQFcFMIkhN7Iw52LsmOiks6ub_SlTqHovkxdlAiTrS39CXEjxh5GyBsG-rkIISfIkZT2WaknsBWes7wZSBxL9j_n9jmQPiWXiuHqssm6DnWFxVA1H36UzLeAJ=w1280"
          ].map((src, idx) => (
            <div key={idx} className="aspect-video rounded-xl overflow-hidden border border-white/10 cursor-pointer hover:scale-105 transition-transform" onClick={() => window.open(src, '_blank')}>
              <img src={src} className="w-full h-full object-cover" alt={`Tabulação ${idx + 1}`} />
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'lembretes',
      title: 'LEMBRETES (MODELOS)',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { t: 'Envio de Senha', c: 'ENVIO DE SENHA\n- PROTOCOLO:' },
            { t: 'Quitação Débito', c: 'PEDIDO DE BLOQUEIO POR QUITAÇÃO DE DÉBITO\n- PENDÊNCIA:\n- PROTOCOLO:\n- CLIENTE CIENTE DA FATURA PARA PAGAMENTO:' },
            { t: 'Cancelamento SMS', c: 'PEDIDO DE CANCELAMENTO DO SERVIÇO SMS\n- CLIENTE CONFIRMOU TODOS OS DADOS:\n- PROTOCOLO:' },
            { t: 'Cancelamento Cartão', c: 'CANCELAMENTO DO CARTÃO\n- CLIENTE CONFIRMOU OS DADOS:\n- CLIENTE POSSUI FATURAS PARA PAGAMENTO:\n- MOTIVO:\n- PROTOCOLO:' },
            { t: 'Contestação', c: 'CONTESTAÇÃO DE COMPRA\n- DATA DA COMPRA:\n- ESTABELECIMENTO:\n- VALOR:\n- PARCELAMENTO:\n- QUAL CARTÃO:\n- FINAL DO CARTÃO:\n- PROTOCOLO:\n- DESCRIÇÃO:' },
            { t: 'Extrato Bancário', c: 'EXTRATO BANCÁRIO (CHAT)\n- CLIENTE CONFIRMOU OS DADOS\n- CPF / NOME / PRAZO / EMAIL / TELEFONE / AGENCIA / CONTA\n- PROTOCOLO:' }
          ].map((l, i) => (
            <div key={i} className="bg-black/40 p-4 rounded-2xl border border-white/5 relative group">
              <p className="text-[10px] font-black text-blue-400 uppercase mb-2">{l.t}</p>
              <pre className="text-[10px] text-slate-300 whitespace-pre-wrap font-mono bg-black/20 p-2 rounded-lg">{l.c}</pre>
              <button 
                onClick={() => { navigator.clipboard.writeText(l.c); }}
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white p-1.5 rounded-lg"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              </button>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'prazos',
      title: 'PRAZOS DE PROCEDIMENTOS',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div className="space-y-4">
             <h4 className="text-white font-black text-xs uppercase tracking-widest border-b border-white/10 pb-2">Dias Úteis</h4>
             <ul className="space-y-2 text-slate-300">
               <li className="flex justify-between"><span>Solicitação extrato</span> <span className="text-white font-bold">7 dias</span></li>
               <li className="flex justify-between"><span>Entrega / 2ª via cartão</span> <span className="text-white font-bold">15-20 dias</span></li>
               <li className="flex justify-between"><span>Baixa bancária (ext.)</span> <span className="text-white font-bold">2 dias</span></li>
               <li className="flex justify-between"><span>Baixa bancária (saldo)</span> <span className="text-white font-bold">30 min</span></li>
               <li className="flex justify-between"><span>Estorno sistema</span> <span className="text-white font-bold">7 dias</span></li>
             </ul>
          </div>
          <div className="space-y-4">
             <h4 className="text-white font-black text-xs uppercase tracking-widest border-b border-white/10 pb-2">Prazos Corridos</h4>
             <ul className="space-y-2 text-slate-300">
               <li className="flex justify-between"><span>Aprovação cartão/conta</span> <span className="text-white font-bold">45 dias</span></li>
               <li className="flex justify-between"><span>Contestação compra</span> <span className="text-white font-bold">120 dias</span></li>
               <li className="flex justify-between"><span>Estorno fatura</span> <span className="text-white font-bold">1-2 ciclos</span></li>
               <li className="flex justify-between"><span>Cancelamento c/ bloqueio APP</span> <span className="text-white font-bold">30 dias</span></li>
             </ul>
          </div>
        </div>
      )
    },
    {
      id: 'acesso_bio',
      title: 'ACESSO BIO (QUANDO SOLICITAR)',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-3xl">
            <h4 className="text-emerald-400 font-black text-xs uppercase mb-4">Solicitar Sempre em:</h4>
            <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
              <li>Voz divergente / divergência dados</li>
              <li>Desbloqueio (FALCON SEMPRE)</li>
              <li>Envio de senha / 2ª via</li>
              <li>Alteração cadastral</li>
              <li>Contestação / Reenvio</li>
              <li>Reset Token (voz divergente)</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
            <h4 className="text-slate-400 font-black text-xs uppercase mb-4">Apenas Informação (Não Bio):</h4>
            <ul className="text-xs text-slate-500 space-y-1 list-disc list-inside">
              <li>Status cartão / Rastreio</li>
              <li>2ª via fatura / Detalhamento</li>
              <li>Saldos</li>
              <li>Reset Token (TITULAR LIGANDO)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'checklist',
      title: 'CHECKLIST - VOZ, CHAT E RECLAME AQUI',
      content: (
        <div className="p-8 text-center bg-white/5 rounded-3xl border border-white/5">
           <p className="text-xs text-slate-400 mb-6 font-medium">Acesse a planilha oficial de auditoria e checklist para conformidade de atendimentos.</p>
           <a 
            href="https://docs.google.com/spreadsheets/d/1FBBbchHTahvToNScpms-mmRi0s2y4Kp-r3XVVRp9tiw/edit?gid=453381597#gid=453381597" 
            target="_blank" 
            className="inline-flex items-center space-x-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all"
           >
             <span>Acessar Checklist Oficial</span>
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
           </a>
        </div>
      )
    },
    {
      id: 'negociacao',
      title: 'QUANDO TRANSFERIR PARA NEGOCIAÇÃO?',
      content: (
        <div className="space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-3xl">
                <h4 className="text-blue-400 font-black text-xs uppercase mb-4">Atendimento VISA</h4>
                <p className="text-[10px] font-black text-white uppercase mb-2">Transferir Se:</p>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  <li>Status CRELIQ ou PERDA</li>
                  <li>Autorizado por Monitor/Supervisor</li>
                </ul>
                <p className="text-[10px] font-black text-red-400 uppercase mt-4 mb-2">NÃO Transferir:</p>
                <ul className="text-xs text-slate-500 space-y-1 list-disc list-inside">
                  <li>Cliente ATIVO</li>
                  <li>Acordo CRELIQ já realizado</li>
                </ul>
              </div>
              <div className="bg-indigo-500/10 border border-indigo-500/20 p-6 rounded-3xl">
                <h4 className="text-indigo-400 font-black text-xs uppercase mb-4">PRIVATE LABEL</h4>
                <p className="text-[10px] font-black text-white uppercase mb-2">Transferir Se:</p>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  <li>PROTESTO</li>
                  <li>Inadimplente Guardian (reconhece débito)</li>
                  <li>Deseja renegociar parcelamento auto</li>
                </ul>
                <p className="text-[10px] font-black text-red-400 uppercase mt-4 mb-2">Apenas Atendimento:</p>
                <ul className="text-xs text-slate-500 space-y-1 list-disc list-inside">
                  <li>Dúvidas fatura / Explicação Juros</li>
                  <li>Parcelamento Auto Disponível</li>
                  <li>Serviços (Senhas, Cadastral, Faturas)</li>
                </ul>
              </div>
           </div>
           <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 group cursor-pointer" onClick={() => window.open("https://lh3.googleusercontent.com/sitesv/APaQ0SQvpJV9MhVoX6oRUhMq0Q9PsLcjkidC57FldGGV_mY2R7uzfEXorXS_8mVSTrxnnLNLHX9VAr8JEGPJOzAGvr4hV_lw2yDSEe6AD_T4WhArUk2C4can624mtenXUtTBa85i0lNxgqo-nYvFA3igZIYGfslpZRy609IF79ed4me_T4ODbxX92CPWtPLsv2MCHJ1OImeXU1UzcRgxA6OiyGbKseNMlCBnbHEiumk=w1280", "_blank")}>
              <img src="https://lh3.googleusercontent.com/sitesv/APaQ0SQvpJV9MhVoX6oRUhMq0Q9PsLcjkidC57FldGGV_mY2R7uzfEXorXS_8mVSTrxnnLNLHX9VAr8JEGPJOzAGvr4hV_lw2yDSEe6AD_T4WhArUk2C4can624mtenXUtTBa85i0lNxgqo-nYvFA3igZIYGfslpZRy609IF79ed4me_T4ODbxX92CPWtPLsv2MCHJ1OImeXU1UzcRgxA6OiyGbKseNMlCBnbHEiumk=w1280" className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Fluxo Negociação" />
           </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header */}
      <div className="relative h-[300px] w-full bg-gradient-to-br from-emerald-600 via-emerald-900 to-black shrink-0 border-b border-white/10 overflow-hidden">
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
              <span className="text-emerald-200 text-[10px] font-black uppercase tracking-[0.4em]">Auditoria de Atendimento</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              Aba da <br />
              <span className="text-emerald-400">Qualidade</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto p-8 lg:p-12 space-y-16 pb-24">
        
        {/* Painel Classificação Geral */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black italic text-white uppercase tracking-tight flex items-center">
              <span className="w-1.5 h-6 bg-emerald-500 mr-4 rounded-full shadow-[0_0_15px_#10b981]"></span>
              Classificação Geral e Notas - VISA
            </h2>
            <a 
              href="https://docs.google.com/spreadsheets/d/1B0xifoBZmaNlcAHn_HSWjyHmLoN6I-HZ3l2wwwTQSzc/edit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-black text-emerald-400 uppercase tracking-widest border border-emerald-500/30 px-4 py-2 rounded-lg hover:bg-emerald-500/10 transition-all flex items-center space-x-2"
            >
              <span>Abrir Planilha</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>

          <div className="w-full h-[700px] rounded-[3rem] border border-white/10 bg-black/40 overflow-hidden shadow-2xl relative">
            <iframe 
              src={spreadsheetUrl}
              className="w-full h-full border-0"
              title="Classificação Geral PDF"
            />
          </div>
        </section>

        {/* Scripts de Atendimento */}
        <section className="space-y-10">
           <div className="flex items-center space-x-6">
              <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter">Roteiros de Sucesso</h2>
              <div className="h-px flex-1 bg-white/5"></div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Cancelamento Card */}
              <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] space-y-6 group hover:border-emerald-500/30 transition-all">
                 <h3 className="text-sm font-black text-emerald-400 uppercase tracking-widest flex items-center">
                    <span className="mr-2">➡️</span> Cancelamento Conta/Cartão
                 </h3>
                 <div className="space-y-4">
                    <p className="text-[10px] font-black text-slate-500 uppercase">Argumentação Geral</p>
                    <p className="text-sm text-slate-300 italic leading-relaxed">
                      "Com o cartão BrasilCard VISA e a conta digital, você tem mais liberdade e praticidade... possui a segurança do cartão virtual para compras online, e você pode comprar no Brasil e no exterior sem preocupações."
                    </p>
                    <p className="text-[10px] font-black text-slate-500 uppercase mt-4">Com faturas em aberto</p>
                    <p className="text-xs text-slate-400 italic">"Com o cancelamento, você perderá todo o acesso ao aplicativo... Já que você tem X faturas em aberto, é preciso que entre em contato conosco mensalmente..."</p>
                 </div>
              </div>

              {/* SMS Card */}
              <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] space-y-6 group hover:border-blue-500/30 transition-all">
                 <h3 className="text-sm font-black text-blue-400 uppercase tracking-widest flex items-center">
                    <span className="mr-2">➡️</span> Retenção SMS
                 </h3>
                 <div className="space-y-4">
                    <p className="text-[10px] font-black text-slate-500 uppercase">Sondagem de Valor</p>
                    <p className="text-sm text-slate-300 italic leading-relaxed">
                      "Senhor (a): O plano de Facilidade SMS é muito importante pra você! Veja quantos benefícios você tem por apenas 0,23 centavos por dia..."
                    </p>
                    <ul className="text-[10px] text-slate-400 space-y-1 list-disc list-inside">
                      <li>Notificação de fechamento e vencimento</li>
                      <li>Segurança em tempo real (mesmo sem internet)</li>
                      <li>Aumento de limite automático</li>
                    </ul>
                 </div>
              </div>

              {/* Score Baixo Card */}
              <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] space-y-6 group hover:border-amber-500/30 transition-all">
                 <h3 className="text-sm font-black text-amber-400 uppercase tracking-widest flex items-center">
                    <span className="mr-2">➡️</span> Clientes Score Baixo
                 </h3>
                 <div className="space-y-4">
                    <p className="text-sm text-slate-300 italic leading-relaxed">
                      "Senhor(a), sua conta está passando por uma análise interna para liberação... Vamos abrir uma solicitação ao setor responsável."
                    </p>
                    <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                       <p className="text-[9px] font-black text-amber-500 uppercase">Atenção Prioridade</p>
                       <p className="text-[11px] text-slate-200 mt-1 italic">🚩 Sinalize ao supervisor sobre a insatisfação em casos de demora excessiva.</p>
                    </div>
                 </div>
              </div>

              {/* Atendimento VISA Card */}
              <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] space-y-6 group hover:border-indigo-500/30 transition-all">
                 <h3 className="text-sm font-black text-indigo-400 uppercase tracking-widest flex items-center">
                    <span className="mr-2">➡️</span> Atendimento Padrão VISA
                 </h3>
                 <div className="space-y-4">
                    <p className="text-xs text-slate-500 uppercase font-black">Com Informação (Cross-sell)</p>
                    <p className="text-sm text-slate-300 italic leading-relaxed">
                      "Enquanto suas informações carregam, informo que temos parceria com a Ágil (empréstimos) e Cartão Saúde... Você tem interesse?"
                    </p>
                    <p className="text-xs text-slate-500 uppercase font-black mt-4">Encerramento</p>
                    <p className="text-xs text-slate-400 italic">"A BrasilCard agradece seu contato, tenha um excelente dia!"</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Procedimentos Detalhados (Accordions) */}
        <section className="space-y-6">
           <div className="flex items-center space-x-6">
              <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter">Manuais & Procedimentos</h2>
              <div className="h-px flex-1 bg-white/5"></div>
           </div>

           <div className="space-y-3">
              {accordionItems.map((item) => (
                <div key={item.id} className={`border transition-all duration-300 rounded-[2rem] overflow-hidden ${expandedId === item.id ? 'bg-slate-900 border-emerald-500 shadow-2xl' : 'bg-white/5 border-white/5 hover:border-white/10'}`}>
                   <button 
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    className="w-full text-left p-8 flex items-center justify-between group"
                   >
                      <h3 className={`text-lg font-black italic uppercase tracking-tight transition-colors ${expandedId === item.id ? 'text-emerald-400' : 'text-slate-400 group-hover:text-white'}`}>{item.title}</h3>
                      <div className={`transition-transform duration-300 ${expandedId === item.id ? 'rotate-180 text-emerald-400' : 'text-slate-600'}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                   </button>
                   {expandedId === item.id && (
                     <div className="px-8 pb-10 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="h-px bg-white/5 mb-8" />
                        {item.content}
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

export default QualityDashboardView;
