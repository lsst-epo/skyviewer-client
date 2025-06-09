"server-only";
import { z } from "zod";
import { graphql } from "@/gql";
import queryAPI from "@/services/api/client";
import { siteFromLocale } from "@/lib/i18n/site";
import { surveyLayerSchema } from "@/lib/schema/survey";
import { ra, dec, fov } from "@/lib/schema/astro";

const skysynthSchema = z
  .object({
    title: z.string().nullable(),
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

export const getSkySynthPage = async (locale: string) => {
  const site = siteFromLocale(locale);

  const Query = graphql(`
    query SkySynthPage($site: [String]) {
      skysynthEntries(site: $site) {
        ... on skysynth_skysynth_Entry {
          title
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

  const { data, error } = await queryAPI({
    query: Query,
    variables: {
      site: [site],
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  if (!data || !data.skysynthEntries || !data.skysynthEntries[0]) return;

  return skysynthSchema.parse(data.skysynthEntries[0]);
};
