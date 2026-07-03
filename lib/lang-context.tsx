"use client";

import { createContext, useContext, useEffect, ReactNode } from "react";
import { Lang } from "./types";
import { useLangStorage } from "./use-lang-storage";

interface LangContextType {
  lang: Lang;
  toggle: () => void;
}

const LangContext = createContext<LangContextType>({ lang: "pt", toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useLangStorage();

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const toggle = () => {
    setLang(lang === "pt" ? "en" : "pt");
  };

  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
