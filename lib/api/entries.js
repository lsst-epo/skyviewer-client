import useSWR from "swr";
import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { eventsFragment } from "@/lib/api/fragments/events";
import { jobsFragment } from "@/lib/api/fragments/jobs";
import { newsPostFragment } from "@/lib/api/fragments/news-posts";
import {
  pagesFragment,
  pagesNewsComboFragment,
} from "@/lib/api/fragments/pages";
import { staffProfileFragment } from "@/lib/api/fragments/staff-profiles";

export async function getAllEntries(site = "default") {
  const query = gql`
    {
      entries(site: "${site}") {
        uri
        sectionHandle
      }
    }
  `;
  const data = await queryAPI(query);
  return data.entries
    .filter(({ uri }) => uri != null)
    .map(({ uri, sectionHandle }) => ({
      params: { uriSegments: uri.split("/"), uri, sectionHandle },
    }));
}

export async function getEntrySectionByUri(uri = "__home__", site = "default") {
  const query = gql`
    {
      entry (uri: "${uri}", site: "${site}") {
        sectionHandle
      }
    }
  `;
  const data = await queryAPI(query);
  return data.entry?.sectionHandle;
}

export function useDataList({
  excludeId = null,
  inReverse = false,
  limit = null,
  listTypeId = null,
  offset = null,
  search = null,
  section = "pages",
  site = "default",
}) {
  let theSection;
  let theFragment;
  let theOrderBy;
  switch (section) {
    case "events":
      theFragment = eventsFragment;
      theSection = `"events"`;
      theOrderBy = `"date desc"`;
      break;
    case "jobs":
      theFragment = jobsFragment;
      theSection = `"jobs"`;
      theOrderBy = `"closeDate desc"`;
      break;
    case "news":
      theFragment = newsPostFragment;
      theSection = `"news"`;
      theOrderBy = `"date desc"`;
      break;
    case "pages":
      theFragment = pagesFragment;
      theSection = `"pages"`;
      theOrderBy = `"date desc"`;
      break;
    case "staff":
      theFragment = staffProfileFragment;
      theSection = `"staffProfiles"`;
      theOrderBy = `"title"`;
      break;
    default:
      theFragment = pagesNewsComboFragment;
      theSection = null;
      theOrderBy = `"date desc"`;
  }

  const { data, error } = useSWR(
    gql`
      ${theFragment}
      {
        entries (id: ["not", ${excludeId}], section: ${theSection}, 
          site: "${site}", relatedTo: ${listTypeId}, limit: ${limit}, 
          offset: ${offset}, orderBy: ${theOrderBy}, inReverse: ${inReverse}, 
          search: ${search}) {
          ...myFragment
          ${theSection === null ? "...myFragment2" : ""}
        }
        total: entryCount(id: ["not", ${excludeId}], section: ${theSection}, 
          site: "${site}", relatedTo: ${listTypeId}, limit: ${limit}, 
          offset: ${offset}, orderBy: ${theOrderBy}, inReverse: ${inReverse},
          search: ${search})
      }
    `,
    queryAPI
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
