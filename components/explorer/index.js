import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import defaultOptions from "./Aladin/defaultOptions";
import defaultFilters from "./Aladin/defaultFilters";
import { ExplorerProvider } from "@/contexts/Explorer";
import { AladinGlobalProvider } from "@/contexts/AladinGlobal";
import { FiltersProvider } from "@/contexts/Filters";
import Aladin from "./Aladin";
import { waitForGlobal } from "@/helpers";

import testMarkerLayers from "./Aladin/testData/testMarkerLayers";
import testHiPSCatalogs from "./Aladin/testData/testHiPSCatalogs";
import testJpgs from "./Aladin/testData/testJpgs";

export default function Explorer({
  selector,
  options,
  catalogs,
  survey,
  fov,
  fovRange,
  target,
}) {
  const [settings, setSettings] = useState({
    showCatalogs: true,
    showGrid: false,
    showLandmarks: true,
    showGoals: false,
    zoomLevel: fov,
    zoomRange: fovRange,
    hasFocus: false,
  });
  const [aladins, setAladins] = useState(null);
  const [filters, setFilters] = useState(defaultFilters);

  useEffect(() => {
    waitForGlobal("jQuery", () => {
      waitForGlobal("A", () => {
        const aladin = window.A.aladin(
          selector,
          Object.assign(options, {
            fov,
            target,
          })
        );
        const customSurvey = aladin.setImageSurvey(
          aladin.createImageSurvey(
            "Custom Test",
            "Custom Test Color",
            survey,
            "equatorial",
            5,
            { imgFormat: "jpg" }
          )
        );
        setAladins({
          // window.A.init.then(() => {
          //   setAladins({
          //     // Initialize aladin Global
          //     aladinGlobal: window.A,
          //     aladin: window.A.aladin(
          //       selector,
          //       Object.assign(options, {
          //         survey,
          //         fov,
          //         target,
          //       })
          //     ),
          //   });
          // });

          // Initialize aladin Global
          aladinGlobal: window.A,
          aladin,
        });
      });
    });
  }, [selector, survey, fov, target, options]);

  // useEffect(() => {
  //   console.log(aladins);
  // }, [aladins]);

  const onClick = (event) => {
    // eslint-disable-next-line no-console
    // console.log("Clicked", event);
  };

  const onObjectClicked = (event) => {
    // eslint-disable-next-line no-console
    console.log("Object Clicked", event);
  };

  return (
    <ExplorerProvider value={{ settings, setSettings }}>
      <AladinGlobalProvider value={aladins}>
        <FiltersProvider value={{ setFilters, filters }}>
          <Aladin
            {...{ target, selector, survey, fov, fovRange, options }}
            onObjectClicked={onObjectClicked}
            catalogs={catalogs || testHiPSCatalogs}
          />
        </FiltersProvider>
      </AladinGlobalProvider>
    </ExplorerProvider>
  );
}

Explorer.propTypes = {
  selector: PropTypes.string,
  survey: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  catalogs: PropTypes.array,
  target: PropTypes.string,
  fov: PropTypes.number,
  fovRange: PropTypes.array,
  options: PropTypes.object,
};

Explorer.defaultProps = {
  fov: 20,
  options: defaultOptions,
};
