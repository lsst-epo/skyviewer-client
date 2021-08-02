import PropTypes from "prop-types";
import { withLayout } from "@moxy/next-layout";
import PrimaryLayout from "@/layouts/Primary";
import AladinLayout from "@/layouts/Aladin";
// import { getCatalogsData, useCatalogsData } from "@/lib/api/catalogs";
import { getCatalogsSurveysData } from "@/lib/api/catalogsSurveys";
import Explorer from "@/components/explorer/index.js";

// other working survey url
// http://alasky.u-strasbg.fr/DSS/DSSColor
// staging survey url
// "https://epo-hips.netlify.app/images"

// localhost survey url
// "http://localhost:5000/images"

const ExplorerPage = ({ catalogs, survey }) => {
  const { fov, minFov, maxFov, path, target } = survey;
  // eslint-disable-next-line no-console
  // console.log("serverside", catalogs);
  // eslint-disable-next-line no-console
  // console.log("clientside", data, catalogs);

  return (
    <Explorer
      selector="#aladin-lite-div"
      catalogs={catalogs}
      survey={path || "http://alasky.u-strasbg.fr/DSS/DSSColor"}
      fov={fov || 60}
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
  // if statement is temporary until confident there will always be a server to query
  if (process.env.NEXT_PUBLIC_API_URL) {
    const { catalogs, surveys } = await getCatalogsSurveysData();
    return { props: { catalogs, survey: surveys[0] } };
  }
  return { props: { catalogs: null, survey: null } };
}

ExplorerPage.propTypes = {
  catalogs: PropTypes.array,
  survey: PropTypes.object,
};
