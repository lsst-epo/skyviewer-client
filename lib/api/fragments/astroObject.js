import { getImageFields } from "@/lib/api/fragments/image";

export const astroObjectContentFragment = `
fragment astroObjectContentFragment on astroObjects_astroObject_Entry {
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

export const astroObjectFragment = `
fragment astroObjectFragment on AstroObject  {
    id
    _RA
    _DEC
    type
  }
`;
