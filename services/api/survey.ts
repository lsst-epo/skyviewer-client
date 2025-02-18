import { graphql } from "@/gql";
import queryAPI from "@/services/api/client";
import { buildSurveyImage, SurveyImage } from "@/lib/helpers";

const Query = graphql(`
  query SurveyImage {
    surveysEntries {
      ... on surveys_surveys_Entry {
        title
        path
        target
        fovMin
        fovMax
        fov
        imgFormat
      }
    }
  }
`);

const getSurveyImage = async (): Promise<SurveyImage | undefined> => {
  const { data } = await queryAPI({
    query: Query,
    variables: {},
  });

  if (!data) return undefined;

  const { surveysEntries } = data;

  if (!surveysEntries || !surveysEntries[0]) return undefined;

  return buildSurveyImage(surveysEntries[0]);
};

export default getSurveyImage;
