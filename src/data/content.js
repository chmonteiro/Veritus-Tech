/* ============================================
   CONTEÚDO DO SITE
   Todo texto exibido na página vem deste arquivo.
   Para alterar textos, links ou contatos, edite aqui -
   sem precisar mexer nos componentes.
   ============================================ */

export const site = {
  name: 'Veritus Tech',
  tagline: 'Soluções reais, resultados verdadeiros',
  whatsappNumber: '5511972021478', // usado no link wa.me
  whatsappDisplay: '(11) 97202-1478',
  email: 'matheus.peralta25@hotmail.com',
  instagram: 'veritus_tech',
  // Mensagem que já vem digitada quando o cliente abre o WhatsApp.
  whatsappMessage:
    'Olá! Vim pelo site da Veritus Tech e gostaria de falar sobre a infraestrutura de TI da minha empresa.',
};

/* Menu do topo (desktop). O menu mobile mostra estes itens + os de `navExtra`,
   porque na vertical sobra espaço. No desktop a barra tem largura limitada. */
export const nav = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Processo', href: '#como-trabalhamos' },
  { label: 'Quem somos', href: '#quem-somos' },
  { label: 'Para quem', href: '#para-quem' },
  { label: 'Contato', href: '#contato' },
];

export const navExtra = [{ label: 'Dúvidas', href: '#duvidas' }];

export const hero = {
  eyebrow: 'Infraestrutura de TI',
  title: 'Soluções reais,',
  titleAccent: 'resultados verdadeiros',
  description:
    'A Veritus Tech estrutura, configura e mantém a infraestrutura de TI da sua empresa. Sem excessos e sem promessas irreais, só o que garante estabilidade, segurança e desempenho no dia a dia.',
  ctaPrimary: 'Falar com um especialista',
  ctaSecondary: 'Ver soluções',
  reassurance: 'Conversa inicial sem compromisso: você entende o cenário antes de decidir.',
  trust: [
    'Atendimento remoto e presencial',
    'Suporte contínuo',
    'Soluções sob medida',
  ],
  // Painel lateral do hero: retrato do ambiente que o cliente passa a ter.
  panel: {
    title: 'ambiente_do_cliente',
    status: 'estável',
    lines: [
      { icon: 'server', title: 'Servidores', detail: 'Configurados e monitorados', tag: 'ok' },
      { icon: 'network', title: 'Rede corporativa', detail: 'Estruturada para crescer', tag: 'ok' },
      { icon: 'shield', title: 'Segurança da informação', detail: 'Continuidade como critério', tag: 'ativo' },
      { icon: 'clock', title: 'Suporte contínuo', detail: 'Acompanhamento permanente', tag: '24/7' },
    ],
    footLabel: 'Diagnóstico inicial',
    footValue: 'Sem custo',
  },
};

export const values = [
  { title: 'Compromisso', detail: 'com cada cliente' },
  { title: 'Transparência', detail: 'em cada etapa' },
  { title: 'Segurança', detail: 'da informação' },
  { title: 'Excelência', detail: 'técnica' },
  { title: 'Inovação', detail: 'constante' },
];

/* `wide` faz o cartão ocupar 2 colunas. São 8 cartões simples + 2 largos =
   12 unidades, que fecham exatamente 4 linhas no grid de 3 colunas.
   Ao adicionar ou remover um serviço, refaça essa conta para não sobrar buraco. */
export const solutions = {
  eyebrow: 'O que você encontra na Veritus',
  title: 'Soluções de infraestrutura de ponta a ponta',
  lead: 'Do diagnóstico ao suporte contínuo, cada entrega é pensada para a realidade do seu negócio.',
  items: [
    {
      icon: 'network',
      wide: true,
      title: 'Estruturação de ambientes corporativos',
      description: 'Redes, estações e servidores organizados para crescer sem retrabalho.',
    },
    {
      icon: 'server',
      title: 'Configuração de servidores',
      description: 'Ambientes preparados para rodar de forma estável, segura e previsível.',
    },
    {
      icon: 'wrench',
      title: 'Implantação e manutenção',
      description: 'Da instalação ao acompanhamento, com a estrutura sempre em ordem.',
    },
    {
      icon: 'headset',
      title: 'Atendimento remoto e presencial',
      description: 'Resposta pelo canal que resolve mais rápido, sem burocracia.',
    },
    {
      icon: 'chart',
      title: 'Consultoria',
      description: 'Análise técnica independente para você decidir com base no que faz sentido.',
    },
    {
      icon: 'code',
      wide: true,
      title: 'Desenvolvimento web',
      description:
        'Sites institucionais, e-commerce e landing pages de alta conversão, construídos para carregar rápido, aparecer na busca e transformar visita em contato.',
    },
    {
      icon: 'puzzle',
      title: 'Soluções sob medida',
      description: 'Nada de pacote fechado: o desenho parte do seu cenário real.',
    },
    {
      icon: 'shield',
      title: 'Segurança e estabilidade',
      description: 'Proteção da informação e continuidade como critério de projeto.',
    },
    {
      icon: 'clock',
      title: 'Suporte contínuo',
      description: 'Acompanhamento permanente para evitar a parada antes que ela aconteça.',
    },
    {
      icon: 'users',
      title: 'Treinamento para equipe',
      description: 'Seu time usando bem o ambiente e abrindo menos chamados.',
    },
  ],
};

