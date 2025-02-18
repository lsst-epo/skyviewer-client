import { astroObjectContentFragment } from "@/services/api/fragments/astroObject";

export const tourPoisFragment = `
${astroObjectContentFragment}
fragment tourPoisFragment on tourPois_tourPoi_BlockType {
    id
    description
    fov
    astroObject {
      ...astroObjectContentFragment
    }
  }
`;
