import type { Project } from "../types";

export const sigElectricalSolutions: Project = {
  slug: "sig-electrical-solutions",
  tags: ["Web Design", "Design + Code", "Institucional"],
  images: ["/images/primeira.webp"],
  imageLayout: "stacked",
  midImages: ["/images/segunda.webp", "/images/terceira.webp"],
  cover: "/images/sig.webp",
  banner: "/images/sig-banner.webp",
  links: {
    live: "https://www.sigengenharia.com/",
  },
  pt: {
    title: "SIG Engenharia Elétrica",
    headline:
      "SIG Engenharia: Transformando 35 anos de autoridade em canal digital de aquisição",
    summary:
      "Como consultora estratégica e UX, liderei o reposicionamento digital completo de uma das maiores referências em engenharia de alta tensão da Bahia. Do diagnóstico à arquitetura, design e deploy com stack moderna de alta performance, executado de ponta a ponta.",
    challenge:
      "A SIG possui mais de três décadas de mercado, atuando em projetos críticos de infraestrutura (subestações, linhas de distribuição e contratos turn-key) para gigantes como JHSF e Equinox Gold. No entanto, a empresa operava em um \"ponto cego digital\": dependia 100% de indicações no mercado físico para fechar novos contratos de múltiplos milhões.\n\nMinha missão foi liderar a transição cultural e digital desse modelo de captação. O desafio de design não era apenas estético, mas de tradução de linguagem corporativa B2B:",
    challengePoints: [
      "Equilíbrio de persona: A comunicação precisava ser técnica o suficiente para validar a autoridade técnica da empresa diante de engenheiros seniores, mas clara e persuasiva para diretores de compras e CFOs que aprovam os orçamentos.",
      "Construção de prova social digital: Transformar um portfólio de engenharia pesada (invisível para o mercado comum) em um ativo digital que gerasse segurança imediata e desejo de contratação.",
      "Arquitetura escalável para growth: Criar uma estrutura leve e performática, preparada nativamente para indexação orgânica (SEO) e futuras campanhas de tráfego pago (Google Ads).",
    ],
    solution:
      "Desenhei e desenvolvi uma plataforma digital robusta de 5 páginas, desenhada estrategicamente sob uma arquitetura de conversão focada no mercado corporativo. O produto organiza serviços complexos de alta engenharia de forma visual, didática e transparente, estruturado com tecnologias modernas de ponta para garantir carregamento sub-segundo, segurança e indexação imediata nos motores de busca.",
    ledeMetrics: [
      { label: "Visualizações únicas nos primeiros 3 meses pós-lançamento", value: "+2.400" },
      { label: "Taxa de conversão geral no funil de intenção", value: "14%" },
      { label: "Leads qualificados gerados via canal digital", value: "18" },
      { label: "Contratos originados diretamente pelo site", value: "3" },
    ],
    processLabel: "Decisões de Design",
    process: [
      {
        step: "Diagnóstico e arquitetura de informação baseada em autoridade",
        description:
          "Em vendas de alto ticket, a confiança é o fator definitivo. No design da arquitetura do site, posicionei os elementos de maior peso de mercado (os 35+ anos de história e logos de clientes de grande porte) na dobra principal de entrada. Somente após blindar a credibilidade da marca, introduzi os clusters de serviços de forma categorizada, reduzindo a complexidade de entendimento de cada solução técnico-comercial.",
      },
      {
        step: "Identidade visual de autoridade",
        description:
          "Utilizei uma paleta baseada em azul profundo e tipografia robusta, trazendo o peso institucional, a segurança e a sobriedade que o mercado de engenharia elétrica exige. O design de interface aplicou princípios rígidos de espaçamento e legibilidade, garantindo que o portfólio físico de subestações e linhas de transmissão ganhasse apelo visual moderno e escaneável em qualquer dispositivo.",
      },
      {
        step: "Engenharia de performance",
        description:
          "Para garantir o melhor resultado orgânico de SEO do mercado, assumi o desenvolvimento front-end utilizando uma das stacks mais modernas da atualidade. A combinação do TanStack Start com Tailwind v4 gerou um código extremamente limpo, focado em SSR (Server-Side Rendering). Fiz o deploy distribuído na infraestrutura global da Cloudflare Workers, garantindo latência próxima de zero e carregamento instantâneo em qualquer região.",
      },
      {
        step: "Design Ops e infraestrutura de dados",
        description:
          "Um projeto de excelência não termina no deploy. No momento do lançamento, instrumentei o ecossistema com uma suite avançada de analytics: PostHog para rastreamento de eventos de conversão e cliques nos botões de orçamento, Microsoft Clarity para análise profunda de mapas de calor e comportamento de leitura, e Google Search Console para monitorar a indexação orgânica das páginas de serviços no Google.",
      },
    ],
    metrics: [
      {
        label: "Páginas entregues",
        value: "5",
        description:
          "Home, Sobre, Serviços, Portfólio e Contato — cada página estruturada para guiar o decisor da descoberta à conversão, com conteúdo técnico apresentado de forma progressiva.",
      },
      {
        label: "Prazo de entrega",
        value: "1 semana",
        description:
          "Do briefing ao deploy em produção em 7 dias. Possível pela combinação de processo de design orientado a entrega, stack performática e uso estratégico de IA no desenvolvimento.",
      },
      {
        label: "Modelo de captação anterior",
        value: "100% indicação",
        description:
          "Antes do site, toda a captação da SIG dependia de relacionamentos pessoais. O novo canal digital abre a empresa para busca orgânica, campanhas pagas e validação de credibilidade por prospects que ainda não têm contato direto.",
      },
      {
        label: "Deploy",
        value: "Cloudflare Workers",
        description:
          "Stack escolhida pela performance global (edge computing), custo operacional baixo e base técnica sólida para SEO — garantindo que o investimento em conteúdo gere retorno orgânico a longo prazo.",
      },
    ],
    highlight:
      "O maior desafio foi tornar o invisível visível: alta tensão, subestações e linhas de distribuição são serviços que as pessoas usam sem saber. Criar uma linguagem técnica o suficiente para engenheiros e clara o suficiente para diretores financeiros foi a decisão de design mais importante do projeto.",
    cardTitle: "SIG Engenharia: Transformando 35 anos de autoridade em canal digital de aquisição",
    cardLine: "Site institucional para empresa com 35+ anos de expertise que operava 100% por indicação — do conceito ao deploy em 1 semana.",
    cardTags: ["Web Design", "Design + Code", "Institucional"],
  },
  en: {
    title: "SIG Electrical Engineering",
    headline:
      "SIG Engineering: Turning 35 Years of Authority into a Digital Acquisition Channel",
    summary:
      "As a strategic and UX consultant, I led the full digital repositioning of one of Bahia's most established references in high-voltage engineering. From diagnosis to architecture, design, and deploy with a modern high-performance stack — executed end to end.",
    challenge:
      "SIG has over three decades in the market, delivering critical infrastructure projects (substations, distribution lines, and turn-key contracts) for major players like JHSF and Equinox Gold. Yet the company operated in a \"digital blind spot\": it relied 100% on physical-market referrals to close new multi-million-dollar contracts.\n\nMy mission was to lead the cultural and digital transition of this acquisition model. The design challenge was not merely aesthetic — it was one of B2B corporate language translation:",
    challengePoints: [
      "Persona balance: The communication needed to be technical enough to validate the company's authority with senior engineers, yet clear and persuasive for procurement directors and CFOs who approve the budgets.",
      "Building digital social proof: Turning a heavy engineering portfolio (invisible to the broader market) into a digital asset that generated immediate trust and desire to hire.",
      "Scalable architecture for growth: Building a lightweight, high-performance structure natively ready for organic indexing (SEO) and future paid traffic campaigns (Google Ads).",
    ],
    solution:
      "I designed and developed a robust 5-page digital platform, strategically built under a conversion architecture focused on the corporate market. The product organizes complex high-engineering services in a visual, didactic, and transparent way, structured with cutting-edge modern technologies to ensure sub-second loading, security, and immediate indexing in search engines.",
    ledeMetrics: [
      { label: "Unique views in the first 3 months post-launch", value: "+2,400" },
      { label: "Overall conversion rate in the intent funnel", value: "14%" },
      { label: "Qualified leads generated via digital channel", value: "18" },
      { label: "Contracts originated directly through the website", value: "3" },
    ],
    processLabel: "Design Decisions",
    process: [
      {
        step: "Diagnosis and authority-based information architecture",
        description:
          "In high-ticket sales, trust is the definitive factor. In designing the site architecture, I positioned the highest-weight market elements (35+ years of history and major client logos) in the main entry fold. Only after shielding the brand's credibility did I introduce service clusters in a categorized way, reducing the complexity of understanding each technical-commercial solution.",
      },
      {
        step: "Authority visual identity",
        description:
          "I used a palette based on deep blue and robust typography, bringing the institutional weight, security, and sobriety that the electrical engineering market demands. The interface design applied strict spacing and legibility principles, ensuring that the physical portfolio of substations and transmission lines gained modern visual appeal, scannable on any device.",
      },
      {
        step: "Performance engineering",
        description:
          "To ensure the best organic SEO results on the market, I took over front-end development using one of the most modern stacks available today. The combination of TanStack Start with Tailwind v4 produced extremely clean code focused on SSR (Server-Side Rendering). I deployed on Cloudflare Workers' global infrastructure, guaranteeing near-zero latency and instant loading in any region.",
      },
      {
        step: "Design Ops and data infrastructure",
        description:
          "A world-class project doesn't end at deploy. At launch, I instrumented the ecosystem with an advanced analytics suite: PostHog for conversion event tracking and quote button clicks, Microsoft Clarity for deep heatmap and reading behavior analysis, and Google Search Console to monitor organic indexing of service pages on Google.",
      },
    ],
    metrics: [
      {
        label: "Pages delivered",
        value: "5",
        description:
          "Home, About, Services, Portfolio, and Contact — each page structured to guide the decision-maker from discovery to conversion, with technical content presented progressively.",
      },
      {
        label: "Delivery time",
        value: "1 week",
        description:
          "From briefing to production deploy in 7 days. Made possible by a delivery-oriented design process, a performant stack, and strategic use of AI in development.",
      },
      {
        label: "Previous acquisition model",
        value: "100% referral",
        description:
          "Before the website, all of SIG's acquisition depended on personal relationships. The new digital channel opens the company to organic search, paid campaigns, and credibility validation by prospects with no prior contact.",
      },
      {
        label: "Deploy",
        value: "Cloudflare Workers",
        description:
          "Stack chosen for global performance (edge computing), low operational cost, and a solid SEO foundation — ensuring that content investment generates organic returns over time.",
      },
    ],
    highlight:
      "The biggest challenge was making the invisible visible: high-voltage substations and distribution lines are services people rely on without ever thinking about. Creating a language technical enough for engineers but clear enough for CFOs was the most important design decision in the project.",
    cardTitle: "SIG Engineering: Turning 35 Years of Authority into a Digital Acquisition Channel",
    cardLine: "Institutional website for a 35+ year firm that ran 100% on referrals — from concept to deploy in 1 week.",
    cardTags: ["Web Design", "Design + Code", "Institutional"],
  },
};
