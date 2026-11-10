import { NextResponse, type NextRequest } from "next/server";
import { decideRoute } from "@/i18n/route";

const COOKIE_NAME = "lng";
const ONE_MONTH = 60 * 60 * 24 * 30;

export default function proxy(request: NextRequest) {
  const decision = decideRoute({
    pathname: request.nextUrl.pathname,
    cookie: request.cookies.get(COOKIE_NAME)?.value,
    acceptLanguage: request.headers.get("accept-language"),
  });

  if (decision.kind === "redirect") {
    const url = request.nextUrl.clone();
    url.pathname = decision.pathname;
    url.hash = decision.hash ?? "";
    return NextResponse.redirect(url, decision.status);
  }

  const res = NextResponse.next();
  if (decision.setCookie) {
    res.cookies.set(COOKIE_NAME, decision.setCookie, {
      path: "/",
      maxAge: ONE_MONTH,
      sameSite: "lax",
    });
  }
  return res;
}