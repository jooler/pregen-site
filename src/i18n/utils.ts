import type { Locale } from "./config";
import en from "./ui/en";
import zh from "./ui/zh";

const translations = { en, zh } as const;

export type BilingualText = { en: string; zh: string };
export type BilingualHref = { en: string; zh: string };
export type BilingualArray = { en: string[]; zh: string[] };

/**
 * Extract locale from URL pathname (e.g., /en/about → "en")
 */
export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang === "zh" || lang === "en") return lang;
  return "en";
}

/**
 * Get a UI string by key and locale
 */
export function t(key: string, lang: Locale): string {
  return translations[lang]?.[key as keyof typeof en] ?? key;
}

/**
 * Resolve a bilingual text field to the current locale
 */
export function localized(data: BilingualText, lang: Locale): string {
  return data[lang];
}

/**
 * Resolve a bilingual array field to the current locale
 */
export function localizedArray(data: BilingualArray, lang: Locale): string[] {
  return data[lang];
}

/**
 * Get the alternate-language URL by swapping /en/ ↔ /zh/
 */
export function getAlternateUrl(url: URL, targetLang: Locale): string {
  const pathParts = url.pathname.split("/");
  pathParts[1] = targetLang;
  return pathParts.join("/");
}

/**
 * Get a localized href from a BilingualHref object
 */
export function localizedHref(data: BilingualHref, lang: Locale): string {
  return data[lang];
}
