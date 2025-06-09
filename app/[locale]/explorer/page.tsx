import { FC } from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { env } from "@/env";
import AladinTemplate from "@/components/templates/Aladin";
import Controls from "@/components/molecules/ExplorerControls";
import { getExplorerPage } from "@/services/api/explorer";
import CurrentPositionPopover from "@/components/organisms/CurrentPositionPopover";
import AladinMenu from "@/components/organisms/AladinMenu";
import DisplayMenu from "@/components/organisms/AladinMenu/Display";

const ExplorerPage: FC<RootProps> = async ({ params: { locale } }) => {
  setRequestLocale(locale);
  const data = await getExplorerPage(locale);

  if (!data) {
    notFound();
  }

  const { surveys, fovRange, ...configuredOptions } = data;

  const properties = surveys.map(({ survey }) => {
    const { pathname, origin } = new URL(survey.path);

    return new URL(`${pathname}/properties`, origin).toString();
  });

  return (
    <AladinTemplate
      menu={
        <AladinMenu backgroundColor="primary" {...{ properties, locale }}>
          <DisplayMenu layers={surveys} debug={env.CLOUD_ENV === "DEV"} />
        </AladinMenu>
      }
      fovRange={fovRange}
      layers={surveys}
      options={configuredOptions}
      initializeWithParams
    >
      <Controls />
      <CurrentPositionPopover />
    </AladinTemplate>
  );
};

export default ExplorerPage;
