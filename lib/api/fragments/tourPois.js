import { astroObjectFragment } from "@/lib/api/fragments/astroObject";

export const tourPoisFragment = `
${astroObjectFragment}
fragment tourPoisFragment on tourPois_tourPoi_BlockType {
    id
    description
    fov
    astroObject {
      ...astroObjectFragment
    }
  }
`;
