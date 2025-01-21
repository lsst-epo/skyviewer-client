import { FunctionComponent } from "react";
import { notFound } from "next/navigation";
import { graphql } from "@/gql";
import { siteFromLocale } from "@/lib/i18n/site";
import { queryAPI } from "@/lib/api/urql";
import AladinTourGuide from "@/components/organisms/AladinTourGuide";
import { TourProps } from "./layout";
import NavigationList from "@/components/molecules/NavigationList";
import { useTranslation } from "@/lib/i18n";

const Query = graphql(`
  query EmbeddedTourQuery($site: [String], $id: [QueryArgument]) {
    toursEntries(id: $id, site: $site) {
      ... on tours_tour_Entry {
        ... on tours_tour_Entry {
          id
          slug
          title
          tourPois {
            ... on tourPois_tourPoi_BlockType {
              id
              description
              fov
              astroObject {
                ... on astroObjects_astroObject_Entry {
                  title
                  astroObjectId
                  ra
                  dec
                  characteristics
                }
              }
            }
          }
        }
      }
    }
  }
`);

const EmbeddedTour: FunctionComponent<WithSearchParams<TourProps>> = async ({
  params: { locale, id },
  searchParams = {},
}) => {
  const { t } = await useTranslation(locale, "translation");
  const { poi = "1", returnTo } = searchParams;
  const poiIndex = parseInt(Array.isArray(poi) ? poi[0] : poi) - 1;
  const returnUrl = Array.isArray(returnTo)
    ? returnTo.join(",")
    : `${returnTo}`;

  const site = siteFromLocale(locale);
  const { data } = await queryAPI({
    query: Query,
    variables: {
      site: [site],
      id: [id],
    },
  });

  if (!data || !data?.toursEntries || !data?.toursEntries[0]) {
    notFound();
  }

  const { title, tourPois } = data.toursEntries[0];

  const isFirst = poiIndex === 0;
  const isLast = poiIndex === data.toursEntries[0].tourPois.length - 1;

  const backLink = isFirst
    ? { url: returnUrl, text: t("navigation.cta.exit") }
    : {
        url: `/embed/tour/${id}?poi=${poiIndex}&returnTo=${returnUrl}`,
        text: t("navigation.cta.back"),
      };
  const nextLink = isLast
    ? { url: returnUrl, text: t("navigation.cta.exit") }
    : {
        url: `/embed/tour/${id}?poi=${poiIndex + 2}&returnTo=${returnUrl}`,
        text: t("navigation.cta.next"),
      };

  return (
    <AladinTourGuide
      {...{ poiIndex }}
      tourPois={tourPois as any}
      title={title || undefined}
      controls={<NavigationList links={[backLink, nextLink]} />}
    />
  );
};

export default EmbeddedTour;
