import { FC } from "react";
import { getCatalogsSurveysData } from "@/lib/api/catalogsSurveys";
import { moveInArray } from "@/helpers";
import AladinTemplate from "@/components/templates/Aladin";
import Catalogs from "@/components/organisms/Catalogs";
import Controls from "@/components/molecules/ExplorerControls";
import { Catalog } from "@/types/catalog";
import { notFound } from "next/navigation";
import { initialPosition } from "@/lib/helpers";
import { getExplorerPage } from "@/lib/api/explorer";

const ExplorerPage: FC<WithSearchParams<RootProps>> = async ({
  params: { locale },
  searchParams = {},
}) => {
  const data = await getCatalogsSurveysData();
  const survey = await getExplorerPage(locale);

  if (!survey) {
    notFound();
  }

  const { catalogs } = data;
  const sortedCats = sortCats(catalogs);
  const { fovRange, path, imgFormat } = survey;

  const options = {
    ...initialPosition(searchParams, survey),
    backgroundColor: "rgb(0,0,0)",
  };

  function sortCats(cats: Array<Catalog>): Array<Catalog> | undefined {
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
      hipsConfig={{ id: path, options: { imgFormat } }}
      {...{ options }}
    >
      <Controls />
      <Catalogs catalogs={sortedCats} />
    </AladinTemplate>
  );
};

export default ExplorerPage;
