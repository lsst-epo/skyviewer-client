import { FunctionComponent, Suspense } from "react";

import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTour } from "@/services/api/tours";
import TourIntro from "@/components/pages/TourIntro";

const TourIntroPage: FunctionComponent<WithSearchParams<TourProps>> = async ({
  params: { tour, locale },
}) => {
  setRequestLocale(locale);
  const data = await getTour({ slug: tour });

  if (!data) {
    notFound();
  }

  return (
    <Suspense>
      <TourIntro {...data} />
    </Suspense>
  );
};

export default TourIntroPage;
