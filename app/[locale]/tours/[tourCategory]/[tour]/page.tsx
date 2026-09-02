import { FunctionComponent } from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTourMetadata } from "@/services/api/tours";
import TourLanding from "@/components/pages/TourLanding";

const TourLandingPage: FunctionComponent<TourProps> = async ({
  params,
}) => {
  const {locale, tour} = params;

  setRequestLocale(locale);
  const data = await getTourMetadata({ slug: tour });

  if (!data) {
    notFound();
  }

  return <TourLanding params={params} {...data} />;
};

export default TourLandingPage;
