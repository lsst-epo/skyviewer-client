"server-only";
import { graphql } from "@/gql";
import queryAPI from "@/services/api/client";
import { siteFromLocale } from "@/lib/i18n/site";
import { buildSurveyImage } from "@/lib/helpers";

export const getExplorerPage = async (locale: string) => {
  const site = siteFromLocale(locale);

  const Query = graphql(`
    query ExplorerPage($site: [String]) {
      explorerEntries(site: $site) {
        ... on explorer_explorer_Entry {
          survey {
            ...Survey
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

  const [explorer] = data.explorerEntries;

  if (!explorer) return;

  const [survey] = explorer.survey;

  return { survey: buildSurveyImage(survey) };
};
