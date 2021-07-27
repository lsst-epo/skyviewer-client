import { getImageFields } from "@/lib/api/fragments/image";

export const astroObjectFragment = `
fragment astroObjectFragment on astroObjects_astroObject_Entry {
    id
    hipsId
    dec
    characteristics
    image {
      ... on tourImages_Asset {
        ${getImageFields("fit", 400, 400)}
      }
    }
    ra
    title
  }
`;
