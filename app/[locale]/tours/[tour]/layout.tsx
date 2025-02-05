import { FunctionComponent, PropsWithChildren } from "react";
import { getToursPaths } from "@/lib/api/tours";
import PrimaryLayout from "@/components/organisms/Primary";

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
