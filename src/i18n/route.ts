import { DEFAULT_LOCALE, isLocale, type Locale } from "./config";

// Navegadores enviam "ja"; a rota do site usa "jp".
const ACCEPT_ALIAS: Record<string, string> = { ja: "jp" };

// Rotas antigas viram seções da página única.
export const OLD_ROUTES: Record<string, string> = {
  contacts: "#contato",
  products: "#servicos",
};

// Escolhe o idioma pelo Accept-Language, respeitando o peso q (q=0 exclui).
export function pickFromAcceptLanguage(header: string | null | undefined): Locale {
  if (!header) return DEFAULT_LOCALE;

  const ranked = header
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      const weight = q ? Number(q.slice(2)) : 1;
      return {
        base: tag.trim().toLowerCase().split("-")[0],
        weight: Number.isNaN(weight) ? 0 : weight,
        index,
      };
    })
    .filter((x) => x.base && x.weight > 0)
    .sort((a, b) => b.weight - a.weight || a.index - b.index);

  for (const { base } of ranked) {
    const locale = ACCEPT_ALIAS[base] ?? base;
    if (isLocale(locale)) return locale;
  }
  return DEFAULT_LOCALE;
}

export type RouteInput = {
  pathname: string;
  cookie?: string;
  acceptLanguage?: string | null;
};

export type RouteDecision =
  | { kind: "pass"; setCookie?: Locale }
  | { kind: "redirect"; pathname: string; hash?: string; status: 307 | 308 };

// Função pura: decide o que fazer com a requisição. O proxy.ts só aplica a decisão.
export function decideRoute({ pathname, cookie, acceptLanguage }: RouteInput): RouteDecision {
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return { kind: "pass" };
  }

  const [, first, second] = pathname.split("/");

  if (isLocale(first)) {
    if (second && Object.hasOwn(OLD_ROUTES, second)) {
      return { kind: "redirect", pathname: `/${first}`, hash: OLD_ROUTES[second], status: 308 };
    }
    return { kind: "pass", setCookie: cookie === first ? undefined : first };
  }

  const locale = isLocale(cookie) ? cookie : pickFromAcceptLanguage(acceptLanguage);
  const rest = pathname === "/" ? "" : pathname;
  return { kind: "redirect", pathname: `/${locale}${rest}`, status: 307 };
}