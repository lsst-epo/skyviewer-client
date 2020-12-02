import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { newsPostFragment } from "@/lib/api/fragments/news-posts";
import {
  textBlockNewsFragment,
  imageBlockNewsFragment,
  linkBlockNewsFragment,
  contactBlockNewsFragment,
  relatedContentNewsFragment,
} from "@/api/fragments/content-blocks";
import { getImageFields } from "@/api/fragments/images";

export async function getNewsPostDataByUri(
  uri,
  site = "default",
  previewToken
) {
  const query = gql`
    ${newsPostFragment}
    ${textBlockNewsFragment}
    ${imageBlockNewsFragment}
    ${linkBlockNewsFragment}
    ${contactBlockNewsFragment}
    ${relatedContentNewsFragment}
    {
      entry (section: "news" site: "${site}", uri: "${uri}") {
        ...myFragment
        ...on news_post_Entry {
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
          contentBlocksNews {
            ...textBlock
            ...imageBlock
            ...linkBlock
            ...contactBlock
            ...relatedContentBlock
          }    
        }
      }
    }
  `;
  const data = await queryAPI(query, previewToken);
  return data.entry;
}
