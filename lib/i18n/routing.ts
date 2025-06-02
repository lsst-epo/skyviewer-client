import { defineRouting } from "next-intl/routing";
import { fallbackLng, languages, cookieName } from "./settings";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: languages,

  // Used when no locale matches
  defaultLocale: fallbackLng,
  localePrefix: "as-needed",
  localeCookie: {
    name: cookieName,
  },
});
