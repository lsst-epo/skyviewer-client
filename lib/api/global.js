import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { getImageFields } from "@/api/fragments/images";
import { linksFragment } from "@/api/fragments/links";

export async function getSiteInfo(site = "default") {
  const query = gql`
    {
      globalSet(handle: "siteInfo", site: "${site}") {
        ... on siteInfo_GlobalSet {
          siteTitle
          siteImage {
            ...on generalImages_Asset {
              ${getImageFields("crop", 800, 600)}
            }
          }
          siteDescription
          facebook
          twitter
          youTube
          linkedIn
          instagram
          email
          contactInfo {
            ... on contactInfo_mail_BlockType {
              id
              typeHandle
              text
            }
            ... on contactInfo_phone_BlockType {
              id
              typeHandle
              text
            }
          }
        }
      }
    }`;
  const data = await queryAPI(query);
  return data.globalSet;
}

export async function getFooterContent(site = "default") {
  const query = gql`
    ${linksFragment}
    {
      globalSet(handle: "footer") {
        ... on footer_GlobalSet {
          links {
            ...links
          }
          colophon
          supportersLogos {
            ... on generalImages_Asset {
              ${getImageFields("fit", 1080)}
            }
          }
        }
      }
    }
  `;
  const data = await queryAPI(query);
  return data.globalSet;
}

export async function getRootPages(site = "default") {
  const query = gql`
    {
      globalSet(handle: "rootPageInformation", site: "${site}") {
        ... on rootPageInformation_GlobalSet {
          customBreadcrumbs {
            ... on customBreadcrumbs_ancestorsAndRoot_BlockType {
              header
              pageEntry {
                ... on pages_pages_Entry {
                  id
                  title
                  uri
                }
              }
            }
          }
        }
      }
        }
  `;
  const data = await queryAPI(query);
  return data.globalSet.customBreadcrumbs;
}
export async function getCategories(site = "default") {
  const query = gql`
    {
      categories (site: "${site}") {
        id
        title
        slug
        groupHandle
      }
    }
  `;
  const data = await queryAPI(query);
  return data.categories;
}
