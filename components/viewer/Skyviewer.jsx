import { useEffect } from "react";
import Aladin from "./Aladin";
import testMarkerLayers from "./Aladin/testData/testMarkerLayers";
import testHiPSCatalogs from "./Aladin/testData/testHiPSCatalogs";
import testJpgs from "./Aladin/testData/testJpgs";

export default function Skyviewer() {
  const onClick = (event) => {
    // eslint-disable-next-line no-console
    console.log("Clicked", event);
  };

  // const onSelect = (event) => {
  //   // eslint-disable-next-line no-console
  //   console.log("Selected", event);
  // };

  // const onZoomChanged = (event) => {
  //   // eslint-disable-next-line no-console
  //   console.log("Zoom Changed", event);
  // };

  const onObjectClicked = (event) => {
    // eslint-disable-next-line no-console
    console.log("Object Clicked", event);
  };

  // const onObjectHovered = (event) => {
  //   // eslint-disable-next-line no-console
  //   console.log("Object Hovered", event);
  // };

  // const onFootprintClicked = (event) => {
  //   // eslint-disable-next-line no-console
  //   console.log("Footprint Clicked", event);
  // };

  // const onFootprintHovered = (event) => {
  //   // eslint-disable-next-line no-console
  //   console.log("Footprint Hovered", event);
  // };

  // const onPositionChanged = (event) => {
  //   // eslint-disable-next-line no-console
  //   console.log("Posiiton Changed", event);
  // };

  // const onMouseMove = (event) => {
  //   // eslint-disable-next-line no-console
  //   console.log("Mouse Moved", event);
  // };

  // const onFullScreenToggled = (event) => {
  //   // eslint-disable-next-line no-console
  //   console.log("Fullscreen Toggled", event);
  // };

  return (
    <div>
      <main>
        <Aladin
          selector="#aladin-lite-div"
          survey="allwise"
          fov={100}
          fovRange={[0.03, 180]}
          target="267.0208333333 -24.7800000000"
          onClick={onClick}
          onObjectClicked={onObjectClicked}
          catalogs={testHiPSCatalogs}
          markerLayers={testMarkerLayers}
          jpgs={testJpgs}
        />
      </main>
    </div>
  );
}
