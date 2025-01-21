import { FC } from "react";
import { getCatalogsSurveysData } from "@/lib/api/catalogsSurveys";
import { moveInArray } from "@/helpers";
import AladinTemplate from "@/components/templates/Aladin";
import Explorer from "@/components/organisms/Explorer";
import Controls from "@/components/molecules/ExplorerControls";
import { Catalog } from "@/types/catalog";
import getSurveyImage from "@/lib/api/survey";
import { notFound } from "next/navigation";

const ExplorerPage: FC<WithSearchParams> = async ({ searchParams = {} }) => {
  const data = await getCatalogsSurveysData();
  const survey = await getSurveyImage();

  if (!survey) {
    notFound();
  }

  const { catalogs } = data;
  const sortedCats = sortCats(catalogs);
  const { fovRange, path, imgFormat } = survey;

  const target = Array.isArray(searchParams.target)
    ? survey.target
    : searchParams.target;

  const fov =
    !searchParams.fov || Array.isArray(searchParams.fov)
      ? survey.fov
      : parseFloat(searchParams.fov);

  const options = {
    target,
    fov,
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
      <Explorer catalogs={sortedCats} />
    </AladinTemplate>
  );
};

export default ExplorerPage;
