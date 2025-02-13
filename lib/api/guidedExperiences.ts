import z from "zod";
import { graphql } from "@/gql";
import { queryAPI } from "@/lib/api/urql";
import { getLocale } from "@/lib/i18n/server";
import { siteFromLocale } from "@/lib/i18n/site";
import { MinimalAssetSchema } from "../schema/canto";

const guidedExperiencesSchema = z.array(
  z
    .object({
      experienceCategory: z
        .array(
          z.object({ id: z.string(), slug: z.string(), title: z.string() })
        )
        .transform((output) => output[0]),
      previewImage: z
        .array(MinimalAssetSchema)
        .transform((output) => output[0]),
    })
    .transform(({ experienceCategory, previewImage }) => {
      return { ...experienceCategory, previewImage };
    })
);

export const getGuidedExperiences = async () => {
  const site = siteFromLocale(getLocale());

  const Query = graphql(`
    query GuidedExperiencesPage($site: [String]) {
      guidedExperiencesEntries(site: $site) {
        ... on guidedExperiences_guidedExperiences_Entry {
          title
          guidedExperiences {
            ... on guidedExperiences_experience_BlockType {
              experienceCategory {
                id
                slug
                title
              }
              previewImage {
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
      }
    }
  `);

  const { data } = await queryAPI({
    query: Query,
    variables: {
      site: [site],
    },
  });

  if (
    !data ||
    !data.guidedExperiencesEntries ||
    !data.guidedExperiencesEntries[0]
  ) {
    return;
  }

  const { title, guidedExperiences } = data.guidedExperiencesEntries[0];

  const { data: experiences } =
    guidedExperiencesSchema.safeParse(guidedExperiences);

  if (!title || !experiences) {
    return;
  }

  return { title, experiences };
};

export const getTourCount = async (category: string): Promise<number> => {
  const site = siteFromLocale(getLocale());

  const Query = graphql(`
    query TourCount($site: [String], $section: [String]) {
      entries(site: $site, section: $section) {
        id
      }
    }
  `);

  const { data } = await queryAPI({
    query: Query,
    variables: {
      site: [site],
      section: [category],
    },
  });

  if (!data || !data.entries) return 0;

  return data.entries.length;
};
