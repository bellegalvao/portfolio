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
}

export interface ProjectLinks {
  figma?: string;
  github?: string;
  live?: string;
  android?: string;
}

export interface Project {
  slug: string;
  year: string;
  tags: string[];
  images: string[];
  cover: string;
  banner?: string;
  links: ProjectLinks;
  pt: ProjectContent;
  en: ProjectContent;
}
