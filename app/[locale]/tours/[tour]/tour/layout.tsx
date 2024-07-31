import { FunctionComponent, PropsWithChildren } from "react";
import AladinLayout from "@/components/organisms/Aladin";

const TourLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <AladinLayout>{children}</AladinLayout>;
};

export default TourLayout;
