"use client";

import { useLang } from "@/lib/lang-context";
import { siteContent, contact } from "@/lib/content";

export function Footer() {
  const { lang } = useLang();
  const t = siteContent[lang].footer;

  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-[var(--muted)]">
          {t.made} Next.js {t.in} Salvador, BA
        </span>
        <div className="flex items-center gap-4">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            {contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
