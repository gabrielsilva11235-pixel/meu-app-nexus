
import React, { useState } from 'react';

interface DivergenciasViewProps {
  onBack: () => void;
}

const DivergenciasView: React.FC<DivergenciasViewProps> = ({ onBack }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('intro');

  const sections = [
    {
      id: 'intro',
      title: 'DIVERGÊNCIAS E PROCEDIMENTOS DE ANÁLISE',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01m-.01 4h.01',
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed font-medium italic">
            A aprovação de crédito da BrasilCard Visa trabalha sempre visando a parceria estipulada entre cliente e o analista de crédito. Buscando as divergências abaixo, a política de análise da empresa se direciona para extinguir todo o possível risco de fraude e inadimplência que o cliente possa ocasionar.
          </p>
          <div className="bg-indigo-600/10 border border-indigo-500/20 p-8 rounded-[2rem] space-y-4">
            <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-4">Requisitos Mínimos para Adesão:</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4 bg-black/20 p-4 rounded-xl border border-white/5 group-hover:bg-white/5 transition-colors">
                <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"></div>
                <span className="text-sm font-bold text-white uppercase tracking-tight">Máximo 2 restrições no SPC/SCPC ou nenhuma</span>
              </li>
              <li className="flex items-center space-x-4 bg-black/20 p-4 rounded-xl border border-white/5">
                <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"></div>
                <span className="text-sm font-bold text-white uppercase tracking-tight">Idade entre 19 a 82 anos</span>
              </li>
              <li className="flex items-center space-x-4 bg-black/20 p-4 rounded-xl border border-white/5">
                <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"></div>
                <span className="text-sm font-bold text-white uppercase tracking-tight">Situação regular na Receita Federal</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'cidade_consulta',
      title: 'CIDADE DA CONSULTA SPC BRASIL / CONFIRME ONLINE / INFOMAIS',
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] space-y-4">
             <p className="text-slate-300 leading-relaxed italic">
               Em um primeiro momento, o analista deve comparar se a cidade acusada na consulta (Informais e Confirme Online) é a mesma que o cliente mora hoje. <span className="text-emerald-400 font-black">Se for a mesma: APROVA (divergência é anulada).</span>
             </p>
             <p className="text-slate-300 leading-relaxed italic">
               Se o celular informado no cadastro do cliente for o mesmo que retornou na consulta do Confirme Online ou do Informais, a divergência é anulada e o cadastro do cliente poderá ser <span className="text-emerald-400 font-black">APROVADO</span>, porém sempre verificar o acesso bio.
             </p>
             <p className="text-slate-300 leading-relaxed italic">
               Se o celular não retornar, utilizaremos a ferramenta confirme online manual para validar o celular informado na proposta, caso não retorne na ferramenta e a bio esteja ok pode seguir com a proposta.
             </p>
          </div>
        </div>
      )
    },
    {
      id: 'cenario_cidade',
      title: 'CENÁRIO EM QUE A CIDADE DAS CONSULTAS NÃO SEJA A MESMA',
      icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
            <p className="text-white font-bold italic leading-relaxed">
              Verificar a biometria do cliente no acesso bio e se estiver ok podemos aprovar, caso a bio não esteja ok, mas o telefone retorne nas consultas, podemos aprovar.
            </p>
          </div>
          <div className="space-y-4">
             <h4 className="text-[10px] font-black text-red-400 uppercase tracking-widest">Se a biometria e o telefone não anular a divergência de fraude:</h4>
             <ul className="space-y-4 text-slate-300 italic">
               <li className="flex items-start space-x-3">
                 <span className="text-red-500 font-black mt-1">•</span>
                 <span>Ligar para o cliente e confirmar dados, o analista deve questionar o cliente se ele já morou em outra cidade, tendo em vista que <span className="text-white font-black underline">não pode passar dados</span> como: nome da rua, bairro, número etc.</span>
               </li>
               <li className="flex items-start space-x-3">
                 <span className="text-red-500 font-black mt-1">•</span>
                 <span>Em situações que a biometria não esteja ok e o cliente não confirmar o endereço divergente devemos <span className="text-red-400 font-black uppercase tracking-widest">NEGAR</span> o cadastro.</span>
               </li>
               <li className="flex items-start space-x-3">
                 <span className="text-emerald-500 font-black mt-1">•</span>
                 <span>Só podemos aprovar o cadastro, caso o cliente confirmar o endereço completo <span className="text-emerald-400 font-black underline">sem ajuda do analista/lojistas/terceiros</span>.</span>
               </li>
             </ul>
          </div>
        </div>
      )
    },
    {
      id: 'private_visa',
      title: 'O CLIENTE JÁ POSSUI CARTÃO PRIVATE E ESTÁ SOLICITANDO O CARTÃO VISA',
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
      content: (
        <div className="space-y-6">
          <p className="text-slate-400 text-xs font-black uppercase tracking-widest italic border-l-2 border-indigo-500 pl-4">Verificação de Histórico Conforme Private:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-2">
              <span className="text-[9px] font-black text-red-500 uppercase">Negação</span>
              <p className="text-sm text-slate-200 italic">Aprovado há menos de 20 dias e cliente restrito.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-2">
              <span className="text-[9px] font-black text-emerald-500 uppercase">Aprovação</span>
              <p className="text-sm text-slate-200 italic">Histórico de pagamento existente e positivo.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-2">
              <span className="text-[9px] font-black text-red-500 uppercase">Negação</span>
              <p className="text-sm text-slate-200 italic">Cartão aprovado com 1ª fatura ainda a vencer.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-2">
              <span className="text-[9px] font-black text-red-500 uppercase">Negação</span>
              <p className="text-sm text-slate-200 italic">Histórico ruim (pagamento mínimo, atraso, negociação, parcelamento ou reprocesso).</p>
            </div>
          </div>
          <div className="p-6 bg-amber-600/10 border border-amber-500/20 rounded-2xl space-y-3">
             <h4 className="text-xs font-black text-amber-500 uppercase tracking-tighter">Protesto - Critérios de Exceção:</h4>
             <p className="text-slate-300 text-xs italic">Bloqueio por inadimplência após o 8º dia de atraso. Protesto após 2 faturas consecutivas sem pagamento, EXCETO:</p>
             <ul className="text-xs text-amber-200 font-bold space-y-1 pl-4">
                <li>• Valor abaixo de R$ 50,00</li>
                <li>• Juro de reprocesso</li>
                <li>• Fatura da Guardian (Inadimplente Guardian)</li>
             </ul>
          </div>
        </div>
      )
    },
    {
      id: 'nome_mae_spc',
      title: 'NOME DA MÃE NO SCPC / SPC BRASIL',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 space-y-4 text-slate-300 italic">
            <p>O nome da mãe é de acordo com a consulta SCPC ou SPC BRASIL. Se estiver abreviado ou não retornar, verifica o nome da mãe no documento.</p>
            <p>Se não constar documento e o nome da mãe abreviado for com a mesma inicial do sobrenome do titular, pode alterar.</p>
            <p>Se retornar sem sobrenome, verificar no documento e caso não tenha biometria, tentar contato para confirmar dados e solicitar documentação.</p>
            <p className="text-emerald-400 font-black">Se retornar em branco e não possuir erro ortográfico, pode prosseguir sem pendência.</p>
          </div>
        </div>
      )
    },
    {
      id: 'endereco_problemas',
      title: 'STATUS DE CLIENTES NO MESMO ENDEREÇO CONSIDERADOS PROBLEMAS',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
             {['Protesto', 'Inadimplente', 'Aprovado s/ uso < 30 dias', '1ª Fatura a Vencer', 'Bloqueado p/ Fraude', 'Processo Judicial', 'Prescrição inativa', 'Reprovado Risco Fraude', 'Negociação/Parcelamento', 'Inadimplente Guardian'].map((status, idx) => (
               <div key={idx} className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center space-x-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{status}</span>
               </div>
             ))}
          </div>
          <div className="p-8 bg-indigo-600/10 border border-indigo-500/20 rounded-[2.5rem] space-y-4">
             <p className="text-slate-300 text-sm italic leading-relaxed">
               Divergências anuladas com biometria conforme a data da proposta. Se não possuir bio válida:
             </p>
             <ul className="space-y-3 text-white font-bold italic">
               <li className="flex items-start space-x-3">
                 <span className="text-indigo-500">•</span>
                 <span>Até 4 pessoas: Prosseguir detalhando no lembrete.</span>
               </li>
               <li className="flex items-start space-x-3">
                 <span className="text-indigo-500">•</span>
                 <span>Mais de 4 pessoas: Analista deve ligar e confirmar complemento de endereço.</span>
               </li>
               <li className="flex items-start space-x-3">
                 <span className="text-red-500">•</span>
                 <span>Se informar que não possui complemento: <span className="text-red-400 underline uppercase tracking-widest">NEGAR</span>.</span>
               </li>
             </ul>
          </div>
        </div>
      )
    },
    {
      id: 'menor_21',
      title: 'CLIENTE COM IDADE MENOR QUE 21 ANOS',
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197',
      content: (
        <div className="p-8 bg-amber-600/10 border border-amber-500/20 rounded-[2.5rem] space-y-4">
           <p className="text-slate-200 font-medium italic leading-relaxed">
             Clientes que oferecem um risco maior de inadimplência. No Crediário Visa, sempre consulte as nossas tabelas de valores para verificar o valor de aprovação ou se vai negar.
           </p>
        </div>
      )
    },
    {
      id: 'renda_baixa',
      title: 'CLIENTE COM RENDA BAIXA',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      content: (
        <div className="space-y-6">
          <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-4">
             {/* Escape < symbol in JSX to fix parsing error */}
             <p className="text-slate-300 italic">Renda &lt; R$ 1.000,00: Ligar e confirmar renda extra. Verificar com supervisor.</p>
             <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] pt-4 border-t border-white/5">Liberações acima de R$ 2.000,00:</h4>
             {/* Escape < symbol in JSX to fix parsing error */}
             <p className="text-slate-300 italic">Renda &lt; R$ 1.518,00: Ligar e confirmar renda extra. OBRIGATÓRIO verificar com supervisor.</p>
             <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                <p className="text-xs text-red-200 font-bold italic">Sem sucesso no contato: Verificar valor com supervisor e colocar visto no lembrete.</p>
             </div>
             <p className="text-slate-400 text-xs italic">Desempregados ou Estagiários: Entrar em contato para verificar outra renda.</p>
          </div>
        </div>
      )
    },
    {
      id: 'clientes_restritos',
      title: 'CLIENTES RESTRITOS',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      content: (
        <div className="space-y-6">
           <div className="bg-slate-900 border border-white/10 p-10 rounded-[3rem] space-y-6">
              <h4 className="text-xs font-black text-white uppercase tracking-[0.4em] mb-4">Regras de Aprovação:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Aprovar somente > 21 anos', 'Até 2 restrições em 60 meses', 'Score não obrigatório', 'NEGAR sem registro SCR', 'NEGAR c/ linhas SCR A VENCER/PREJUÍZO', 'NEGAR estados RJ, SC, RS'].map((regra, i) => (
                  <li key={i} className="flex items-center space-x-3 text-xs text-slate-400 italic">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    <span>{regra}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-red-600/10 border border-red-500/20 rounded-2xl text-center">
                 <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">ATENÇÃO: Não liberamos para restrito com renda baixa.</p>
              </div>
              <div className="pt-6 border-t border-white/5">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Ordem de Análise:</p>
                <p className="text-sm text-indigo-400 font-bold">1º SCR → 2º Restrições → 3º Promobank (Aposentados)</p>
              </div>
           </div>
        </div>
      )
    },
    {
      id: 'perda_extravio',
      title: 'PERDA E EXTRAVIO DE DOCUMENTOS / ESTELIONATO',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      content: (
        <div className="space-y-6">
           <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-4">
              <p className="text-slate-300 italic">Confirmar se o celular é o mesmo do Confirme Online ou Info Mais para anular divergência.</p>
              <p className="text-slate-300 italic">Caso contrário, verificar Acesso Bio.</p>
              <div className="p-6 bg-red-600/10 border border-red-500/20 rounded-2xl">
                 <h4 className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-2">Estelionato e Documentos Clonados</h4>
                 <p className="text-sm text-slate-200 italic font-bold">Análise rigorosa. Obrigatório entrar em contato, realizar confirmação total e verificar com supervisor.</p>
              </div>
           </div>
        </div>
      )
    },
    {
      id: 'acesso_bio_10',
      title: 'ACESSO BIO + 10',
      icon: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z',
      content: (
        <div className="space-y-6">
           <div className="p-8 bg-black/40 border border-white/10 rounded-[2.5rem] space-y-6">
              <p className="text-slate-300 italic text-sm">Bio +10 até +20: Score neutro. Tentar todos os números. Sem contato/confirmação: <span className="text-red-400 font-black">NEGAR</span>.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl"><p className="text-[9px] font-black text-emerald-400 uppercase">Pontuação > +20</p><p className="text-xs font-bold">APROVAR!</p></div>
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl"><p className="text-[9px] font-black text-emerald-400 uppercase">Pontuação +10 c/ Fone OK</p><p className="text-xs font-bold">APROVAR!</p></div>
                <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl"><p className="text-[9px] font-black text-amber-400 uppercase">Pontuação +10 c/ Fone Erro</p><p className="text-xs font-bold">CONFIRMAR DADOS SENSÍVEIS</p></div>
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl"><p className="text-[9px] font-black text-red-400 uppercase">Pontuação +10 s/ BIO</p><p className="text-xs font-bold underline">NEGAR (RISCO FRAUDE)</p></div>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl">
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Aviso sobre Documentação:</p>
                 <p className="text-xs italic text-slate-400">Xerox, foto de tela ou documentos embaçados só aceitar se telefone confirmar no ONLINE. Caso contrário, solicitar refazer.</p>
              </div>
           </div>
        </div>
      )
    },
    {
      id: 'regras_inadimplencia',
      title: 'REGRAS DE INADIMPLÊNCIA',
      icon: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      content: (
        <div className="space-y-4 italic text-slate-300">
           <p>Utilizar a tabela SCORE como auxiliar para decidir limite ou negação.</p>
           <p>Se inadimplente: NEGAR (Aguardando mais históricos de pagamentos).</p>
           <p>Se cartão ativo with 1ª fatura a vencer: NEGAR (Cliente with primeira fatura a vencer).</p>
        </div>
      )
    },
    {
      id: 'mesmo_endereco_regra',
      title: 'CLIENTE NO MESMO ENDEREÇO',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      content: (
        <div className="space-y-6">
           <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-6">
              <div className="space-y-2">
                 <h4 className="text-[10px] font-black text-indigo-400 uppercase">Pessoa Aprovada:</h4>
                 <p className="text-sm italic text-slate-300">Histórico OK: APROVA. Com problema (restrição/protesto): seguir regra de pessoa no mesmo endereço.</p>
              </div>
              <div className="space-y-2">
                 <h4 className="text-[10px] font-black text-indigo-400 uppercase">Pessoa Negada/Pendente:</h4>
                 <p className="text-sm italic text-slate-300">Verificar bio do cliente e das pessoas no endereço. Ambas OK: APROVA.</p>
                 <p className="text-sm italic text-slate-300">Bio negativa conforme proposta + sem sucesso no contato: <span className="text-red-400">NEGAR</span>.</p>
                 <p className="text-sm italic text-slate-300">Mais de 4 pessoas com problema no endereço: Analisar risco total.</p>
              </div>
           </div>
        </div>
      )
    },
    {
      id: 'endereco_20',
      title: 'ENDEREÇO/TELEFONE SUPERIOR OU IGUAL A 20 PESSOAS',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      content: (
        <div className="space-y-4 text-slate-300 italic">
           <p>Condomínios/Apartamentos: Logradouro igual, mas número/bloco diferente. Classificar como "ENDEREÇO SEMELHANTE".</p>
           <p className="text-red-400 font-bold">NUNCA deixar entrega nos correios (Risco extravio).</p>
           <p>Telefone DEVE ser do cliente ou parente with ciência total.</p>
        </div>
      )
    },
    {
      id: 'quantidade_consultas',
      title: 'QUANTIDADE DE CONSULTAS',
      icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      content: (
        <div className="space-y-6">
           <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-6">
              <p className="text-sm italic text-slate-300">Considerado normal até 05 consultas em 30 dias de locais diferentes.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-[9px] font-black text-slate-500 uppercase">6 a 7 consultas (Até Score C)</p>
                    <p className="text-xs font-bold text-white">Prosseguir sem supervisor.</p>
                 </div>
                 <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
                    <p className="text-[9px] font-black text-amber-500 uppercase">6 a 7 consultas (Score D ou E)</p>
                    <p className="text-xs font-bold text-amber-200">OBRIGATÓRIO visto supervisor.</p>
                 </div>
              </div>
              <p className="text-sm italic text-slate-300">8 Consultas: Exige histórico private ou SCR ativo + Supervisor. Acima de 8: <span className="text-red-400">NEGAR</span>.</p>
              <div className="bg-blue-900/20 p-4 rounded-xl border border-blue-500/20">
                 <p className="text-[9px] font-black text-blue-400 uppercase mb-2">Consultas que NÃO contam:</p>
                 <p className="text-[10px] text-slate-400 font-bold">Seguros NãoVida, MG-MBE/BrasilCard, Cobuccio, Bancos Múltiplos Bcard.</p>
              </div>
           </div>
        </div>
      )
    },
    {
      id: 'politica_interna',
      title: 'POLÍTICA INTERNA',
      icon: 'M12 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
      content: (
        <div className="space-y-6">
           <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-white/10 space-y-4 text-slate-300 italic">
              <p>Resposta padrão para negar sem constranger ou expor o cliente judicialmente.</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[10px] font-bold uppercase tracking-tight text-slate-500">
                <span>• Excesso consultas</span>
                <span>• Fraude comprovada</span>
                <span>• Processo judicial</span>
                <span>• Idade > 83 anos</span>
                <span>• Pagando mínimo faturas</span>
                <span>• Protesto</span>
                <span>• Restrito grupo</span>
                {/* Escape < symbol in JSX to fix parsing error on line 371 */}
                <span>• Renda &lt; R$ 1.000</span>
              </div>
           </div>
        </div>
      )
    },
    {
      id: 'cliente_rogo',
      title: 'CLIENTE “À ROGO”',
      icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
      content: (
        <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-4">
           <p className="text-slate-200 italic leading-relaxed">
             Clientes não alfabetizados. <span className="text-white font-black underline">OBRIGATÓRIO</span> confirmar todos os dados, reconhecimento da solicitação e uso próprio devido alto risco.
           </p>
        </div>
      )
    },
    {
      id: 'verificacao_docs',
      title: 'CASOS ONDE É NECESSÁRIO VERIFICAR A DOCUMENTAÇÃO',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      content: (
        <div className="space-y-4 italic text-slate-300 text-sm">
           <p>• Retorno inconclusivo / Biometria with pontuação &lt; +20.</p>
           <p>• Propostas with SCR Alto, Extravio, Endereço Divergente.</p>
           <p>• Clientes a partir de 70 anos (verificar assinatura e estado do doc).</p>
           <p className="text-emerald-400 font-bold">Foto da foto ou Xerox pode prosseguir se os dados baterem.</p>
        </div>
      )
    },
    {
      id: 'cnpj_scr',
      title: 'DIVERGÊNCIAS CNPJ E SCR',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      content: (
        <div className="space-y-6">
           <div className="p-8 bg-black/40 border border-white/10 rounded-[2.5rem] space-y-6">
              <div>
                 <h4 className="text-xs font-black text-indigo-400 uppercase mb-2">CNPJ Ativo:</h4>
                 {/* Escape < symbol in JSX to avoid parsing errors */}
                 <p className="text-xs text-slate-400 italic">QSA &lt; 50k ou fone OK: APROVA. QSA > 50k: Confirmar dados.</p>
              </div>
              <div>
                 <h4 className="text-xs font-black text-indigo-400 uppercase mb-2">SCR Limite Alto:</h4>
                 {/* Escape < symbol in JSX to avoid parsing errors */}
                 <p className="text-xs text-slate-400 italic">SCR &lt; 15k: APROVA. SCR > 40k: Confirmar dados sensíveis mesmo c/ fone OK.</p>
              </div>
              <div className="p-4 bg-emerald-600/10 border border-emerald-500/20 rounded-xl text-center">
                 <p className="text-[10px] font-black text-emerald-400 uppercase">BIO +20 ou FINALIZADO anula divergência de SCR e CNPJ independe do valor.</p>
              </div>
           </div>
        </div>
      )
    },
    {
      id: 'regras_endereco_bca',
      title: 'REGRAS ENDEREÇO',
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
      content: (
        <div className="space-y-4 text-xs text-slate-300 italic">
           <p>• CEP a ser desativado: Pode prosseguir sem contato.</p>
           <p>• Bairro diferente no Busca CEP: Pode alterar sem ligar.</p>
           <p>• Lote diferente do número: Obrigatório ligar.</p>
           <p>• Endereço Rural completo no Busca CEP: Aprova sem ligar.</p>
           <p>• Complemento Comercial (Loja, Igreja, etc): <span className="text-red-400">NÃO ACEITO</span>. Solicitar outro.</p>
           <p className="text-indigo-400 font-bold">CEP retorna apenas Bairro/Cidade: Classificar como DISTRITO.</p>
           <p className="text-amber-500 font-bold">Lado Par/Ímpar: Atenção máxima ao número, bairro e CEP mudam conforme o lado.</p>
        </div>
      )
    },
    {
      id: 'mae_abreviado',
      title: 'NOME DA MÃE (ABREVIADO)',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      content: (
        <div className="space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-500/5 border border-red-500/10 p-6 rounded-2xl">
                 <h4 className="text-[10px] font-black text-red-500 uppercase mb-3 tracking-widest">Quando NÃO deixar?</h4>
                 <p className="text-xs text-slate-400 italic">Sinal de alerta! Verificar docs e nome do cliente imediatamente para expandir sobrenomes.</p>
              </div>
              <div className="bg-emerald-500/5 border border-emerald-500/10 p-6 rounded-2xl">
                 <h4 className="text-[10px] font-black text-emerald-500 uppercase mb-3 tracking-widest">Quando deixar?</h4>
                 <p className="text-xs text-slate-400 italic">Somente se o documento estiver abreviado e o cliente também possuir sobrenome abreviado.</p>
              </div>
           </div>
        </div>
      )
    },
    {
      id: 'receita_federal',
      title: 'PROBLEMAS RECEITA FEDERAL / PRAZOS',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      content: (
        <div className="space-y-6">
           <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 space-y-4">
              <p className="text-sm italic text-slate-300">CPF Não Existe: Negar ("CPF COM PROBLEMA NA RECEITA").</p>
              <p className="text-sm italic text-slate-300">CPF Divergente (Outra Pessoa): Ligar em todos os números para o titular do CPF.</p>
              <div className="pt-6 border-t border-white/5">
                 <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-4">Prazos de Consulta Obrigatórios:</h4>
                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    <div className="p-3 bg-black/40 rounded-xl border border-white/5"><p className="text-white font-black">5 DIAS</p><p className="text-[8px] text-slate-500">SCPC</p></div>
                    <div className="p-3 bg-black/40 rounded-xl border border-white/5"><p className="text-white font-black">15 DIAS</p><p className="text-[8px] text-slate-500">SPC BRASIL</p></div>
                    <div className="p-3 bg-black/40 rounded-xl border border-white/5"><p className="text-white font-black">30 DIAS</p><p className="text-[8px] text-slate-500">INFOMAIS</p></div>
                    <div className="p-3 bg-black/40 rounded-xl border border-white/5"><p className="text-white font-black">30 DIAS</p><p className="text-[8px] text-slate-500">SCR</p></div>
                 </div>
              </div>
           </div>
        </div>
      )
    },
    {
      id: 'perfil_debito',
      title: 'APROVAÇÃO DE CLIENTES, COM PERFIL DÉBITO',
      icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
      content: (
        <div className="space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-500/5 border border-red-500/10 p-6 rounded-2xl">
                 <h4 className="text-[10px] font-black text-red-500 uppercase mb-4 tracking-widest">Vou NEGAR em caso de:</h4>
                 <ul className="text-xs text-slate-500 space-y-2 italic">
                   <li>• Empresário / Pensionista</li>
                   <li>• Promobank Deficiente / Suspeita Fraude</li>
                   <li>• 18 anos ou Acima de 82 anos</li>
                   <li>• Irregular na Receita Federal / +70 anos</li>
                 </ul>
              </div>
              <div className="bg-emerald-500/5 border border-emerald-500/10 p-6 rounded-2xl">
                 <h4 className="text-[10px] font-black text-emerald-500 uppercase mb-4 tracking-widest">Pode APROVAR:</h4>
                 <ul className="text-xs text-slate-500 space-y-2 italic">
                   <li>• Bio +10 até +20 Inconclusivo</li>
                   <li>• Cliente sem biometria</li>
                 </ul>
              </div>
           </div>
           <div className="p-6 bg-amber-600/10 border border-amber-500/20 rounded-2xl text-center">
              <p className="text-xs text-amber-400 font-bold uppercase italic">Clientes with regras para aprovação de limite NÃO devem ser aprovados como débito!</p>
           </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f1a] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Hero Header */}
      <div className="relative h-[320px] w-full bg-gradient-to-br from-indigo-700 via-blue-900 to-black shrink-0 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_70%)]"></div>
        
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
              <span className="text-indigo-200 text-[10px] font-black uppercase tracking-[0.4em]">Manual de Operação</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase leading-none">
              Divergências
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-5xl w-full mx-auto p-6 lg:p-12 space-y-4 pb-32">
        {sections.map((section) => (
          <div 
            key={section.id} 
            className={`border transition-all duration-300 rounded-[2.5rem] overflow-hidden ${
              expandedSection === section.id ? 'bg-slate-900 border-indigo-500 shadow-[0_20px_40px_-20px_rgba(99,102,241,0.2)]' : 'bg-white/5 border-white/5 hover:border-white/10'
            }`}
          >
            <button 
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              className="w-full text-left p-8 lg:p-10 flex items-center justify-between group"
            >
              <div className="flex items-center space-x-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                  expandedSection === section.id ? 'bg-indigo-600 text-white shadow-[0_0_15px_#4f46e5]' : 'bg-white/5 text-slate-500 group-hover:text-white'
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={section.icon} />
                  </svg>
                </div>
                <h3 className={`text-xl lg:text-2xl font-black italic uppercase tracking-tight transition-colors leading-tight ${
                  expandedSection === section.id ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                }`}>
                  {section.title}
                </h3>
              </div>
              <div className={`transition-transform duration-300 ml-4 shrink-0 ${expandedSection === section.id ? 'rotate-180 text-indigo-400' : 'text-slate-600'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {expandedSection === section.id && (
              <div className="px-8 lg:px-10 pb-12 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="h-px bg-white/5 mb-10" />
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="h-24 shrink-0" />
    </div>
  );
};

export default DivergenciasView;
