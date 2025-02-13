"server-only";
import z from "zod";
import { graphql } from "@/gql";
import { getLocale } from "@/lib/i18n/server";
import { siteFromLocale } from "@/lib/i18n/site";
import { queryAPI } from "@/lib/api/urql";
import { Tour, TourCard, TourMetadata } from "./schema";

export const getAllTours = async () => {
  const site = siteFromLocale(getLocale());

  const query = graphql(`
    query AllTours($site: [String]) {
      toursEntries(site: $site) {
        ... on tours_tour_Entry {
          id
          complexity
          duration
          title
          uri
          thumbnail {
            width
            height
            additional {
              AltTextEN
              AltTextES
            }
            url {
              directUrlOriginal
            }
          }
        }
      }
    }
  `);

  const { data } = await queryAPI({
    query,
    variables: {
      site: [site],
    },
  });

  if (!data || !data.toursEntries) return [];

  const { data: tours = [] } = z.array(TourCard).safeParse(data.toursEntries);

  return tours;
};

export const getTourMetadata = async ({ slug }: { slug: string }) => {
  const site = siteFromLocale(getLocale());

  const query = graphql(`
    query TourMetadata($site: [String], $slug: [String]) {
      toursEntries(site: $site, slug: $slug) {
        ... on tours_tour_Entry {
          title
          complexity
          duration
          slug
          backgroundImage {
            width
            height
            additional {
              AltTextEN
              AltTextES
            }
            url {
              directUrlOriginal
            }
          }
        }
      }
    }
  `);

  const { data } = await queryAPI({
    query,
    variables: {
      site: [site],
      slug: [slug],
    },
  });

  const { data: tour } = z
    .array(TourMetadata)
    .transform((output) => output[0])
    .safeParse(data?.toursEntries);

  return tour;
};

export const getTour = async ({ slug }: { slug: string }) => {
  const site = siteFromLocale(getLocale());

  const query = graphql(`
    query Tour($site: [String], $slug: [String]) {
      toursEntries(site: $site, slug: $slug) {
        ... on tours_tour_Entry {
          title
          slug
          thumbnail {
            width
            height
            additional {
              AltTextEN
              AltTextES
            }
            url {
              directUrlOriginal
            }
          }
          introHeading
          introSubheading
          introContentBlocks {
            ... on introContentBlocks_introBlock_BlockType {
              id
              text: body
            }
          }
          factsHeading
          factsContentBlocks {
            ... on factsContentBlocks_factsContentBlock_BlockType {
              id
              text: body
            }
          }
        }
      }
    }
  `);

  const { data } = await queryAPI({
    query,
    variables: {
      site: [site],
      slug: [slug],
    },
  });

  const { data: tour } = z
    .array(Tour)
    .transform((output) => output[0])
    .safeParse(data?.toursEntries);

  return tour;
};
