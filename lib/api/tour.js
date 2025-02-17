import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { tourFragment } from "@/lib/api/fragments/tour";
import { tourPoisFragment } from "@/lib/api/fragments/tourPois";

export async function getTourData(slug) {
  const query = gql`
    ${tourFragment}
    {
      tour: entry(section: "tours", slug: "${slug}") {
        ...tourFragment
      }
    }
  `;
  const data = await queryAPI(query);
  return data;
}

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
