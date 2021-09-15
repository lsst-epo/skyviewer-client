import { getImageFields } from "@/lib/api/fragments/image";

export const catalogFragment = `
fragment catalogFragment on catalogs_catalog_Entry {
    id
    title
    path
    icon {
      ... on icons_Asset {
        url
      }
    }
  }
`;
