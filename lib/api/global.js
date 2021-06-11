import useSWR from "swr";
import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { getImageFields } from "@/lib/api/fragments/image";

export async function getGlobalData() {
  const query = gql`
    {
      allEntries: entries(site: "default") {
        uri
        sectionHandle
      }
      globals: globalSets(site: "default") {
        ... on siteInfo_GlobalSet {
          language
          name
          handle
          siteTitle
          siteDescription
        }
      }
      allCategories: categories(site: "default") {
        id
        slug
        groupHandle
        title
      }
      globals_es: globalSets(site: "es") {
        ... on siteInfo_GlobalSet {
          language
          name
          handle
          siteTitle
          siteDescription
        }
      }
      allEntries_es: entries(site: "es") {
        uri
        sectionHandle
      }
      allCategories_es: categories(site: "es") {
        id
        slug
        groupHandle
        title
      }
    }
  `;
  const data = await queryAPI(query);
  return data;
}

export function useGlobalData() {
  const { data, error } = useSWR(
    gql`
{
  globals: globalSets(site: "default") {
    ... on siteInfo_GlobalSet {
      language
      name
      handle
      siteTitle
      siteDescription
      siteImage {
        ... on generalImages_Asset {
          ${getImageFields("crop", 800, 600)}
        }
      }
    }
  }
  globals_es: globalSets(site: "es") {
    ... on siteInfo_GlobalSet {
      language
      name
      handle
      siteTitle
      siteDescription
      siteImage {
        ... on generalImages_Asset {
          ${getImageFields("crop", 800, 600)}
        }
      }
    }
  }
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
