"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/lang-context";
import { siteContent } from "@/lib/content";

interface ProjectCardProps {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  cover?: string;
  featured?: boolean;
}

export function ProjectCard({ slug, title, tags, year, cover, featured }: ProjectCardProps) {
  const { lang } = useLang();
  const t = siteContent[lang].projects;

  return (
    <Link href={`/projects/${slug}`} className="group block">
      <article className="border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--surface)] hover:border-[var(--muted)] transition-all duration-200">
        {cover && (
          <div className="relative w-full h-64 overflow-hidden bg-[var(--surface-2)]">
            <Image
              src={cover}
              alt={title}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
            {featured && (
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-yellow-50/95 backdrop-blur-sm text-[11px] font-semibold text-amber-600 shadow-sm">
                <span>★</span>
                <span>Destaque</span>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-8 bg-gradient-to-t from-black/50 to-transparent flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="px-4 py-3 flex items-center justify-between gap-4">
          <h3 className="text-sm font-semibold group-hover:text-[var(--accent)] transition-colors leading-snug">
            {title}
          </h3>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs text-[var(--muted)]">{year}</span>
            <span className="text-xs text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
              {t.viewCase}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
