import { getImageFields } from "@/lib/api/fragments/image";

export const pageFragment = `
  fragment pageFragment on pages_pages_Entry {
    id
    title
    uri
    ...on pages_pages_Entry {
      date: dateUpdated
      description
      image: featuredImage {
        ... on contentImages_Asset {
          ${getImageFields("crop", 450, 275)}
        }
      }
    }
  }
`;

export const pageFragmentFull = `
fragment pageFragmentFull on pages_pages_Entry {
  id
  uri
  title
  language
  localized {
    uri
    language
  }
  ...on pages_pages_Entry {
    description
    hero {
      ...on heroes_Asset {
        ${getImageFields("crop", 1920, 1067)}
        focalPointX
        focalPointY
      }
    }
    hideTitle
    pageType
    dynamicComponent
    featuredImage {
      ... on contentImages_Asset {
        ${getImageFields("crop", 800, 600)}
      }
    }
    contentBlocks {
      ...accordionGroupBlock
      ...calloutBlock
      ...contactBlock
      ...ctaGridBlock
      ...imageBlock
      ...linkBlock
      ...newsBlock
      ...relatedContentBlock
      ...scheduleBlock
      ...shareBlock
      ...slideBlock
      ...staffGridBlock
      ...textBlock
      ...videoBlock
    }
  }
}
`;
export const searchFragmentFull = `
fragment searchFragmentFull on searchResults_searchResults_Entry {
  id
  uri
  title
  language
  localized {
    uri
    language
  }
  ...on searchResults_searchResults_Entry {
    dynamicComponent
  }
}
`;
