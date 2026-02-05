
import { Game } from './types';

export const GAMES: Game[] = [
  {
    id: '1',
    title: 'Hollow Knight',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400&h=600',
    background: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=1200&h=600',
    lastPlayed: 'Yesterday',
    playtime: '42h 15m',
    status: 'ready',
    genre: ['Metroidvania', 'Souls-like']
  }
];

export interface AppItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  color: string;
}

export const APP_ITEMS: AppItem[] = [
  {
    id: 'que_e_brasilcard',
    title: 'Crediário Visa',
    description: 'Entenda as vantagens, aceitação e o funcionamento do cartão BrasilCard Visa.',
    image: 'https://lh3.googleusercontent.com/d/1EIRTgY05lJX9AHJ-53bjH-J5R8dHVnvz',
    tag: 'Institucional',
    color: 'blue'
  },
  {
    id: 'mural',
    title: 'Mural',
    description: 'Central de informações sobre tipos de cartões, taxas e ferramentas de análise.',
    image: 'https://lh3.googleusercontent.com/d/1EIVKLpY4HcDLtBe1sJ8-o8mTtAOz0TWQ',
    tag: 'Informativo',
    color: 'emerald'
  },
  {
    id: 'manual_colaborador',
    title: 'MANUAL DO COLABORADOR',
    description: 'Guia completo de procedimentos, cultura organizacional e diretrizes para o time BrasilCard.',
    image: 'https://lh3.googleusercontent.com/d/1y6eSpP7NPJ1wkNGyzik0hBgl4UvMrUnP',
    tag: 'Treinamento',
    color: 'orange'
  },
  {
    id: 'horario_pausa',
    title: 'HORÁRIO DE PAUSA',
    description: 'Consulta em tempo real aos horários de intervalo e escalas de descanso da equipe.',
    image: 'https://lh3.googleusercontent.com/d/1EIRTgY05lJX9AHJ-53bjH-J5R8dHVnvz',
    tag: 'Escala',
    color: 'violet'
  },
  {
    id: 'enderecos',
    title: 'ENDEREÇOS',
    description: 'Manual de tratamento de CEPs, identificação de Distritos e regras de Lado Par/Ímpar.',
    image: 'https://lh3.googleusercontent.com/d/1EIRTgY05lJX9AHJ-53bjH-J5R8dHVnvz',
    tag: 'Operacional',
    color: 'cyan'
  },
  {
    id: 'sugestoes',
    title: 'SUGESTÕES',
    description: 'Dicas de análise, tratamento de abreviações e fluxos de verificação de alertas.',
    image: 'https://lh3.googleusercontent.com/d/1EIRTgY05lJX9AHJ-53bjH-J5R8dHVnvz',
    tag: 'Análise',
    color: 'amber'
  },
  {
    id: 'divergencias',
    title: 'DIVERGÊNCIAS',
    description: 'Manual completo de procedimentos de análise, regras de endereço, biometria e política interna.',
    image: 'https://lh3.googleusercontent.com/d/1EIRTgY05lJX9AHJ-53bjH-J5R8dHVnvz',
    tag: 'Operacional',
    color: 'indigo'
  },
  {
    id: 'meta_janeiro_2026',
    title: 'META - JANEIRO 2026',
    description: 'Planejamento estratégico, objetivos comerciais e metas de performance para o início de 2026.',
    image: 'https://lh3.googleusercontent.com/d/1gfmCiDn_j9rg1SmoWvEgte8k-8Bye3s8',
    tag: 'Planejamento',
    color: 'amber'
  },
  {
    id: 'visa_routines_teresina',
    title: 'ROTINAS VISA - TERESINA',
    description: 'Portal de acessos operacionais, auditorias e metas específicas da regional Teresina.',
    image: 'https://lh3.googleusercontent.com/d/1o7NxXceyzugLEdh5ItYjP2cZLx2HA6m-',
    tag: 'Regional',
    color: 'indigo'
  },
  {
    id: 'auditoria_qualidade',
    title: 'AUDITORIA DE QUALIDADE',
    description: 'Monitoramento de performance, oratória e diretrizes de atendimento.',
    image: 'https://lh3.googleusercontent.com/d/1vU0WAYmN27KRGmCOeCAWoiacKuG_pS4E',
    tag: 'Qualidade',
    color: 'teal'
  },
  {
    id: 'aba_da_qualidade',
    title: 'ABA DA QUALIDADE',
    description: 'Dashboard completo de indicadores, notas e classificação geral da equipe.',
    image: 'https://lh3.googleusercontent.com/d/1vU0WAYmN27KRGmCOeCAWoiacKuG_pS4E',
    tag: 'Monitoria',
    color: 'emerald'
  },
  {
    id: 'limite_limite_vencer',
    title: 'LIMITE/ LIMITE E A VENCER',
    description: 'Diretrizes sobre limites de crédito, consultas de saldos e prazos de vencimento.',
    image: 'https://lh3.googleusercontent.com/d/1EIRTgY05lJX9AHJ-53bjH-J5R8dHVnvz',
    tag: 'Financeiro',
    color: 'blue'
  },
  {
    id: 'limite_vencido_prejuizo',
    title: 'A vencer / Limite, A vencer, vencido e Prejuízo',
    description: 'Manual técnico para identificação de saldos, limites, faturas vencidas e classificações de risco.',
    image: 'https://lh3.googleusercontent.com/d/1EIRTgY05lJX9AHJ-53bjH-J5R8dHVnvz',
    tag: 'Financeiro',
    color: 'purple'
  },
  {
    id: 'regra_restricao',
    title: 'Regra Restrição',
    description: 'Diretrizes e normas sobre restrições de crédito e análise de perfil.',
    image: 'https://lh3.googleusercontent.com/d/1iUTVpzUjsnH0KiVPo0WLQY2kTtSWSQHZ',
    tag: 'Diretrizes',
    color: 'red'
  },
  {
    id: 'regra_americanas',
    title: 'Regra Americanas',
    description: 'Listagem de lojas autorizadas e diretrizes visuais da operation Americanas.',
    image: 'https://lh3.googleusercontent.com/d/1ejRuh1XLtZicDKHg37-1thMccKlJo3mF',
    tag: 'Parcerias',
    color: 'red'
  },
  {
    id: 'faq_cliente_americanas',
    title: 'FAQ CLIENTE AMERICANAS',
    description: 'Guia de perguntas e respostas para suporte ao cliente Americanas.',
    image: 'https://lh3.googleusercontent.com/d/1ejRuh1XLtZicDKHg37-1thMccKlJo3mF',
    tag: 'Suporte',
    color: 'red'
  },
  {
    id: 'regra_rs',
    title: 'Regra - Rio Grande do Sul',
    description: 'Diretrizes específicas para as operações e análises no estado do RS.',
    image: 'https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?auto=format&fit=crop&q=80&w=1200&h=600',
    tag: 'Regional',
    color: 'yellow'
  },
  {
    id: 'links_importantes',
    title: 'Links Importantes',
    description: 'Acesso rápido aos sistemas operacionais (Vox, BCA, Ponto, Rocket).',
    image: 'https://lh3.googleusercontent.com/d/1WyAs_CRnF8HBgMsrHn7fywp5Ivn3DZIm',
    tag: 'Sistemas',
    color: 'indigo'
  },
  {
    id: 'funcionalidades_app',
    title: 'FUNCIONALIDADES APP',
    description: 'Guia completo de recursos do aplicativo BrasilCard Digital.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200&h=600',
    tag: 'Digital',
    color: 'indigo'
  },
  {
    id: 'sobre_faturas',
    title: 'SOBRE FATURAS',
    description: 'Exemplos de pagamento total, reprocessamento e créditos em fatura.',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1200&h=600',
    tag: 'Financeiro',
    color: 'cyan'
  },
  {
    id: 'dicas_sucesso',
    title: 'DICAS DE SUCESSO',
    description: 'Melhores práticas e diretrizes para alta performance em atendimento.',
    image: 'https://lh3.googleusercontent.com/d/1EIRTgY05lJX9AHJ-53bjH-J5R8dHVnvz',
    tag: 'Treinamento',
    color: 'amber'
  },
  {
    id: 'encargos_tarifas',
    title: 'ENCARGOS E TARIFAS',
    description: 'Tabela oficial de custos, juros rotativos e taxas de utilização.',
    image: 'https://lh3.googleusercontent.com/d/1EIRTgY05lJX9AHJ-53bjH-J5R8dHVnvz',
    tag: 'Tabela',
    color: 'amber'
  },
  {
    id: 'consolidado_geral',
    title: 'CONSOLIDADO GERAL',
    description: 'Painel de dados estratégicos e relatórios consolidados da operação.',
    image: 'https://lh3.googleusercontent.com/d/1EIRTgY05lJX9AHJ-53bjH-J5R8dHVnvz',
    tag: 'Estratégico',
    color: 'slate'
  }
];
