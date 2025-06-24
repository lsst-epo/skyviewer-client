import { MetadataRoute } from "next";
import { env } from "@/env";
import { serverTranslation } from "@/lib/i18n/server";
import { getGlobalData } from "@/services/api/global";
import { fallbackLng } from "@/lib/i18n/settings";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const globals = await getGlobalData({ locale: fallbackLng });
  const { t } = await serverTranslation(fallbackLng);
  const name = globals?.siteTitle || t("title");

  return {
    name,
    description: globals?.siteDescription ?? undefined,
    start_url: env.NEXT_PUBLIC_BASE_URL,
    display: "standalone",
    background_color: "#1f2121",
    theme_color: "#1f2121",
    orientation: "natural",
    icons: [
      { src: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcuts: [
      { name: t("navigation.cta.explore"), url: "/explore" },
      { name: t("navigation.cta.tours"), url: "/guided-experiences" },
      { name: t("navigation.cta.listen"), url: "/skysynth" },
    ],
  };
}
