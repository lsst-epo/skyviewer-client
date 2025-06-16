"server-only";
import { revalidatePath } from "next/cache";
import additionalRevalidations from "@/services/revalidation/additional";
import { languages } from "@/lib/i18n/settings";
import { getPathname } from "@/lib/i18n/navigation";
import { isDefaultLocale } from "@/lib/i18n";

const CRAFT_HOMEPAGE_URI = "__home__";

const revalidate = (uri: string) => {
  const paths: Array<string> = [];
  const tagCollection = new Set<string>();

  languages.forEach((locale) => {
    const parts: Array<string> =
      uri === CRAFT_HOMEPAGE_URI ? [] : uri.split("/");

    const path = getPathname({
      href: `/${parts.join("/")}`,
      locale,
      forcePrefix: !isDefaultLocale(locale),
    });

    paths.push(path);

    revalidatePath(path);
    additionalRevalidations({ parts, tagCollection });
  });

  return { paths, tags: Array.from(tagCollection) };
};

export default revalidate;
