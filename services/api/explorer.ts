"server-only";
import { z } from "zod/v4";
import { graphql } from "@/gql";
import queryAPI from "@/services/api/client";
import { siteFromLocale } from "@/lib/i18n/site";
import { surveyLayerSchema } from "@/lib/schema/survey";
import { ra, dec, fov } from "@/lib/schema/astro";

const explorerSchema = z
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

export const getExplorerPage = async (locale: string) => {
  const site = siteFromLocale(locale);

  const Query = graphql(`
    query ExplorerPage($site: [String]) {
      explorerEntries(site: $site) {
        ... on explorer_explorer_Entry {
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

  const { data } = await queryAPI({
    query: Query,
    variables: {
      site: [site],
    },
  });

  if (!data || !data.explorerEntries) return;

  return explorerSchema.safeParse(data.explorerEntries[0])?.data;
};
