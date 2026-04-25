"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/lang-context";
import { siteContent } from "@/lib/content";

interface ProjectCardProps {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year: string;
  index: number;
  cover?: string;
}

export function ProjectCard({ slug, title, summary, tags, year, index, cover }: ProjectCardProps) {
  const { lang } = useLang();
  const t = siteContent[lang].projects;

  return (
    <Link href={`/projects/${slug}`} className="group block">
      <article className="border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--surface)] hover:bg-[var(--surface-2)] hover:border-[var(--muted)] transition-all duration-200">
        {cover && (
          <div className="relative w-full h-48 overflow-hidden bg-[var(--surface-2)]">
            <Image
              src={cover}
              alt={title}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <span className="text-xs font-mono text-[var(--muted)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-xs text-[var(--muted)]">{year}</span>
          </div>
          <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{summary}</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-xs text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors shrink-0 ml-4">
              {t.viewCase}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
