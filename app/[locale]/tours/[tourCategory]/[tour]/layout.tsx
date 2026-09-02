import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import { assetAlt } from "@/lib/canto/metadata";
import { getTourMetadata } from "@/services/api/tours";
import { getToursPaths } from "@/services/api/tours/paths";

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

  const { title, thumbnail } = data;

  return {
    title,
    openGraph: {
      images: {
        url: thumbnail.url.directUrlPreview,
        width: thumbnail.width,
        height: thumbnail.height,
        alt: assetAlt(thumbnail.additional),
      },
    },
  };
}

const TourLayout: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default TourLayout;
