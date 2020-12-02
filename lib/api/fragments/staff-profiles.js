import { getImageFields } from "@/api/fragments/images";

export const staffProfileFragment = `
  fragment myFragment on staffProfiles_staffProfiles_Entry {
    id
    title
    language
    uri
    localized {
      uri,
      language
    }
    ...on staffProfiles_staffProfiles_Entry {
      staffPullQuote: header
			plainText
      staffBio
      staffLocation
      image: staffPortrait {
        ...on staffProfiles_Asset {
          ${getImageFields("crop", 200, 200)}
        }
      }
      featuredImage: staffPortrait {
        ...on staffProfiles_Asset {
          ${getImageFields("crop", 800, 800)}
        }
      }
      staffType {
          id
          title
          slug
      }
    }
  }
`;
