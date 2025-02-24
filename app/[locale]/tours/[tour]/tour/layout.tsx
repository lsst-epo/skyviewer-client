import { FunctionComponent, PropsWithChildren } from "react";
import PrimaryLayout from "@/components/organisms/Primary";

const TourLayout: FunctionComponent<PropsWithChildren<TourProps>> = async ({
  children,
}) => {
  return <PrimaryLayout>{children}</PrimaryLayout>;
};

export default TourLayout;
