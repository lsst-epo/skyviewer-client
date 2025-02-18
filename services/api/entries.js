import useSWR from "swr";
import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { pageFragment } from "@/services/api/fragments/page";
import { catalogFragment } from "@/services/api/fragments/catalog";

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
