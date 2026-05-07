export type Lang = "pt" | "en";

export const projects = [
  {
    slug: "konsi-design-system",
    year: "2026",
    tags: ["Design Systems", "Design + Code", "Flutter"],
    images: ["/images/konsi-ds-live.png"],
    cover: "/images/ds-konsi.webp",
    links: {
      figma: "https://www.figma.com/design/dgIacIvjWtNgIB6mmhoRbN",
      github: "https://github.com/bellegalvao/konsi-design-system",
      live: "https://isabelle-galvao.github.io/konsi-design-system/#home",
    },
    pt: {
      title: "Konsi Design System",
      summary: "Sistema de design escalável do zero ao código Flutter em 2 meses.",
      challenge:
        "Com o produto crescendo, designers e engenheiros trabalhavam sem uma fonte única de verdade,cada tela era recriada do zero, gerando inconsistência e lentidão.",
      solution:
        "Criei um design system completo com 3 camadas: tokens semânticos, biblioteca de componentes no Figma e documentação estática com código Flutter pronto para uso.",
      process: [
        {
          step: "Auditoria",
          description:
            "Mapeei todos os componentes existentes no app para identificar inconsistências e padrões recorrentes.",
        },
        {
          step: "Tokens",
          description:
            "Defini 113 tokens semânticos de cor, tipografia, espaçamento e elevação seguindo Material 3 e WCAG 2.1 AA.",
        },
        {
          step: "Componentes",
          description:
            "Construí +100 componentes no Figma com variants para todos os estados, tamanhos e contextos.",
        },
        {
          step: "Documentação",
          description:
            "Criei docs estáticos no GitHub Pages com specs, anatomia, acessibilidade e código Flutter para cada componente.",
        },
        {
          step: "Adoção",
          description:
            "Trabalhei junto com engenharia (70/30) para garantir que os tokens e componentes fossem implementados fielmente.",
        },
      ],
      metrics: [
        { label: "Tempo de entrega de tela", before: "2 semanas", after: "4 dias" },
        { label: "Componentes no Figma", value: "+100" },
        { label: "Design tokens", value: "113" },
        { label: "Conformidade de acessibilidade", value: "WCAG 2.1 AA" },
      ],
      highlight:
        "A decisão mais importante foi priorizar documentação rigorosa. Um sistema sem documentação não é adotado,e um sistema não adotado não existe.",
    },
    en: {
      title: "Konsi Design System",
      summary: "Scalable design system from zero to Flutter code in 2 months.",
      challenge:
        "As the product grew, designers and engineers worked without a single source of truth,every screen was recreated from scratch, causing inconsistency and slow delivery.",
      solution:
        "I built a complete design system with 3 layers: semantic tokens, a Figma component library, and static documentation with ready-to-use Flutter code.",
      process: [
        {
          step: "Audit",
          description:
            "Mapped all existing components in the app to identify inconsistencies and recurring patterns.",
        },
        {
          step: "Tokens",
          description:
            "Defined 113 semantic tokens for color, typography, spacing, and elevation following Material 3 and WCAG 2.1 AA.",
        },
        {
          step: "Components",
          description:
            "Built +100 Figma components with variants for all states, sizes, and contexts.",
        },
        {
          step: "Documentation",
          description:
            "Created static docs on GitHub Pages with specs, anatomy, accessibility guidelines, and Flutter code for each component.",
        },
        {
          step: "Adoption",
          description:
            "Collaborated with engineering (70/30 split) to ensure tokens and components were implemented faithfully.",
        },
      ],
      metrics: [
        { label: "Screen delivery time", before: "2 weeks", after: "4 days" },
        { label: "Figma components", value: "+100" },
        { label: "Design tokens", value: "113" },
        { label: "Accessibility compliance", value: "WCAG 2.1 AA" },
      ],
      highlight:
        "The most important decision was prioritizing rigorous documentation. A system without documentation isn't adopted,and a system that isn't adopted doesn't exist.",
    },
  },
  {
    slug: "konsi-app",
    year: "2023",
    tags: ["Product Design", "Mobile", "Fintech"],
    images: ["/images/konsi-app-1.webp", "/images/konsi-app-2.webp", "/images/konsi-app-3.webp", "/images/konsi-app-4.webp", "/images/konsi-app-5.webp", "/images/konsi-app-6.webp"],
    cover: "/images/konsi-app-cover.webp",
    banner: "/images/konsi-banner-top.webp",
    links: {
      figma: "https://www.figma.com/design/iJ6LZoPpLwhkA232HjtTQj",
      android: "https://play.google.com/store/search?q=konsi&c=apps&hl=pt_BR",
    },
    pt: {
      title: "Konsi App",
      summary: "App de crédito consignado criado do zero com foco em simplicidade para um público com baixa familiaridade digital.",
      challenge:
        "O desafio não era só criar um app bonito,era oferecer crédito de forma humana para servidores públicos, muitos com baixa familiaridade digital, equilibrando a necessidade real do cliente com a capacidade técnica do produto.",
      solution:
        "Desenhei a jornada completa do zero: Onboarding → Cadastro → Login → Simulação → Contratação → Confirmação → Follow-Up, com foco em reduzir atrito em cada etapa.",
      process: [
        {
          step: "Pesquisa",
          description:
            "Conduzi pesquisas com usuários e testes de usabilidade para entender as dores do público,muitos idosos e pessoas com pouco acesso a serviços financeiros digitais.",
        },
        {
          step: "Fluxos",
          description:
            "Mapeei todos os fluxos críticos identificando onde o atrito era maior, especialmente na contratação (documentos, dados bancários, endereço).",
        },
        {
          step: "Design",
          description:
            "Criei as telas com tipografia grande, hierarquia clara e feedbacks visuais constantes para reduzir ansiedade no processo financeiro.",
        },
        {
          step: "Testes",
          description:
            "Validei os fluxos com usuários reais, iterando principalmente no fluxo de contratação que parece simples mas esconde complexidade real.",
        },
        {
          step: "NPS",
          description:
            "Implementei o NPS do zero como sistema de monitoramento contínuo da experiência, usando os dados para priorizar melhorias.",
        },
      ],
      metrics: [
        { label: "NPS implementado do zero", value: "✓" },
        { label: "NPS", value: "Acima de 80 pts" },
        { label: "Conversão", value: "+25%" },
      ],
      highlight:
        "O fluxo de contratação parece simples, só endereço e conta bancária, mas tem uma complexidade real: anexar documentos diversos, validações assíncronas e estados de erro. Esse foi o fluxo que mais criei soluções e melhorias, tenho muito orgulho dele.",
    },
    en: {
      title: "Konsi App",
      summary: "Consigned credit app built from scratch focused on simplicity for users with low digital literacy.",
      challenge:
        "The challenge wasn't just to create a beautiful app,it was to offer credit in a human way to civil servants, many with low digital familiarity, balancing the user's real need with the product's technical capacity.",
      solution:
        "I designed the full journey from scratch: Onboarding → Registration → Login → Simulation → Contracting → Confirmation → Follow-Up, focused on reducing friction at every step.",
      process: [
        {
          step: "Research",
          description:
            "Conducted user research and usability tests to understand pain points,many elderly users and people with limited access to digital financial services.",
        },
        {
          step: "Flows",
          description:
            "Mapped all critical flows identifying where friction was highest, especially in contracting (documents, bank data, address).",
        },
        {
          step: "Design",
          description:
            "Created screens with large typography, clear hierarchy, and constant visual feedback to reduce anxiety in financial processes.",
        },
        {
          step: "Testing",
          description:
            "Validated flows with real users, iterating mainly on the contracting flow that looks simple but hides real complexity.",
        },
        {
          step: "NPS",
          description:
            "Implemented NPS from scratch as a continuous experience monitoring system, using data to prioritize improvements.",
        },
      ],
      metrics: [
        { label: "NPS implemented from scratch", value: "✓" },
        { label: "NPS", value: "Above 80 pts" },
        { label: "Conversion", value: "+25%" },
      ],
      highlight:
        "The contracting flow looks simple,just address and bank account,but hides real complexity: attaching multiple documents, async validations, and error states. That was the flow I iterated on the most and I'm most proud of.",
    },
  },
  {
    slug: "konsi-insights",
    year: "2025",
    tags: ["Data Product", "Dashboard", "Design + Code"],
    images: ["/images/konsi-insights-1.webp", "/images/konsi-insights-2.webp"],
    imageLayout: "landscape" as const,
    cover: "/images/konsi-insights.webp",
    banner: "/images/konsi-insights-banner.webp",
    links: {
      github: "https://github.com/bellegalvao/konsi-insights",
      live: "https://konsi-insights.vercel.app/",
    },
    pt: {
      title: "Konsi Insights",
      summary: "Dashboard que centraliza feedbacks de múltiplas plataformas para gerar backlog de produto com dados reais.",
      challenge:
        "O time de produto, CS e design tomava decisões baseadas em feeling,os feedbacks dos clientes estavam dispersos em múltiplas plataformas sem visibilidade centralizada.",
      solution:
        "Criei um produto que agrega insights de clientes de diferentes fontes, tornando visível onde estão as dores, gerando relatórios e alimentando o backlog com dados reais.",
      process: [
        {
          step: "Problema",
          description:
            "Identifiquei a necessidade por experiência própria: perdia horas abrindo várias ferramentas para ter uma visão completa do que os usuários reclamavam.",
        },
        {
          step: "Design",
          description:
            "Desenhei a interface focada em visualização de padrões,não apenas listar feedbacks, mas revelar onde se concentram as dores.",
        },
        {
          step: "Desenvolvimento",
          description:
            "Construí o frontend em JavaScript com ajuda do Claude. Design e código 100% meu,do Figma ao Vercel.",
        },
      ],
      metrics: [
        { label: "Usuários", value: "Time de Produto, CS e Design" },
        { label: "Autoria", value: "Design + Código 100%" },
        { label: "Deploy", value: "Vercel" },
      ],
      highlight:
        "Fiz o design e o código. Usar o Claude como parceiro de desenvolvimento foi uma extensão natural do meu processo,assim como uso dados para embasar decisões de design, usei IA para ampliar minha capacidade de entrega.",
    },
    en: {
      title: "Konsi Insights",
      summary: "Dashboard that centralizes feedback from multiple platforms to generate data-driven product backlogs.",
      challenge:
        "The product, CS, and design teams made decisions based on gut feeling,customer feedback was scattered across multiple platforms without centralized visibility.",
      solution:
        "I built a product that aggregates customer insights from different sources, making pain points visible, generating reports, and feeding the backlog with real data.",
      process: [
        {
          step: "Problem",
          description:
            "I identified the need from my own experience: I was spending hours opening multiple tools to get a complete picture of what users were complaining about.",
        },
        {
          step: "Design",
          description:
            "Designed the interface focused on pattern visualization,not just listing feedback, but revealing where pain points concentrate.",
        },
        {
          step: "Development",
          description:
            "Built the frontend in JavaScript with Claude's help. Design and code 100% mine,from Figma to Vercel.",
        },
      ],
      metrics: [
        { label: "Users", value: "Product, CS & Design teams" },
        { label: "Authorship", value: "Design + Code 100%" },
        { label: "Deploy", value: "Vercel" },
      ],
      highlight:
        "I did the design and the code. Using Claude as a development partner was a natural extension of my process,just as I use data to support design decisions, I used AI to expand my delivery capacity.",
    },
  },
  {
    slug: "sig-electrical-solutions",
    year: "2026",
    tags: ["Web Design", "Design + Code", "Institucional"],
    images: [],
    cover: "/images/sig.webp",
    banner: "/images/sig-banner.webp",
    comingSoon: true,
    links: {
      github: "https://github.com/bellegalvao/sig-electrical-solutions",
      live: "https://sig-power-solutions.lovable.app/",
    },
    pt: {
      title: "SIG Engenharia Elétrica",
      summary: "Site institucional moderno para empresa familiar de engenharia elétrica que operava 100% por indicação.",
      challenge:
        "A SIG tem +35 anos de experiência em alta tensão e um portfólio sólido de grandes clientes,mas nenhuma presença digital. Toda a captação vinha de indicação. O desafio era traduzir uma operação altamente técnica em algo que qualquer tomador de decisão entendesse,sem perder a credibilidade conquistada ao longo de décadas.",
      solution:
        "Criei um site institucional completo com 5 páginas que apresenta os serviços complexos (subestações, linhas de distribuição, turn-key) de forma didática e visual, preparado para captação orgânica via SEO e campanhas pagas.",
      process: [
        {
          step: "Descoberta",
          description:
            "Mergulhei no universo da engenharia elétrica para entender o vocabulário técnico, os serviços oferecidos e o perfil dos decisores que a SIG precisa alcançar.",
        },
        {
          step: "Posicionamento",
          description:
            "Defini a hierarquia de informação colocando credibilidade (35+ anos, clientes como JHSF e Equinox Gold) no topo, antes de entrar nos detalhes técnicos.",
        },
        {
          step: "Design",
          description:
            "Criei uma identidade visual sólida com azul profundo e tipografia forte,transmitindo autoridade técnica sem afastar quem não é engenheiro.",
        },
        {
          step: "Desenvolvimento",
          description:
            "Desenvolvi as 5 páginas com TanStack Start, React 19 e Tailwind v4 no Cloudflare Workers,stack moderna, performática e com boa base para SEO.",
        },
        {
          step: "Entrega",
          description:
            "Projeto completo entregue em 1 semana,do conceito ao deploy.",
        },
      ],
      metrics: [
        { label: "Páginas entregues", value: "5" },
        { label: "Prazo de entrega", value: "1 semana" },
        { label: "Modelo de captação anterior", value: "100% indicação" },
        { label: "Deploy", value: "Cloudflare Workers" },
      ],
      highlight:
        "O maior desafio foi tornar o invisível visível: alta tensão, subestações e linhas de distribuição são serviços que as pessoas usam sem saber. Criar uma linguagem que fosse técnica o suficiente para engenheiros e clara o suficiente para diretores financeiros foi a decisão de design mais importante do projeto.",
    },
    en: {
      title: "SIG Electrical Engineering",
      summary: "Modern institutional website for a family-owned electrical engineering firm that ran 100% on referrals.",
      challenge:
        "SIG has 35+ years of experience in high-voltage engineering and a solid portfolio of major clients,but zero digital presence. All business came through referrals. The challenge was to translate a highly technical operation into something any decision-maker could understand,without losing the credibility built over decades.",
      solution:
        "I built a complete 5-page institutional website that presents complex services (substations, distribution lines, turn-key projects) in a clear, visual way,designed for organic growth through SEO and paid campaigns.",
      process: [
        {
          step: "Discovery",
          description:
            "Immersed in the electrical engineering world to understand the technical vocabulary, services offered, and the profile of decision-makers SIG needs to reach.",
        },
        {
          step: "Positioning",
          description:
            "Defined the information hierarchy by leading with credibility (35+ years, clients like JHSF and Equinox Gold) before diving into technical details.",
        },
        {
          step: "Design",
          description:
            "Created a strong visual identity with deep blue and bold typography,conveying technical authority without alienating non-engineers.",
        },
        {
          step: "Development",
          description:
            "Built all 5 pages with TanStack Start, React 19, and Tailwind v4 on Cloudflare Workers,a modern, performant stack with a strong SEO foundation.",
        },
        {
          step: "Delivery",
          description:
            "Full project delivered in 1 week,from concept to deploy.",
        },
      ],
      metrics: [
        { label: "Pages delivered", value: "5" },
        { label: "Delivery time", value: "1 week" },
        { label: "Previous acquisition model", value: "100% referral" },
        { label: "Deploy", value: "Cloudflare Workers" },
      ],
      highlight:
        "The biggest challenge was making the invisible visible: high-voltage substations and distribution lines are services people rely on without ever thinking about. Creating a language technical enough for engineers but clear enough for CFOs was the most important design decision in the project.",
    },
  },
  {
    slug: "minha-sorte",
    year: "2025",
    tags: ["Product Design", "Mobile", "Em produção"],
    images: ["/images/minha-sorte-1.png", "/images/minha-sorte-2.png"],
    cover: "/images/minha-sorte.webp",
    banner: "/images/minha-sorte-banner.webp",
    links: {
      figma: "https://www.figma.com/design/9IOcNtIfc7QiDCd46dzAKS",
      android: "https://android.minhasorteapp.com.br",
    },
    pt: {
      title: "Minha Sorte",
      summary: "App de apostas em loteria com geração de palpites inteligentes por estatística. Em produção na loja.",
      challenge:
        "Criar um app de loteria que fosse além de um simples gerador de números,algo que usasse estatística para dar ao usuário uma vantagem real e uma experiência de acompanhamento completa.",
      solution:
        "Desenhei um app com 9 modalidades de loteria (Mega-Sena, Quina, Lotofácil, entre outras), palpites baseados em análise estatística de resultados históricos e 3 modalidades de pagamento.",
      process: [
        {
          step: "Conceito",
          description:
            "Pesquisei o comportamento de apostadores de loteria para entender o que realmente queriam além de sortear números.",
        },
        {
          step: "Design",
          description:
            "Criei a interface com visual clean e verde,a cor da sorte,e flows claros para cada modalidade de jogo.",
        },
        {
          step: "Pagamentos",
          description:
            "Desenhei 3 modalidades de pagamento: normal, manual e automático, cada uma com suas particularidades de UX.",
        },
        {
          step: "Produção",
          description:
            "O app foi desenvolvido em Flutter e publicado na loja,está em produção com usuários reais.",
        },
      ],
      metrics: [
        { label: "Modalidades de loteria", value: "9" },
        { label: "Modalidades de pagamento", value: "3" },
        { label: "Plataforma", value: "Flutter · Em produção" },
        { label: "Resultado marcante", value: "Usuário ganhou quadra na Mega-Sena" },
      ],
      highlight:
        "Um dos usuários ganhou uma quadra na Mega-Sena usando os palpites do app. Não tem métrica que supere isso.",
    },
    en: {
      title: "Minha Sorte",
      summary: "Lottery betting app with statistical smart number generation. Live in production.",
      challenge:
        "Create a lottery app that went beyond a simple number generator,something that used statistics to give users a real edge and a complete tracking experience.",
      solution:
        "Designed an app with 9 lottery modalities (Mega-Sena, Quina, Lotofácil, and others), statistically-driven picks based on historical results, and 3 payment modalities.",
      process: [
        {
          step: "Concept",
          description:
            "Researched lottery bettor behavior to understand what they really wanted beyond just picking numbers.",
        },
        {
          step: "Design",
          description:
            "Created the interface with a clean green visual,the color of luck,and clear flows for each game modality.",
        },
        {
          step: "Payments",
          description:
            "Designed 3 payment modalities: normal, manual, and automatic, each with its own UX considerations.",
        },
        {
          step: "Production",
          description:
            "The app was built in Flutter and published to the store,it's live in production with real users.",
        },
      ],
      metrics: [
        { label: "Lottery modalities", value: "9" },
        { label: "Payment modalities", value: "3" },
        { label: "Platform", value: "Flutter · In production" },
        { label: "Standout result", value: "User won a 4-number prize in Mega-Sena" },
      ],
      highlight:
        "One of the users won a 4-number prize in Brazil's biggest lottery using the app's picks. No metric beats that.",
    },
  },
];

