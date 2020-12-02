import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { staffProfileFragment } from "@/lib/api/fragments/staff-profiles";

export async function getStaffProfileDataByUri(
  uri,
  site = "default",
  previewToken
) {
  const query = gql`
    ${staffProfileFragment}
    {
      entry (section: "staffProfiles" site: "${site}", uri: "${uri}") {
        ...myFragment
      }
    }
  `;
  const data = await queryAPI(query, previewToken);
  return data.entry;
}
