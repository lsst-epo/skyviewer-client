import { FunctionComponent } from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import AladinTemplate from "@/components/templates/Aladin";
import EmbeddedExplorer from "@/components/organisms/Embedded";
import CurrentPositionPopover from "@/components/organisms/CurrentPositionPopover";
import { getEmbedPage } from "@/services/api/embed";

const EmbeddedPage: FunctionComponent<RootProps> = async ({
  params: { locale },
}) => {
  setRequestLocale(locale);
  const data = await getEmbedPage(locale);

  if (!data) {
    notFound();
  }

  const { surveys, fovRange, ...configuredOptions } = data;

  return (
    <AladinTemplate
      fovRange={fovRange}
      layers={surveys}
      options={configuredOptions}
      embedded
      initializeWithParams
    >
      <EmbeddedExplorer />
      <CurrentPositionPopover />
    </AladinTemplate>
  );
};

export default EmbeddedPage;
