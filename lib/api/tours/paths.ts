"server-only";
import { graphql } from "@/gql";
import { queryAPI } from "@/lib/api/urql";
import { siteFromLocale } from "@/lib/i18n/site";
import z from "zod";

const Tours = z
  .array(
    z.object({
      slug: z.string(),
    })
  )
  .default([])
  .catch([]);

export async function getToursPaths({ locale }: { locale: string }) {
  const site = siteFromLocale(locale);

  const query = graphql(`
    query ToursPaths($site: [String]) {
      toursEntries(site: $site) {
        ... on tours_tour_Entry {
          slug
        }
      }
    }
  `);

  const { data } = await queryAPI({ query, variables: { site: [site] } });

  const { data: tours = [] } = Tours.safeParse(data?.toursEntries);

  return tours;
}
