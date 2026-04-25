"use client";

import { useLang } from "@/lib/lang-context";
import { siteContent, contact } from "@/lib/content";
import { SkillGroup } from "@/components/SkillGroup";

export default function AboutPage() {
  const { lang } = useLang();
  const t = siteContent[lang].about;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-12">{t.title}</h1>

      {/* Bio */}
      <section className="mb-16 space-y-4">
        {t.bio.map((paragraph, i) => (
          <p key={i} className="text-[var(--muted)] leading-relaxed text-base">
            {paragraph}
          </p>
        ))}
        <p className="text-sm text-[var(--muted)] pt-2">📍 {t.location}</p>
      </section>

      <div className="border-t border-[var(--border)] mb-16" />

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-8">
          {t.skills.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <SkillGroup title="Design" icon="✦" skills={t.skills.design} />
          <SkillGroup title="Data"   icon="◈" skills={t.skills.data} />
          <SkillGroup title="Tools"  icon="⌘" skills={t.skills.tools} />
        </div>
      </section>

      <div className="border-t border-[var(--border)] mb-16" />

      {/* Contact */}
      <section>
        <h2 className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-6">
          {t.contact.title}
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-[var(--border)] px-4 py-2 rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            {t.contact.linkedin} ↗
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="text-sm border border-[var(--border)] px-4 py-2 rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            {t.contact.email} — {contact.email}
          </a>
        </div>
      </section>
    </div>
  );
}

