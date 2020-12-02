import { getImageFields } from "@/api/fragments/images";

export const eventsFragment = `
  fragment myFragment on events_events_Entry {
    id
    title
    language
    localized {
      uri,
      language
    }
    uri
    ...on events_events_Entry {
      city
      state
      country
      registrationOpenDate
      registrationCloseDate
      date
      description
      image: hero {
        ...on heroes_Asset {
          ${getImageFields("crop", 200, 200)}
        }
      }
      eventType {
        id
        title
        slug
      }
    }
  }
`;
