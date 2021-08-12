import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import defaultOptions from "@/fixtures/defaultAladinOptions";
import { AladinGlobalProvider } from "@/contexts/AladinGlobal";
import AladinForTours from "@/components/AladinForTours";
import Overlay from "./Overlay";
import useAladin from "@/hooks/useAladin";

export default function Pois({
  selector,
  options,
  survey,
  fov,
  fovRange,
  poi,
  tourTitle,
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

  useAladin(
    selector,
    survey,
    fov,
    "267.0208333333 -24.7800000000",
    options,
    setAladins
  );

  return (
    <AladinGlobalProvider value={aladins}>
      <AladinForTours
        tourTitle={tourTitle}
        poi={poi}
        {...{ selector, survey, fovRange, options }}
      />
    </AladinGlobalProvider>
  );
}

Pois.propTypes = {
  selector: PropTypes.string,
  survey: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  fov: PropTypes.number,
  fovRange: PropTypes.array,
  options: PropTypes.object,
  poi: PropTypes.object,
  tourTitle: PropTypes.string,
};

Pois.defaultProps = {
  fov: 20,
  options: defaultOptions,
};
