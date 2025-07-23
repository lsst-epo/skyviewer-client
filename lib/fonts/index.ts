import {
  Source_Sans_3 as SourceSans3,
  Noto_Sans_JP as NotoSansJP,
} from "next/font/google";

const SourceSansPro = SourceSans3({
  weight: ["200", "300", "400", "700"],
  fallback: ["var(--font-stack-jp)", "sans-serif"],
  variable: "--font-stack-base",
  subsets: ["latin"],
});

const NotoSansJapanese = NotoSansJP({
  weight: ["200", "300", "400", "700"],
  fallback: ["sans-serif"],
  variable: "--font-stack-jp",
  subsets: ["latin"],
});

export { SourceSansPro, NotoSansJapanese };
