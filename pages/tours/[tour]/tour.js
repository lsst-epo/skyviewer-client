import { withLayout } from "@moxy/next-layout";
import PrimaryLayout from "@/layouts/Primary";
import ExplorerLayout from "@/layouts/Explorer";
import Explorer from "@/components/explorer/index.js";

// staging survey url
// "https://epo-hips.netlify.app/images"

// localhost survey url
// "http://localhost:5000/images"

const Tour = () => {
  return (
    <Explorer
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
