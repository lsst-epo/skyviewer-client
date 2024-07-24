import { FunctionComponent, PropsWithChildren } from "react";
import { gql } from "graphql-request";
import { queryAPI } from "@/lib/fetch";
import PrimaryLayout from "@/components/organisms/Primary";
import { RootParams } from "app/[locale]/layout";

type TourParams = {
  tour: string;
};
export interface TourProps {
  params: TourParams & RootParams;
}

const TourLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <PrimaryLayout backgroundColor="secondary" closeUrl="/tours">
      {children}
    </PrimaryLayout>
  );
};

export async function generateStaticParams() {
  const query = gql`
    {
      tours: entries(section: "tours") {
        ... on tours_tour_Entry {
          slug
        }
      }
    }
  `;
  const data = await queryAPI(query);

  return data?.tours.map((tour) => {
    const { slug } = tour;
    return { params: { tour: slug } };
  });
}

export default TourLayout;
