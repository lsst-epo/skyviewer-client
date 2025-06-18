import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createJiti } from "jiti";
import createNextIntlPlugin from "next-intl/plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const jiti = createJiti(__filename);

const { env } = await jiti.import("./env");
const headers = await jiti.import("./config/headers", { default: true });

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rubin.canto.com",
      },
    ],
    minimumCacheTTL: env.NEXT_IMAGE_MINIMUM_CACHE_TTL,
  },
  headers,
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
