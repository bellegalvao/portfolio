export function SkillGroup({ title, icon, skills }: { title: string; icon: string; skills: string[] }) {
  return (
    <div className="group relative p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] hover:border-[var(--accent)]/50 transition-all duration-300 hover:shadow-[0_0_32px_rgba(185,122,255,0.12)]">
      <div className="absolute inset-x-6 top-0 h-px bg-[var(--accent)] opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

      <div className="mb-5">
        <span className="text-[var(--accent)] text-2xl leading-none block mb-2">{icon}</span>
        <p className="text-sm font-medium">{title}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)]/40 transition-colors duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
