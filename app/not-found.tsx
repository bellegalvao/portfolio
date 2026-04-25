import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 flex flex-col items-start gap-6">
      <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest">404</p>
      <h1 className="text-4xl font-bold tracking-tight">Página não encontrada</h1>
      <p className="text-[var(--muted)] leading-relaxed">
        Essa página não existe ou foi removida.
      </p>
      <Link
        href="/"
        className="text-sm border border-[var(--border)] px-4 py-2 rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
      >
        ← Voltar para o início
      </Link>
    </div>
  );
}
