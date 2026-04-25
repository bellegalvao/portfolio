"use client";

import { useLang } from "@/lib/lang-context";
import { siteContent, projects } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const { lang } = useLang();
  const t = siteContent[lang];

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <p className="text-sm text-[var(--muted)] mb-3 font-mono">{t.hero.greeting}</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          {t.hero.role}
          <span className="text-[var(--accent)]">.</span>
        </h1>
        <p className="text-lg text-[var(--muted)] max-w-xl leading-relaxed mb-10">
          {t.hero.description}
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-sm border border-[var(--border)] px-4 py-2 rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
        >
          {t.hero.cta} ↓
        </a>
      </section>

      {/* Projects */}
      <section id="projects" className="pb-24">
        <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-8">
          {t.projects.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project[lang].title}
              summary={project[lang].summary}
              tags={project.tags}
              year={project.year}
              index={i}
              cover={project.cover}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
