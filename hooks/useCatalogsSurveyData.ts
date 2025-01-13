import { gql } from "graphql-request";
import useSWR from "swr";
import { queryAPI } from "@/lib/fetch";
import { catalogFragment } from "@/lib/api/fragments/catalog";
import { surveyFragment } from "@/lib/api/fragments/survey";

export default function useCatalogsSurveysData() {
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
