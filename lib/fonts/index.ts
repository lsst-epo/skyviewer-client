import { Source_Sans_3 as SourceSans3 } from "next/font/google";

const SourceSansPro = SourceSans3({
  weight: ["200", "300", "400", "700"],
  fallback: ["sans-serif"],
  variable: "--font-stack-base",
  subsets: ["latin"],
});

export { SourceSansPro };
