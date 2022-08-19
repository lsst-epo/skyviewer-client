import { useState } from "react";
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
  imgFormat,
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
  });
  const [aladins, setAladins] = useState(null);

  useAladin(
    selector,
    survey,
    imgFormat,
    fov,
    "04 08 15.873 -34 35 56.46",
    options,
    setAladins
  );

  return (
    <AladinGlobalProvider value={aladins}>
      <AladinForTours
        tourTitle={tourTitle}
        poi={poi}
        initialFov={fov}
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
  imgFormat: PropTypes.string,
};

Pois.defaultProps = {
  fov: 20,
  options: defaultOptions,
};
