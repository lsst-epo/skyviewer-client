import { FunctionComponent } from "react";
import { setRequestLocale } from "next-intl/server";
import TourSummary from "@/components/pages/TourSummary";

const SummaryPage: FunctionComponent<TourProps> = ({
  params: { tour, locale },
}) => {
  setRequestLocale(locale);
  return <TourSummary {...{ tour }} />;
};

export default SummaryPage;
