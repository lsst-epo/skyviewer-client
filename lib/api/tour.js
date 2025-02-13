import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { tourPoisFragment } from "@/lib/api/fragments/tourPois";

export async function getTourPoisData(slug) {
  const query = gql`
      ${tourPoisFragment}
      {
      tour: entry(section: "tours", slug: "${slug}") {
        ... on tours_tour_Entry {
          id
          slug
          title
          tourPois {
            ...tourPoisFragment
          }
          factsContentBlocks {
            ... on factsContentBlocks_factsContentBlock_BlockType {
              id
            }
          }
          introContentBlocks {
            ... on introContentBlocks_introBlock_BlockType {
              id
            }
          }
        }
      }
    }
  `;
  const data = await queryAPI(query);
  return data;
}
