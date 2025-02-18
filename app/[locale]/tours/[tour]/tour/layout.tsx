import { FunctionComponent, PropsWithChildren } from "react";
import { notFound } from "next/navigation";
import AladinTemplate from "@/components/templates/Aladin";
import PrimaryLayout from "@/components/organisms/Primary";
import { getTourInitial } from "@/services/api/tours";
import TourTutorial from "@/components/organisms/TourTutorial";

const TourLayout: FunctionComponent<PropsWithChildren<TourProps>> = async ({
  params: { tour: slug },
  children,
}) => {
  const data = await getTourInitial(slug);

  if (!data) {
    notFound();
  }

  const { survey, initial } = data;

  return (
    <PrimaryLayout>
      <AladinTemplate
        {...survey}
        disableInteraction={true}
        options={{ ...initial, backgroundColor: "rgb(0,0,0)" }}
      >
        <TourTutorial>{children}</TourTutorial>
      </AladinTemplate>
    </PrimaryLayout>
  );
};

export default TourLayout;
