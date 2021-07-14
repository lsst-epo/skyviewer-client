import PropTypes from "prop-types";
import { withLayout } from "@moxy/next-layout";
import PrimaryLayout from "@/layouts/Primary";
import AladinLayout from "@/layouts/Aladin";
import { getCatalogsData, useCatalogsData } from "@/lib/api/catalogs";
import Explorer from "@/components/explorer/index.js";

// other working survey url
// http://alasky.u-strasbg.fr/DSS/DSSColor
// staging survey url
// "https://epo-hips.netlify.app/images"

// localhost survey url
// "http://localhost:5000/images"

const ExplorerPage = ({ catalogs }) => {
  // const data = useCatalogsData();
  // eslint-disable-next-line no-console
  // console.log("serverside", catalogs);
  // eslint-disable-next-line no-console
  // console.log("clientside", data);

  return (
    <Explorer
      selector="#aladin-lite-div"
      catalogs={null}
      survey="http://alasky.u-strasbg.fr/DSS/DSSColor"
      fov={60}
      fovRange={[2, 90]}
      target="267.0208333333 -24.7800000000"
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
    const { catalogs } = await getCatalogsData();
    return { props: { catalogs } };
  }
  return { props: { catalogs: null } };
}

ExplorerPage.propTypes = {
  catalogs: PropTypes.array,
};
