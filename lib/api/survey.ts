import { graphql } from "@/gql";
import { queryAPI } from "@/lib/api/urql";
import { mergeWithDefaults } from "../utilities";
import defaultSurveyView from "@/fixtures/defaultSurveyView";
import { HiPSImageFormat } from "@/types/aladin";

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

interface SurveyImage {
  title?: string;
  path: string;
  target: string;
  fovRange: Array<number>;
  fov: number;
  imgFormat: HiPSImageFormat;
}

const getSurveyImage = async (): Promise<SurveyImage | undefined> => {
  const { data } = await queryAPI({
    query: Query,
    variables: {},
  });

  if (!data) return undefined;

  const { surveysEntries } = data;

  if (!surveysEntries || !surveysEntries[0]) return undefined;

  const { title, path, target, fovMin, fovMax, fov, imgFormat } =
    mergeWithDefaults(surveysEntries[0], defaultSurveyView);

  if (!path) {
    throw new Error("HiPS catalog URL is undefined");
  }

  return {
    title: title || undefined,
    path,
    target,
    fovRange: [fovMin, fovMax],
    fov,
    imgFormat,
  };
};

export default getSurveyImage;
