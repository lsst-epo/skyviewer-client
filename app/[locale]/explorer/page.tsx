import { getCatalogsSurveysData } from "@/lib/api/catalogsSurveys";
import { moveInArray } from "@/helpers";
import AladinTemplate from "@/components/templates/Aladin";
import Explorer from "@/components/organisms/Explorer";
import Controls from "@/components/molecules/ExplorerControls";
import { Catalog } from "@/types/catalog";

const ExplorerPage = async () => {
  const data = await getCatalogsSurveysData();

  const { catalogs, surveys } = data;
  const sortedCats = sortCats(catalogs);
  const { fov, fovMin, fovMax, path: survey, target, imgFormat } = surveys[0];
  const options = {
    fov: +fov || 60,
    target: target || "267.0208333333 -24.7800000000",
    survey,
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
      fovRange={[fovMin, fovMax] || [2, 90]}
      {...{ options, imgFormat, survey }}
    >
      <Controls />
      <Explorer catalogs={sortedCats} />
    </AladinTemplate>
  );
};

export default ExplorerPage;
