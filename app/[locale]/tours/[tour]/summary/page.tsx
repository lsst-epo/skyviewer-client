import { FunctionComponent } from "react";
import { setRequestLocale } from "next-intl/server";
import TourSummary from "@/components/pages/TourSummary";

const SummaryPage: FunctionComponent<WithSearchParams<TourProps>> = ({
  params: { tour, locale },
  searchParams
}) => {
  const isEmbedded = (searchParams?.embedded === "true") ? true : false;
  setRequestLocale(locale);
  return <TourSummary {...{ tour }} embedded={isEmbedded} />;
};

export default SummaryPage;
