import useSWR from "swr";
import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import { galleryItemFragment } from "@/lib/api/fragments/gallery-items";
import { getImageFields } from "@/api/fragments/images";

export async function getAllGalleryItems(lang = "default") {
  const segmented = (uri) => {
    // remove locale segment
    const localized = uri.split("/").slice(lang === "es" ? 1 : 0);
    // remove `gallery` segment
    return localized.slice(1);
  };

  const query = gql`
    {
      entries (section: "galleryItems", site: "${lang}") {
        uri
      }
    }
  `;
  const data = await queryAPI(query);
  return data.entries.map(({ uri }) => ({
    // remove "/es" at start of uri if lang is "es"
    // otherwise Next will generate subpages at "/es/es/{uri}"
    params: { uriSegments: segmented(uri) },
  }));
}

export async function getGalleryItemDataByUri(
  uri,
  site = "default",
  previewToken
) {
  const query = gql`
    ${galleryItemFragment}
    {
      entry (section: "galleryItems", site: "${site}", uri: "${uri}") {
        ...galleryItem

        ... on galleryItems_galleryItem_Entry {
          richTextDescription
          credit
          metadataDate
          metadataVersion
          publisher
          publisherId
          customDateCreated
          usageTerms
          featuredImage: galleryItemAsset {
            ... on galleryAssets_Asset {
            ${getImageFields("crop", 1000, 670)}
            }
          }
          subLocation {
            title
            ... on location_Category {
              address
              city
              state
              country
            }
          }      
          assetVariants {
            ... on assetVariants_asset_BlockType {
              id
              assetName
              assetLink {
                id
                width
                height
                size
                kind
                url
              }
            }
          }
        }
    
      }
      globals: globalSets(handle: "galleryItemDefaults") {
        ... on galleryItemDefaults_GlobalSet {
          creditDefault
          metadataVersionDefault
          publisherDefault
          publisherIdDefault
          usageTermsDefault
        }
      }
    }
  `;
  const data = await queryAPI(query, previewToken);
  return { entry: data.entry, globals: data.globals[0] };
}

// assets {
//   id
//   filename
//   kind
//   ... on assetVariants_Asset {
//     metadata {
//       format
//     }
//   }
// }

export function useGalleryItems(site = "default") {
  const { data, error } = useSWR(
    gql`
      ${galleryItemFragment}
      {
        entries (section: "galleryItems", site: "${site}") {
          ...galleryItem
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
