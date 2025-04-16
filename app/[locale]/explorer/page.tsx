import { FC } from "react";
import AladinTemplate from "@/components/templates/Aladin";
import Controls from "@/components/molecules/ExplorerControls";
import { notFound } from "next/navigation";
import { initialPosition } from "@/lib/helpers";
import { getExplorerPage } from "@/services/api/explorer";
import CurrentPositionPopover from "@/components/organisms/CurrentPositionPopover";

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

  return (
    <AladinTemplate fovRange={fovRange} layers={surveys} {...{ options }}>
      <Controls />
      <CurrentPositionPopover />
    </AladinTemplate>
  );
};

export default ExplorerPage;
