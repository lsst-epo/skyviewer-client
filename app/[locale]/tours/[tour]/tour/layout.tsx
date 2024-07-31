import { FunctionComponent, PropsWithChildren } from "react";
import AladinTemplate from "@/components/templates/Aladin";

const TourLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <AladinTemplate>{children}</AladinTemplate>;
};

export default TourLayout;
