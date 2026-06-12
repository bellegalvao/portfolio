import type { Metadata } from "next";
import { projects } from "@/lib/projects/index";
import { CaseContent } from "./CaseContent";

/**
 * Pré-gera rotas estáticas para cada projeto em build time.
 * Sem isso, Next.js renderiza a página on-demand (SSR/dynamic).
 */
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Projeto não encontrado — Isabelle Galvão" };
  }

  const title = `${project.pt.title} | Case de Design — Isabelle Galvão`;
  const description = project.pt.seoDescription ?? project.pt.summary;
  const ogImage = project.cover ? [{ url: project.cover, alt: project.pt.title }] : [];

  return {
    title,
    description,
    openGraph: { title, description, images: ogImage },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage.map((i) => i.url),
    },
  };
}

const baseUrl = "https://isabellegalvao.com.br";

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  const jsonLd = project
    ? {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.pt.title,
        description: project.pt.seoDescription ?? project.pt.summary,
        author: {
          "@type": "Person",
          name: "Isabelle Galvão",
          url: baseUrl,
        },
        url: `${baseUrl}/projects/${slug}`,
        ...(project.cover ? { image: `${baseUrl}${project.cover}` } : {}),
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <CaseContent params={params} />
    </>
  );
}
