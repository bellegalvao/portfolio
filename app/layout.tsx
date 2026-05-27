import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: {
    default: "Isabelle Galvão — Product Designer",
    template: "%s — Isabelle Galvão",
  },
  description:
    "Product Designer UX/UI com 6 anos de experiência em produtos digitais, fintech e design systems. Baseada em Salvador, BA. Especialista em mobile, dados e Flutter.",
  keywords: ["product designer", "UX designer", "UI designer", "design system", "fintech", "mobile design", "Flutter", "Salvador", "Brasil", "portfólio designer"],
  metadataBase: new URL(baseUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    siteName: "Isabelle Galvão",
    title: "Isabelle Galvão — Product Designer",
    description:
      "Product Designer UX/UI com 6 anos de experiência em produtos digitais, fintech e design systems. Baseada em Salvador, BA. Especialista em mobile, dados e Flutter.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isabelle Galvão — Product Designer",
    description:
      "Product Designer UX/UI com 6 anos de experiência em produtos digitais, fintech e design systems. Baseada em Salvador, BA. Especialista em mobile, dados e Flutter.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${monaSans.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
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
