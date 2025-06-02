import { FunctionComponent } from "react";
import TourSummary from "@/components/pages/TourSummary";
import { setRequestLocale } from "next-intl/server";

const SummaryPage: FunctionComponent<TourProps> = ({
  params: { tour, locale },
}) => {
  setRequestLocale(locale);
  return <TourSummary {...{ tour }} />;
};

export default SummaryPage;
