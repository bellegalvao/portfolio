import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "Sobre — Isabelle Galvão",
  description:
    "Product Designer baseada em Salvador, BA. Trabalho para transformar problemas complexos em soluções simples, úteis e que realmente façam diferença na vida das pessoas e nos resultados do negócio.",
  openGraph: {
    title: "Sobre — Isabelle Galvão",
    description:
      "Product Designer baseada em Salvador, BA. Trabalho para transformar problemas complexos em soluções simples, úteis e que realmente façam diferença na vida das pessoas e nos resultados do negócio.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre — Isabelle Galvão",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
