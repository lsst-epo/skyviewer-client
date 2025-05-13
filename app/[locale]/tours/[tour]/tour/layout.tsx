import { FunctionComponent, PropsWithChildren } from "react";
import AladinMenu from "@/components/organisms/AladinMenu";

const TourLayout: FunctionComponent<PropsWithChildren<TourProps>> = async ({
  params: { locale },
  children,
}) => {
  return (
    <>
      <AladinMenu locale={locale} />
      {children}
    </>
  );
};

export default TourLayout;
