import { describe, it, expect } from "vitest";
import { projects, siteContent, contact } from "@/lib/content";

// ─── projects ────────────────────────────────────────────────────────────────

describe("projects", () => {
  it("tem ao menos um projeto", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("cada projeto tem campos obrigatórios preenchidos", () => {
    for (const p of projects) {
      expect(p.slug, `${p.slug}: slug ausente`).toBeTruthy();
      expect(p.year, `${p.slug}: year ausente`).toBeTruthy();
      expect(p.tags.length, `${p.slug}: sem tags`).toBeGreaterThan(0);
      expect(p.cover, `${p.slug}: cover ausente`).toBeTruthy();
    }
  });

  it("slugs são únicos", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("cada projeto tem conteúdo em pt e en", () => {
    for (const p of projects) {
      expect(p.pt.title, `${p.slug}: pt.title ausente`).toBeTruthy();
      expect(p.pt.challenge, `${p.slug}: pt.challenge ausente`).toBeTruthy();
      expect(p.pt.solution, `${p.slug}: pt.solution ausente`).toBeTruthy();
      expect(p.pt.process.length, `${p.slug}: pt.process vazio`).toBeGreaterThan(0);
      expect(p.pt.metrics.length, `${p.slug}: pt.metrics vazio`).toBeGreaterThan(0);

      expect(p.en.title, `${p.slug}: en.title ausente`).toBeTruthy();
      expect(p.en.challenge, `${p.slug}: en.challenge ausente`).toBeTruthy();
      expect(p.en.solution, `${p.slug}: en.solution ausente`).toBeTruthy();
      expect(p.en.process.length, `${p.slug}: en.process vazio`).toBeGreaterThan(0);
      expect(p.en.metrics.length, `${p.slug}: en.metrics vazio`).toBeGreaterThan(0);
    }
  });

  it("covers usam formato .webp", () => {
    for (const p of projects) {
      if (p.cover) {
        expect(p.cover, `${p.slug}: cover deve ser .webp`).toMatch(/\.webp$/);
      }
    }
  });

  it("imagens referenciam extensões válidas (.png | .webp | .jpg)", () => {
    const valid = [".png", ".webp", ".jpg"];
    for (const p of projects) {
      for (const img of p.images) {
        const ok = valid.some((ext) => img.endsWith(ext));
        expect(ok, `${p.slug}: imagem inválida "${img}"`).toBe(true);
      }
    }
  });

  it("banner, quando presente, referencia arquivo .webp", () => {
    for (const p of projects) {
      if (p.banner) {
        expect(p.banner, `${p.slug}: banner deve ser .webp`).toMatch(/\.webp$/);
      }
    }
  });

  it("métricas com before também têm after", () => {
    for (const p of projects) {
      for (const m of p.pt.metrics) {
        if (m.before) {
          expect(m.after, `${p.slug}: métrica com before sem after`).toBeTruthy();
        }
      }
    }
  });
});

// ─── siteContent ─────────────────────────────────────────────────────────────

describe("siteContent", () => {
  it("tem chaves pt e en", () => {
    expect(siteContent.pt).toBeDefined();
    expect(siteContent.en).toBeDefined();
  });

  it("workflow tem exatamente 5 etapas em ambos idiomas", () => {
    expect(siteContent.pt.workflow.steps).toHaveLength(5);
    expect(siteContent.en.workflow.steps).toHaveLength(5);
  });

  it("cada etapa do workflow tem title e description", () => {
    for (const step of [...siteContent.pt.workflow.steps, ...siteContent.en.workflow.steps]) {
      expect(step.title).toBeTruthy();
      expect(step.description).toBeTruthy();
    }
  });

  it("skills têm ao menos uma entrada por categoria", () => {
    for (const lang of ["pt", "en"] as const) {
      const { design, data, tools } = siteContent[lang].about.skills;
      expect(design.length).toBeGreaterThan(0);
      expect(data.length).toBeGreaterThan(0);
      expect(tools.length).toBeGreaterThan(0);
    }
  });
});

// ─── contact ─────────────────────────────────────────────────────────────────

describe("contact", () => {
  it("linkedin é URL https válida", () => {
    expect(contact.linkedin).toMatch(/^https:\/\/www\.linkedin\.com/);
  });

  it("email tem formato válido", () => {
    expect(contact.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("resume é URL https", () => {
    expect(contact.resume).toMatch(/^https:\/\//);
  });

  it("github é URL https", () => {
    expect(contact.github).toMatch(/^https:\/\//);
  });
});
