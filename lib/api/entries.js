import useSWR from "swr";
import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { pageFragment } from "@/lib/api/fragments/page";
import { catalogFragment } from "@/lib/api/fragments/catalog";

export async function getAllEntries() {
  const query = gql`
    {
      entries(site: ["es", "default"]) {
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
  let theOrderBy;
  const date = new Date();
  const today = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];

  switch (section) {
    case "pages":
      theSection = `"pages"`;
      theOrderBy = `"dateCreated desc"`;
      break;
    case "catalog":
      theSection = `"catalog"`;
      theOrderBy = `"dateCreated desc"`;
      break;
    default:
      theSection = null; // find a way to pass just news and pages
      theOrderBy = `"dateUpdated desc"`;
  }

  const { data, error } = useSWR(
    gql`
      ${pageFragment}
      ${catalogFragment}
      {
        entries (id: ["not", ${excludeId}], section: ${theSection}, 
          site: "${site}", relatedTo: ${listTypeId}, limit: ${limit}, 
          offset: ${offset}, orderBy: ${theOrderBy}, inReverse: ${inReverse}, 
          search: ${search}) {
          ...pageFragment
          ...catalogFragment
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
