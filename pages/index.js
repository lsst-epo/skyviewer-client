import { useEffect } from "react";
import Skyviewer from "@/viewer/Skyviewer";
export default function Main() {
  return (
    <Skyviewer
      selector="#aladin-lite-div"
      survey="allwise"
      fov={100}
      fovRange={[0.03, 180]}
      target="267.0208333333 -24.7800000000"
    />
  );
}
