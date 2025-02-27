import { FunctionComponent } from "react";
import TourSummary from "@/components/pages/TourSummary";

const SummaryPage: FunctionComponent<TourProps> = ({ params: { tour } }) => {
  return <TourSummary {...{ tour }} />;
};

export default SummaryPage;
