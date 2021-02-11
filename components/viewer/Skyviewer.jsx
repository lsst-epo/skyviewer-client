import { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import defaultOptions from "./Aladin/defaultOptions";
import { AladinGlobalProvider } from "@/contexts/AladinGlobal";
import Aladin from "./Aladin";
import Header from "./Header";
import Controls from "./Controls";

import testMarkerLayers from "./Aladin/testData/testMarkerLayers";
import testHiPSCatalogs from "./Aladin/testData/testHiPSCatalogs";
import testJpgs from "./Aladin/testData/testJpgs";

export default function Skyviewer({
  selector,
  options,
  survey,
  fov,
  fovRange,
  target,
}) {
  const [aladins, setAladins] = useState(null);

  useEffect(() => {
    setAladins({
      // Initialize aladin Global
      aladinGlobal: window.A,
      // Initialize aladin instance
      aladin: window.A.aladin(
        selector,
        Object.assign(options, {
          survey,
          fov,
          target,
        })
      ),
    });
  }, [selector, survey, fov, target, options]);

  // useEffect(() => {
  //   console.log(aladins);
  // }, [aladins]);

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
    <>
      <Header />
      <main className="viewer-container">
        <AladinGlobalProvider value={aladins}>
          <Controls />
          <Aladin
            {...{ target, selector, survey, fov, fovRange, options }}
            onClick={onClick}
            onObjectClicked={onObjectClicked}
            catalogs={testHiPSCatalogs}
            markerLayers={testMarkerLayers}
            jpgs={testJpgs}
          />
        </AladinGlobalProvider>
      </main>
    </>
  );
}

Skyviewer.propTypes = {
  selector: PropTypes.string,
  survey: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  target: PropTypes.string,
  fov: PropTypes.number,
  fovRange: PropTypes.array,
  options: PropTypes.object,
};

Skyviewer.defaultProps = {
  fov: 20,
  options: defaultOptions,
};
