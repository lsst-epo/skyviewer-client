import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import {
  textBlockFragment,
  imageBlockFragment,
  calloutBlockFragment,
  linkBlockFragment,
  contactBlockFragment,
  shareBlockFragment,
  ctaGridBlockFragment,
  staffGridFragment,
  relatedContentFragment,
  accordionGroupBlockFragment,
  scheduleBlockFragment,
} from "@/api/fragments/content-blocks";
import { getImageFields } from "@/api/fragments/images";

export async function getAllPageUrls(lang = "default") {
  const query = gql`
    {
      entries (section: "pages", site: "${lang}") {
        id
        title
        uri
      }
    }
  `;
  const data = await queryAPI(query);
  return data.entries;
}

export async function getPageTree(site = "default") {
  const query = gql`
    {
      entries(section: "pages", site: "${site}", level: 1) {
        id
        title
        uri
        children {
          id
          title
          uri
        }
      }
    }
  `;
  const data = await queryAPI(query);
  return data.entries;
}

export async function getPageUrlByUid(uid) {
  const query = gql`
    {
      entry (uid: "${uid}") {
        url
      }
    }
  `;
  const data = await queryAPI(query);
  return data.entry;
}

export async function getPageDataByUri(uri, site = "default", previewToken) {
  const query = gql`
    ${textBlockFragment}
    ${imageBlockFragment}
    ${calloutBlockFragment}
    ${linkBlockFragment}
    ${contactBlockFragment}
    ${shareBlockFragment}
    ${ctaGridBlockFragment}
    ${staffGridFragment}
    ${relatedContentFragment}
    ${accordionGroupBlockFragment}
    ${scheduleBlockFragment}
    {
      entry (section: "pages", site: "${site}", uri: "${uri}") {
        ...on pages_pages_Entry {
          id
          uri
          title
          language
          localized {
            uri
            language
          }
          description
          hero {
            ...on heroes_Asset {
              ${getImageFields("crop", 1920, 1067)}
              focalPointX
              focalPointY
            }
          }
          pageType
          dynamicComponent
          featuredImage {
            ... on contentImages_Asset {
              ${getImageFields("crop", 800, 600)}
            }
          }
          contentBlocks {
            ...imageBlock
            ...calloutBlock
            ...shareBlock
            ...contactBlock
            ...textBlock
            ...linkBlock
            ...ctaGridBlock
            ...staffGridBlock
            ...relatedContentBlock
            ...accordionGroupBlock
            ...scheduleBlock
          }
        }
      }
    }
  `;
  const data = await queryAPI(query, previewToken);
  return data.entry;
}

export async function getBreadcrumbs(id, site = "default", previewToken) {
  if (!id) return null;
  const query = gql`
    {
      entries(section: "pages", site: "default", ancestorOf: ${id}) {
        ... on pages_pages_Entry {
          id
          title
          uri
        }
      }
    }
  `;
  const data = await queryAPI(query, previewToken);
  return data.entries;
}
