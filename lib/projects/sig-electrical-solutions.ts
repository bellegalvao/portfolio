import type { Project } from "../types";

export const sigElectricalSolutions: Project = {
  slug: "sig-electrical-solutions",
  tags: ["Web Design", "Design + Code", "Institucional"],
  images: ["/images/primeira.webp"],
  imageLayout: "stacked",
  midImages: ["/images/sig-2.webp"],
  outroImages: ["/images/sig-3.webp"],
  cover: "/images/sig.webp",
  banner: "/images/sig-banner.webp",
  links: {
    live: "https://www.sigengenharia.com/",
  },
  pt: {
    title: "SIG Engenharia Elétrica",
    headline:
      "Construí o site institucional que transformou 35 anos de expertise técnica em presença digital — do conceito ao deploy em 1 semana.",
    summary:
      "Site institucional moderno para empresa familiar de engenharia elétrica que operava 100% por indicação.",
    challenge:
      "A SIG tem +35 anos de experiência em alta tensão e um portfólio sólido de grandes clientes, mas nenhuma presença digital. Toda a captação vinha de indicação. O desafio era traduzir uma operação altamente técnica em algo que qualquer tomador de decisão entendesse, sem perder a credibilidade conquistada ao longo de décadas.",
    challengePoints: [
      "Invisibilidade digital: 35 anos de expertise sem nenhuma presença online — toda captação dependia exclusivamente de indicação, limitando o crescimento e expondo o negócio a risco de pipeline.",
      "Tradução técnica: serviços de alta tensão (subestações, linhas de distribuição, projetos turn-key) precisavam ser comunicados para dois públicos completamente diferentes: engenheiros técnicos e diretores financeiros.",
      "Credibilidade como ativo: qualquer novo canal digital precisava transmitir a mesma autoridade conquistada por décadas de relacionamento — sem parecer genérico ou perder o peso institucional da marca.",
    ],
    solution:
      "Criei um site institucional completo com 5 páginas que apresenta os serviços complexos (subestações, linhas de distribuição, turn-key) de forma didática e visual, preparado para captação orgânica via SEO e campanhas pagas.",
    ledeMetrics: [
      { label: "Páginas entregues com design e código", value: "5" },
      { label: "Do conceito ao deploy", value: "1 semana" },
      { label: "Modelo de captação anterior ao site", value: "100% indicação" },
      { label: "Anos de expertise traduzidos em presença digital", value: "35+" },
    ],
    processTitle: "Decisões de design e desenvolvimento",
    processIntro:
      "Para traduzir 35 anos de expertise técnica em uma presença digital que convertesse, trabalhei em cinco frentes:",
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
          "Criei uma identidade visual sólida com azul profundo e tipografia forte, transmitindo autoridade técnica sem afastar quem não é engenheiro.",
      },
      {
        step: "Desenvolvimento",
        description:
          "Desenvolvi as 5 páginas com TanStack Start, React 19 e Tailwind v4 no Cloudflare Workers — stack moderna, performática e com boa base para SEO.",
      },
      {
        step: "Entrega e instrumentação",
        description:
          "Projeto completo entregue em 1 semana, do conceito ao deploy. Instrumentei o site com PostHog para analytics de comportamento, Google Search Console para monitoramento de SEO orgânico e Microsoft Clarity para heatmaps e gravações de sessão.",
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
    cardTitle: "SIG Engenharia: Presença Digital do Zero",
    cardLine: "Site institucional para empresa com 35+ anos de expertise que operava 100% por indicação — do conceito ao deploy em 1 semana.",
    cardTags: ["Web Design", "Design + Code", "Institucional"],
  },
  en: {
    title: "SIG Electrical Engineering",
    headline:
      "Built the institutional website that turned 35 years of technical expertise into a digital presence — from concept to deploy in 1 week.",
    summary:
      "Modern institutional website for a family-owned electrical engineering firm that ran 100% on referrals.",
    challenge:
      "SIG has 35+ years of experience in high-voltage engineering and a solid portfolio of major clients, but zero digital presence. All business came through referrals. The challenge was to translate a highly technical operation into something any decision-maker could understand, without losing the credibility built over decades.",
    challengePoints: [
      "Digital invisibility: 35 years of expertise with no online presence — all acquisition relied exclusively on referrals, limiting growth and exposing the business to pipeline risk.",
      "Technical translation: high-voltage services (substations, distribution lines, turn-key projects) needed to be communicated to two completely different audiences: technical engineers and financial directors.",
      "Credibility as an asset: any new digital channel had to convey the same authority built over decades of relationship-driven business — without feeling generic or losing the brand's institutional weight.",
    ],
    solution:
      "I built a complete 5-page institutional website that presents complex services (substations, distribution lines, turn-key projects) in a clear, visual way, designed for organic growth through SEO and paid campaigns.",
    ledeMetrics: [
      { label: "Pages delivered with design and code", value: "5" },
      { label: "From concept to deploy", value: "1 week" },
      { label: "Previous acquisition model", value: "100% referral" },
      { label: "Years of expertise turned into digital presence", value: "35+" },
    ],
    processTitle: "Design and development decisions",
    processIntro:
      "To translate 35 years of technical expertise into a digital presence that converts, I worked across five fronts:",
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
          "Created a strong visual identity with deep blue and bold typography, conveying technical authority without alienating non-engineers.",
      },
      {
        step: "Development",
        description:
          "Built all 5 pages with TanStack Start, React 19, and Tailwind v4 on Cloudflare Workers — a modern, performant stack with a strong SEO foundation.",
      },
      {
        step: "Delivery and instrumentation",
        description:
          "Full project delivered in 1 week, from concept to deploy. Instrumented the site with PostHog for behavioral analytics, Google Search Console for organic SEO monitoring, and Microsoft Clarity for heatmaps and session recordings.",
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
    cardTitle: "SIG Engineering: Digital Presence from Scratch",
    cardLine: "Institutional website for a 35+ year firm that ran 100% on referrals — from concept to deploy in 1 week.",
    cardTags: ["Web Design", "Design + Code", "Institutional"],
  },
};
