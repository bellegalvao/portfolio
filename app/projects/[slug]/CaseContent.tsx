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

interface MetricItem {
  label: string;
  value?: string;
  before?: string;
  after?: string;
  description?: string;
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

  /* Métricas para o lede bar: pega até 4 */
  const ledeMetrics = content.metrics.slice(0, 4);

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
          <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[var(--foreground)]">
            {project.year}
          </span>
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
          <div className="flex flex-wrap divide-x divide-[var(--border)] mt-10 pt-10 border-t border-[var(--border)]">
            {ledeMetrics.map((m: MetricItem, i: number) => (
              <div key={i} className="flex flex-col flex-1 px-8 first:pl-0 last:pr-0">
                <span className="text-[28px] md:text-[34px] font-bold text-[var(--accent)] tabular-nums">
                  {m.after ?? m.value}
                </span>
                {m.before && (
                  <span className="text-[16px] text-[var(--muted)] mt-0.5">
                    antes: {m.before}
                  </span>
                )}
                <span className="text-[16px] text-[var(--muted)] mt-1 max-w-[140px] leading-snug">
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
        <p className="text-lg text-[var(--muted)] leading-relaxed">{content.challenge}</p>
        {content.challengePoints && content.challengePoints.length > 0 && (
          <ul className="mt-5 space-y-3">
            {content.challengePoints.map((point, i) => (
              <li key={i} className="flex gap-3 text-base text-[var(--muted)] leading-relaxed">
                <span className="text-[var(--accent)] mt-0.5 shrink-0">→</span>
                <span>{point}</span>
              </li>
            ))}
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
      <Section label={t.process}>
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

      {/* Impacto / Métricas */}
      <Section label={t.metrics}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {content.metrics.map((m: MetricItem, i: number) => (
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
      </Section>

      {/* O que fez diferença */}
      <Section label={t.highlight}>
        <blockquote className="border-l-2 border-[var(--accent)] pl-5">
          <p className="text-[var(--muted)] leading-relaxed italic text-lg">
            {content.highlight}
          </p>
        </blockquote>
      </Section>

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
                    year={p.year}
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
  project: { slug: string; year: string; tags: string[]; images: string[]; links: { figma?: string; github?: string; live?: string; android?: string }; cover: string; banner?: string };
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
          <span className="text-xs px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)]">
            {project.year}
          </span>
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
                  year={p.year}
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
      className="rounded-xl overflow-hidden border border-[var(--border)] w-full"
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
