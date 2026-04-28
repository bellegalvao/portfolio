"use client";

import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { useLang } from "@/lib/lang-context";
import { siteContent, projects, contact } from "@/lib/content";
import { notFound } from "next/navigation";

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

  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-6">
      {/* Back */}
      <Link
        href="/#projects"
        className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-12 inline-block"
      >
        {t.back}
      </Link>

      {/* Header */}
      <header className="mb-16">
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
        <p className="text-lg text-[var(--muted)] leading-relaxed">{content.summary}</p>
      </header>

      {/* Images */}
      {project.images && project.images.length > 0 && (
        <div className="mb-16">
          {project.images.length === 1 ? (
            <div className="relative w-full rounded-xl overflow-hidden border border-[var(--border)]" style={{ aspectRatio: "16/9" }}>
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
                  <Image src={img} alt={`${content.title} ${i + 1}`} fill className="object-cover object-top" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Divider */}
      <div className="border-t border-[var(--border)] mb-16" />

      {/* Challenge */}
      <Section label={t.challenge}>
        <p className="text-[var(--muted)] leading-relaxed">{content.challenge}</p>
      </Section>

      {/* Solution */}
      <Section label={t.solution}>
        <p className="text-[var(--muted)] leading-relaxed">{content.solution}</p>
      </Section>

      {/* Process */}
      <Section label={t.process}>
        <ol className="space-y-6">
          {content.process.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="text-xs font-mono text-[var(--accent)] mt-1 shrink-0 w-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-medium mb-1">{item.step}</p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Metrics */}
      <Section label={t.metrics}>
        <div className={`grid grid-cols-1 gap-3 ${content.metrics.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
          {content.metrics.map((m: MetricItem, i: number) => (
            <div key={i} className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4">
              <p className="text-xs text-[var(--muted)] mb-2">{m.label}</p>
              {m.before && m.after ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm line-through text-[var(--muted)]">{m.before}</span>
                  <span className="text-xs text-[var(--muted)]">→</span>
                  <span className="text-base font-semibold text-[var(--accent)]">{m.after}</span>
                </div>
              ) : (
                <p className="text-base font-semibold text-[var(--foreground)]">{m.value}</p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Highlight */}
      <Section label={t.highlight}>
        <blockquote className="border-l-2 border-[var(--accent)] pl-4">
          <p className="text-[var(--muted)] leading-relaxed italic">{content.highlight}</p>
        </blockquote>
      </Section>

      {/* Links */}
      {(project.links.figma || project.links.github || project.links.live) && (
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
          </div>
        </Section>
      )}

      {/* Contact CTA + Back to top */}
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
    </div>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-4">
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
      <span className="relative z-10 group-hover:text-black transition-colors duration-500">{label} ↗</span>
    </a>
  );
}
