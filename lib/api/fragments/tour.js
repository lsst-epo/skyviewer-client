import { getImageFields } from "@/lib/api/fragments/image";

export const tourFragment = `
fragment tourFragment on tours_tour_Entry {
    id
    slug
    title
    tourVariety
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
  }
`;
