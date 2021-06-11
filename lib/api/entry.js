import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { transform, getImageFields } from "@/lib/api/fragments/image";
import { linkFragment } from "@/lib/api/fragments/link";
import {
  allPageBlocksFragment,
  allNewsBlocksFragment,
} from "@/api/fragments/content-blocks";
import { eventFragmentFull } from "@/lib/api/fragments/event";
import { homepageFragmentFull } from "@/lib/api/fragments/homepage";
import { newsPostFragmentFull } from "@/lib/api/fragments/news-post";
import { pageFragmentFull, searchFragmentFull } from "@/lib/api/fragments/page";
import { staffProfileFragmentFull } from "@/lib/api/fragments/staff-profile";

export async function getEntryDataByUri(uri, site = "default", previewToken) {
  const query = gql`
    ${linkFragment}
    ${allPageBlocksFragment}
    ${allNewsBlocksFragment}
    ${eventFragmentFull}
    ${homepageFragmentFull}
    ${newsPostFragmentFull}
    ${pageFragmentFull}
    ${searchFragmentFull}
    ${staffProfileFragmentFull}
      {
        entry (site: "${site}", uri: "${uri}") {
            ...eventFragmentFull
            ...homepageFragmentFull
            ...newsPostFragmentFull
            ...pageFragmentFull
            ...searchFragmentFull
            ...staffProfileFragmentFull
        }
      }
    `;
  const data = await queryAPI(query, previewToken);
  return data.entry;
}
