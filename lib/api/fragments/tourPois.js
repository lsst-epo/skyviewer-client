import { astroObjectContentFragment } from "@/lib/api/fragments/astroObject";

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
