import { FunctionComponent, PropsWithChildren } from "react";
import PrimaryLayout from "@/layouts/Primary";

const TourLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <PrimaryLayout backgroundColor="secondary" closeUrl="/tours">
      {children}
    </PrimaryLayout>
  );
};

export default TourLayout;
