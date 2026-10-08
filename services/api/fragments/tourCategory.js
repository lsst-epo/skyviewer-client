/**
 * This is possibly dead code from earlier prototyping. We should remove it if so.
 * ~ Jeff 10/07/26
 */
import { getImageFields } from "@/services/api/fragments/image";

export const tourCategoryFragment = `
fragment tourCategoryFragment on tourVariety_Category {
  id
  slug
  title
  varietyHandle
  thumbnail {
    ... on tourImages_Asset {
      ${getImageFields("fit", 700, 700)}
    }
  }
}
`;
