import { graphql } from "@/gql";

export const NavPoisFragment = graphql(`
  fragment NavPois on navPoi_Entry {
    id
    navPoiTitle
    navPoiDescription
    ra
    dec
    enabledInNavigation
  }
`);

export const SurveyFragment = graphql(`
  fragment Survey on surveys_Entry {
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
    navPois {
      ...NavPois
    }
  }
`);

export const SurveyLayer = graphql(`
  fragment SurveyLayer on layer_Entry {
    id
    opacity
    showOnLoad
    optionalLayer
    survey {
      ...Survey
    }
  }
`);
