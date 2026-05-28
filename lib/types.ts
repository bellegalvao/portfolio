export type Lang = "pt" | "en";

export interface ProcessStep {
  step: string;
  description: string;
}

export interface Metric {
  label: string;
  value?: string;
  before?: string;
  after?: string;
  /** Texto descritivo exibido apenas no card de impacto detalhado (seção inferior). */
  description?: string;
}

export interface ProjectContent {
  title: string;
  /** Headline de impacto: o resultado gerado, não o problema resolvido. */
  headline: string;
  summary: string;
  challenge: string;
  challengePoints?: string[];
  solution: string;
  processTitle?: string;
  processIntro?: string;
  process: ProcessStep[];
  metrics: Metric[];
  highlight: string;
  /** Título alternativo exibido no card (home + mais trabalhos). */
  cardTitle?: string;
  /** Linha de apoio exibida no card, abaixo do título. */
  cardLine?: string;
  /** Tags visuais exibidas no rodapé do card. */
  cardTags?: string[];
}

export interface ProjectLinks {
  figma?: string;
  github?: string;
  live?: string;
  android?: string;
}

export interface Project {
  slug: string;
  tags: string[];
  images: string[];
  imageLayout?: "stacked" | "landscape";
  midImages?: string[];
  cover: string;
  banner?: string;
  links: ProjectLinks;
  featured?: boolean;
  hidden?: boolean;
  visualOnly?: boolean;
  internalNote?: boolean;
  comingSoon?: boolean;
  pt: ProjectContent;
  en: ProjectContent;
}
