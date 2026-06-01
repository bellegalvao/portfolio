"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useLang } from "@/lib/lang-context";
import { siteContent } from "@/lib/content";

interface ProjectCardProps {
  slug: string;
  title: string;
  tags: readonly string[];
  cover?: string;
  featured?: boolean;
  cardTitle?: string;
  cardLine?: string;
  cardTags?: string[];
  wide?: boolean;
}

export function ProjectCard({ slug, title, tags, cover, featured, cardTitle, cardLine, cardTags, wide }: ProjectCardProps) {
  const { lang } = useLang();
  const t = siteContent[lang].projects;

  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 400, damping: 40 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 400, damping: 40 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="will-change-transform h-full"
    >
      <Link href={`/projects/${slug}`} className="group block h-full">
        <article className="border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--surface)] hover:border-[var(--muted)] transition-all duration-200 h-full">
          {cover && (
            <div className={`relative w-full overflow-hidden bg-[var(--surface-2)] ${wide ? "h-56 md:h-64" : "h-64"}`}>
              <Image
                src={cover}
                alt={title}
                fill
                sizes={wide ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              {featured && (
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-yellow-50/95 backdrop-blur-sm text-[11px] font-semibold text-amber-600 shadow-sm">
                  <span>★</span>
                  <span>Destaque</span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-8 bg-gradient-to-t from-black/50 to-transparent flex flex-wrap gap-1.5">
                {(cardTags ?? tags).map((tag) => (
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
          <div className="px-4 py-3">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-sm font-semibold group-hover:text-[var(--accent)] transition-colors leading-snug">
                {cardTitle ?? title}
              </h3>
              <span className="text-xs text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors shrink-0 pt-0.5">
                {t.viewCase}
              </span>
            </div>
            {cardLine && (
              <p className="text-xs text-[var(--muted)] leading-snug mt-1.5 line-clamp-2">{cardLine}</p>
            )}
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
