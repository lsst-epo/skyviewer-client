import { getImageFields } from "@/lib/api/fragments/image";

export const astroObjectFragment = `
fragment astroObjectFragment on astroObjects_astroObject_Entry {
    title
    astroObjectId
    ra
    dec
    astroImage {
      ... on astroImages_Asset {
        ${getImageFields("fit", 400, 400)}
      }
    }
    characteristics
  }
`;
