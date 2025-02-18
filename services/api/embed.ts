import { graphql } from "@/gql";
import queryAPI from "@/services/api/client";
import { siteFromLocale } from "@/lib/i18n/site";
import { buildSurveyImage, SurveyImage } from "@/lib/helpers";

export const getEmbedPage = async (
  locale: string
): Promise<SurveyImage | undefined> => {
  const site = siteFromLocale(locale);

  const Query = graphql(`
    query EmbeddedPage($site: [String]) {
      embedEntries(site: $site) {
        ... on embed_embed_Entry {
          survey {
            ... on surveys_surveys_Entry {
              title
              fov
              fovMax
              fovMin
              path
              imgFormat
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

  if (!data || !data.embedEntries || !data.embedEntries[0]) return;

  const [embed] = data.embedEntries;

  if (
    !embed.survey[0] ||
    embed.survey[0].__typename !== "surveys_surveys_Entry"
  )
    return;

  return buildSurveyImage(embed.survey[0]);
};
