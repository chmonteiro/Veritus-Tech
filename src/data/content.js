/* ============================================
   CONTEÚDO DO SITE
   Todo texto exibido na página vem deste arquivo.
   Para alterar textos, links ou contatos, edite aqui -
   sem precisar mexer nos componentes.
   ============================================ */

export const site = {
  name: 'Veritus Tech',
  tagline: 'Soluções reais, resultados verdadeiros',
  // TODO: trocar pelo domínio real após o deploy (usado no rodapé de SEO).
  // Os mesmos dados aparecem estáticos em index.html (canonical, og:url,
  // JSON-LD) — ao definir o domínio, atualize os dois lugares.
  url: 'https://veritustech.com.br',
  whatsappNumber: '5511972021478', // usado no link wa.me
  whatsappDisplay: '(11) 97202-1478',
  email: 'veritustech@gmail.com',
  instagram: 'veritus_tech',
  // Mensagem que já vem digitada quando o cliente abre o WhatsApp.
  whatsappMessage:
    'Olá! Vim pelo site da Veritus Tech e gostaria de falar sobre a infraestrutura de TI da minha empresa.',
};

/* Perfil de SEO da empresa, exibido no bloco discreto do rodapé.
   É conteúdo real e rastreável pelo Google (não texto oculto de spam):
   reforça as palavras-chave e o contexto local de forma honesta.
   `region` é inferido do DDD 11 (São Paulo) — confirmar antes de publicar. */
export const seo = {
  label: 'SEO',
  heading: 'Veritus Tech: infraestrutura de TI e desenvolvimento web',
  description:
    'Empresa de tecnologia especializada em infraestrutura de TI, suporte técnico e desenvolvimento web para pequenas e médias empresas. Estruturamos redes e servidores, mantemos ambientes estáveis e seguros e criamos sites, e-commerces e landing pages de alta conversão.',
  services: [
    'Infraestrutura de TI',
    'Configuração de servidores',
    'Suporte técnico remoto e presencial',
    'Segurança da informação',
    'Consultoria em TI',
    'Desenvolvimento web',
  ],
  region: 'São Paulo e região',
  coverage: 'Atendimento remoto para todo o Brasil e presencial em São Paulo e região.',
};

/* Menu do topo (desktop). O menu mobile mostra estes itens + os de `navExtra`,
   porque na vertical sobra espaço. No desktop a barra tem largura limitada. */
export const nav = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Valores', href: '#nossos-valores' },
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

/* Os cinco valores da marca, usados em dois lugares a partir daqui:
   a faixa animada do topo (ValuesMarquee, usa title + detail) e a seção
   "Nossos Valores" (usa title + icon + description; `featured` marca o
   card de destaque em largura cheia). Fonte única, sem duplicar texto. */
export const values = [
  {
    title: 'Transparência',
    detail: 'em cada etapa',
    icon: 'eye',
    featured: true,
    description:
      'Você sabe o que está sendo feito, quando e por quê. Sem letra miúda e sem surpresa na fatura: cada etapa é acordada antes de acontecer.',
  },
  {
    title: 'Segurança',
    detail: 'da informação',
    icon: 'shield',
    description:
      'Cada decisão pensa primeiro em não te deixar exposto. Seus dados e sua operação protegidos por padrão.',
  },
  {
    title: 'Excelência',
    detail: 'técnica',
    icon: 'award',
    description:
      'Nada entregue pela metade. O trabalho só termina quando funciona de verdade no seu dia a dia.',
  },
  {
    title: 'Inovação',
    detail: 'constante',
    icon: 'bulb',
    description:
      'A ferramenta certa para o problema real, não o modismo da vez. Tecnologia a serviço do resultado.',
  },
  {
    title: 'Compromisso',
    detail: 'com cada cliente',
    icon: 'pulse',
    description:
      'A gente não some depois da entrega. Suporte contínuo para manter tudo de pé enquanto você cresce.',
  },
];

export const valuesSection = {
  eyebrow: 'Nossos valores',
  title: 'Os cinco valores que sustentam cada entrega',
  lead: 'Não é discurso de parede. É como a gente decide, prioriza e responde, inclusive quando algo dá errado.',
};

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
    role: 'Fundador Veritus Tech',
    name: 'Matheus Peralta',
    /* A foto fica em public/fundador.jpg. Enquanto o arquivo não existir,
       o quadro mostra uma silhueta de fallback em vez de imagem quebrada. */
    photo: '/fundador.jpg',
    photoAlt: 'Matheus Peralta, fundador da Veritus Tech',
    /* A foto é um plano inteiro: sem aproximar, o rosto fica pequeno demais
       para um cartão de fundador. Estes dois valores fazem o recorte.
       photoFocus é onde o rosto está NA FOTO (x y, a partir do topo-esquerda);
       photoZoom é o quanto aproximar. Ao trocar a foto, ajuste os dois.
       Zoom acima de 2 começa a borrar, porque o arquivo tem 400px de lado. */
    photoFocus: '47% 20%',
    photoZoom: 1.6,
    bio: [
      'Minha especialidade é o desenvolvimento backend: aplicações escaláveis, seguras e de alta performance. Atuo também no frontend, com a stack MERN (MongoDB, Express.js, React e Node.js) e Python, sempre aplicando boas práticas de arquitetura, qualidade de código e engenharia de software. No lado da infraestrutura, administro servidores, virtualizo ambientes e implemento projetos em nuvem e on-premise, o que me permite enxergar todo o ciclo de vida de uma solução: da arquitetura à implantação e operação.',
      'Como fundador, meu compromisso é claro: entregar soluções confiáveis e preparadas para crescer junto com o negócio dos meus clientes. Cada projeto é uma oportunidade de transformar ideias em resultados concretos.',
    ],
    /* Stack principal com o logo oficial de cada tecnologia (ui/TechLogo.jsx).
       `color` é a cor da marca, revelada no hover; o logo fica neutro em
       repouso. Express é preto na marca original, invisível no fundo escuro,
       então usa o branco (como o próprio Express exibe sobre fundo escuro).
       Infraestrutura fica como chips simples, sem logo. */
    stack: [
      { name: 'MongoDB', logo: 'mongodb', color: '#47A248' },
      { name: 'Express.js', logo: 'express', color: '#e8e8e8' },
      { name: 'React', logo: 'react', color: '#61DAFB' },
      { name: 'Node.js', logo: 'node', color: '#5FA04E' },
      { name: 'Python', logo: 'python', color: '#3776AB' },
    ],
    infra: ['Docker', 'Linux', 'Nuvem', 'On-premise', 'APIs REST', 'Bancos SQL'],
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
