import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["en", "pt", "es", "jp"] as const;
const DEFAULT_LOCALE = "pt";
type Locale = (typeof LOCALES)[number];
const COOKIE_NAME = "lng";

function pcikFromAcceptLanguage(request: NextRequest): Locale {
  const header = request.headers.get("accept-language");
  if(!header) return DEFAULT_LOCALE;

  const langs = header
                  .split(",")
                  .map((x) => x.split(";")[0].trim().toLowerCase());
  
  for (const lang of langs){
    const base = lang.split("-")[0] as Locale;
    if((LOCALES as readonly string[]).includes(base)) return base
  }

  return DEFAULT_LOCALE;
}

function getLocaleFromPath(pathname: string): Locale | null {
    const seg = pathname.split("/")[1];
    if(seg && (LOCALES as readonly string[]).includes(seg)) return seg as Locale;

    return null
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/template_2")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  const pathLocale = getLocaleFromPath(pathname);

  if(pathLocale){
    const res = NextResponse.next();
    res.cookies.set(COOKIE_NAME, pathLocale, {
      path:"/",
      maxAge: 60 * 60 * 24 * 30,
      sameSite:"lax",
    })
    return res;
  }

  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value as Locale | undefined
  const locale = 
      cookieLocale && (LOCALES as readonly string[]).includes(cookieLocale)
      ? cookieLocale
      : pcikFromAcceptLanguage(request);
  
  const url = request .nextUrl.clone();
  url.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(url);
}

