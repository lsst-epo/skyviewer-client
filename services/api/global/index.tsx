import { graphql } from "@/gql";
import { siteFromLocale } from "@/lib/i18n/site";
import queryAPI from "@/services/api/client";
import tagStore from "../tags";

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

  return data?.globalSets?.find(
    (set) => set && set.name.toLowerCase() === "site info"
  );
};
