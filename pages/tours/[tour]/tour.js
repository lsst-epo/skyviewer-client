import { withLayout } from "@moxy/next-layout";
import PrimaryLayout from "@/layouts/Primary";
import ExplorerLayout from "@/layouts/Explorer";
import Skyviewer from "@/viewer/Skyviewer";

// staging survey url
// "https://epo-hips.netlify.app/images"

// localhost survey url
// "http://localhost:5000/images"

const Tour = () => {
  return (
    <Skyviewer
      selector="#aladin-lite-div"
      survey="https://epo-hips.netlify.app/images"
      fov={100}
      fovRange={[0.03, 180]}
      target="267.0208333333 -24.7800000000"
    />
  );
};

export default withLayout(
  <PrimaryLayout closeUrl="/tours">
    <ExplorerLayout />
  </PrimaryLayout>
)(Tour);
