import useSWR from "swr";
import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { astroObjectFragment } from "@/lib/api/fragments/astroObject";

export async function getAstroObjectData(id) {
  const query = gql`
    ${astroObjectFragment}
    {
      astroObject: entry(section: "astroObjects", astroObjectId: "${id}") {
        ...astroObjectFragment
      }
    }
  `;
  const data = await queryAPI(query);
  return data;
}

export function useAstroObjectData(id) {
  const { data, error } = useSWR(
    gql`
    ${astroObjectFragment}
    {
      astroObject: entry(section: "astroObjects", astroObjectId: "${id}") {
        ...astroObjectFragment
      }
    }
  `,
    queryAPI
  );
  // console.log("gql", id, data);
  return {
    data: data?.astroObject,
    isLoading: !error && !data,
    isError: error,
  };
}
