import type { Project } from "../types";

export const konsiDesignSystem: Project = {
  slug: "konsi-design-system",
  tags: ["Design Ops", "Sistemas Complexos", "Acessibilidade WCAG", "Design System"],
  images: ["/images/konsi-ds-live.webp"],
  cover: "/images/ds-konsi.webp",
  links: {
    github: "https://github.com/bellegalvao/konsi-design-system",
    live: "https://isabelle-galvao.github.io/konsi-design-system/#home",
  },
  pt: {
    title: "Konsi Design System",
    headline:
      "Escalando a eficiência operacional da Konsi: a arquitetura de um Design System focado em redução de lead time e governança técnica.",
    summary:
      "Como liderei a transição de uma interface fragmentada para um ecossistema de tokens semânticos e documentação viva, acelerando o tempo de entrega de novos módulos em mais de 3x e eliminando o débito técnico em apenas 2 meses.",
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
        label: "Aceleração de Time-to-Market",
        value: "3.3x",
        description: "Aceleração expressiva no ciclo de entrega de novos módulos, reduzindo o tempo de desenvolvimento de 10 para apenas 3 dias úteis. A padronização destravou a engenharia para focar na lógica de negócio e na velocidade de lançamento.",
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
    seoDescription: "Design System que reduziu o lead time de entrega de 10 para 3 dias úteis, com 100% de paridade Figma–Flutter e 90% menos retrabalho em QA.",
    cardTitle: "Konsi Design System: Escala & Design Ops",
    cardLine:
      "Construção de uma fonte única de verdade sincronizada em Flutter que reduziu o Lead Time de desenvolvimento de 10 para 3 dias úteis.",
    cardTags: ["Design Ops", "Sistemas Complexos", "Acessibilidade WCAG"],
  },
  en: {
    title: "Konsi Design System",
    headline:
      "Scaling Konsi's operational efficiency: the architecture of a Design System focused on lead time reduction and technical governance.",
    summary:
      "How I led the transition from a fragmented interface to an ecosystem of semantic tokens and living documentation, accelerating the delivery of new modules by more than 3x and eliminating technical debt in just 2 months.",
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
      {
        label: "Time-to-Market Acceleration",
        value: "3.3x",
        description: "Significant acceleration in the delivery cycle of new modules, reducing development time from 10 to just 3 business days. Standardization freed engineering to focus on business logic and launch speed.",
      },
      {
        label: "Design-to-Code Parity",
        value: "100%",
        description: "Absolute synchronization between Figma definitions and Flutter implementation. Through the Design Tokens architecture, we ensured the single source of truth was respected across all development fronts.",
      },
      {
        label: "UI QA Efficiency",
        value: "90%",
        description: "Massive optimization of the Quality Assurance process, virtually eliminating UI rework and review discussions. Rigorous documentation cleared communication noise and brought absolute clarity to the handoff.",
      },
      {
        label: "Engineering Capacity Gain",
        value: "25%",
        description: "Direct savings in development hours previously spent on fine-tuning UI details. This efficiency gain allowed engineering to redirect focus toward backend performance and stability.",
      },
    ],
    highlight:
      "A Design System dies without adoption. I dedicated 70% of the effort to aligning implementation with Engineering and creating robust technical documentation, and 30% to visual refinement. The goal was not the most beautiful system, but the most adoptable and functional one for Konsi's ecosystem.",
    seoDescription: "Design System reducing delivery lead time from 10 to 3 business days, with 100% Figma–Flutter parity and 90% less QA rework.",
    cardTitle: "Konsi Design System: Scale & Design Ops",
    cardLine:
      "Building a single source of truth synced in Flutter that reduced module delivery lead time from 10 to 3 business days.",
    cardTags: ["Design Ops", "Complex Systems", "WCAG Accessibility"],
  },
};
