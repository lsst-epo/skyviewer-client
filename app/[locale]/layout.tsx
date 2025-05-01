import "@/styles/styles.scss";
import { FunctionComponent, PropsWithChildren } from "react";
import { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import StyledComponentsRegistry from "@rubin-epo/epo-react-lib/StyledComponentsRegistry";
import { SourceSansPro } from "@/lib/fonts";
import { fallbackLng, languages } from "@/lib/i18n/settings";
import { serverTranslation } from "@/lib/i18n/server";
import I18NextClientProvider from "@/contexts/i18next";
import SkeletonGlobal from "@/components/organisms/SkeletonGlobal";

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
    manifest: "/site.webmanifest",
    alternates: { canonical: "./" },
    openGraph: {
      locale,
    },
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
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
            <StyledComponentsRegistry>
              <SkeletonGlobal>{children}</SkeletonGlobal>
            </StyledComponentsRegistry>
          </I18NextClientProvider>
        </body>
      </html>
    </ViewTransitions>
  );
};

export default RootLayout;
