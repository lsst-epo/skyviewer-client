import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import defaultOptions from "@/fixtures/defaultAladinOptions";
import defaultFilters from "@/fixtures/defaultExplorerFilters";
import { ExplorerProvider } from "@/contexts/Explorer";
import { AladinGlobalProvider } from "@/contexts/AladinGlobal";
import { FiltersProvider } from "@/contexts/Filters";
import Aladin from "@/components/explorer/Aladin";
import useAladin from "@/hooks/useAladin";

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
  });
  const [aladins, setAladins] = useState(null);
  const [filters, setFilters] = useState(defaultFilters);

  useAladin(selector, survey, fov, target, options, setAladins);

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
            catalogs={catalogs}
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
