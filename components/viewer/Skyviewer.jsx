import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import defaultOptions from "./Aladin/defaultOptions";
import { AladinGlobalProvider } from "@/contexts/AladinGlobal";
import { FiltersProvider } from "@/contexts/Filters";
import Aladin from "./Aladin";
import Header from "./Header";

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
  const [filters, setFilters] = useState({
    types: {
      stars: true,
      galaxies: true,
      nebulae: true,
      transients: true,
    },
    characteristics: {
      distance: {
        min: {
          label: "Near",
          value: 0,
        },
        max: {
          label: "Far",
          value: 384,
        },
        step: 1,
        value: [0, 384],
      },
      brightness: {
        min: {
          label: "Dim",
          value: 0,
        },
        max: {
          label: "Bright",
          value: 626,
        },
        step: 1,
        value: [0, 626],
      },
    },
  });

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

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const debouncedPositionChange = useCallback(
  //   debounce((event) => {
  //     const { aladin } = aladins;
  //     // eslint-disable-next-line no-console
  //     console.log("Position Changed", event, aladin);
  //   }, 1000),
  //   [aladins]
  // );

  // const onPositionChanged = (event) => {
  //   // eslint-disable-next-line no-console
  //   console.log(aladins.aladin.getFovCorners());
  //   console.log("Position Changed", event);
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
          <FiltersProvider value={{ setFilters, filters }}>
            <Aladin
              {...{ target, selector, survey, fov, fovRange, options }}
              onClick={onClick}
              onObjectClicked={onObjectClicked}
              catalogs={testHiPSCatalogs}
              markerLayers={testMarkerLayers}
              jpgs={testJpgs}
            />
          </FiltersProvider>
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
