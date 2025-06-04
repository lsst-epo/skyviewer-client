import { FunctionComponent } from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTourMetadata } from "@/services/api/tours";
import TourLanding from "@/components/pages/TourLanding";

const TourLandingPage: FunctionComponent<TourProps> = async ({
  params: { tour, locale },
}) => {
  setRequestLocale(locale);
  const data = await getTourMetadata({ slug: tour });

  if (!data) {
    notFound();
  }

  return <TourLanding {...data} />;
};

export default TourLandingPage;
