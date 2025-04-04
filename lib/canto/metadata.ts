import { fallbackLng } from "../i18n/settings";

export const assetAlt = (
  additional: { AltTextEN: string | null; AltTextES: string | null },
  locale = fallbackLng
): string => {
  const localeKey = locale.toUpperCase();
  const defaultLocaleKey = fallbackLng.toUpperCase();

  return (
    additional[`AltText${localeKey}`] ||
    additional[`AltText${defaultLocaleKey}`] ||
    ""
  );
};
export const assetTitle = (
  additional: {
    TitleEN: string | null;
    TitleES: string | null;
  },
  locale = fallbackLng
): string => {
  const localeKey = locale.toUpperCase();
  const defaultLocaleKey = fallbackLng.toUpperCase();

  return (
    additional[`Title${localeKey}`] ||
    additional[`Title${defaultLocaleKey}`] ||
    ""
  );
};
