import useSWR from "swr";
import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { catalogFragment } from "@/lib/api/fragments/catalog";

export async function getCatalogsData() {
  const query = gql`
    ${catalogFragment}
    {
      catalogs: entries(section: "catalogs") {
        ...catalogFragment
      }
    }
  `;
  const data = await queryAPI(query);
  return data;
}

export function useCatalogsData() {
  const { data, error } = useSWR(
    gql`
      ${catalogFragment}
      {
        catalogs: entries(section: "catalogs") {
          ...catalogFragment
        }
      }
    `,
    queryAPI
  );

  return {
    data: data?.catalogs,
    isLoading: !error && !data,
    isError: error,
  };
}
