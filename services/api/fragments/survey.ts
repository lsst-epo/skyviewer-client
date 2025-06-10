import { graphql } from "@/gql";

export const SurveyFragment = graphql(`
  fragment Survey on surveys_surveys_Entry {
    id
    description
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

export const SurveyLayer = graphql(`
  fragment SurveyLayer on surveys_layer_BlockType {
    id
    opacity
    showOnLoad
    survey {
      ...Survey
    }
  }
`);
