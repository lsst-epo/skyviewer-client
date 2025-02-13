import { getTourMetadata } from "@/lib/api/tours";
import { getToursPaths } from "@/lib/api/tours/paths";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FC, PropsWithChildren } from "react";

export const generateStaticParams = async ({
  params: { locale },
}: TourProps) => {
  const tours = await getToursPaths({ locale });

  return tours?.map(({ slug }) => {
    return { tour: slug };
  });
};

export async function generateMetadata({
  params: { tour },
}: TourProps): Promise<Metadata> {
  const data = await getTourMetadata({ slug: tour });

  if (!data) {
    notFound();
  }

  return {
    title: data.title,
  };
}

const TourLayout: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default TourLayout;
