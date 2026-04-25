"use client";

import { useLang } from "@/lib/lang-context";
import { siteContent, contact } from "@/lib/content";

export function Footer() {
  const { lang } = useLang();
  const t = siteContent[lang].footer;

  return (
    <footer className="mt-10">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 flex flex-row items-center justify-between gap-6">
        <h2 className="text-3xl md:text-5xl font-bold">
          {lang === "pt" ? (
            <>Vamos iniciar<br />um projeto juntos?</>
          ) : (
            <>Let&apos;s start<br />a project together?</>
          )}
        </h2>
        <a
          href={`mailto:${contact.email}`}
          className="group shrink-0 relative inline-flex items-center justify-center w-24 h-24 md:w-36 md:h-36 rounded-full bg-white text-black font-medium text-base md:text-lg overflow-hidden"
        >
          <span className="absolute inset-0 bg-[var(--accent)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          <span className="relative z-10 group-hover:text-white transition-colors duration-500">
            {t.ctaButton}
          </span>
        </a>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[var(--muted)]">
            {t.made} — Salvador, BA
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
      </div>
    </footer>
  );
}
