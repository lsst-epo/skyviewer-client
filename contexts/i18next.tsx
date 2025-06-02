"use client";
import { NextIntlClientProvider } from "next-intl";
import useClientTranslation from "@/lib/i18n/client";
import { fallbackLng } from "@/lib/i18n/settings";
import { FunctionComponent, PropsWithChildren } from "react";
import { I18nextProvider } from "react-i18next";

const I18NextClientProvider: FunctionComponent<
  PropsWithChildren<{ locale: string }>
> = ({ locale = fallbackLng, children }) => {
  const { i18n } = useClientTranslation(locale);

  return (
    <NextIntlClientProvider locale={locale}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </NextIntlClientProvider>
  );
};

I18NextClientProvider.displayName = "i18next.Provider";

export default I18NextClientProvider;
