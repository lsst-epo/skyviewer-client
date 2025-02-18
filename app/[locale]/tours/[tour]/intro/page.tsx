import { FunctionComponent } from "react";

import { getTour } from "@/services/api/tours";
import { notFound } from "next/navigation";
import TourIntro from "@/components/pages/TourIntro";

const TourIntroPage: FunctionComponent<WithSearchParams<TourProps>> = async ({
  params: { tour },
}) => {
  const data = await getTour({ slug: tour });

  if (!data) {
    notFound();
  }

  return <TourIntro {...data} />;
};

export default TourIntroPage;
