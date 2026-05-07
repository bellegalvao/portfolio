import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "Sobre — Isabelle Galvão | Product Designer UX/UI",
  description:
    "Product Designer brasileira com 6 anos de experiência em fintech, mobile e design systems. Baseada em Salvador, BA. Especialista em Flutter, dados e produtos digitais.",
  openGraph: {
    title: "Sobre — Isabelle Galvão | Product Designer UX/UI",
    description:
      "Product Designer brasileira com 6 anos de experiência em fintech, mobile e design systems. Baseada em Salvador, BA. Especialista em Flutter, dados e produtos digitais.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre — Isabelle Galvão | Product Designer UX/UI",
    description:
      "Product Designer brasileira com 6 anos de experiência em fintech, mobile e design systems. Baseada em Salvador, BA.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
