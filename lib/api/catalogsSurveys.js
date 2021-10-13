import useSWR from "swr";
import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { catalogFragment } from "@/lib/api/fragments/catalog";
import { surveyFragment } from "@/lib/api/fragments/survey";

export async function getCatalogsSurveysData() {
  const query = gql`
    ${catalogFragment}
    ${surveyFragment}
    {
      catalogs: entries(section: "catalogs") {
        ...catalogFragment
      }
      surveys: entries(section: "surveys") {
        ...surveyFragment
      }
    }
  `;
  const data = await queryAPI(query);
  return data;
}

export function useCatalogsSurveysData() {
  const { data, error } = useSWR(
    gql`
      ${catalogFragment}
      ${surveyFragment}
      {
        catalogs: entries(section: "catalogs") {
          ...catalogFragment
        }
        surveys: entries(section: "surveys") {
          ...surveyFragment
        }
      }
    `,
    queryAPI
  );

  return {
    data,
    surveys: data?.surveys,
    isLoading: !error && !data,
    isError: error,
  };
}
