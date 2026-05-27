/**
 * Barrel re-export — mantém compatibilidade com todos os imports existentes.
 *
 * Fontes reais:
 *   - tipos    → lib/types.ts
 *   - projetos → lib/projects/index.ts  (um arquivo por projeto)
 *   - conteúdo → lib/site-content.ts
 */
export type { Lang, Project, ProjectContent, ProcessStep, Metric, ProjectLinks } from "./types";
export { projects } from "./projects/index";
export { siteContent, contact } from "./site-content";
