"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/lib/lang-context";
import { siteContent, projects, contact } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";
import { Intro } from "@/components/Intro";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Home() {
  const { lang } = useLang();
  const t = siteContent[lang];
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="py-5 md:py-24">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
          {/* Text */}
          <motion.div
            className="flex-1"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Mobile: greeting + title side by side with circular photo + badge */}
            <div className="flex items-center justify-between gap-4 md:block">
              <div>
                <motion.p variants={fadeUp} className="text-sm text-[var(--muted)] mb-3 font-mono">
                  {t.hero.greeting}
                </motion.p>
                <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold tracking-tight md:mb-6">
                  {t.hero.role}
                  <span className="text-[var(--accent)]">.</span>
                </motion.h1>
              </div>
              {/* Circular photo — mobile only */}
              <motion.div
                className="md:hidden relative w-24 h-24 rounded-full overflow-hidden shrink-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              >
                <Image
                  src="/images/perfil.jpg"
                  alt="Isabelle Galvão"
                  fill
                  sizes="96px"
                  className="object-cover object-[center_25%]"
                  priority
                />
              </motion.div>
            </div>
            <motion.p variants={fadeUp} className="text-lg text-[var(--muted)] max-w-xl leading-relaxed mb-10 mt-6 md:mt-0">
              {t.hero.description}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <a
                href={contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 text-sm border border-[var(--border)] px-4 py-2 rounded-lg overflow-hidden"
              >
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 inline-flex items-center gap-2 group-hover:text-black transition-colors duration-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                  {t.hero.ctaResume}
                </span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="group relative inline-flex items-center gap-2 text-sm bg-white text-black px-4 py-2 rounded-lg font-medium overflow-hidden"
              >
                <span className="absolute inset-0 bg-[var(--accent)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 inline-flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  {t.hero.ctaContact}
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Photo — desktop only */}
          <motion.div
            className="relative hidden md:block md:w-72 md:self-stretch shrink-0 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <Image
              src="/images/perfil.jpg"
              alt="Isabelle Galvão"
              fill
              sizes="288px"
              className="object-cover object-[center_25%]"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="pb-24">
        <motion.h2
          className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          {t.projects.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard
                slug={project.slug}
                title={project[lang].title}
                summary={project[lang].summary}
                tags={project.tags}
                year={project.year}
                index={i}
                cover={project.cover}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="pb-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          <div className="md:sticky md:top-24 md:self-start md:w-2/5">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-4 uppercase"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              {t.workflow.title}
            </motion.h2>
            <motion.p
              className="text-[var(--muted)] leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t.workflow.description}
            </motion.p>
          </div>
          <div className="flex-1">
            {t.workflow.steps.map((step, i) => (
              <motion.div
                key={i}
                className="border-t border-[var(--border)] py-8"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="text-xs font-mono text-[var(--accent)] block mb-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="pb-10">
        <motion.h2
          className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest mb-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          {t.about.skills.title}
        </motion.h2>
        <motion.div
          className="flex flex-wrap gap-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          {[...t.about.skills.design, ...t.about.skills.data, ...t.about.skills.tools].map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)]/50 hover:bg-[var(--surface)] transition-all duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </section>
    </div>
    </>
  );
}
