import "server-only";
import { LOCALES, type Locale } from "./config";

export type Dict = typeof import("../locales/pt.json");

// O tipo vem do pt.json: faltar uma chave em outro idioma vira erro de TypeScript.
const loaders: Record<Locale, () => Promise<Dict>> = {
  pt: () => import("../locales/pt.json").then((m) => m.default),
  en: () => import("../locales/en.json").then((m) => m.default),
  es: () => import("../locales/es.json").then((m) => m.default),
  jp: () => import("../locales/jp.json").then((m) => m.default),
};

export const getDict = (lng: Locale): Promise<Dict> => loaders[lng]();

// Saudação de cada idioma (o campo "digite e veja" mostra os 4 de uma vez).
export async function getGreetings(): Promise<Record<Locale, string>> {
  const entries = await Promise.all(
    LOCALES.map(async (l) => [l, (await getDict(l)).demo.greeting] as const),
  );
  return Object.fromEntries(entries) as Record<Locale, string>;
}