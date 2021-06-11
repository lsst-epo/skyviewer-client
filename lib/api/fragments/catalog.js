export const catalogFragment = `
fragment catalogFragment on catalog_catalog_Entry {
    id
    title
    uri
    ...on catalog_catalog_Entry {
      endpoint
      description
    }
  }
`;
