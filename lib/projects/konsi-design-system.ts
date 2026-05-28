import type { Project } from "../types";

export const konsiDesignSystem: Project = {
  slug: "konsi-design-system",
  year: "2026",
  tags: ["Design Systems", "Design Ops", "Design + Code", "Flutter"],
  images: ["/images/konsi-ds-live.png"],
  cover: "/images/ds-konsi.webp",
  links: {
    figma: "https://www.figma.com/design/dgIacIvjWtNgIB6mmhoRbN",
    github: "https://github.com/bellegalvao/konsi-design-system",
    live: "https://isabelle-galvao.github.io/konsi-design-system/#home",
  },
  pt: {
    title: "Konsi Design System",
    headline:
      "Escalando a eficiência operacional da Konsi: a arquitetura de um Design System focado em redução de lead time e governança técnica.",
    summary:
      "Como liderei a transição de uma interface fragmentada para um ecossistema de tokens semânticos e documentação viva, reduzindo o tempo de desenvolvimento em 70% e eliminando o débito técnico em 2 meses.",
    challenge:
      "A Konsi enfrentava o custo da desordem. Com o crescimento acelerado, a falta de padronização não era apenas um problema estético, era um gargalo financeiro.",
    challengePoints: [
      "A divergência entre o Figma e o Flutter gerava um ciclo infinito de revisões de QA, onde 30% do tempo de cada sprint era consumido corrigindo detalhes de UI que já deveriam estar resolvidos.",
      "O time de engenharia perdia autonomia ao tentar interpretar decisões de design não documentadas, resultando em um código \"hardcoded\" difícil de manter e impossível de escalar.",
    ],
    solution:
      "Implementei uma camada de Design Operations que unificou a linguagem entre as disciplinas, com tokens multi-camada, componentes prototipados com lógica de Flutter e uma documentação viva como fonte única de verdade.",
    processTitle: "Design Ops e Arquitetura de Sistemas",
    processIntro:
      "Minha abordagem foi implementar uma camada de Design Operations que unificasse a linguagem entre as disciplinas:",
    process: [
      {
        step: "Arquitetura de Tokens Multi-Camada",
        description:
          "Diferente de uma paleta de cores simples, estruturei tokens Globais, Alias e Semânticos. Isso tornou o sistema agnóstico a temas, preparando a Konsi para futuras expansões de marca ou White Label com custo zero de design.",
      },
      {
        step: "Componentização com Lógica de Engenharia",
        description:
          "Os componentes não foram apenas desenhados; foram prototipados no Figma respeitando as propriedades do Flutter (Flexbox, Constraints e States), garantindo que o que o designer projeta seja tecnicamente viável sem negociações exaustivas.",
      },
      {
        step: "Single Source of Truth (SSOT)",
        description:
          "Implementei um fluxo de documentação onde o código é o destino final. O portal estático no GitHub Pages reduziu o tempo de onboarding de novos desenvolvedores e serviu como manual de governança de produto.",
      },
    ],
    metrics: [
      {
        label: "Lead Time de Entrega",
        value: "−70%",
        description: "Redução drástica no ciclo de desenvolvimento de novos módulos, passando de 10 para apenas 3 dias úteis. A padronização de componentes permitiu que o time focasse na lógica de negócio, não na construção de UI do zero.",
      },
      {
        label: "Paridade Design-to-Code",
        value: "100%",
        description: "Sincronia absoluta entre as definições do Figma e a implementação em Flutter. Através da arquitetura de Design Tokens, garantimos que a \"fonte única de verdade\" fosse respeitada em todas as frentes de desenvolvimento.",
      },
      {
        label: "Eficiência em QA de Interface",
        value: "90%",
        description: "Otimização massiva do processo de Quality Assurance, eliminando quase por completo as discussões e refações de UI. A documentação rigorosa limpou o ruído de comunicação e trouxe clareza absoluta ao handoff.",
      },
      {
        label: "Ganho de Capacidade de Engenharia",
        value: "25%",
        description: "Economia direta em horas de desenvolvimento dedicadas a ajustes finos de interface. Esse ganho de eficiência permitiu que a engenharia redirecionasse foco para a performance e estabilidade do backend.",
      },
    ],
    highlight:
      "Um Design System morre sem adoção. Dediquei 70% do esforço em alinhar a implementação com Engenharia e criar documentação técnica robusta, e 30% no refinamento visual. O objetivo não foi criar o sistema mais bonito, mas o mais adotável e funcional para o ecossistema da Konsi.",
    cardTitle: "Konsi Design System: Escala & Design Ops",
    cardLine:
      "Construção de uma fonte única de verdade sincronizada em Flutter que reduziu o Lead Time de desenvolvimento de 2 semanas para 4 dias.",
    cardTags: ["Design Ops", "Sistemas Complexos", "Acessibilidade WCAG"],
  },
  en: {
    title: "Konsi Design System",
    headline:
      "Scaling Konsi's operational efficiency: the architecture of a Design System focused on lead time reduction and technical governance.",
    summary:
      "How I led the transition from a fragmented interface to an ecosystem of semantic tokens and living documentation, reducing development time by 71% and eliminating technical debt in 2 months.",
    challenge:
      "Konsi was facing the cost of disorder. With accelerated growth, the lack of standardization wasn't just an aesthetic problem — it was a financial bottleneck.",
    challengePoints: [
      "The divergence between Figma and Flutter created an endless QA review cycle, where 30% of each sprint was spent fixing UI details that should have already been resolved.",
      "The engineering team lost autonomy trying to interpret undocumented design decisions, resulting in hardcoded, unmaintainable, and unscalable code.",
    ],
    solution:
      "I implemented a Design Operations layer that unified the language between disciplines, with multi-layer tokens, Flutter-logic-driven components, and living documentation as a single source of truth.",
    processTitle: "Design Ops and Systems Architecture",
    processIntro:
      "My approach was to implement a Design Operations layer that unified the language across disciplines:",
    process: [
      {
        step: "Multi-Layer Token Architecture",
        description:
          "Rather than a simple color palette, I structured Global, Alias, and Semantic tokens. This made the system theme-agnostic, preparing Konsi for future brand expansions or White Label products at zero design cost.",
      },
      {
        step: "Componentization with Engineering Logic",
        description:
          "Components weren't just designed — they were prototyped in Figma respecting Flutter properties (Flexbox, Constraints, and States), ensuring that what the designer creates is technically feasible without exhaustive back-and-forth.",
      },
      {
        step: "Single Source of Truth (SSOT)",
        description:
          "I implemented a documentation workflow where code is the final destination. The static portal on GitHub Pages reduced onboarding time for new developers and served as the product governance manual.",
      },
    ],
    metrics: [
      { label: "Module delivery lead time", before: "10 business days", after: "3 business days" },
      { label: "Figma / App parity", value: "100%" },
      { label: "Reduction in UI QA discussions", value: "−90%" },
      { label: "Savings in interface adjustment hours", value: "−25%" },
    ],
    highlight:
      "A Design System dies without adoption. I dedicated 70% of the effort to aligning implementation with Engineering and creating robust technical documentation, and 30% to visual refinement. The goal was not the most beautiful system, but the most adoptable and functional one for Konsi's ecosystem.",
    cardTitle: "Konsi Design System: Scale & Design Ops",
    cardLine:
      "Building a single source of truth synced in Flutter that reduced development lead time from 2 weeks to 4 days.",
    cardTags: ["Design Ops", "Complex Systems", "WCAG Accessibility"],
  },
};
