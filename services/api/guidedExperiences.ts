import { z } from "zod/v4";
import { getLocale } from "next-intl/server";
import { graphql } from "@/gql";
import queryAPI from "@/services/api/client";
import { siteFromLocale } from "@/lib/i18n/site";
import { MinimalAssetSchema } from "@/lib/schema/canto";

const guidedExperiencesSchema = z.array(
  z
    .object({
      id: z.string(),
      title: z.string(),
      tourCategory: z.string(),
      previewImage: z
        .array(MinimalAssetSchema)
        .transform((output) => output[0]),
    })
    .transform(({ id, title, tourCategory, previewImage }) => {
      return { id, title, tourCategory, previewImage };
    }),
);

export const getGuidedExperiences = async () => {
  const site = siteFromLocale(await getLocale());

  const Query = graphql(`
    query GuidedExperiencesPage($site: [String]) {
      guidedExperiencesEntries(site: $site) {
        ... on guidedExperiences_Entry {
          title
          guidedExperiences {
            ... on experience_Entry {
              id
              title
              tourCategory
              previewImage {
                ...CantoAssetMinimal
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

export const getCount = async (categorySlug: string): Promise<number> => {
  const site = siteFromLocale(await getLocale());

  const query = graphql(`
    query TourCount($site: [String], $categorySlug: [QueryArgument]) {
      entries(
        site: $site
        tourCategory: $categorySlug
        includeInFeed: true
      ) {
        id
        title
      }
    }
  `);

  const { data } = await queryAPI({
    query: query,
    variables: {
      site: [site],
      categorySlug: [categorySlug],
    },
  });

  if (!data || !data.entries) return 0;

  return data.entries.length;
};
