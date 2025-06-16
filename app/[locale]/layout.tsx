import "@/styles/styles.scss";
import { FunctionComponent, PropsWithChildren } from "react";
import { hasLocale } from "next-intl";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ViewTransitions } from "next-view-transitions";
import StyledComponentsRegistry from "@rubin-epo/epo-react-lib/StyledComponentsRegistry";
import Script from "next/script";
import { SourceSansPro } from "@/lib/fonts";
import { fallbackLng, languages } from "@/lib/i18n/settings";
import { routing } from "@/lib/i18n/routing";
import { serverTranslation } from "@/lib/i18n/server";
import I18NextClientProvider from "@/contexts/i18next";
import SkeletonGlobal from "@/components/organisms/SkeletonGlobal";
import { env } from "@/env";
import { getGlobalData } from "@/services/api/global";
import PreviewMode from "@/components/organisms/PreviewMode";

export const generateStaticParams = () => {
  return languages.map((locale) => {
    return { locale };
  });
};

export async function generateMetadata({
  params: { locale = fallbackLng },
}: RootProps): Promise<Metadata> {
  const globals = await getGlobalData({ locale });
  const { t } = await serverTranslation(locale, "translation");
  const title = globals?.siteTitle || t("title");

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    manifest: "/site.webmanifest",
    metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
    alternates: { canonical: "./" },
    openGraph: {
      description: globals?.siteDescription ?? undefined,
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
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <ViewTransitions>
      <html lang={locale}>
        <head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </head>
        <body className={SourceSansPro.variable}>
          <I18NextClientProvider locale={locale}>
            <StyledComponentsRegistry>
              <SkeletonGlobal>
                <PreviewMode />
                {children}
              </SkeletonGlobal>
            </StyledComponentsRegistry>
          </I18NextClientProvider>
          {env.PLAUSIBLE_DOMAIN && (
            <Script
              defer
              data-domain={env.PLAUSIBLE_DOMAIN}
              src="https://plausible.io/js/script.pageview-props.tagged-events.js"
            />
          )}
        </body>
      </html>
    </ViewTransitions>
  );
};

export default RootLayout;
