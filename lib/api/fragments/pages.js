import { getImageFields } from "@/api/fragments/images";

export const pagesFragment = `
  fragment myFragment on pages_pages_Entry {
    id
    title
    uri
    ...on pages_pages_Entry {
      description
      image: featuredImage {
        ... on contentImages_Asset {
          ${getImageFields("crop", 450, 275)}
        }
      }
    }
  }
`;
export const pagesNewsComboFragment = `
  fragment myFragment on pages_pages_Entry {
    id
    title
    uri
    ...on pages_pages_Entry {
      description
      image: featuredImage {
        ... on contentImages_Asset {
          ${getImageFields("crop", 450, 275)}
        }
      }
    }
  }
  fragment myFragment2 on news_post_Entry {
    id
    title
    uri
    ...on news_post_Entry {
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
