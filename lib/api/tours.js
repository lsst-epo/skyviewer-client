import useSWR from "swr";
import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { getImageFields } from "@/lib/api/fragments/image";
import { tourFragment } from "@/lib/api/fragments/tour";

export async function getToursData() {
  const query = gql`
    ${tourFragment}
    {
      tours: entries(section: "tours") {
        ...tourFragment
      }
    }
  `;
  const data = await queryAPI(query);
  return data;
}

export function useToursByVarietyData(varietyHandles = [""]) {
  const { data, error } = useSWR(
    gql`
      {
        tours: entries(section: "tours") {
          ... on tours_tour_Entry {
            id
            slug
            title
            tourVariety(varietyHandle: "${varietyHandles}") {
              ... on guidedExperiences_guidedExperience_Entry {
                varietyName
                varietyHandle
              }
            }
            complexity
            duration
            thumbnail {
              ... on tourImages_Asset {
                ${getImageFields("fit", 700, 700)}
              }
            }
            backgroundImage {
              ... on tourImages_Asset {
                ${getImageFields("fit", 700, 700)}
              }
            }
          }
        }
      }
    `,
    queryAPI
  );
  let toursData;

  if (data) {
    const { tours } = data;
    toursData = tours.filter((tour) => {
      return varietyHandles.includes(tour?.tourVariety[0]?.varietyHandle);
    });
  }
  return {
    data: toursData,
    isLoading: !error && !data,
    isError: error,
  };
}
