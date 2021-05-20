import { withLayout } from "@moxy/next-layout";
import PrimaryLayout from "@/layouts/Primary";
import ExplorerLayout from "@/layouts/Explorer";
import Explorer from "@/components/explorer/index.js";

// other working survey url
// http://alasky.u-strasbg.fr/DSS/DSSColor
// staging survey url
// "https://epo-hips.netlify.app/images"

// localhost survey url
// "http://localhost:5000/images"

const ExplorerPage = () => {
  return (
    <Explorer
      selector="#aladin-lite-div"
      survey="http://alasky.u-strasbg.fr/DSS/DSSColor"
      fov={60}
      fovRange={[2, 90]}
      target="267.0208333333 -24.7800000000"
    />
  );
};

export default withLayout(
  <PrimaryLayout route="/explorer">
    <ExplorerLayout />
  </PrimaryLayout>
)(ExplorerPage);
