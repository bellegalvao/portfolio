"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang-context";
import { siteContent } from "@/lib/content";

export function Navbar() {
  const { lang, toggle } = useLang();
  const t = siteContent[lang].nav;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-sm">
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
