import { FC } from "react";
import { moveInArray } from "@/helpers";
import AladinTemplate from "@/components/templates/Aladin";
import Catalogs from "@/components/organisms/Catalogs";
import Controls from "@/components/molecules/ExplorerControls";
import { Catalog } from "@/services/api/catalogs/schema";
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

  const { catalogs, survey } = data;
  const sortedCats = sortCats(catalogs);
  const { fovRange, path, imgFormat, cooFrame, maxOrder, tileSize } = survey;

  const options = {
    ...initialPosition(searchParams, survey),
    backgroundColor: "rgb(0,0,0)",
  };

  function sortCats(cats?: Array<Catalog>): Array<Catalog> | undefined {
    if (!cats) return undefined;

    const lastCatsIndex = cats.length - 1;
    const goalsCatIndex = cats.findIndex((cat) => {
      return cat.title === "goal";
    });

    const landmarksCatIndex = cats.findIndex((cat) => {
      return cat.title === "landmark";
    });

    if (landmarksCatIndex >= 0) {
      moveInArray(cats, landmarksCatIndex, lastCatsIndex);
    }

    if (goalsCatIndex >= 0) {
      moveInArray(cats, goalsCatIndex, lastCatsIndex);
    }

    return cats;
  }

  return (
    <AladinTemplate
      fovRange={fovRange}
      hipsConfig={{
        id: path,
        options: { imgFormat, cooFrame, tileSize, maxOrder },
      }}
      {...{ options }}
    >
      <Controls />
      <Catalogs catalogs={sortedCats} />
      <CurrentPositionPopover />
    </AladinTemplate>
  );
};

export default ExplorerPage;
