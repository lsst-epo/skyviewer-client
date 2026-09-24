import { graphql } from "@/gql";

export const catalogFragment = graphql(`
  fragment Catalog on catalog_Entry {
    id
    title
    path
    icon {
      ... on icons_Asset {
        url
      }
    }
  }
`);
