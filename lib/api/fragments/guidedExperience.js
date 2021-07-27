import { getImageFields } from "@/lib/api/fragments/image";

export const guidedExpFragment = `
fragment guidedExpFragment on guidedExperiences_guidedExperience_Entry {
  id
  slug
  thumbnail {
    ... on tourImages_Asset {
      ${getImageFields("fit", 700, 700)}
    }
  }
  varietyHandle
  varietyName
}
`;
