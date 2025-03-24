import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createJiti } from "jiti";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const jiti = createJiti(__filename);

await jiti.import("./env");

/** @type {import('next').NextConfig} */
export default {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rubin.canto.com",
      },
    ],
  },
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
