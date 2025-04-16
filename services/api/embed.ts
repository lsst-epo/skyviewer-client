"server-only";
import { graphql } from "@/gql";
import queryAPI from "@/services/api/client";
import { siteFromLocale } from "@/lib/i18n/site";
import { surveyLayerSchema } from "@/lib/schema/survey";
import { ra, dec, fov } from "@/lib/schema/astro";
import { z } from "zod";

const embedSchema = z
  .object({
    ra,
    dec,
    fov,
    fovMin: fov,
    fovMax: fov,
    surveys: z.array(surveyLayerSchema),
  })
  .transform(({ fovMin, fovMax, ra, dec, ...output }) => {
    return {
      fovRange: [fovMin, fovMax],
      target: [ra, dec].join(" "),
      ...output,
    };
  });

export const getEmbedPage = async (locale: string) => {
  const site = siteFromLocale(locale);

  const Query = graphql(`
    query EmbeddedPage($site: [String]) {
      embedEntries(site: $site) {
        ... on embed_embed_Entry {
          ra
          dec
          fov
          fovMin
          fovMax
          surveys {
            ...SurveyLayer
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

  if (!data || !data.embedEntries) return;

  return embedSchema.safeParse(data.embedEntries[0])?.data;
};
