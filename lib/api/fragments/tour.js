import { getImageFields } from "@/lib/api/fragments/image";

export const tourFragment = `
fragment tourFragment on tours_tour_Entry {
    id
    slug
    title
    complexity
    duration
    thumbnail {
      ... on tourImages_Asset {
        ${getImageFields("fit", 700, 700)}
      }
    }
    backgroundImage {
      ... on tourImages_Asset {
        ${getImageFields("fit", 700, 700)}
      }
    }
    introHeading
    introSubheading
    introContentBlocks {
      ... on introContentBlocks_introBlock_BlockType {
        id
        body
      }
    }
    factsHeading
    factsContentBlocks {
      ... on factsContentBlocks_factsContentBlock_BlockType {
        id
        body
      }
    }
  }
`;
