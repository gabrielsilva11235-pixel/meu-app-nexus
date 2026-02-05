
import React, { useState } from 'react';

interface MuralViewProps {
  onBack: () => void;
}

const MuralView: React.FC<MuralViewProps> = ({ onBack }) => {
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const mainImage = "https://lh3.googleusercontent.com/d/1qf5dCvvUnw6pHnWfEOiZfQEJV8_0LOsU";

  const topics = [
    {
      id: 1,
      title: 'TÓPICO 1: TIPOS DE CARTÕES',
      isRetractable: true,
      content: (
        <div className="space-y-4">
          <p>A BrasilCard oferece ao lojista e cliente três modalidades de cartão: o cartão Padrão, o cartão Private Label e o Cartão com a Bandeira VISA.</p>
          <p>Com o Cartão Padrão da empresa, o cliente consegue efetuar suas compras em todos os estabelecimentos que sejam credenciados com a Brasil Card.</p>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <p className="text-blue-400 font-bold uppercase text-xs mb-2">Exemplo:</p>
            <p className="italic">Cartão Private Label (fidelidade): o cliente compra em qualquer loja credenciada com a empresa, desde que não seja do mesmo ramo de atividade onde o cartão foi gerado.</p>
            <p className="mt-2 text-slate-400 text-sm">Ex: Drogaria Americana: cliente usa em qualquer credenciado, menos em outra farmácia.</p>
          </div>
          <p className="text-emerald-400 font-medium">Com o Cartão Visa, você possui total conveniência, pois ele é aceito em todos os locais, tanto nacionais quanto internacionais, incluindo compras online. Isso significa que você terá a liberdade de usar seu cartão onde quer que esteja, sem preocupações.</p>
        </div>
      )
    },
    {
      id: 2,
      title: 'TÓPICO 2: VALORES E TAXAS',
      isRetractable: true,
      content: (
        <div className="space-y-4">
          <p>Diferente das demais administradoras de cartões de crédito, a Brasil Card não cobra de seus clientes os valores correspondentes à adesão e a anuidade.</p>
          <div className="bg-black/20 p-6 rounded-2xl border border-white/5 space-y-3">
            <h4 className="text-amber-400 font-black text-xs uppercase tracking-widest">Taxa de Utilização do Cartão (U.C.C.)</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex justify-between border-b border-white/5 pb-1"><span>Cartão Visa</span> <span className="text-white font-bold">R$ 19,90</span></li>
              <li className="flex justify-between border-b border-white/5 pb-1"><span>Cartão Padrão</span> <span className="text-white font-bold">R$ 14,90</span></li>
              <li className="flex justify-between border-b border-white/5 pb-1"><span>Private Label (Rede Supermercado)</span> <span className="text-white font-bold">R$ 10,90</span></li>
              <li className="flex justify-between border-b border-white/5 pb-1"><span>Private Label (Rede Farmácias)</span> <span className="text-white font-bold">R$ 9,90</span></li>
              <li className="flex justify-between"><span>Private Label (Independente)</span> <span className="text-white font-bold">R$ 10,90</span></li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'TÓPICO 3: MELHOR DIA DE COMPRA',
      isRetractable: true,
      content: (
        <div className="space-y-4">
          <p>A empresa Brasil Card Visa trabalha com três vencimentos fixos, garantindo até 38 dias para o pagamento:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-600/10 border border-blue-500/20 p-5 rounded-2xl text-center">
              <p className="text-[10px] font-black uppercase text-blue-400 mb-1">Vencimento 05</p>
              <p className="text-white font-bold">A partir do dia 28</p>
            </div>
            <div className="bg-blue-600/10 border border-blue-500/20 p-5 rounded-2xl text-center">
              <p className="text-[10px] font-black uppercase text-blue-400 mb-1">Vencimento 10</p>
              <p className="text-white font-bold">A partir do dia 03</p>
            </div>
            <div className="bg-blue-600/10 border border-blue-500/20 p-5 rounded-2xl text-center">
              <p className="text-[10px] font-black uppercase text-blue-400 mb-1">Vencimento 20</p>
              <p className="text-white font-bold">A partir do dia 13</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: 'TÓPICO 4: CONSULTAS REALIZADAS EM UMA ANÁLISE',
      isRetractable: true,
      content: (
        <div className="space-y-8">
          <div className="space-y-6 text-sm leading-relaxed text-slate-300 italic">
            <p><strong className="text-blue-400 font-black not-italic uppercase tracking-wider">SPC Brasil -</strong> Consulta que nos retornara se o cliente possui restrições, dados corretos e endereço que mora ou já morou.</p>
            <p><strong className="text-blue-400 font-black not-italic uppercase tracking-wider">SCPC -</strong> Consulta que nos retornara se o cliente possui restrições dados corretos e a pontuação do score do cliente.</p>
            <p><strong className="text-blue-400 font-black not-italic uppercase tracking-wider">INFOMAIS -</strong> Consulta que nos retorna telefones, endereços e situação cadastral do CPF do cliente na Receita Federal. Esta consulta é bastante atualizada, então precisamos ficar atento aos dados sempre.</p>
            <p><strong className="text-blue-400 font-black not-italic uppercase tracking-wider">PROMOBANK -</strong> Consulta usada para verificar Renda de clientes aposentados, pensionistas ou que recebem algum outro tipo de auxílio do INSS. Nessa consulta é possível verificar se cliente possui renda boa ou renda comprometida por empréstimos consignados. Cliente com renda abaixo de 1.000,00 reais é feita a confirmação de dados com o cliente, onde é questionado se possui alguma outra renda sem ser o benefício, para a possível liberação.</p>
            <p><strong className="text-blue-400 font-black not-italic uppercase tracking-wider">RAIS -</strong> Usada para consultar o tempo de vínculo e se o cliente realmente é registrado.</p>
            <p><strong className="text-blue-400 font-black not-italic uppercase tracking-wider">ACESSO BIO –</strong> Essa ferramenta é usada para medir o risco de fraude que um cliente pode oferecer durante a análise de credito. É enviado um link por SMS para o cliente, o mesmo fara o procedimento de enviar uma self e foto dos documentos, com esses dados enviados o sistema do Bio gera uma pontuação onde pode ser anulado ou confirmado uma possível fraude.</p>
            <p><strong className="text-blue-400 font-black not-italic uppercase tracking-wider">SCORE -</strong> O score é uma pontuação, que vai de 0 a 1000, que define o quão bom pagador uma pessoa e que está ligado ao seu CPF. Ou seja, é uma pontuação que indica se você tem poucas, médias ou grandes chances de atrasar um pagamento baseado em seu histórico como pagador</p>
            <p><strong className="text-blue-400 font-black not-italic uppercase tracking-wider">RECEITA FEDERAL:</strong> Confirma o nome completo do cliente, data de nascimento, a situação cadastral do CPF do cliente (regular, pendente de regularização, suspenso e cancelado) confirmar também registros de óbito.</p>
            <p><strong className="text-blue-400 font-black not-italic uppercase tracking-wider">BUSCA CEP:</strong> Confirma o CEP e o endereço atual do cadastro no site de busca dos Correios.</p>
            <p><strong className="text-blue-400 font-black not-italic uppercase tracking-wider">VALIDAÇÕES INTERNAS:</strong> Consulta se existem pessoas cadastradas no banco de dados da Brasil Card com mesmo endereço, RG ou telefone.</p>
            <p><strong className="text-blue-400 font-black not-italic uppercase tracking-wider">CONSULTA SCR -</strong> Esta consulta nos retorna informações de relacionamento de clientes com outros bancos e/ou instituições financeiras. Algumas das informações são faturas e limite disponíveis em cartões de créditos, empréstimos e financiamentos de casa e/ou veículos, créditos vencidos ou em atraso, dentre outros. Estas informações são importantes na decisão de aprovação uma vez que, podemos analisar esses dados como uma referência de crédito do cliente com outras empresas.</p>
            <p><strong className="text-blue-400 font-black not-italic uppercase tracking-wider">CONFIRME ONLINE -</strong> Esta consulta nos retorna todos os dados cadastrais do cliente de uma maneira que facilitará a identificação de uma fraude. Se o cadastro apresentar muitas divergências de fraude, a confirmação de dados completa em um telefone encontrado nessa consulta é uma forma de análise eficaz. Caso o telefone da proposta seja diferente da consulta confirme online, é importante que consulte o telefone afim de verificar se o proprietário tem alguma relação com o cliente, o que reduzirá o risco de fraude. Se for possível contato apenas pelo telefone do cadastro, será necessário confirmar informações como endereços, CNPJ e possíveis parentes, encontrados na consulta o que esclarecerá sobre eventuais dúvidas de fraudes.</p>
          </div>

          <div className="flex justify-center pt-8 border-t border-white/5">
            <div className="relative w-full max-w-[500px] aspect-video rounded-[2.5rem] overflow-hidden border border-blue-400/20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] group">
               <div className="absolute inset-0 bg-blue-600/10 blur-[80px] rounded-full scale-75 group-hover:scale-100 transition-all duration-[2000ms] animate-pulse"></div>
               <img src={mainImage} className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" alt="Análise BrasilCard" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#081221] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: 'TÓPICO 5: ANÁLISE DE CRÉDITO',
      isRetractable: true,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-blue-400 font-bold uppercase text-xs italic tracking-tighter border-l-2 border-blue-500 pl-3">Confirmação de dados com cliente</h4>
            <p>Antes de confirmar qualquer dado com o cliente, é indispensável que o analista esteja com as guias do cadastro abertas, de forma com que consiga acompanhar com o cliente os dados que serão confirmados.</p>
            <p>O analista deve usar de muita atenção durante a confirmação dos dados, uma vez que qualquer dado passado errado é sinal de alerta para o nosso cadastro. Lembrando sempre que o risco é de fraude e, que o analista é unicamente responsável pelas informações que coleta e deixa anotadas nos campos de observação.</p>
          </div>
          
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 space-y-5 shadow-inner">
            <h4 className="text-amber-400 font-black text-[10px] uppercase tracking-[0.3em] mb-2 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2 shadow-[0_0_8px_#f59e0b]"></span>
              Observações:
            </h4>
            <ul className="space-y-5 text-sm text-slate-300 italic leading-relaxed">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span>Toda confirmação de dados com o cliente deve ser feita a fim de identificar se é o próprio titular que está solicitando o cadastro;</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span>Na análise de crédito nunca devemos ir direto ao ponto com o cliente (exemplo: se a proposta acusou pessoa cadastrada no mesmo telefone, nunca devemos começar a confirmação de dados perguntando se o cliente conhece determinada pessoa);</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span>A confirmação de dados com o cliente deve ser encarada como uma conversa de <strong>“boas-vindas”</strong> do cliente para com à nossa empresa. Estamos conhecendo o cliente e, esse passo é fundamental! Por isso, no contato inicial com o cliente devemos confirmar o CPF, o nome completo, o endereço, os telefones, a data de nascimento, o nome da mãe, a profissão e a renda do cliente.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span>Na hora de confirmar com o cliente os dados de “endereço divergente nas consultas de SPC Brasil e Confirme Online”, o analista nunca poderá ajudar o cliente a confirmar os endereços divergentes. <strong>Sempre é o cliente quem nos deve passar as informações!</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span>
                <span>A mesma coisa deve ser observada ao confirmar os dados básicos do cliente. <strong>É o cliente quem deve passar os dados ao analista de crédito.</strong> É totalmente indispensável seguir esses procedimentos!</span>
              </li>
              <li className="flex items-start text-emerald-400 font-bold bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/20">
                <span className="mr-3 text-lg">💡</span>
                <span>Antes de negar ou deixar qualquer cadastro pendente, o analista deve se certificar que não existe mais nada que ele possa fazer para aprovar aquele cliente! Isso inclui ter esgotado todas as possibilidades para liberação do cadastro.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#081221] overflow-y-auto animate-in fade-in duration-700 scroll-smooth custom-scrollbar">
      {/* Header */}
      <div className="relative h-[240px] w-full bg-[#0a1830] shrink-0 border-b border-blue-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-transparent to-[#081221]"></div>
        <div className="absolute top-6 left-6 z-50">
          <button 
            onClick={onBack}
            className="flex items-center space-x-3 text-white bg-blue-900/40 hover:bg-blue-600/30 px-5 py-2.5 rounded-xl backdrop-blur-2xl border border-blue-400/20 shadow-2xl transition-all group"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
            <span className="font-black text-[10px] tracking-[0.3em] uppercase italic">Páginas</span>
          </button>
        </div>

        <div className="absolute inset-0 p-10 flex flex-col justify-end max-w-7xl mx-auto w-full">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-400/50 px-4 py-1.5 rounded-full mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-emerald-100 text-[9px] font-black uppercase tracking-[0.4em]">Informativo Institucional</span>
            </div>
            <h1 className="text-6xl font-black tracking-tighter italic text-white leading-none">
              Mural <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-emerald-200 text-glow-strong">BrasilCard</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-5xl w-full mx-auto p-6 lg:p-10 space-y-8 pb-32">
        <div className="space-y-4">
          {topics.map((topic) => (
            <div 
              key={topic.id} 
              className={`border transition-all duration-500 rounded-[2rem] overflow-hidden ${
                expandedId === topic.id ? 'bg-blue-900/10 border-blue-400/50 shadow-xl' : 'bg-white/[0.02] border-white/5 hover:border-blue-400/20'
              }`}
            >
              <button 
                onClick={() => setExpandedId(expandedId === topic.id ? null : topic.id)}
                className="w-full text-left p-8 flex items-center justify-between group cursor-pointer"
              >
                <h3 className={`text-xl font-black italic uppercase tracking-tight transition-colors ${
                  expandedId === topic.id ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                }`}>
                  {topic.title}
                </h3>
                <div className={`transition-transform duration-300 ${expandedId === topic.id ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${
                expandedId === topic.id ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <div className="px-8 pb-10 text-slate-300 font-medium leading-relaxed italic border-t border-white/5 pt-8">
                  {topic.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .text-glow-strong {
          text-shadow: 0 0 15px rgba(52, 211, 153, 0.9), 0 0 30px rgba(52, 211, 153, 0.4);
        }
      `}} />
    </div>
  );
};

export default MuralView;
