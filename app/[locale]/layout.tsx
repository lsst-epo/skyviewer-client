import { FunctionComponent, PropsWithChildren } from "react";
import { Metadata } from "next";
import Script from "next/script";
import "@/styles/styles.scss";
import StyledComponentsRegistry from "@/lib/registry";
import { SourceSansPro } from "@/lib/fonts";
import { fallbackLng, languages } from "@/lib/i18n/settings";
import { serverTranslation } from "@/lib/i18n";

export type RootParams = {
  locale: string;
};

export interface RootProps {
  params: RootParams;
}

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
    title: t("title"),
  };
}

const RootLayout: FunctionComponent<PropsWithChildren<RootProps>> = ({
  children,
  params: { locale = fallbackLng },
}) => {
  return (
    <html lang={locale}>
      <head>
        {/* Aladin Lite has a dependency on the jQuery library */}
        <Script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.1.min.js"
          strategy="beforeInteractive"
        ></Script>
        {/* Aladin Lite JS code */}
        <Script
          type="text/javascript"
          src="/aladin-lite/v2/aladin.js"
          strategy="beforeInteractive"
        ></Script>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={SourceSansPro.variable}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
