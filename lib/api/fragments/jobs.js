export const jobsFragment = `
  fragment myFragment on jobs_job_Entry {
    id
    title
    language
    localized {
      uri,
      language
    }
    uri
    ...on jobs_job_Entry {
      openDate
      closeDate
      externalUrl
      subLocation {
        title
        ... on location_Category {
          address
          city
          state
          country
        }
      }      
      jobPosition {
        id
        title
        slug
      }
    }
  }
`;
