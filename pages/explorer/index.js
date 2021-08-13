import PropTypes from "prop-types";
import { withLayout } from "@moxy/next-layout";
import PrimaryLayout from "@/layouts/Primary";
import AladinLayout from "@/layouts/Aladin";
// import { getCatalogsData, useCatalogsData } from "@/lib/api/catalogs";
import { getCatalogsSurveysData } from "@/lib/api/catalogsSurveys";
import Explorer from "@/components/explorer/index.js";

const ExplorerPage = ({ catalogs, survey }) => {
  const { fov, minFov, maxFov, path, target } = survey;

  return (
    <Explorer
      selector="#aladin-lite-div"
      catalogs={catalogs}
      survey={path}
      fov={+fov || 60}
      fovRange={[minFov, maxFov] || [2, 90]}
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
  return { props: { catalogs, survey: surveys[0] } };
}

ExplorerPage.propTypes = {
  catalogs: PropTypes.array,
  survey: PropTypes.object,
};
