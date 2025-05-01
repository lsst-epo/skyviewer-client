import { FC } from "react";
import AladinTemplate from "@/components/templates/Aladin";
import Controls from "@/components/molecules/ExplorerControls";
import { notFound } from "next/navigation";
import { initialPosition } from "@/lib/helpers";
import { getExplorerPage } from "@/services/api/explorer";
import CurrentPositionPopover from "@/components/organisms/CurrentPositionPopover";
import AladinMenu from "@/components/organisms/AladinMenu";

const ExplorerPage: FC<WithSearchParams<RootProps>> = async ({
  params: { locale },
  searchParams = {},
}) => {
  const data = await getExplorerPage(locale);

  if (!data) {
    notFound();
  }

  const { surveys, fovRange, ...configuredOptions } = data;

  const options = {
    ...initialPosition(searchParams, { fovRange, ...configuredOptions }),
    backgroundColor: "rgb(0,0,0)",
  };

  const properties = surveys.map(({ survey }) => {
    const { pathname, origin } = new URL(survey.path);

    return new URL(`${pathname}/properties`, origin).toString();
  });

  return (
    <>
      <AladinMenu backgroundColor="primary" {...{ properties, locale }} />
      <AladinTemplate fovRange={fovRange} layers={surveys} {...{ options }}>
        <Controls />
        <CurrentPositionPopover />
      </AladinTemplate>
    </>
  );
};

export default ExplorerPage;
