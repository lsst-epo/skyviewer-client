import { fallbackLng } from "./settings";

export const siteFromLocale = (locale: string) => {
  return locale === fallbackLng ? "default" : locale;
};
