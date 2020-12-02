import { gql } from "graphql-request";

export const mixedLinkFragment = gql`
  fragment mixedLink on linkField_Link {
    customText
    target
    text
    title
    type
    url
    element {
      uri
    }
  }
`;

export const linksFragment = gql`
  ${mixedLinkFragment}
  fragment links on links_NeoField {
    ... on links_link_BlockType {
      mixedLink {
        ...mixedLink
      }
    }
  }
`;
