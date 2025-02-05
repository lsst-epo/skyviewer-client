import { tourFragment } from "@/lib/api/fragments/tour";
import { queryAPI } from "@/lib/fetch";
import { gql } from "graphql-request";
import useSWR from "swr";

export default function useTourData(slug: string) {
  const { data, error } = useSWR(
    gql`
      ${tourFragment}
      {
      tour: entry(section: "tours", slug: "${slug}") {
        ...tourFragment
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
