import type { Metadata } from "next";
import { projects } from "@/lib/content";
import { CaseContent } from "./CaseContent";

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
  const description = project.pt.summary;
  const ogImage = project.cover ? [{ url: project.cover, alt: project.pt.title }] : [];

  return {
    title,
    description,
    openGraph: { title, description, images: ogImage },
    twitter: { card: "summary_large_image", title, description, images: ogImage.map((i) => i.url) },
  };
}

export default function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <CaseContent params={params} />;
}
