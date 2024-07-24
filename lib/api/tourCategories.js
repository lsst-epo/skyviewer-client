import useSWR from "swr";
import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { tourCategoryFragment } from "@/lib/api/fragments/tourCategory";

export async function getGuidedExpsData() {
  const query = gql`
    ${tourCategoryFragment}
    {
      guidedExps: categories(group: "tourVariety") {
        ...tourCategoryFragment
      }
    }
  `;
  const data = await queryAPI(query);
  return data;
}
