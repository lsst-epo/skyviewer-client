"server-only";
import z from "zod";
import { graphql } from "@/gql";
import { getLocale } from "@/lib/i18n/server";
import { siteFromLocale } from "@/lib/i18n/site";
import queryAPI from "@/services/api/client";
import { Poi, Tour, TourCard, TourInitial, TourMetadata } from "./schema";
import tagStore from "../tags";
import { buildSurveyImage } from "@/lib/helpers";

export const getAllTours = async ({ locale }: { locale: string }) => {
  const site = siteFromLocale(locale);

  const query = graphql(`
    query AllTours($site: [String], $includeInFeed: Boolean) {
      toursEntries(site: $site, includeInFeed: $includeInFeed) {
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
              directUrlPreview
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
      includeInFeed: true,
    },
    fetchOptions: {
      next: { tags: [tagStore.tours] },
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
          thumbnail {
            width
            height
            additional {
              AltTextEN
              AltTextES
            }
            url {
              directUrlOriginal
              directUrlPreview
            }
          }
          backgroundImage {
            width
            height
            additional {
              AltTextEN
              AltTextES
            }
            url {
              directUrlOriginal
              directUrlPreview
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
    fetchOptions: {
      next: { tags: [tagStore.tours] },
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
              directUrlPreview
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
    fetchOptions: {
      next: { tags: [tagStore.tours] },
    },
  });

  const { data: tour } = z
    .array(Tour)
    .transform((output) => output[0])
    .safeParse(data?.toursEntries);

  return tour;
};

export const getTourInitial = async ({
  tour,
  offset,
}: {
  tour: string;
  offset: number;
}) => {
  const site = siteFromLocale(getLocale());

  const Query = graphql(`
    query TourInitial($site: [String], $slug: [String], $offset: Int) {
      toursEntries(slug: $slug, site: $site) {
        ... on tours_tour_Entry {
          title
          survey {
            ... on surveys_surveys_Entry {
              path
              fovMax
              fovMin
              imgFormat
            }
          }
          tourPois(limit: 1, offset: $offset) {
            ... on tourPois_tourPoi_BlockType {
              fov
              astroObject {
                ... on astroObjects_astroObject_Entry {
                  ra
                  dec
                }
              }
            }
          }
        }
      }
    }
  `);

  const { data } = await queryAPI({
    query: Query,
    variables: {
      site: [site],
      slug: [tour],
      offset,
    },
  });

  if (!data || !data.toursEntries) return;

  const [entry] = data.toursEntries;

  if (!entry) return;

  const { tourPois, title, survey } = entry;

  const { data: initial } = TourInitial.safeParse(tourPois[0]);

  if (!initial) return;

  return {
    title,
    initial,
    survey: buildSurveyImage(survey[0]),
  };
};

export const getTourPois = async (tour: string) => {
  const site = siteFromLocale(getLocale());

  const Query = graphql(`
    query TourPoi($site: [String], $slug: [String]) {
      toursEntries(slug: $slug, site: $site) {
        ... on tours_tour_Entry {
          tourPois {
            ... on tourPois_tourPoi_BlockType {
              id
              description
              fov
              object: astroObject {
                ... on astroObjects_astroObject_Entry {
                  title
                  id: astroObjectId
                  ra
                  dec
                  characteristics
                }
              }
              audio(where: { key: "scheme", value: "audio" }) {
                metadata {
                  DurationTime
                  FileTypeExtension
                }
                additional {
                  TitleEN
                  TitleES
                }
                url {
                  directUrlOriginal
                }
              }
              zoomOutTime
              zoomOutFov
              panTime
              zoomInTime
            }
          }
        }
      }
    }
  `);

  const { data } = await queryAPI({
    query: Query,
    variables: {
      site: [site],
      slug: [tour],
    },
  });

  if (!data || !data.toursEntries) return [];

  const [entry] = data.toursEntries;

  if (!entry) return [];

  const { tourPois } = entry;

  if (!tourPois) return [];

  const { data: pois = [] } = z.array(Poi).safeParse(tourPois);

  return pois;
};
