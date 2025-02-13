import "@/styles/styles.scss";
import { FunctionComponent, PropsWithChildren } from "react";
import { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import StyledComponentsRegistry from "@/lib/registry";
import { SourceSansPro } from "@/lib/fonts";
import { fallbackLng, languages } from "@/lib/i18n/settings";
import { serverTranslation } from "@/lib/i18n/server";
import I18NextClientProvider from "@/contexts/i18next";

export const generateStaticParams = () => {
  return languages.map((locale) => {
    return { locale };
  });
};

export async function generateMetadata({
  params: { locale = fallbackLng },
}: RootProps): Promise<Metadata> {
  const { t } = await serverTranslation(locale, "translation");

  return {
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    alternates: { canonical: "./" },
  };
}

const RootLayout: FunctionComponent<PropsWithChildren<RootProps>> = ({
  children,
  params: { locale = fallbackLng },
}) => {
  return (
    <ViewTransitions>
      <html lang={locale}>
        <head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </head>
        <body className={SourceSansPro.variable}>
          <I18NextClientProvider locale={locale}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </I18NextClientProvider>
        </body>
      </html>
    </ViewTransitions>
  );
};

export default RootLayout;
