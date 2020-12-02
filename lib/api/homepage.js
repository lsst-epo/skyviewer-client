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
} from "@/api/fragments/content-blocks";

export async function getHomePageData(uri, site, previewToken) {
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
    {
      entry (section: "homepage", site: "${site}") {
        id
        title
        language
        localized {
          uri
          language
        }
        ...on homepage_homepage_Entry {
          description
          pageType
          dynamicComponent
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
          }
        }
      }
    }
  `;
  const data = await queryAPI(query, previewToken);
  return data.entry;
}
