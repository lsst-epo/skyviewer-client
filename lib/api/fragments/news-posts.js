import { getImageFields } from "@/api/fragments/images";

export const newsPostFragment = `
  fragment myFragment on news_post_Entry {
    id
    title
    language
    localized {
      uri,
      language
    }
    uri
    ...on news_post_Entry {
      date
      dateCreated
      description: teaser
      image: hero {
        ...on heroes_Asset {
          ${getImageFields("crop", 450, 275)}
        }
      }
      postType {
        id
        title
        slug
      }
    }
  }
`;
