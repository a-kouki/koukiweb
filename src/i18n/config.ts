export const LOCALES = ["pt", "en", "es", "jp"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "pt";

export const isLocale = (v: string | undefined): v is Locale =>
  !!v && (LOCALES as readonly string[]).includes(v);

// A rota usa "jp"; o HTML e o hreflang usam o código ISO "ja".
export const HTML_LANG: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
  jp: "ja",
};

export const LANG_SHORT: Record<Locale, string> = { pt: "PT", en: "EN", es: "ES", jp: "日本語" };
export const LANG_NAME: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
  jp: "日本語",
};