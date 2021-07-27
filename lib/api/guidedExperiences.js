import useSWR from "swr";
import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { guidedExpFragment } from "@/lib/api/fragments/guidedExperience";

export async function getGuidedExpsData() {
  const query = gql`
    ${guidedExpFragment}
    {
      guidedExps: entries(section: "guidedExperiences") {
        ...guidedExpFragment
      }
    }
  `;
  const data = await queryAPI(query);
  return data;
}

export function useGuidedExpsData() {
  const { data, error } = useSWR(
    gql`
      ${guidedExpFragment}
      {
        guidedExps: entries(section: "guidedExperiences") {
          ...guidedExpFragment
        }
      }
    `,
    queryAPI
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useGuidedExpsCounts(varietyHandles = "") {
  const { data, error } = useSWR(
    gql`
      {
        tours: entries(section: "tours") {
          ... on tours_tour_Entry {
            tourVariety(varietyHandle: "${varietyHandles}") {
              ... on guidedExperiences_guidedExperience_Entry {
                varietyName
                varietyHandle
              }
            }
          }
        }
      }
    `,
    queryAPI
  );
  const counts = {};

  if (data) {
    const toursMatched = data?.tours.filter((tour) => {
      return tour.tourVariety.length >= 1;
    });
    // const filteredTours = data?.tours;
    varietyHandles.forEach((handle) => {
      const count = toursMatched.filter((tour) => {
        return handle === tour.tourVariety[0].varietyHandle;
      }).length;

      counts[handle] = count;
    });
  }

  return {
    counts,
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
