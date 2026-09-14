export type Padrao = { slug: string; titulo: string; en: string };

export type Categoria = {
  id: string;
  titulo: string;
  en: string;
  descricao: string;
  padroes: Padrao[];
};

export const categorias: Categoria[] = [
  {
    id: 'entendimento-e-tomada-de-decisao',
    titulo: 'Entendimento e tomada de decisão',
    en: 'Sense-Making and Decision-Making',
    descricao:
      'Padrões para entender a situação, escolher o que importa e decidir de forma colaborativa.',
    padroes: [
      { slug: 'responder-a-motivadores-organizacionais', titulo: 'Responder a motivadores organizacionais', en: 'Respond to Organizational Drivers' },
      { slug: 'navegar-pela-tensao', titulo: 'Navegar pela tensão', en: 'Navigate via Tension' },
      { slug: 'descrever-motivadores-organizacionais', titulo: 'Descrever motivadores organizacionais', en: 'Describe Organizational Drivers' },
      { slug: 'determinar-requisitos', titulo: 'Determinar requisitos', en: 'Determine Requirements' },
      { slug: 'tomada-de-decisao-por-consentimento', titulo: 'Tomada de decisão por consentimento', en: 'Consent Decision-Making' },
      { slug: 'testar-se-argumentos-qualificam-como-objecoes', titulo: 'Testar se argumentos qualificam como objeções', en: 'Test if Arguments Qualify as Objections' },
      { slug: 'resolver-objecoes', titulo: 'Resolver objeções', en: 'Resolve Objections' },
      { slug: 'avaliar-e-evoluir-politicas', titulo: 'Avaliar e evoluir políticas', en: 'Evaluate and Evolve Policies' },
      { slug: 'cocriar-propostas', titulo: 'Cocriar propostas', en: 'Co-Create Proposals' },
      { slug: 'formacao-de-proposta', titulo: 'Formação de proposta', en: 'Proposal Forming' },
      { slug: 'tomada-de-decisao-raciocinada', titulo: 'Tomada de decisão raciocinada', en: 'Reasoned Decision-Making' },
      { slug: 'selecao-de-papel', titulo: 'Seleção de papel', en: 'Role Selection' },
    ],
  },
  {
    id: 'organizacoes-evolutivas',
    titulo: 'Organizações evolutivas',
    en: 'Evolving Organizations',
    descricao:
      'Padrões para desenvolver domínios, estratégia e sistemas que evoluem com o contexto.',
    padroes: [
      { slug: 'esclarecer-e-desenvolver-dominios', titulo: 'Esclarecer e desenvolver domínios', en: 'Clarify and Develop Domains' },
      { slug: 'gerenciar-o-sistema-todo', titulo: 'Gerenciar o sistema todo', en: 'Manage the Whole System' },
      { slug: 'permitir-autonomia', titulo: 'Permitir autonomia', en: 'Enable Autonomy' },
      { slug: 'colaborar-em-dependencias', titulo: 'Colaborar em dependências', en: 'Collaborate on Dependencies' },
      { slug: 'esclarecer-e-desenvolver-estrategia', titulo: 'Esclarecer e desenvolver estratégia', en: 'Clarify and Develop Strategy' },
      { slug: 'projetar-sistemas-adaptaveis', titulo: 'Projetar sistemas adaptáveis', en: 'Design Adaptable Systems' },
      { slug: 'alinhar-o-fluxo', titulo: 'Alinhar o fluxo', en: 'Align Flow' },
      { slug: 'sistemas-abertos', titulo: 'Sistemas abertos', en: 'Open Systems' },
      { slug: 'mapeamento-de-requisitos', titulo: 'Mapeamento de requisitos', en: 'Requirements Mapping' },
    ],
  },
  {
    id: 'desenvolvimento-entre-pares',
    titulo: 'Desenvolvimento entre pares',
    en: 'Peer Development',
    descricao: 'Padrões para aprender e crescer junto com outras pessoas.',
    padroes: [
      { slug: 'pedir-ajuda', titulo: 'Pedir ajuda', en: 'Ask for Help' },
      { slug: 'devolutiva-entre-pares', titulo: 'Devolutiva entre pares', en: 'Peer Feedback' },
      { slug: 'revisao-entre-pares', titulo: 'Revisão entre pares', en: 'Peer Review' },
      { slug: 'plano-de-desenvolvimento', titulo: 'Plano de desenvolvimento', en: 'Development Plan' },
    ],
  },
  {
    id: 'viabilizadores-da-cocriacao',
    titulo: 'Viabilizadores da cocriação',
    en: 'Enablers of Co-Creation',
    descricao: 'Padrões que criam as condições culturais e financeiras para colaborar bem.',
    padroes: [
      { slug: 'participacao-engajada', titulo: 'Participação engajada', en: 'Artful Participation' },
      { slug: 'acordar-valores', titulo: 'Acordar valores', en: 'Agree On Values' },
      { slug: 'envolver-os-afetados', titulo: 'Envolver os afetados', en: 'Involve Those Affected' },
      { slug: 'investir-em-aprendizado-continuo', titulo: 'Investir em aprendizado contínuo', en: 'Invest in Ongoing Learning' },
      { slug: 'quebrar-acordos', titulo: 'Quebrar acordos', en: 'Breaking Agreements' },
      { slug: 'transparencia-financeira', titulo: 'Transparência financeira', en: 'Financial Transparency' },
      { slug: 'compartilhar-custos-e-ganhos', titulo: 'Compartilhar custos e ganhos', en: 'Share Costs and Gains' },
      { slug: 'salario-aberto', titulo: 'Salário aberto', en: 'Open Salary' },
      { slug: 'papel-de-apoio', titulo: 'Papel de apoio', en: 'Support Role' },
      { slug: 'estatuto', titulo: 'Estatuto', en: 'Bylaws' },
    ],
  },
  {
    id: 'construir-organizacoes',
    titulo: 'Construir organizações',
    en: 'Building Organizations',
    descricao: 'Padrões estruturais: círculos, papéis, ligações e tipos de equipe.',
    padroes: [
      { slug: 'circulo', titulo: 'Círculo', en: 'Circle' },
      { slug: 'papel', titulo: 'Papel', en: 'Role' },
      { slug: 'ligacao', titulo: 'Ligação', en: 'Linking' },
      { slug: 'ligacao-dupla', titulo: 'Ligação dupla', en: 'Double Linking' },
      { slug: 'representante', titulo: 'Representante', en: 'Representative' },
      { slug: 'circulo-delegado', titulo: 'Círculo delegado', en: 'Delegate Circle' },
      { slug: 'circulo-de-servico', titulo: 'Círculo de serviço', en: 'Service Circle' },
      { slug: 'equipe-aberta', titulo: 'Equipe aberta', en: 'Open Team' },
      { slug: 'equipe-de-apoio', titulo: 'Equipe de apoio', en: 'Helping Team' },
    ],
  },
  {
    id: 'introduzir-o-s3',
    titulo: 'Introduzir o S3',
    en: 'Bringing in S3',
    descricao: 'Padrões para começar e conduzir a mudança sem impor.',
    padroes: [
      { slug: 'criar-um-sistema-de-puxada-para-a-mudanca-organizacional', titulo: 'Criar um sistema de puxada para a mudança organizacional', en: 'Create a Pull System for Organizational Change' },
      { slug: 'adaptar-padroes-ao-contexto', titulo: 'Adaptar padrões ao contexto', en: 'Adapt Patterns to Context' },
      { slug: 'seja-a-mudanca', titulo: 'Seja a mudança', en: 'Be the Change' },
      { slug: 'convidar-a-mudanca', titulo: 'Convidar a mudança', en: 'Invite Change' },
      { slug: 'adotar-os-sete-principios', titulo: 'Adotar os sete princípios', en: 'Adopt the Seven Principles' },
      { slug: 'espaco-aberto-para-a-mudanca', titulo: 'Espaço aberto para a mudança', en: 'Open Space for Change' },
    ],
  },
  {
    id: 'definir-acordos',
    titulo: 'Definir acordos',
    en: 'Defining Agreements',
    descricao: 'Padrões para documentar decisões, políticas e entregáveis.',
    padroes: [
      { slug: 'contrato-para-colaboracao-bem-sucedida', titulo: 'Contrato para colaboração bem-sucedida', en: 'Contract for Successful Collaboration' },
      { slug: 'registrar-decisoes-de-governanca', titulo: 'Registrar decisões de governança', en: 'Record Governance Decisions' },
      { slug: 'descrever-entregaveis', titulo: 'Descrever entregáveis', en: 'Describe Deliverables' },
      { slug: 'definir-e-monitorar-metricas', titulo: 'Definir e monitorar métricas', en: 'Define and Monitor Metrics' },
      { slug: 'livro-de-registro', titulo: 'Livro de registro', en: 'Logbook' },
      { slug: 'guardiao-do-registro', titulo: 'Guardião(ã) do registro', en: 'Logbook Keeper' },
    ],
  },
  {
    id: 'formatos-de-reuniao',
    titulo: 'Formatos de reunião',
    en: 'Meeting Formats',
    descricao: 'Formatos de encontro para diferentes propósitos.',
    padroes: [
      { slug: 'retrospectiva', titulo: 'Retrospectiva', en: 'Retrospective' },
      { slug: 'reuniao-de-governanca', titulo: 'Reunião de governança', en: 'Governance Meeting' },
      { slug: 'reuniao-diaria-em-pe', titulo: 'Reunião diária em pé', en: 'Daily Standup' },
      { slug: 'reunioes-de-planejamento-e-revisao', titulo: 'Reuniões de planejamento e revisão', en: 'Planning and Review Meetings' },
      { slug: 'reuniao-de-coordenacao', titulo: 'Reunião de coordenação', en: 'Coordination Meeting' },
    ],
  },
  {
    id: 'praticas-de-reuniao',
    titulo: 'Práticas de reunião',
    en: 'Meeting Practices',
    descricao: 'Práticas que tornam as reuniões mais eficazes.',
    padroes: [
      { slug: 'rodadas', titulo: 'Rodadas', en: 'Rounds' },
      { slug: 'facilitar-reunioes', titulo: 'Facilitar reuniões', en: 'Facilitate Meetings' },
      { slug: 'preparar-reunioes', titulo: 'Preparar reuniões', en: 'Prepare For Meetings' },
      { slug: 'cheganca', titulo: 'Chegança', en: 'Check In' },
      { slug: 'avaliar-reunioes', titulo: 'Avaliar reuniões', en: 'Evaluate Meetings' },
      { slug: 'anfitriao-da-reuniao', titulo: 'Anfitrião da reunião', en: 'Meeting Host' },
      { slug: 'facilitador-de-governanca', titulo: 'Facilitador de governança', en: 'Governance Facilitator' },
      { slug: 'lista-de-pendencias-de-governanca', titulo: 'Lista de pendências de governança', en: 'Governance Backlog' },
    ],
  },
  {
    id: 'organizar-o-trabalho',
    titulo: 'Organizar o trabalho',
    en: 'Organizing Work',
    descricao: 'Padrões de fluxo, priorização e melhoria contínua.',
    padroes: [
      { slug: 'lista-de-pendencias', titulo: 'Lista de pendências', en: 'Backlog' },
      { slug: 'priorizar-listas-de-pendencias', titulo: 'Priorizar listas de pendências', en: 'Prioritize Backlogs' },
      { slug: 'visualizar-o-trabalho', titulo: 'Visualizar o trabalho', en: 'Visualize Work' },
      { slug: 'entregar-valor-de-forma-incremental', titulo: 'Entregar valor de forma incremental', en: 'Deliver Value Incrementally' },
      { slug: 'sistema-de-puxada-para-o-trabalho', titulo: 'Sistema de puxada para o trabalho', en: 'Pull System For Work' },
      { slug: 'limitar-trabalho-em-andamento', titulo: 'Limitar trabalho em andamento', en: 'Limit Work in Progress' },
      { slug: 'melhoria-continua-do-processo-de-trabalho', titulo: 'Melhoria contínua do processo de trabalho', en: 'Continuous Improvement of Work Process' },
      { slug: 'atividades-por-bloco-de-tempo', titulo: 'Atividades por bloco de tempo', en: 'Time-box Activities' },
      { slug: 'coordenador', titulo: 'Coordenador', en: 'Coordinator' },
    ],
  },
];

export const estrutura = {
  slug: 'estrutura-organizacional',
  titulo: 'Estrutura organizacional',
  en: 'Organizational Structure',
};

export const todosPadroes: Padrao[] = categorias.flatMap((c) => c.padroes);

export const tituloPorSlug: Record<string, string> = Object.fromEntries(
  todosPadroes.map((p) => [p.slug, p.titulo]),
);

export const categoriaPorSlug: Record<string, Categoria> = Object.fromEntries(
  categorias.flatMap((c) => c.padroes.map((p) => [p.slug, c])),
);
