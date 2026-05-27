import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "@/components/ProjectCard";
import { LangProvider } from "@/lib/lang-context";
import type { ReactNode } from "react";

// ── Mocks ────────────────────────────────────────────────────────────────────

vi.mock("next/image", () => ({
  default: ({ alt, src }: { alt: string; src: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} src={src} />
  ),
}));

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

// ── Helpers ──────────────────────────────────────────────────────────────────

function wrapper({ children }: { children: ReactNode }) {
  return <LangProvider>{children}</LangProvider>;
}

const defaultProps = {
  slug: "konsi-app",
  title: "Konsi App",
  summary: "Resumo do projeto",
  tags: ["Product Design", "Mobile"],
  year: "2023",
  index: 0,
} as const;

// ── Testes ───────────────────────────────────────────────────────────────────

describe("ProjectCard", () => {
  it("renderiza o título do projeto", () => {
    render(<ProjectCard {...defaultProps} />, { wrapper });
    expect(screen.getByText("Konsi App")).toBeInTheDocument();
  });

  it("renderiza o ano", () => {
    render(<ProjectCard {...defaultProps} />, { wrapper });
    expect(screen.getByText("2023")).toBeInTheDocument();
  });

  it("link aponta para a rota correta do projeto", () => {
    render(<ProjectCard {...defaultProps} />, { wrapper });
    expect(screen.getByRole("link")).toHaveAttribute("href", "/projects/konsi-app");
  });

  it("renderiza as tags quando há imagem de cover", () => {
    render(
      <ProjectCard
        {...defaultProps}
        cover="/images/konsi-app-cover.webp"
      />,
      { wrapper },
    );
    expect(screen.getByText("Product Design")).toBeInTheDocument();
    expect(screen.getByText("Mobile")).toBeInTheDocument();
  });

  it("não quebra sem cover", () => {
    render(<ProjectCard {...defaultProps} />, { wrapper });
    expect(screen.queryByRole("img")).toBeNull();
  });

  it("renderiza o texto de CTA em português por padrão", () => {
    render(<ProjectCard {...defaultProps} />, { wrapper });
    // siteContent.pt.projects.viewCase = "Ver case →"
    expect(screen.getByText("Ver case →")).toBeInTheDocument();
  });
});
