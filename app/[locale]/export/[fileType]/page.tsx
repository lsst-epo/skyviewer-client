import { FC } from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import AladinTemplate from "@/components/templates/Aladin";
import { getExplorerPage } from "@/services/api/explorer";
import ImageExport from "@/components/organisms/ImageExport";

export const generateStaticParams = () => {
  const fileTypes: Array<ExportFileType> = ["png", "jpg", "jpeg", "webp"];

  return fileTypes.map((fileType) => {
    return { fileType };
  });
};

const ExportPage: FC<ExportProps> = async ({
  params: { fileType, locale },
}) => {
  setRequestLocale(locale);
  const data = await getExplorerPage(locale);

  if (!data) {
    notFound();
  }

  const { surveys, fovRange, ...configuredOptions } = data;

  return (
    <AladinTemplate
      fovRange={fovRange}
      layers={surveys}
      options={configuredOptions}
      initializeWithParams
      embedded
    >
      <ImageExport layersToLoad={surveys.length} {...{ fileType }} />
    </AladinTemplate>
  );
};

export default ExportPage;
