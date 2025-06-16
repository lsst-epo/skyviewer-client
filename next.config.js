import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createJiti } from "jiti";
import createNextIntlPlugin from "next-intl/plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const jiti = createJiti(__filename);

const { env } = await jiti.import("./env");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rubin.canto.com",
      },
    ],
    minimumCacheTTL: 3600, // 1 hour
  },
  async headers() {
    /** @type {Array<import("next/dist/lib/load-custom-routes").Header>} */
    const headers = [];

    /** @type {import("next/dist/lib/load-custom-routes").Header} */
    const rscHeaders = {
      source: "/:all*",
      has: [
        {
          type: "query",
          key: "_rsc",
        },
      ],
      missing: [
        {
          type: "cookie",
          key: "__prerender_bypass",
        },
      ],
      headers: [
        {
          key: "x-rsc-cache-enabled",
          value: `${env.NEXT_RSC_CACHE_CONTROL}`,
        },
      ],
    };

    if (env.NEXT_RSC_CACHE_CONTROL) {
      headers.push({
        source: "/api/preview",
        has: [
          {
            type: "cookie",
            key: "__prerender_bypass",
          },
        ],
        headers: [
          {
            key: "clear-site-data",
            value: `"cache"`,
          },
        ],
      });

      const cacheControl =
        "public,max-age=3600,s-maxage=3600,stale-while-revalidate";
      rscHeaders.headers.push(
        {
          key: "Cache-Control",
          value: cacheControl,
        },
        {
          key: "cache-control",
          value: cacheControl,
        }
      );
    }

    headers.push(rscHeaders);

    return headers;
  },
  cacheMaxMemorySize: 0,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: {
      ssr: true,
    },
  },
  sassOptions: {
    includePaths: [
      join(__dirname, "node_modules"),
      join(__dirname, "styles"),
      join(__dirname, "components"),
    ],
  },
};

const withNextIntl = createNextIntlPlugin("./lib/i18n/request.ts");
export default withNextIntl(nextConfig);
