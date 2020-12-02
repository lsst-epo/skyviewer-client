import { transform, getImageFields } from "@/api/fragments/images";

export const galleryItemFragment = `
  fragment galleryItem on galleryItems_galleryItem_Entry {
      id
      slug
      title
      uri
      language
      localized {
        uri,
        language
      }
      image: galleryItemAsset {
        ... on galleryAssets_Asset {
          ${getImageFields("fit", 800)}
          thumb2x: url ${transform("crop", 600, 400)}
          thumb: url ${transform("crop", 300, 200)}
        }
      }
      galleryItemCategory {
        id
        slug
        title
      }
      galleryItemTags {
        id
        slug
        title
      }
    }
`;
