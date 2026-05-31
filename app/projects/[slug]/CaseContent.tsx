"use client";

import Link from "next/link";
import Image from "next/image";
import React, { use, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/lang-context";
import { siteContent, contact } from "@/lib/site-content";
import { projects } from "@/lib/projects/index";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { DesignSystemShowcase } from "./DesignSystemShowcase";

interface MetricItem {
  label: string;
  value?: string;
  before?: string;
  after?: string;
  description?: string;
  highlighted?: boolean;
}

export function CaseContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { lang } = useLang();
  const t = siteContent[lang].case;

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const content = project[lang];

  /* Projetos visual-only têm layout diferente */
  if ("visualOnly" in project && project.visualOnly) {
    return <VisualOnlyCase project={project} content={content} slug={slug} lang={lang} t={t} />;
  }

  /* Métricas para o lede bar: usa ledeMetrics se definido, senão os 4 primeiros de metrics */
  const ledeMetrics = (content.ledeMetrics ?? content.metrics).slice(0, 4);

  return (
    <div className="max-w-5xl mx-auto px-6 pt-0 pb-6">

      {/* Back */}
      <Link
        href="/#projects"
        className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-10 inline-block"
      >
        {t.back}
      </Link>

      {/* ── HERO DO CASE ─────────────────────────────────────────────────── */}
      <header className="mb-16">

        {/* Tags + ano */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[var(--foreground)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Label do projeto (nome) */}
        <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest mb-4">
          {content.title}
        </p>

        {/* Headline de impacto */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
          {content.headline}
        </h1>

        {/* Summary */}
        <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed">
          {content.summary}
        </p>

        {/* Lede bar de métricas */}
        {ledeMetrics.length > 0 && (
          <div className="grid grid-cols-2 sm:flex sm:flex-row sm:divide-x sm:divide-[var(--border)] gap-6 sm:gap-0 mt-10 pt-10 border-t border-[var(--border)]">
            {ledeMetrics.map((m: MetricItem, i: number) => (
              <div key={i} className="flex flex-col sm:flex-1 sm:px-8 sm:first:pl-0 sm:last:pr-0">
                <span className="text-[28px] md:text-[34px] font-bold text-[var(--accent)] tabular-nums">
                  {m.after ?? m.value}
                </span>
                {m.before && (
                  <span className="text-[16px] text-[var(--muted)] mt-0.5">
                    antes: {m.before}
                  </span>
                )}
                <span className="text-[16px] text-[var(--muted)] mt-1 max-w-[200px] leading-snug">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* ── CORPO DO CASE ────────────────────────────────────────────────── */}
      <div className="border-t border-[var(--border)] mb-16" />

      {/* Contexto / Desafio */}
      <Section label={t.challenge}>
        {content.challenge.split("\n\n").map((para, i) => (
          <p key={i} className="text-lg text-[var(--muted)] leading-relaxed mb-4 last:mb-0">{para}</p>
        ))}
        {content.challengePoints && content.challengePoints.length > 0 && (
          <ul className="mt-5 space-y-3">
            {content.challengePoints.map((point, i) => {
              const [label, ...rest] = point.split(": ");
              const hasLabel = rest.length > 0;
              return (
                <li key={i} className="flex gap-3 text-base text-[var(--muted)] leading-relaxed">
                  <span className="text-[var(--accent)] mt-0.5 shrink-0">→</span>
                  <span>
                    {hasLabel && <strong className="text-[var(--foreground)]">{label}:</strong>}
                    {hasLabel ? " " : ""}{hasLabel ? rest.join(": ") : point}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </Section>

      {/* Solução */}
      <Section label={t.solution}>
        <p className="text-[var(--muted)] leading-relaxed">{content.solution}</p>
      </Section>

      {/* Imagens */}
      {project.images && project.images.length > 0 && (
        <div className="mb-12">
          {project.imageLayout === "stacked" ? (
            <div className="flex flex-col" style={{ gap: "8px" }}>
              {project.images.map((img, i) => (
                <ScrollFadeImage key={i} src={img} alt={`${content.title} ${i + 1}`} index={i} />
              ))}
            </div>
          ) : project.images.length === 1 ? (
            <div
              className="relative w-full rounded-xl overflow-hidden border border-[var(--border)]"
              style={{ aspectRatio: "16/9" }}
            >
              <Image src={project.images[0]} alt={content.title} fill className="object-cover object-top" />
            </div>
          ) : (
            <div className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scroll-pl-0">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className={`shrink-0 rounded-xl overflow-hidden border border-[var(--border)] snap-start ${
                    project.imageLayout === "landscape"
                      ? "w-[85vw] md:w-[calc(50%-6px)]"
                      : "w-[70vw] md:w-52"
                  }`}
                >
                  {project.imageLayout === "landscape" ? (
                    <Image
                      src={img}
                      alt={`${content.title} ${i + 1}`}
                      width={1400}
                      height={1000}
                      className="w-full h-auto block"
                    />
                  ) : (
                    <div className="relative" style={{ aspectRatio: "10/19" }}>
                      <Image src={img} alt={`${content.title} ${i + 1}`} fill className="object-cover object-center" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Decisões de Design / Processo */}
      <Section label={content.processLabel ?? t.process}>
        {content.processTitle && (
          <h2 className="text-lg font-semibold mb-2">{content.processTitle}</h2>
        )}
        {content.processIntro && (
          <p className="text-base text-[var(--muted)] leading-relaxed mb-8">{content.processIntro}</p>
        )}
        <ol className="space-y-8">
          {content.process.map((item, i) => (
            <li key={i} className="flex gap-5">
              <span className="text-xs font-mono text-[var(--accent)] mt-1 shrink-0 w-5 pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 border-t border-[var(--border)] pt-5">
                <p className="font-semibold mb-2 text-base">{item.step}</p>
                <p className="text-base text-[var(--muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {slug === "konsi-design-system" && <DesignSystemShowcase lang={lang} />}

      {/* Mid Images (entre processo e métricas) */}
      {(() => {
        if (!("midImages" in project)) return null;
        const midImgs: string[] = Array.isArray(project.midImages) ? project.midImages as string[] : [];
        if (midImgs.length === 0) return null;
        return (
          <div className="mb-12 flex flex-col" style={{ gap: "8px" }}>
            {midImgs.map((img, i) => (
              <ScrollFadeImage key={i} src={img} alt={`${content.title} detail ${i + 1}`} index={i} />
            ))}
          </div>
        );
      })()}

      {/* SIG — Diferenciais */}
      {slug === "sig-electrical-solutions" && (
        <div className="mb-12 rounded-2xl bg-[#060d1f] overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
                  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full p-10">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="480" height="360" fill="url(#grid)" />
                    <path d="M 80 180 L 160 180 L 160 120 L 240 120 L 240 180 L 320 180 L 320 240 L 400 240" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
                    <path d="M 80 240 L 160 240 L 160 180 M 240 180 L 240 240 L 320 240" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
                    <circle cx="160" cy="180" r="4" fill="white" opacity="0.4" />
                    <circle cx="240" cy="120" r="4" fill="white" opacity="0.4" />
                    <circle cx="320" cy="180" r="4" fill="white" opacity="0.4" />
                    <circle cx="240" cy="240" r="4" fill="white" opacity="0.4" />
                    <polygon points="255,140 235,175 248,175 232,210 258,170 244,170" fill="white" opacity="0.7" />
                    <circle cx="244" cy="175" r="52" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" strokeDasharray="4 6" />
                    <circle cx="244" cy="175" r="70" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none" />
                    <rect x="20" y="20" width="30" height="30" rx="2" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <rect x="430" y="310" width="30" height="30" rx="2" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  </svg>
                </div>
                <div className="absolute -bottom-4 -right-4 flex flex-col items-center justify-center rounded-2xl bg-[#1d4ed8] px-6 py-4 shadow-lg">
                  <span className="text-2xl font-bold text-white">NR-10</span>
                  <span className="text-xs font-medium text-white/80">Certificado</span>
                </div>
              </div>
              <div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#60a5fa]">Por que nos escolher</span>
                  <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">Diferenciais que <em className="not-italic text-[#60a5fa]">fazem a diferença</em></h2>
                </div>
                <ul className="mt-10 space-y-8">
                  <li className="flex gap-5">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Segurança em Primeiro Lugar</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/70">Todos os projetos seguem rigorosamente as normas ABNT, NR-10, NR-35 e demais regulamentações técnicas. Equipe certificada e constantemente treinada.</p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Agilidade e Prazo Garantido</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/70">Cronogramas rigorosos e equipe dedicada garantem a entrega nos prazos acordados, sem surpresas para sua operação ou obra.</p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="12" x2="12" y1="2" y2="22" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Custo-Benefício Real</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/70">Orçamentos transparentes, materiais de alta qualidade e equipe própria qualificada resultam em projetos eficientes e econômicos a longo prazo.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Impacto / Métricas */}
      <Section label={t.metrics}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {content.metrics.filter((m: MetricItem) => !m.highlighted).map((m: MetricItem, i: number) => (
            <div
              key={i}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-3"
            >
              <div>
                <p className="text-sm text-[var(--muted)] leading-snug mb-2">{m.label}</p>
                {m.before && m.after ? (
                  <div className="flex flex-col gap-1">
                    <span className="text-sm line-through text-[var(--muted)]">{m.before}</span>
                    <span className="text-3xl font-bold text-[var(--accent)]">{m.after}</span>
                  </div>
                ) : (
                  <p className="text-3xl font-bold text-[var(--accent)]">{m.value}</p>
                )}
              </div>
              {m.description && (
                <p className="text-sm text-[var(--muted)] leading-relaxed border-t border-[var(--border)] pt-3">
                  {m.description}
                </p>
              )}
            </div>
          ))}
        </div>
        {content.metrics.filter((m: MetricItem) => m.highlighted).map((m: MetricItem, i: number) => (
          <div
            key={i}
            className="mt-3 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-6 flex flex-col gap-3"
          >
            <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest">{m.label}</p>
            <p className="text-lg font-semibold leading-snug text-[var(--foreground)]">
              {m.description}
            </p>
          </div>
        ))}
      </Section>

      {/* O que fez diferença */}
      <Section label={t.highlight}>
        <blockquote className="border-l-2 border-[var(--accent)] pl-5">
          <p className="text-[var(--muted)] leading-relaxed italic text-lg">
            {content.highlight}
          </p>
        </blockquote>
      </Section>

      {/* Outro Images (após highlight) */}
      {(() => {
        if (!("outroImages" in project)) return null;
        const imgs: string[] = Array.isArray(project.outroImages) ? project.outroImages as string[] : [];
        if (imgs.length === 0) return null;
        return (
          <div className="mb-12 flex flex-col" style={{ gap: "8px" }}>
            {imgs.map((img, i) => (
              <ScrollFadeImage key={i} src={img} alt={`${content.title} detail ${i + 1}`} index={i} />
            ))}
          </div>
        );
      })()}

      {/* Links */}
      {"internalNote" in project && project.internalNote && (
        <Section label={t.links}>
          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 text-sm text-[var(--muted)] border border-[var(--border)] rounded-lg px-4 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] shrink-0" />
              {lang === "pt" ? "Sistema interno" : "Internal system"}
            </div>
            {project.links.github && (
              <ExternalLink href={project.links.github} label={t.github} />
            )}
          </div>
        </Section>
      )}
      {!("internalNote" in project && project.internalNote) && (project.comingSoon ? (
        <Section label={t.links}>
          <div className="inline-flex items-center gap-2 text-sm text-[var(--muted)] border border-[var(--border)] rounded-lg px-4 py-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
            {lang === "pt"
              ? "Em breve — aguardando compra de domínio e publicação final."
              : "Coming soon — pending domain purchase and final deployment."}
          </div>
        </Section>
      ) : (project.links.figma || project.links.github || project.links.live || project.links.android) && (
        <Section label={t.links}>
          <div className="flex flex-wrap gap-3">
            {project.links.figma && (
              <ExternalLink href={project.links.figma} label={t.figma} />
            )}
            {project.links.github && (
              <ExternalLink href={project.links.github} label={t.github} />
            )}
            {project.links.live && (
              <ExternalLink href={project.links.live} label={t.live} />
            )}
            {project.links.android && (
              <ExternalLink href={project.links.android} label={t.android} />
            )}
          </div>
        </Section>
      ))}

      {/* Contact CTA + voltar ao topo */}
      <ContactCTA lang={lang} />

      {/* Mais trabalhos */}
      {(() => {
        const others = projects.filter((p) => p.slug !== slug && !("hidden" in p && p.hidden)).slice(0, 3);
        if (others.length === 0) return null;
        return (
          <>
            <div className="border-t border-[var(--border)] mt-12 mb-10" />
            <section>
              <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-6">
                {t.moreWork}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {others.map((p) => (
                  <ProjectCard
                    key={p.slug}
                    slug={p.slug}
                    title={p[lang].title}
                    tags={p.tags}

                    cover={p.cover}
                    cardTitle={p[lang].cardTitle}
                    cardLine={p[lang].cardLine}
                    cardTags={p[lang].cardTags}
                  />
                ))}
              </div>
            </section>
          </>
        );
      })()}
    </div>
  );
}

function VisualOnlyCase({
  project,
  content,
  slug,
  lang,
  t,
}: {
  project: { slug: string; tags: string[]; images: string[]; links: { figma?: string; github?: string; live?: string; android?: string }; cover: string; banner?: string };
  content: { title: string; summary?: string };
  slug: string;
  lang: "pt" | "en";
  t: Record<string, string>;
}) {
  const others = projects.filter((p) => p.slug !== slug && !("hidden" in p && p.hidden)).slice(0, 2);

  return (
    <div className="max-w-3xl mx-auto px-6 pt-0 pb-16">
      {/* Back */}
      <Link
        href="/#projects"
        className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-12 inline-block"
      >
        {t.back}
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{content.title}</h1>
        {content.summary && (
          <p className="text-lg text-[var(--muted)] leading-relaxed">{content.summary}</p>
        )}
      </header>

      {/* Banner */}
      {project.banner && (
        <div className="relative w-full overflow-hidden border border-[var(--border)] mb-12" style={{ aspectRatio: "16/9", borderRadius: "18px" }}>
          <Image src={project.banner} alt={content.title} fill className="object-cover" />
        </div>
      )}

      {/* Divider */}
      <div className="border-t border-[var(--border)] mb-16" />

      {/* Images */}
      {project.images.length > 0 ? (
        <div className="flex flex-col" style={{ gap: "4px" }}>
          {project.images.map((img, i) => (
            <ScrollFadeImage key={i} src={img} alt={`${content.title} ${i + 1}`} index={i} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-64 rounded-xl border border-dashed border-[var(--border)] text-[var(--muted)] text-sm">
          {lang === "pt" ? "Imagens em breve" : "Images coming soon"}
        </div>
      )}

      {/* Links */}
      {Object.keys(project.links).length > 0 && (
        <div className="mt-16 pt-8 border-t border-[var(--border)]">
          <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-4">{t.links}</h2>
          <div className="flex flex-wrap gap-3">
            {project.links.figma && <ExternalLink href={project.links.figma} label={t.figma} />}
            {project.links.github && <ExternalLink href={project.links.github} label={t.github} />}
            {project.links.live && <ExternalLink href={project.links.live} label={t.live} />}
            {project.links.android && <ExternalLink href={project.links.android} label={t.android} />}
          </div>
        </div>
      )}

      {/* Contact CTA */}
      <ContactCTA lang={lang} />

      {/* More work */}
      {others.length > 0 && (
        <>
          <div className="border-t border-[var(--border)] mt-16 mb-10" />
          <section>
            <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-6">
              {t.moreWork}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {others.map((p) => (
                <ProjectCard
                  key={p.slug}
                  slug={p.slug}
                  title={p[lang as "pt" | "en"].title}
                  tags={p.tags}
                  cover={p.cover}
                  cardTitle={p[lang as "pt" | "en"].cardTitle}
                  cardLine={p[lang as "pt" | "en"].cardLine}
                  cardTags={p[lang as "pt" | "en"].cardTags}
                />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mb-14">
      <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-6">
        {label}
      </h2>
      {children}
    </section>
  );
}

function ContactCTA({ lang }: { lang: "pt" | "en" }) {
  return (
    <div className="border-t border-[var(--border)] mt-12 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div>
        <p className="text-[var(--muted)] mb-4 text-sm">
          {lang === "pt" ? "Quer conversar sobre este projeto?" : "Want to talk about this project?"}
        </p>
        <div className="flex gap-3">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center text-sm border border-[var(--border)] px-4 py-2 rounded-lg overflow-hidden"
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">LinkedIn</span>
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="group relative inline-flex items-center text-sm border border-[var(--border)] px-4 py-2 rounded-lg overflow-hidden"
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              {lang === "pt" ? "E-mail" : "Email"}
            </span>
          </a>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-xs font-mono text-[var(--muted)] hover:text-[var(--accent)] transition-colors shrink-0"
      >
        ↑ {lang === "pt" ? "voltar ao topo" : "back to top"}
      </button>
    </div>
  );
}

function ScrollFadeImage({ src, alt, index }: { src: string; alt: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: Math.min(index * 0.08, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl overflow-hidden border border-[var(--border)] w-full"
    >
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        className="w-full h-auto block"
      />
    </motion.div>
  );
}

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center text-sm border border-[var(--border)] px-4 py-2 rounded-lg overflow-hidden"
    >
      <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
      <span className="relative z-10 group-hover:text-black transition-colors duration-500">
        {label} ↗
      </span>
    </a>
  );
}
