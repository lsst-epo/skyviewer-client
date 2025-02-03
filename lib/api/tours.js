import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";

export async function getToursPaths() {
  const query = gql`
    {
      tours: entries(section: "tours") {
        ... on tours_tour_Entry {
          id
          slug
        }
      }
    }
  `;
  const data = await queryAPI(query);
  return data;
}
