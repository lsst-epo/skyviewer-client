import PropTypes from "prop-types";
import { withLayout } from "@moxy/next-layout";
import PrimaryLayout from "@/layouts/Primary";
import AladinLayout from "@/layouts/Aladin";
import { useCatalogsSurveysData } from "@/lib/api/catalogsSurveys";
import { moveInArray } from "@/helpers";
import LoadingSpinner from "@/primitives/LoadingSpinner";
import Explorer from "@/components/explorer/index.js";

const ExplorerPage = () => {
  const { data, isLoading } = useCatalogsSurveysData();

  if (isLoading) return <LoadingSpinner />

  const { catalogs, surveys } = data;
  const sortedCats = sortCats(catalogs);
  const { fov, fovMin, fovMax, path, target } = surveys[0];


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
    <Explorer
      selector="#aladin-lite-div"
      catalogs={sortedCats}
      survey={path}
      fov={+fov || 60}
      fovRange={[fovMin, fovMax] || [2, 90]}
      target={target || "267.0208333333 -24.7800000000"}
    />
  );
};

export default withLayout(
  <PrimaryLayout route="/explorer">
    <AladinLayout />
  </PrimaryLayout>
)(ExplorerPage);

// export async function getStaticProps() {
//   const { catalogs, surveys } = await getCatalogsSurveysData();
//   const lastCatsIndex = catalogs.length - 1;
//   const goalsCatIndex = catalogs.findIndex((cat) => {
//     return cat.title === "goal";
//   });

//   const landmarksCatIndex = catalogs.findIndex((cat) => {
//     return cat.title === "landmark";
//   });

//   if (landmarksCatIndex >= 0) {
//     moveInArray(catalogs, landmarksCatIndex, lastCatsIndex);
//   }

//   if (goalsCatIndex >= 0) {
//     moveInArray(catalogs, goalsCatIndex, lastCatsIndex);
//   }

//   return { props: { catalogs, survey: surveys[0] } };
// }

ExplorerPage.propTypes = {
  catalogs: PropTypes.array,
  survey: PropTypes.object,
};
