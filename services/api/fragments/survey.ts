import { graphql } from "@/gql";

export const SurveyFragment = graphql(`
  fragment Survey on surveys_surveys_Entry {
    title
    path
    target
    fovMin
    fovMax
    fov
    imgFormat
    cooFrame
    maxOrder
    tileSize
  }
`);
