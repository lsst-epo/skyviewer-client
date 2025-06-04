import { z } from "zod";
import tagStore from "../tags";
import { graphql } from "@/gql";
import { siteFromLocale } from "@/lib/i18n/site";
import queryAPI from "@/services/api/client";
import { MinimalAssetSchema } from "@/lib/schema/canto";

const logoSchema = z
  .array(MinimalAssetSchema)
  .min(1)
  .transform((output) => output[0]);

export const getGlobalData = async ({ locale }: { locale: string }) => {
  const site = siteFromLocale(locale);

  const Query = graphql(`
    query SiteGlobals($site: [String]) {
      globalSets(site: $site) {
        ... on siteInfo_GlobalSet {
          name
          aboutMenuContent
          siteDescription
          siteTitle
          logo(where: { key: "scheme", value: "image" }) {
            ...CantoAssetMinimal
          }
        }
      }
    }
  `);

  const { data } = await queryAPI({
    query: Query,
    variables: {
      site: [site],
    },
    fetchOptions: {
      next: {
        tags: [tagStore.globals],
      },
    },
  });

  const set = data?.globalSets?.find(
    (set) => set && set.name.toLowerCase() === "site info"
  );

  if (!set) return;

  return { ...set, logo: logoSchema.safeParse(set.logo).data };
};
