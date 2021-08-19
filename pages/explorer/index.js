import PropTypes from "prop-types";
import { withLayout } from "@moxy/next-layout";
import PrimaryLayout from "@/layouts/Primary";
import AladinLayout from "@/layouts/Aladin";
import { getCatalogsSurveysData } from "@/lib/api/catalogsSurveys";
import { moveInArray } from "@/helpers";
import Explorer from "@/components/explorer/index.js";

const ExplorerPage = ({ catalogs, survey }) => {
  const { fov, fovMin, fovMax, path, target } = survey;

  return (
    <Explorer
      selector="#aladin-lite-div"
      catalogs={catalogs}
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

export async function getStaticProps() {
  const { catalogs, surveys } = await getCatalogsSurveysData();
  const lastCatsIndex = catalogs.length - 1;
  const goalsCatIndex = catalogs.findIndex((cat) => {
    return cat.title === "goal";
  });

  const landmarksCatIndex = catalogs.findIndex((cat) => {
    return cat.title === "landmark";
  });

  if (landmarksCatIndex >= 0) {
    moveInArray(catalogs, landmarksCatIndex, lastCatsIndex);
  }

  if (goalsCatIndex >= 0) {
    moveInArray(catalogs, goalsCatIndex, lastCatsIndex);
  }

  // moveInArray();
  return { props: { catalogs, survey: surveys[0] } };
}

ExplorerPage.propTypes = {
  catalogs: PropTypes.array,
  survey: PropTypes.object,
};
