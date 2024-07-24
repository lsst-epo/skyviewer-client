"use client";

import PrimaryLayout from "@/layouts/Primary";
import AladinLayout from "@/layouts/Aladin";
import { useCatalogsSurveysData } from "@/lib/api/catalogsSurveys";
import { moveInArray } from "@/helpers";
import LoadingSpinner from "@/primitives/LoadingSpinner";
import Explorer from "@/components/explorer/index.js";

const ExplorerPage = () => {
  const { data, isLoading } = useCatalogsSurveysData();

  if (isLoading) return <LoadingSpinner />;

  const { catalogs, surveys } = data;
  const sortedCats = sortCats(catalogs);
  const { fov, fovMin, fovMax, path, target, imgFormat } = surveys[0];

  function sortCats(cats) {
    if (!cats) return null;

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
    <PrimaryLayout route="/explorer">
      <AladinLayout>
        <Explorer
          selector="#aladin-lite-div"
          catalogs={sortedCats}
          survey={path}
          fov={+fov || 60}
          fovRange={[fovMin, fovMax] || [2, 90]}
          target={target || "267.0208333333 -24.7800000000"}
          imgFormat={imgFormat}
        />
      </AladinLayout>
    </PrimaryLayout>
  );
};

export default ExplorerPage;