export const siteContent = {
  pt: {
    nav: {
      projects: "Projetos",
      about: "Sobre",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, sou Isabelle",
      role: "Product Designer",
      description:
        "Transformo problemas complexos em soluções simples, úteis e que fazem diferença na vida das pessoas,e nos resultados do negócio.",
      cta: "Ver projetos",
      ctaContact: "Vamos conversar",
      ctaResume: "Currículo",
      availableForWork: "Disponível para trabalhar",
    },
    projects: {
      title: "Projetos",
      viewCase: "Ver case →",
    },
    about: {
      title: "Sobre mim",
      bio: [
        "Product Designer brasileira com 6 anos de experiência em produto, growth e web design, especializada em criar fluxos visualmente impactantes, intuitivos e com alta conversão.",
        "Trabalho para transformar problemas complexos em soluções simples, úteis e que realmente façam diferença na vida das pessoas e nos resultados do negócio.",
        "Sigo o conceito de que o design vai muito além de estética,é sobre tomar decisões bem fundamentadas, equilibrando necessidades do usuário, objetivos da empresa e viabilidade técnica. Por isso, busco sempre trabalhar de forma orientada por dados, validando hipóteses e aprendendo continuamente com o comportamento real dos usuários.",
        "Tenho como objetivo atuar como um conector entre estratégia, tecnologia e experiência, contribuindo para a construção de produtos que não apenas funcionem bem, mas que sejam relevantes, escaláveis e sustentem o crescimento da empresa.",
      ],
      location: "Salvador, Bahia",
      skills: {
        title: "Skills",
        design: ["Figma", "Design Systems", "UI/UX", "Pesquisa com usuários", "Testes de usabilidade", "NPS"],
        data: ["SQL", "Metabase", "PostHog", "Maze", "Análise de dados", "IA aplicada a produto"],
        tools: ["Flutter tokens", "n8n", "Automações", "Vercel", "GitHub"],
      },
      contact: {
        title: "Vamos conversar",
        linkedin: "LinkedIn",
        email: "E-mail",
      },
    },
    case: {
      challenge: "Desafio",
      solution: "Solução",
      process: "Processo",
      metrics: "Resultados",
      highlight: "Decisão chave",
      links: "Links",
      figma: "Abrir no Figma",
      github: "Ver no GitHub",
      live: "Ver ao vivo",
      android: "Ver na Play Store",
      back: "← Voltar",
      moreWork: "Mais trabalhos",
    },
    workflow: {
      title: "Meu processo de criação",
      description: "No mundo do design, a colaboração é fundamental, e é por isso que a parceria comigo é a escolha certa.",
      steps: [
        { title: "Descoberta", description: "Realizo uma imersão em seu negócio para detalharmos as especificações, objetivos e direções estratégicas." },
        { title: "Ideação", description: "Nessa etapa crio todo o conteúdo do projeto com base nos objetivos do seu negócio e apresentaremos a hierarquia de informação." },
        { title: "Design", description: "A atenção meticulosa aos detalhes está no centro do meu processo de design, garantindo um produto final polido e impecável." },
        { title: "Protótipo", description: "Vou detalhar o projeto acrescentando cores, imagens, ilustrações e ícones. Também definiremos algumas interações avançadas." },
        { title: "Validação", description: "Saio da bolha criativa e confronto a solução com a realidade, garantindo que o que foi construído realmente resolve o problema do usuário e é viável para o negócio." },
      ],
    },
    footer: {
      made: "Feito com carinho por Isabelle Galvão",
      in: "em",
      cta: "Vamos iniciar um projeto juntos?",
      ctaButton: "Vamos lá",
    },
  },
  en: {
    nav: {
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm Isabelle",
      role: "Product Designer",
      description:
        "I turn complex problems into simple, useful solutions that make a difference in people's lives,and in business results.",
      cta: "View projects",
      ctaContact: "Let's talk",
      ctaResume: "Resume",
      availableForWork: "Available for work",
    },
    projects: {
      title: "Projects",
      viewCase: "View case →",
    },
    about: {
      title: "About me",
      bio: [
        "Product Designer from Brazil with 6 years of experience in product, growth and web design, I specialize in crafting visually stunning, user-friendly, and high-converting flows.",
        "I work to turn complex problems into simple, useful solutions that truly make a difference in people's lives and in business results.",
        "I believe design goes far beyond aesthetics,it's about making well-grounded decisions, balancing user needs, business goals, and technical feasibility. That's why I always aim to work data-driven, validating hypotheses and learning continuously from real user behavior.",
        "My goal is to act as a connector between strategy, technology, and experience, contributing to products that don't just work well, but are relevant, scalable, and sustain company growth.",
      ],
      location: "Salvador, Bahia,Brazil",
      skills: {
        title: "Skills",
        design: ["Figma", "Design Systems", "UI/UX", "User research", "Usability testing", "NPS"],
        data: ["SQL", "Metabase", "PostHog", "Maze", "Data analysis", "AI applied to product"],
        tools: ["Flutter tokens", "n8n", "Automations", "Vercel", "GitHub"],
      },
      contact: {
        title: "Let's talk",
        linkedin: "LinkedIn",
        email: "Email",
      },
    },
    case: {
      challenge: "Challenge",
      solution: "Solution",
      process: "Process",
      metrics: "Results",
      highlight: "Key decision",
      links: "Links",
      figma: "Open in Figma",
      github: "View on GitHub",
      live: "View live",
      android: "View on Play Store",
      back: "← Back",
      moreWork: "More work",
    },
    workflow: {
      title: "My creation process",
      description: "In the world of design, collaboration is fundamental, and that's why partnering with me is the right choice.",
      steps: [
        { title: "Discovery", description: "I immerse myself in your business to detail the specifications, objectives and strategic directions." },
        { title: "Ideation", description: "In this stage I create all the project content based on your business objectives and present the information hierarchy." },
        { title: "Design", description: "Meticulous attention to detail is at the center of my design process, ensuring a polished and flawless final product." },
        { title: "Prototype", description: "I'll detail the project by adding colors, images, illustrations and icons. We'll also define some advanced interactions." },
        { title: "Validation", description: "I step outside the creative bubble and confront the solution with reality, ensuring what was built truly solves the user's problem and is viable for the business." },
      ],
    },
    footer: {
      made: "Made with love by Isabelle Galvão",
      in: "in",
      cta: "Let's start a project together?",
      ctaButton: "Let's go",
    },
  },
};

export const contact = {
  linkedin: "https://www.linkedin.com/in/isabelle-galvao/",
  github: "https://github.com/bellegalvao",
  email: "isabellecgalvao@gmail.com",
  resume: "https://drive.google.com/file/d/111T8AXCy_Q0axH4Jr2tPIWwTAcKoTUmp/view?usp=sharing",
};
