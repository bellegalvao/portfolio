"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Lang } from "./types";

// Native 'storage' events only fire in other tabs, so we dispatch our own
// to keep useSyncExternalStore reactive to changes made in this tab too.
const LANG_CHANGE_EVENT = "lang-storage-change";

function subscribe(callback: () => void) {
  window.addEventListener(LANG_CHANGE_EVENT, callback);
  return () => window.removeEventListener(LANG_CHANGE_EVENT, callback);
}

function getSnapshot(): Lang {
  const saved = localStorage.getItem("lang");
  return saved === "pt" || saved === "en" ? saved : "pt";
}

function getServerSnapshot(): Lang {
  return "pt";
}

export function useLangStorage() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((next: Lang) => {
    localStorage.setItem("lang", next);
    window.dispatchEvent(new Event(LANG_CHANGE_EVENT));
  }, []);

  return [lang, setLang] as const;
}
