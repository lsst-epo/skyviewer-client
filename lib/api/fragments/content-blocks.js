import { getImageFields } from "@/api/fragments/images";
import { linksFragment, mixedLinkFragment } from "@/api/fragments/links";

/// ///////////////////////////////////////////
///   Page Content Blocks
/// ///////////////////////////////////////////

export const textBlockFragment = `
  fragment textBlock on contentBlocks_NeoField {
    ... on contentBlocks_text_BlockType {
      typeHandle
      id
      text
    }
  }
`;

export const imageBlockFragment = `
  fragment imageBlock on contentBlocks_NeoField {
    ...on contentBlocks_image_BlockType {
      id
      typeHandle
      caption
      image: contentImage {
        ...on contentImages_Asset {
          ${getImageFields()}
        }
      }
    }
  }
`;

export const calloutBlockFragment = `
  ${linksFragment}
  fragment calloutBlock on contentBlocks_NeoField {
    ...on contentBlocks_callout_BlockType {
      id
      typeHandle
      callout {
        ...on callouts_callouts_Entry {
          header
          image {
            ...on calloutImages_Asset {
              ${getImageFields("fit", 750)}
            }
          }
          padImage
          text
          links {
            ...links
          }
          backgroundColor
          width
          order
          ratio
        }
      }
    }
  }
`;

export const linkBlockFragment = `
  fragment linkBlock on contentBlocks_NeoField {
    ...on contentBlocks_link_BlockType {
      id
      typeHandle
      mixedLink {
        ...mixedLink
      }
    }
  }
`;

export const contactBlockFragment = `
  fragment contactBlock on contentBlocks_NeoField {
    ...on contentBlocks_contact_BlockType {
      id
      typeHandle
      header
      linkText
      pageEntry {
        id
        uri
        title
      }
    }
  }
`;

export const shareBlockFragment = `
  fragment shareBlock on contentBlocks_NeoField {
    ...on contentBlocks_share_BlockType {
      id
      typeHandle
    }
  }
`;

export const ctaGridBlockFragment = `
  fragment ctaGridBlock on contentBlocks_NeoField {
    ... on contentBlocks_ctaGrid_BlockType {
      typeHandle
      id
      header
      mixedLink {
        ...mixedLink
      }
      ctas: children {
        ... on contentBlocks_cta_BlockType {
          id
          contentImage {
            ...on contentImages_Asset {
              ${getImageFields("crop", 286, 158)}
            }
          }
          mixedLink {
            ...mixedLink
          }
        }
      }
    }
  }
`;

export const staffGridFragment = `
  fragment staffGridBlock on contentBlocks_NeoField {
    ... on contentBlocks_staffGrid_BlockType {
      id
      header
      mixedLink {
        ...mixedLink
      }
      staffType {
        id
        title
        slug
      }
      gridItemsNumber
      typeHandle
      items: children {
        ... on contentBlocks_staffGridItem_BlockType {
          entry: staffEntry {
            ... on staffProfiles_staffProfiles_Entry {
              id
              title
              plainText
              image: staffPortrait {
                ...on staffProfiles_Asset {
                  ${getImageFields("crop", 200, 200)}
                }
              }
              uri
            }
          }
        }
      }
    }
  }
`;

export const relatedContentFragment = `
  fragment relatedContentBlock on contentBlocks_NeoField {
    ... on contentBlocks_relatedContent_BlockType {
      id
      header
      mixedLink {
        ...mixedLink
      }
      gridItemsNumber
      typeHandle
      items: children {
        ... on contentBlocks_relatedContentItem_BlockType {
          entry: pagePostEntry {
            id
            title
            uri
            ... on pages_pages_Entry {
              description
              image: featuredImage {
                ...on contentImages_Asset {
                  ${getImageFields("crop", 450, 275)}
                }
              }
            }
            ...on news_post_Entry {
              description: teaser
              image: hero {
                ...on heroes_Asset {
                  ${getImageFields("crop", 450, 275)}
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const accordionGroupBlockFragment = `
  fragment accordionGroupBlock on contentBlocks_NeoField {
    ... on contentBlocks_accordionGroup_BlockType {
      id
      typeHandle
      header
      accordions: children {
        ... on contentBlocks_accordion_BlockType {
          id
          text
          header
        }
      }
    }
  }
`;

export const scheduleBlockFragment = `
  fragment scheduleBlock on contentBlocks_NeoField {
    ... on contentBlocks_schedule_BlockType {
      typeHandle
      date
      description
      scheduleRows: children {
        ... on contentBlocks_scheduleRow_BlockType {
          startTime
          endTime
          description
          bold
        }
      }
    }
  }
`;

/// ///////////////////////////////////////////
///   News Content Blocks
/// ///////////////////////////////////////////

export const textBlockNewsFragment = `
  fragment textBlock on contentBlocksNews_NeoField {
    ... on contentBlocksNews_text_BlockType {
      typeHandle
      id
      text
    }
  }
`;

export const imageBlockNewsFragment = `
  fragment imageBlock on contentBlocksNews_NeoField {
    ...on contentBlocksNews_image_BlockType {
      id
      typeHandle
      caption
      image: contentImage {
        ...on contentImages_Asset {
          ${getImageFields()}
        }
      }
    }
  }
`;

export const linkBlockNewsFragment = `
  fragment linkBlock on contentBlocksNews_NeoField {
    ...on contentBlocksNews_linkedAsset_BlockType {
      id
      typeHandle
      url: externalUrl
      text: header
    }
  }
`;

export const contactBlockNewsFragment = `
  fragment contactBlock on contentBlocksNews_NeoField {
    ...on contentBlocksNews_contactStaff_BlockType {
      id
      typeHandle
      header
      staffEntry {
        title
        ... on staffProfiles_staffProfiles_Entry {
          email
          phoneNumber
          plainText
          subLocation {
            ... on location_Category {
              address
              city
              country
              state
              title
            }
          }
        }
      }
    }
  }
`;

export const relatedContentNewsFragment = `
  fragment relatedContentBlock on contentBlocksNews_NeoField {
    ... on contentBlocksNews_relatedContent_BlockType {
      id
      header
      gridItemsNumber
      typeHandle
      items: children {
        ... on contentBlocksNews_relatedContentItem_BlockType {
          entry: pagePostEntry {
            id
            title
            uri
            ... on pages_pages_Entry {
              description
              image: featuredImage {
                ...on contentImages_Asset {
                  ${getImageFields("crop", 450, 275)}
                }
              }
            }
            ...on news_post_Entry {
              date
              description: teaser
              image: hero {
                ...on heroes_Asset {
                  ${getImageFields("crop", 450, 275)}
                }
              }
            }
          }
        }
      }
    }
  }
`;
