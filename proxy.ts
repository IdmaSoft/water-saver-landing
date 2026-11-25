import { NextRequest, NextResponse } from "next/server";

const LOCALE_COOKIE_NAME = "NEXT_LOCALE";
const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const DEFAULT_LOCALE = "en";
const SUPPORTED_LOCALES = ["en", "es"] as const;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

function isValidLocale(locale: string | undefined): locale is SupportedLocale {
  return typeof locale === "string" && SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

// Picks the best supported language from the Accept-Language header.
// "es-CO,es;q=0.9,en;q=0.8" -> "es". Spanish speakers see Gotita, everyone else Water Saver.
function localeFromHeader(header: string | null): SupportedLocale | undefined {
  if (!header) return undefined;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { lang: tag.toLowerCase().split("-")[0], q: q ? Number(q.trim().slice(2)) || 0 : 1 };
    })
    .sort((a, b) => b.q - a.q);
  return ranked.find((entry) => isValidLocale(entry.lang))?.lang as SupportedLocale | undefined;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const maybeLocale = pathname.split("/")[1];

  if (isValidLocale(maybeLocale)) {
    const response = NextResponse.next();
    if (request.cookies.get(LOCALE_COOKIE_NAME)?.value !== maybeLocale) {
      response.cookies.set(LOCALE_COOKIE_NAME, maybeLocale, {
        path: "/",
        maxAge: LOCALE_COOKIE_MAX_AGE,
        sameSite: "lax",
      });
    }
    return response;
  }

  if (pathname === "/") {
    const cookieLocale = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
    const targetLocale = isValidLocale(cookieLocale)
      ? cookieLocale
      : localeFromHeader(request.headers.get("accept-language")) ?? DEFAULT_LOCALE;
    const url = request.nextUrl.clone();
    url.pathname = `/${targetLocale}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\..*).*)"],
};
