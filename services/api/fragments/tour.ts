import { graphql } from "@/gql";

export const HighlightMarkers = graphql(`
  fragment HighlightMarkers on highlightMarker_Entry {
    title
    ra
    dec
    markerSizeFactor
    markerShape
  }
`);