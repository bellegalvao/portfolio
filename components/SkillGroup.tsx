type SkillItem = string | { title: string; description: string };

export function SkillGroup({ title, icon, skills }: { title: string; icon: string; skills: SkillItem[] }) {
  const isExpanded = skills.length > 0 && typeof skills[0] === "object";

  return (
    <div className="group relative p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] hover:border-[var(--accent)]/50 transition-all duration-300 hover:shadow-[0_0_32px_rgba(185,122,255,0.12)]">
      <div className="absolute inset-x-6 top-0 h-px bg-[var(--accent)] opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

      <div className="mb-5">
        <span className="text-[var(--accent)] text-2xl leading-none block mb-2">{icon}</span>
        <p className="text-sm font-medium">{title}</p>
      </div>

      {isExpanded ? (
        <div className="flex flex-col gap-4">
          {(skills as { title: string; description: string }[]).map((item, i) => (
            <div key={i} className="border-t border-[var(--border)] pt-4 first:border-0 first:pt-0">
              <p className="text-xs font-semibold text-[var(--foreground)] mb-1">{item.title}</p>
              <p className="text-xs text-[var(--muted)] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {(skills as string[]).map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)]/40 transition-colors duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
