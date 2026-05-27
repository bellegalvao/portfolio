"use client";

import Link from "next/link";
import Image from "next/image";
import React, { use } from "react";
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
}

export function CaseContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { lang } = useLang();
  const t = siteContent[lang].case;

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const content = project[lang];

  /* Métricas para o lede bar: pega até 3, priorizando as com valor/after */
  const ledeMetrics = content.metrics.slice(0, 3);

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
              className="text-xs px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
          <span className="text-xs px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)]">
            {project.year}
          </span>
        </div>

        {/* Label do projeto (nome) */}
        <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest mb-4">
          {content.title}
        </p>

        {/* Headline de impacto — a razão de existir do case */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
          {content.headline}
        </h1>

        {/* Summary como subtítulo contextual */}
        <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-2xl">
          {content.summary}
        </p>

        {/* Lede bar de métricas — mostra impacto antes do contexto */}
        {ledeMetrics.length > 0 && (
          <div className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-[var(--border)]">
            {ledeMetrics.map((m: MetricItem, i: number) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-[var(--accent)] tabular-nums">
                  {m.after ?? m.value}
                </span>
                {m.before && (
                  <span className="text-xs text-[var(--muted)] mt-0.5">
                    antes: {m.before}
                  </span>
                )}
                <span className="text-xs text-[var(--muted)] mt-1 max-w-[140px] leading-snug">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* ── CORPO DO CASE ────────────────────────────────────────────────── */}
      <div className="border-t border-[var(--border)] mb-16" />

      {/* Contexto (era "Desafio") */}
      <Section label={t.challenge}>
        <p className="text-[var(--muted)] leading-relaxed">{content.challenge}</p>
      </Section>

      {/* Imagens */}
      {project.images && project.images.length > 0 && (
        <div className="mb-14">
          {project.images.length === 1 ? (
            <div
              className="relative w-full rounded-xl overflow-hidden border border-[var(--border)]"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src={project.images[0]}
                alt={content.title}
                fill
                className="object-cover object-top"
              />
            </div>
          ) : (
            <div className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scroll-pl-0">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="relative w-[70vw] md:w-52 shrink-0 rounded-xl overflow-hidden border border-[var(--border)] snap-start"
                  style={{ aspectRatio: "10/19" }}
                >
                  <Image
                    src={img}
                    alt={`${content.title} ${i + 1}`}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Decisões de Design (era "Processo") */}
      <Section label={t.process}>
        <ol className="space-y-8">
          {content.process.map((item, i) => (
            <li key={i} className="flex gap-5">
              <span className="text-xs font-mono text-[var(--accent)] mt-1 shrink-0 w-5 pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 border-t border-[var(--border)] pt-5">
                <p className="font-semibold mb-2 text-sm">{item.step}</p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Impacto completo (era "Resultados") */}
      <Section label={t.metrics}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {content.metrics.map((m: MetricItem, i: number) => (
            <div
              key={i}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5"
            >
              <p className="text-xs text-[var(--muted)] mb-3 leading-snug">{m.label}</p>
              {m.before && m.after ? (
                <div className="flex flex-col gap-1">
                  <span className="text-sm line-through text-[var(--muted)]">{m.before}</span>
                  <span className="text-xl font-bold text-[var(--accent)]">{m.after}</span>
                </div>
              ) : (
                <p className="text-xl font-bold text-[var(--foreground)]">{m.value}</p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* O que fez diferença (era "Decisão chave") */}
      <Section label={t.highlight}>
        <blockquote className="border-l-2 border-[var(--accent)] pl-5">
          <p className="text-[var(--muted)] leading-relaxed italic text-base">
            {content.highlight}
          </p>
        </blockquote>
      </Section>

      {/* Links */}
      {(project.links.figma || project.links.github || project.links.live || project.links.android) && (
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
      )}

      {/* CTA de contato + voltar ao topo */}
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
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                LinkedIn
              </span>
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

      {/* Mais trabalhos */}
      {(() => {
        const others = projects.filter((p) => p.slug !== slug).slice(0, 3);
        if (others.length === 0) return null;
        return (
          <>
            <div className="border-t border-[var(--border)] mt-12 mb-10" />
            <section>
              <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-6">
                {t.moreWork}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {others.map((p, i) => (
                  <ProjectCard
                    key={p.slug}
                    slug={p.slug}
                    title={p[lang].title}
                    summary={p[lang].summary}
                    tags={p.tags}
                    year={p.year}
                    index={i}
                    cover={p.cover}
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
