import { fallbackLng } from "./settings";

export const siteFromLocale = (locale: string) => {
  return locale === fallbackLng ? "default" : locale;
};

export function localeFromSite(site: string) {
  return site.toLowerCase() === "default" ? "en" : site.toLowerCase();
}
