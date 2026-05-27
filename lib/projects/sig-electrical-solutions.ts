import type { Project } from "../types";

export const sigElectricalSolutions: Project = {
  slug: "sig-electrical-solutions",
  year: "2026",
  tags: ["Web Design", "Design + Code", "Institucional"],
  images: ["/images/sig-1.webp", "/images/sig-2.webp"],
  imageLayout: "stacked",
  cover: "/images/sig.webp",
  banner: "/images/sig-banner.webp",
  comingSoon: true,
  links: {
    github: "https://github.com/bellegalvao/sig-electrical-solutions",
    live: "https://sig-power-solutions.lovable.app/",
  },
  pt: {
    title: "SIG Engenharia Elétrica",
    headline:
      "Construí o site institucional que transformou 35 anos de expertise técnica em presença digital — do conceito ao deploy em 1 semana.",
    summary:
      "Site institucional moderno para empresa familiar de engenharia elétrica que operava 100% por indicação.",
    challenge:
      "A SIG tem +35 anos de experiência em alta tensão e um portfólio sólido de grandes clientes, mas nenhuma presença digital. Toda a captação vinha de indicação. O desafio era traduzir uma operação altamente técnica em algo que qualquer tomador de decisão entendesse, sem perder a credibilidade conquistada ao longo de décadas.",
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
          "Criei uma identidade visual sólida com azul profundo e tipografia forte, transmitindo autoridade técnica sem afastar quem não é engenheiro.",
      },
      {
        step: "Desenvolvimento",
        description:
          "Desenvolvi as 5 páginas com TanStack Start, React 19 e Tailwind v4 no Cloudflare Workers, stack moderna, performática e com boa base para SEO.",
      },
      {
        step: "Entrega",
        description:
          "Projeto completo entregue em 1 semana, do conceito ao deploy.",
      },
    ],
    metrics: [
      { label: "Páginas entregues", value: "5" },
      { label: "Prazo de entrega", value: "1 semana" },
      { label: "Modelo de captação anterior", value: "100% indicação" },
      { label: "Deploy", value: "Cloudflare Workers" },
    ],
    highlight:
      "O maior desafio foi tornar o invisível visível: alta tensão, subestações e linhas de distribuição são serviços que as pessoas usam sem saber. Criar uma linguagem técnica o suficiente para engenheiros e clara o suficiente para diretores financeiros foi a decisão de design mais importante do projeto.",
  },
  en: {
    title: "SIG Electrical Engineering",
    headline:
      "Built the institutional website that turned 35 years of technical expertise into a digital presence — from concept to deploy in 1 week.",
    summary:
      "Modern institutional website for a family-owned electrical engineering firm that ran 100% on referrals.",
    challenge:
      "SIG has 35+ years of experience in high-voltage engineering and a solid portfolio of major clients, but zero digital presence. All business came through referrals. The challenge was to translate a highly technical operation into something any decision-maker could understand, without losing the credibility built over decades.",
    solution:
      "I built a complete 5-page institutional website that presents complex services (substations, distribution lines, turn-key projects) in a clear, visual way, designed for organic growth through SEO and paid campaigns.",
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
          "Built all 5 pages with TanStack Start, React 19, and Tailwind v4 on Cloudflare Workers, a modern, performant stack with a strong SEO foundation.",
      },
      {
        step: "Delivery",
        description:
          "Full project delivered in 1 week, from concept to deploy.",
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
};
