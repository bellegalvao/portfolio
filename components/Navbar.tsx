"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/lang-context";
import { siteContent, contact, projects } from "@/lib/content";

const visibleProjects = projects
  .filter((p) => !("hidden" in p && p.hidden))
  .sort((a, b) => {
    const aFeat = "featured" in a && a.featured ? 1 : 0;
    const bFeat = "featured" in b && b.featured ? 1 : 0;
    if (bFeat !== aFeat) return bFeat - aFeat;
    return Number(b.year) - Number(a.year);
  });

const chevron = (open: boolean) => (
  <svg
    width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export function Navbar() {
  const { lang, toggle } = useLang();
  const t = siteContent[lang].nav;
  const availableForWork = siteContent[lang].hero.availableForWork;
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const closeAll = () => { setProjectsOpen(false); setContactOpen(false); };

  return (
    <>
      <header className="relative fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-sm">
        {/* Badge centralizado — apenas desktop */}
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--muted)]">
          <span className="relative flex w-2 h-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full w-2 h-2 bg-green-400" />
          </span>
          {availableForWork}
        </span>

        <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight hover:text-[var(--accent)] transition-colors"
            onClick={() => setOpen(false)}
          >
            Isabelle Galvão
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {/* Projetos dropdown */}
            <div className="relative">
              <button
                onClick={() => { setProjectsOpen((v) => !v); setContactOpen(false); }}
                aria-haspopup="true"
                aria-expanded={projectsOpen}
                className="flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                {t.projects}
                {chevron(projectsOpen)}
              </button>
              {projectsOpen && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden shadow-xl z-50">
                  {visibleProjects.map((p, i) => (
                    <div key={p.slug}>
                      {i > 0 && <div className="border-t border-[var(--border)]" />}
                      <Link
                        href={`/projects/${p.slug}`}
                        onClick={() => setProjectsOpen(false)}
                        className="flex items-center justify-between px-4 py-3 text-sm text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)] transition-colors"
                      >
                        <span className="truncate pr-2">{p[lang].title}</span>
                        <span className="text-xs shrink-0">{p.year}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
              {t.about}
            </Link>

            {/* Contato dropdown */}
            <div className="relative">
              <button
                onClick={() => { setContactOpen((v) => !v); setProjectsOpen(false); }}
                aria-haspopup="true"
                aria-expanded={contactOpen}
                className="flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                {t.contact}
                {chevron(contactOpen)}
              </button>
              {contactOpen && (
                <div className="absolute top-full right-0 mt-3 w-44 bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden shadow-xl z-50">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setContactOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-sm text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)] transition-colors"
                  >
                    LinkedIn
                    <span className="text-xs">↗</span>
                  </a>
                  <div className="border-t border-[var(--border)]" />
                  <a
                    href={`mailto:${contact.email}`}
                    onClick={() => setContactOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-sm text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)] transition-colors"
                  >
                    E-mail
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              )}
            </div>

            <button
              onClick={toggle}
              className="text-xs font-mono px-2 py-1 border border-[var(--border)] rounded text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--muted)] transition-colors"
            >
              {lang === "pt" ? "🇺🇸 EN" : "🇧🇷 PT"}
            </button>
          </div>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          >
            <span className={`block h-px w-5 bg-current transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-px w-5 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-current transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed top-14 left-0 right-0 z-40 bg-[var(--background)] border-b border-[var(--border)] md:hidden transition-all duration-300 ease-in-out ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {/* Badge mobile */}
          <span className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--muted)] self-start mb-3">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full w-2 h-2 bg-green-400" />
            </span>
            {availableForWork}
          </span>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors py-3 border-b border-[var(--border)]"
          >
            {t.about}
          </Link>

          <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] opacity-50 pt-4 pb-1">
            {t.projects}
          </p>
          {visibleProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              onClick={() => setOpen(false)}
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors py-3 border-b border-[var(--border)] flex items-center justify-between"
            >
              {p[lang].title}
              <span className="text-xs">{p.year}</span>
            </Link>
          ))}

          <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] opacity-50 pt-4 pb-1">
            {t.contact}
          </p>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors py-3 border-b border-[var(--border)] flex items-center justify-between"
          >
            LinkedIn <span className="text-xs">↗</span>
          </a>
          <a
            href={`mailto:${contact.email}`}
            onClick={() => setOpen(false)}
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors py-3 border-b border-[var(--border)] flex items-center justify-between"
          >
            E-mail <span className="text-xs">↗</span>
          </a>
          <button
            onClick={() => { toggle(); setOpen(false); }}
            className="text-xs font-mono px-2 py-1 border border-[var(--border)] rounded text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--muted)] transition-colors self-start mt-3"
          >
            {lang === "pt" ? "🇺🇸 EN" : "🇧🇷 PT"}
          </button>
        </nav>
      </div>

      {/* Overlay — fecha qualquer dropdown aberto */}
      {(projectsOpen || contactOpen) && (
        <div className="fixed inset-0 z-40" onClick={closeAll} />
      )}

      {/* Overlay mobile menu */}
      {open && (
        <div className="fixed inset-0 z-30 md:hidden" onClick={() => setOpen(false)} />
      )}
    </>
  );
}
