import { FunctionComponent } from "react";
import TourPage from "@/components/pages/Tour";
import { getTourPois } from "@/services/api/tours";
import { notFound } from "next/navigation";

const Tour: FunctionComponent<WithSearchParams<TourProps>> = async ({
  params: { tour },
}) => {
  const pois = await getTourPois(tour);

  if (!pois || pois.length === 0) {
    notFound();
  }

  return <TourPage {...{ pois }} />;
};

export default Tour;
