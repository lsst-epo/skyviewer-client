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