export const process = {
  eyebrow: 'Como trabalhamos',
  title: 'Cinco etapas, do primeiro contato ao suporte',
  lead: 'Cada projeto é conduzido com clareza e alinhamento: você sabe o que está sendo feito e por quê.',
  steps: [
    {
      title: 'Primeiro contato',
      description: 'Diagnóstico da estrutura que você tem hoje.',
    },
    {
      title: 'Visita ao local',
      description: 'Verificação presencial do ambiente e das condições reais.',
    },
    {
      title: 'Planejamento',
      description: 'Desenho da solução, com escopo e prioridades acordados.',
    },
    {
      title: 'Implementação',
      description: 'Execução acompanhada, sem surpresa no meio do caminho.',
    },
    {
      title: 'Monitoramento',
      description: 'Suporte contínuo para manter o ambiente estável.',
    },
  ],
};

export const about = {
  eyebrow: 'Quem somos',
  title: 'Uma parceira de TI, não só um suporte técnico',
  // O primeiro parágrafo aparece em destaque tipográfico.
  summary: [
    'A Veritus Tech existe para uma coisa: manter a estrutura tecnológica da sua empresa funcionando, sem drama e sem excesso.',
    'Estruturamos, configuramos e mantemos o ambiente de TI de pequenas e médias empresas, escritórios e profissionais autônomos. Atendemos de forma remota e presencial, com acompanhamento contínuo depois que o projeto entra no ar.',
    'O que muda é a forma de conduzir: diagnóstico antes de proposta, escopo acordado antes da execução e clareza em cada etapa. Nada de pacote fechado, nada de promessa irreal. Só o que garante estabilidade, segurança e desempenho no dia a dia.',
  ],
  founder: {
    role: 'Fundador',
    // TODO: preencher com o nome real do fundador.
    name: 'Nome do fundador',
    /* A foto fica em public/fundador.jpg. Enquanto o arquivo não existir,
       o quadro mostra uma silhueta de fallback em vez de imagem quebrada. */
    photo: '/fundador.jpg',
    photoAlt: 'Retrato do fundador da Veritus Tech',
    /* A foto atual é 400x400 e o quadro é quadrado, então nada é cortado e
       esta linha não muda nada. Ela só passa a importar se a foto for
       trocada por uma retangular: aí 'center top' preserva o rosto. */
    photoPosition: 'center center',
    bio: [
      'Formado em Sistemas de Informação pela FIAP, com 3 anos de experiência em desenvolvimento back-end. Trabalha com APIs REST, bancos de dados SQL e soluções escaláveis, com atuação em ambientes de automação industrial e RH-tech.',
      'Traz para a Veritus a disciplina de quem escreve software para produção: boas práticas de código, versionamento e metodologias ágeis. O objetivo é sempre o mesmo: qualidade técnica com impacto real no negócio.',
    ],
    tags: ['APIs REST', 'Bancos SQL', 'Automação industrial', 'RH-tech'],
  },
};

export const audience = {
  eyebrow: 'Para quem',
  title: 'Para quem depende da TI funcionando',
  card: {
    title: 'Atendemos',
    description:
      'A Veritus Tech se conecta com clientes que priorizam clareza, eficiência e soluções que fazem sentido na prática: parceiros, e não só suporte técnico.',
    items: [
      'Pequenas e médias empresas',
      'Escritórios corporativos',
      'Profissionais autônomos',
      'Negócios que dependem de infraestrutura de TI confiável',
    ],
  },
  pillars: [
    {
      label: 'Missão',
      text: 'Prover soluções tecnológicas eficientes que garantam desempenho, segurança e continuidade para nossos clientes.',
    },
    {
      label: 'Visão',
      text: 'Ser referência em serviços de infraestrutura de TI, reconhecida pela qualidade, confiança e inovação.',
    },
    {
      label: 'Como conduzimos',
      text: 'Cada projeto com responsabilidade e envolvimento genuíno, porque um bom serviço começa com clareza, alinhamento e compromisso real com o resultado.',
    },
  ],
};

export const faq = {
  eyebrow: 'Dúvidas frequentes',
  title: 'Antes de falar com a gente',
  lead: 'Respostas rápidas para o que costuma ser perguntado no primeiro contato.',
  items: [
    {
      question: 'Vocês atendem empresas de qual porte?',
      answer:
        'Pequenas e médias empresas, escritórios corporativos e profissionais autônomos. Qualquer negócio que dependa de uma infraestrutura de TI confiável para funcionar no dia a dia.',
    },
    {
      question: 'O atendimento é remoto ou presencial?',
      answer:
        'Os dois. O canal é escolhido pelo que resolve mais rápido: muita coisa se resolve remotamente, e quando o ambiente exige verificação no local, a visita faz parte do processo.',
    },
    {
      question: 'Como começa um projeto?',
      answer:
        'Pelo primeiro contato, com um diagnóstico da estrutura que você já tem. A partir daí vêm a visita ao local, o planejamento com escopo acordado, a implementação e o monitoramento contínuo.',
    },
    {
      question: 'Preciso trocar toda a minha estrutura?',
      answer:
        'Não. A análise parte do cenário real: o que já funciona é aproveitado, e o desenho da solução prioriza o que de fato trava o dia a dia da empresa.',
    },
    {
      question: 'E depois que a implementação termina?',
      answer:
        'Fica o suporte contínuo. O acompanhamento permanente existe justamente para evitar a parada antes que ela aconteça.',
    },
  ],
};

export const contact = {
  eyebrow: 'Fale com a Veritus',
  title: 'Conte o que está travando na sua estrutura',
  lead: 'A conversa inicial serve para entender seu ambiente e dizer com honestidade o que faz sentido, sem compromisso.',
  cta: 'Falar com um especialista',
  note: 'Mensagem já vem preenchida, é só enviar.',
};
