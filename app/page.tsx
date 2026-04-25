"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/lib/lang-context";
import { siteContent, projects, contact } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillGroup } from "@/components/SkillGroup";

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

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
          {/* Text */}
          <motion.div
            className="flex-1"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={fadeUp} className="text-sm text-[var(--muted)] mb-3 font-mono">
              {t.hero.greeting}
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              {t.hero.role}
              <span className="text-[var(--accent)]">.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-[var(--muted)] max-w-xl leading-relaxed mb-10">
              {t.hero.description}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm border border-[var(--border)] px-4 py-2 rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                {t.hero.cta} ↓
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-sm bg-white text-black px-4 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                {t.hero.ctaContact} {"↗︎"}
              </a>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="relative w-full h-64 md:w-72 md:h-auto md:self-stretch shrink-0 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <Image
              src="/images/perfil.jpg"
              alt="Isabelle Galvão"
              fill
              sizes="(min-width: 768px) 288px, 100vw"
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

      {/* Skills */}
      <section className="pb-24">
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: "Design", icon: "✦", skills: t.about.skills.design },
            { title: "Data",   icon: "◈", skills: t.about.skills.data },
            { title: "Tools",  icon: "⌘", skills: t.about.skills.tools },
          ].map((group, i) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <SkillGroup title={group.title} icon={group.icon} skills={group.skills} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
