import { gql } from "graphql-request";
import { queryAPI, queryAstroAPI } from "@/lib/fetch";
import {
  astroObjectFragment,
  astroObjectContentFragment,
} from "@/lib/api/fragments/astroObject";

export async function getAstroObjectContent(id) {
  const query = gql`
    ${astroObjectContentFragment}
    {
      astroObject: entry(section: "astroObjects", astroObjectId: "${id}") {
        ...astroObjectContentFragment
      }
    }
  `;
  const data = await queryAPI(query);
  return data;
}

export async function getAstroObjectData(objectId) {
  const query = gql`
    ${astroObjectFragment}
    {
      astroObject: astroObjects(objectId: ${objectId}) {
        ...astroObjectFragment
      }
    }
  `;
  const data = await queryAstroAPI(query);
  return data;
}
