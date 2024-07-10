import { useEffect, useContext, useState } from "react";
import PropTypes from "prop-types";
import AladinGlobalContext from "@/contexts/AladinGlobal";
import Overlay from "@/components/Pois/Overlay";

export default function Aladin({
  selector,
  survey,
  tourTitle,
  poi,
  fovRange,
  options,
  onClick,
}) {
  const { aladinGlobal, aladin } = useContext(AladinGlobalContext) || {};
  const [showDetails, setShowDetails] = useState(false);

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
    setShowDetails(false);
  }, [poi]);

  useEffect(() => {
    if (!aladin || !poi) return;
    const { astroObject, fov } = poi;
    if (!astroObject || astroObject?.length < 1) return;
    const { ra, dec } = astroObject[0];
    aladin.zoomToFoV(100, 0.5, () => {
      aladin.animateToRaDec(ra, dec, 1.8, () => {
        aladin.zoomToFoV(fov, 0.5, () => {
          const [aladinWidthDegrees, aladinHeightDegrees] = aladin.getFov();
          const [aladinWidthPixels, aladinHeightPixels] = aladin.getSize();
          // eslint-disable-next-line prettier/prettier
          const [ , topRight, bottomRight, , ] = aladin.getFovCorners();
          let offsetRa = poi.ra;
          let offsetDec = poi.dec;

          if (aladinWidthPixels >= 1280) {
            offsetRa = poi.ra - aladinWidthDegrees / 4;
          } else {
            const offset =
              topRight[1] < bottomRight[1]
                ? aladinHeightDegrees / 5
                : aladinHeightDegrees / -5;
            offsetDec = poi.dec + offset;
          }

          aladin.animateToRaDec(offsetRa, offsetDec, 0.6, () => {
            setShowDetails(true);
          });
        });
      });
    });
  }, [aladin, poi]);

  return (
    <>
      <div className="poi-container">
        <Overlay
          isOpen={showDetails}
          tourTitle={tourTitle}
          title={poi?.astroObject[0]?.title}
          description={poi?.description}
        />
      </div>
      <div id="aladin-lite-div" className="aladin-container" />
    </>
  );
}
Aladin.propTypes = {
  selector: PropTypes.string,
  survey: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  tourTitle: PropTypes.string,
  poi: PropTypes.object,
  fovRange: PropTypes.array,
  options: PropTypes.object,
  onClick: PropTypes.func,
};
