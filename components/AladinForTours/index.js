import { useEffect, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import AladinGlobalContext from "@/contexts/AladinGlobal";

export default function Aladin({
  selector,
  survey,
  target,
  fov,
  fovRange,
  options,
  onClick,
}) {
  const { aladinGlobal, aladin } = useContext(AladinGlobalContext) || {};

  useEffect(() => {
    if (!aladin) return;
    // Restrict FOV
    aladin.setFovRange(fovRange[0], fovRange[1]);
    // aladin.setFov(10);``
    // Add Event Listeners
    aladin.on("click", onClick || null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aladin]);

  useEffect(() => {
    if (!aladin || !target) return;
    // console.log(aladin);
    const [ra, dec] = target;
    aladin.zoomToFoV(100, 0.5, () => {
      aladin.animateToRaDec(ra, dec, 2, () => {
        // console.log("oh hey");
        aladin.zoomToFoV(fov, 0.5);
      });
    });
  }, [aladin, target, fov]);

  return <div id="aladin-lite-div" className="aladin-container" />;
}
Aladin.propTypes = {
  selector: PropTypes.string,
  survey: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  target: PropTypes.array,
  fov: PropTypes.number,
  fovRange: PropTypes.array,
  options: PropTypes.object,
  onClick: PropTypes.func,
};
