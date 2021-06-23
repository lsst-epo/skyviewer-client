import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import defaultOptions from "@/fixtures/defaultAladinOptions";
import { AladinGlobalProvider } from "@/contexts/AladinGlobal";
import AladinForTours from "@/components/AladinForTours";
import useAladin from "@/hooks/useAladin";

export default function Pois({
  selector,
  options,
  catalogs,
  survey,
  fov,
  fovRange,
  target,
  poi,
}) {
  const [settings, setSettings] = useState({
    showCatalogs: false,
    showGrid: false,
    showLandmarks: false,
    showGoals: false,
    zoomLevel: fov,
    zoomRange: fovRange,
    hasFocus: false,
  });
  const [aladins, setAladins] = useState(null);

  useAladin(selector, survey, fov, target, options, setAladins);

  return (
    <AladinGlobalProvider value={aladins}>
      <div className="poi-container">
        <div />
      </div>
      <AladinForTours
        target={[poi.ra, poi.dec]}
        fov={poi.fov}
        {...{ selector, survey, fovRange, options }}
      />
    </AladinGlobalProvider>
  );
}

Pois.propTypes = {
  selector: PropTypes.string,
  survey: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  catalogs: PropTypes.array,
  target: PropTypes.array,
  fov: PropTypes.number,
  fovRange: PropTypes.array,
  options: PropTypes.object,
  poi: PropTypes.object,
};

Pois.defaultProps = {
  fov: 20,
  options: defaultOptions,
};
