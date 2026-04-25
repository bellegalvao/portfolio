"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang-context";
import { siteContent, contact } from "@/lib/content";

export function Navbar() {
  const { lang, toggle } = useLang();
  const t = siteContent[lang].nav;
  const availableForWork = siteContent[lang].hero.availableForWork;

  return (
    <header className="relative fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-sm">
      {/* Badge centralizado */}
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--muted)]">
        <span className="relative flex w-2 h-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full w-2 h-2 bg-green-400" />
        </span>
        {availableForWork}
      </span>

      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-sm font-medium tracking-tight hover:text-[var(--accent)] transition-colors">
          Isabelle Galvão
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/#projects" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
            {t.projects}
          </Link>
          <Link href="/about" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
            {t.about}
          </Link>
          <a
            href={`mailto:${contact.email}`}
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            {t.contact}
          </a>
          <button
            onClick={toggle}
            className="text-xs font-mono px-2 py-1 border border-[var(--border)] rounded text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--muted)] transition-colors"
          >
            {lang === "pt" ? "🇺🇸 EN" : "🇧🇷 PT"}
          </button>
        </div>
      </nav>
    </header>
  );
}
