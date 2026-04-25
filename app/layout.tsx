import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LangProvider } from "@/lib/lang-context";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const monaSans = localFont({
  src: "./fonts/mona-sans-400.woff2",
  variable: "--font-mona-sans",
  weight: "400",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://isabellegalvao.com.br";

export const metadata: Metadata = {
  title: {
    default: "Isabelle Galvão — Product Designer",
    template: "%s",
  },
  description:
    "Product Designer baseada em Salvador, BA. Transformo problemas complexos em soluções simples e orientadas a dados.",
  metadataBase: new URL(baseUrl),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    siteName: "Isabelle Galvão",
    title: "Isabelle Galvão — Product Designer",
    description:
      "Product Designer baseada em Salvador, BA. Transformo problemas complexos em soluções simples e orientadas a dados.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Isabelle Galvão — Product Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isabelle Galvão — Product Designer",
    description:
      "Product Designer baseada em Salvador, BA. Transformo problemas complexos em soluções simples e orientadas a dados.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${monaSans.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <LangProvider>
          <Navbar />
          <main className="flex-1 pt-14">{children}</main>
          <Footer />
        </LangProvider>
        <Analytics />
      </body>
    </html>
  );
}
