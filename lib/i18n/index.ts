import resourcesToBackend from "i18next-resources-to-backend";
import { fallbackLng } from "./settings";

export const loadResources = resourcesToBackend(
  (language: string, namespace: string, callback) => {
    switch (namespace) {
      case "epo-react-lib":
        import(
          `@rubin-epo/epo-react-lib/localeStrings/${language}/${namespace}.json`
        )
          .then(({ default: resources }) => {
            callback(null, resources);
          })
          .catch((error) => {
            callback(error, null);
          });
        break;
      default:
        import(`./localeStrings/${language}/${namespace}.json`)
          .then(({ default: resources }) => {
            callback(null, resources);
          })
          .catch((error) => {
            callback(error, null);
          });
        break;
    }
  }
);

export const isDefaultLocale = (locale: string) => locale === fallbackLng;

const shiftToSegments = (segments: Array<string>) => {
  if (segments[0] === "") {
    segments.shift();
    shiftToSegments(segments);
  }
};

export const addLocaleUriSegment = (
  locale: string,
  uri: string,
  options: {
    includeLeadingSlash?: boolean;
  } = { includeLeadingSlash: true }
) => {
  const segments = uri.split("/");

  shiftToSegments(segments);

  if (segments[0] === locale) {
    return segments.join("/");
  } else {
    if (!isDefaultLocale(locale)) {
      segments.unshift(locale);
    }

    const { includeLeadingSlash = true } = options;
    if (includeLeadingSlash) {
      segments.unshift("");
    }

    return segments.join("/");
  }
};
