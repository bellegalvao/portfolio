"use client";

import { createContext, useContext, useEffect, ReactNode } from "react";
import { useThemeStorage } from "./use-theme-storage";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: "light", toggle: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useThemeStorage();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
