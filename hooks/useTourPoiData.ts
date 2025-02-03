import { tourPoisFragment } from "@/lib/api/fragments/tourPois";
import { queryAPI } from "@/lib/fetch";
import { gql } from "graphql-request";
import useSWR from "swr";

export default function useTourPoiData(slug: string) {
  const { data, error } = useSWR(
    gql`
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
        }
      }
    }
    `,
    queryAPI
  );

  return {
    data: data?.tour,
    isLoading: !error && !data,
    isError: error,
  };
}
