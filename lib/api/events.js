import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { eventsFragment } from "@/lib/api/fragments/events";
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

export async function getEventDataByUri(uri, site = "default", previewToken) {
  const query = gql`
    ${eventsFragment}
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
      entry (section: "events" site: "${site}", uri: "${uri}") {
        ...myFragment
        ...on events_events_Entry {
          address
          hero {
            ...on heroes_Asset {
              ${getImageFields("crop", 1920, 1067)}
              focalPointX
              focalPointY
            }
          } 
          featuredImage: hero {
            ...on heroes_Asset {
              ${getImageFields("crop", 800, 800)}
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
