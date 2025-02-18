import { FunctionComponent } from "react";
import { notFound } from "next/navigation";
import { getTourMetadata } from "@/services/api/tours";
import TourLanding from "@/components/pages/TourLanding";

const TourLandingPage: FunctionComponent<TourProps> = async ({
  params: { tour },
}) => {
  const data = await getTourMetadata({ slug: tour });

  if (!data) {
    notFound();
  }

  return <TourLanding {...data} />;
};

export default TourLandingPage;
