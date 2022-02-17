import { getImageFields } from "@/lib/api/fragments/image";

export const tourCategoryFragment = `
fragment tourCategoryFragment on tourVariety_Category {
  id
  slug
  title
  varietyHandle
  thumbnail {
    ... on cantoDam_Asset {
      ${getImageFields("fit", 700, 700)}
    }
  }
}
`;
