import { i18nRouter } from "next-i18n-router";
import { languages, fallbackLng, cookieName } from "@/lib/i18n/settings";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return i18nRouter(request, {
    locales: languages,
    defaultLocale: fallbackLng,
    localeCookie: cookieName,
  });
}

// only applies this middleware to files in the app directory
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
