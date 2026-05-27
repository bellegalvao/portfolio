import type { Project } from "../types";

export const konsiDesignSystem: Project = {
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
};
