"use client";

import { useCallback, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

// Native 'storage' events only fire in other tabs, so we dispatch our own
// to keep useSyncExternalStore reactive to changes made in this tab too.
const THEME_CHANGE_EVENT = "theme-storage-change";

function subscribe(callback: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, callback);
  return () => window.removeEventListener(THEME_CHANGE_EVENT, callback);
}

function getSnapshot(): Theme {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  // First visit, no saved preference: fall back to OS setting.
  // (app/layout.tsx's inline script already applies the "dark" class
  // pre-hydration for this exact case, avoiding a flash of the wrong theme.)
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

export function useThemeStorage() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((next: Theme) => {
    localStorage.setItem("theme", next);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }, []);

  return [theme, setTheme] as const;
}
