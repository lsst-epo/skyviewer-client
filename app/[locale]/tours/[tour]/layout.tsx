import { FunctionComponent, PropsWithChildren } from "react";
import { getToursPaths } from "@/lib/api/tours";
import { RootParams } from "app/[locale]/layout";
import PrimaryLayout from "@/components/organisms/Primary";

export type TourParams = {
  tour: string;
};
export interface TourProps {
  params: TourParams & RootParams;
}

const TourLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <PrimaryLayout backgroundColor="secondary" closeUrl="/tours">
      {children}
    </PrimaryLayout>
  );
};

export const generateStaticParams = async () => {
  const { tours } = await getToursPaths();

  return tours.map(({ slug }) => {
    return { tour: slug };
  });
};

export default TourLayout;
