"server-only";

import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import { loadResources } from "./index";
import { getOptions } from "./settings";
import { getLocale } from "next-intl/server";

const initI18next = async (lng: string, ns: string | string[]) => {
  // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(loadResources)
    .init(getOptions(lng, ns));
  return i18nInstance;
};

async function useTranslation(
  lng?: string,
  ns: string | string[] = "translation",
  options: any = {}
) {
  const locale = lng || (await getLocale());
  const i18nextInstance = await initI18next(locale, ns);

  return {
    t: i18nextInstance.getFixedT(
      locale,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: i18nextInstance,
  };
}

export { useTranslation, useTranslation as serverTranslation };
