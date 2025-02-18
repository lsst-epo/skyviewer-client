import { graphql } from "@/gql";
import queryAPI from "@/services/api/client";
import { siteFromLocale } from "@/lib/i18n/site";
import { buildSurveyImage, SurveyImage } from "@/lib/helpers";

export const getExplorerPage = async (
  locale: string
): Promise<SurveyImage | undefined> => {
  const site = siteFromLocale(locale);

  const Query = graphql(`
    query ExplorerPage($site: [String]) {
      explorerEntries(site: $site) {
        ... on explorer_explorer_Entry {
          survey {
            ... on surveys_surveys_Entry {
              title
              fov
              fovMax
              fovMin
              path
              target
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

  if (!data || !data.explorerEntries || !data.explorerEntries[0]) return;

  const [explorer] = data.explorerEntries;

  if (
    !explorer.survey[0] ||
    explorer.survey[0].__typename !== "surveys_surveys_Entry"
  )
    return;

  return buildSurveyImage(explorer.survey[0]);
};
