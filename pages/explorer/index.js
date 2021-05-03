import { withLayout } from "@moxy/next-layout";
import PrimaryLayout from "@/layouts/Primary";
import ExplorerLayout from "@/layouts/Explorer";
import Skyviewer from "@/viewer/Skyviewer";

const Explorer = () => {
  return (
    <Skyviewer
      selector="#aladin-lite-div"
      survey="P/DSS2/color"
      fov={100}
      fovRange={[0.03, 180]}
      target="267.0208333333 -24.7800000000"
    />
  );
};

export default withLayout(
  <PrimaryLayout route="/explorer">
    <ExplorerLayout />
  </PrimaryLayout>
)(Explorer);
