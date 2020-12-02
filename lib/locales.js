const locales = [
  {
    site: "default",
    lang: "en-US",
    subdirectory: "",
    label: "English",
  },
  {
    site: "es",
    lang: "es",
    subdirectory: "es",
    label: "Spanish",
  },
];

export default locales;

export function getCurrentLocale(uriSegments) {
  const locale = locales.find(
    (locale) => locale.subdirectory === uriSegments?.[0]
  );
  return locale || locales[0];
}

export function getCurrentSite(uriSegments) {
  const locale = getCurrentLocale(uriSegments);
  return locale.site;
}
