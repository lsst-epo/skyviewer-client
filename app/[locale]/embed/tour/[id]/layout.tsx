import { FunctionComponent, PropsWithChildren } from "react";
import { notFound } from "next/navigation";
import { graphql } from "@/gql";
import { AstroObjectsSectionEntryUnion } from "@/gql/graphql";
import { siteFromLocale } from "@/lib/i18n/site";
import { queryAPI } from "@/lib/api/urql";
import getSurveyImage from "@/lib/api/survey";
import { RootParams } from "@/app/[locale]/layout";
import AladinTemplate from "@/components/templates/Aladin";

type TourParams = {
  id: string;
};

export interface TourProps {
  params: TourParams & RootParams;
}

const Query = graphql(`
  query EmbeddedTourLayout($site: [String], $id: [QueryArgument]) {
    toursEntries(id: $id, site: $site) {
      ... on tours_tour_Entry {
        tourPois {
          ... on tourPois_tourPoi_BlockType {
            fov
            astroObject {
              ... on astroObjects_astroObject_Entry {
                ra
                dec
              }
            }
          }
        }
      }
    }
  }
`);

const EmbeddedTourLayout: FunctionComponent<
  PropsWithChildren<TourProps>
> = async ({ params: { locale, id }, children }) => {
  const site = siteFromLocale(locale);
  const survey = await getSurveyImage();
  const { data } = await queryAPI({
    query: Query,
    variables: {
      site: [site],
      id: [id],
    },
  });

  if (!data || !data.toursEntries) {
    notFound();
  }

  const { toursEntries } = data;
  const tour = toursEntries[0];

  if (!survey || !tour) {
    notFound();
  }

  const { path, imgFormat, fovRange } = survey;
  const { tourPois } = tour;

  if (!tourPois || !tourPois[0]) {
    notFound();
  }

  const { fov, astroObject } = tourPois[0];
  const { ra, dec } = astroObject[0] as AstroObjectsSectionEntryUnion;

  return (
    <AladinTemplate
      fovRange={fovRange}
      hipsConfig={{ id: path, options: { imgFormat } }}
      options={{ fov, target: `${ra} ${dec}` }}
      embedded
    >
      {children}
    </AladinTemplate>
  );
};

export default EmbeddedTourLayout;
