import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useAladin } from "@/contexts/Aladin";
import { useExplorerSettings } from "@/contexts/Explorer";
import Accordion from "@/primitives/Accordion";
import AccordionGroup from "@/primitives/AccordionGroup";
import Button from "@/primitives/Button";
import Buttonish from "@rubin-epo/epo-react-lib/Buttonish";
import IconComposer from "@/svg/IconComposer";
import SourceFilters from "./SourceFilters";
import DetailsSection from "./DetailsSection";
import DetailsSectionValue from "./DetailsSectionValue";
import PositionSection from "./PositionSection";
import CharBar from "./CharBar";
import AltNames from "./AltNames";
import useFocusTrap from "@/hooks/useFocusTrap";
import { useKeyDownEvent, useOnClickOutside } from "@/hooks/listeners";

const placeholderFilters = [
  { label: "u", value: 17.81 },
  { label: "g", value: 32.07 },
  { label: "r", value: 20.01 },
  { label: "i", value: 11.8 },
  { label: "z", value: 1.1 },
  { label: "y", value: 99.91 },
];

const STEP = 0.1;

export default function SourceDetails({ data, setData, handleClose }) {
  const { aladin } = useAladin();
  const { settings } = useExplorerSettings();
  const { zoomLevel, zoomRange } = settings;
  const [min, max] = zoomRange;
  const [activeAccordion, setActiveAccordion] = useState("overview");
  const modalRef = useRef(null);
  const {
    position,
    astroImage = [],
    type,
    objectId,
    brightness,
    distance,
    title,
    characteristics,
    _RA: ra,
    _DEC: dec,
  } = data || {};
  const [top, left] = position || ["auto", "auto"];

  function getPixelPos(worldPos) {
    const [ra, dec] = worldPos;
    const pixelPos = aladin.world2pix(ra, dec);
    return [pixelPos[1], pixelPos[0]];
  }

  const handleZoom = () => {
    aladin.animateToRaDec(ra, dec, 0.5, () => {
      aladin.zoomToFoV(min, 0.5, () => {
        setData({ ...data, position: getPixelPos([ra, dec]) });
      });
    });
  };

  function handleKeyDown({ key }) {
    if (!!data || key !== "Escape") return;
    handleClose();
  }

  useFocusTrap(modalRef, !!data);
  useKeyDownEvent(handleKeyDown);
  useOnClickOutside(modalRef, handleClose);

  useEffect(() => {
    setActiveAccordion("overview");
  }, [data]);

  const previewImage = astroImage[0] ? astroImage[0]?.url : undefined;

  return (
    <div
      className={classnames("source-details-modal-container", {
        "is-open": !!data,
      })}
    >
      <div
        role="dialog"
        aria-modal={true}
        aria-labelledby="source-name"
        aria-describedby="source-description"
        className={classnames("source-details-modal", {
          "is-open": !!data,
        })}
        style={{
          top,
          left,
        }}
      >
        <div ref={modalRef} className="source-details-modal-inner">
          <Button
            icon={<IconComposer size={10} icon="Close" />}
            text="Close Details Modal Dialog"
            isIcon
            classes="close-button"
            onClick={handleClose}
          />
          <div className="source-details">
            {previewImage && (
              <div
                className="source-img"
                style={{
                  backgroundImage: `url(${previewImage})`,
                }}
              />
            )}
            <AccordionGroup className="source-details-accordions">
              {(type || objectId || brightness || distance) && (
                <Accordion
                  id="overview"
                  isExpanded={activeAccordion === "overview"}
                  handleToggle={setActiveAccordion}
                  title="Overview"
                >
                  {type && (
                    <DetailsSection label="Type of Object" value={type} />
                  )}
                  {title && <DetailsSection label="Name" value={title} />}
                  {(brightness || distance) && (
                    <DetailsSection isFullWidth label="Context Info">
                      <>
                        {distance && (
                          <CharBar
                            labels={["Dim", "Bright"]}
                            range={[0, 626]}
                            value={+brightness}
                          />
                        )}
                        {distance && (
                          <CharBar
                            labels={["Near", "Far"]}
                            range={[0, 384]}
                            value={+distance}
                          />
                        )}
                      </>
                    </DetailsSection>
                  )}
                  <div className="buttons-wrapper">
                    <Button
                      text="Zoom In"
                      classes="source-details-zoom-button"
                      onClick={handleZoom}
                    />
                    <Button
                      text="Share"
                      classes="source-details-share-button"
                      onClick={() => {
                        // eslint-disable-next-line no-console
                        console.log("sharing it");
                      }}
                    />
                  </div>
                </Accordion>
              )}
              {characteristics && (
                <Accordion
                  id="characteristics"
                  isExpanded={activeAccordion === "characteristics"}
                  handleToggle={setActiveAccordion}
                  title="Unique Characteristics"
                >
                  <div
                    className="source-characteristics"
                    dangerouslySetInnerHTML={{ __html: characteristics }}
                  />
                  <Buttonish
                    text="Explore Similar Objects"
                    url="/explorer"
                    className="source-details-similar-button primary --block"
                  />
                </Accordion>
              )}
              <Accordion
                id="data"
                isExpanded={activeAccordion === "data"}
                handleToggle={setActiveAccordion}
                title="Detailed Data"
              >
                {objectId && (
                  <DetailsSection label="Object Id" value={objectId} />
                )}
                {ra && dec && <PositionSection position={[+ra, +dec]} />}
                <DetailsSection isFullWidth label="Color Filters">
                  <DetailsSectionValue isFullWidth>
                    <SourceFilters filters={placeholderFilters} />
                  </DetailsSectionValue>
                </DetailsSection>
                <DetailsSection isFullWidth label="Cross Identifications">
                  <DetailsSectionValue isFullWidth>
                    <AltNames names={["M323", "M100"]} />
                  </DetailsSectionValue>
                </DetailsSection>
              </Accordion>
            </AccordionGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

SourceDetails.propTypes = {
  labelledbyId: PropTypes.string,
  describedbyId: PropTypes.string,
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
  data: PropTypes.object,
  setData: PropTypes.func,
};
