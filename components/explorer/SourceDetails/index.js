import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Accordion from "@/primitives/Accordion";
import AccordionGroup from "@/primitives/AccordionGroup";
import Button from "@/primitives/Button";
import Buttonish from "@/primitives/Buttonish";
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

export default function SourceDetails({ data, handleClose }) {
  const [activeAccordion, setActiveAccordion] = useState("overview");
  const modalRef = useRef(null);

  function handleKeyDown({ key }) {
    if (!!data || key !== "Escape") return;
    handleClose();
  }

  useFocusTrap(modalRef, !!data);
  useKeyDownEvent(handleKeyDown);
  useOnClickOutside(modalRef, handleClose);

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
          top: data ? data.position[0] : "auto",
          left: data ? data.position[1] : "auto",
        }}
      >
        <div ref={modalRef} className="source-details-modal-inner">
          <Button
            icon={<IconComposer icon="Close" />}
            text="Close Details Modal Dialog"
            isIcon
            classes="close-button"
            onClick={handleClose}
          />
          {data && (
            <div className="source-details">
              {data.img && (
                <div
                  className="source-img"
                  style={{ backgroundImage: `url(${data.img})` }}
                />
              )}
              <AccordionGroup className="source-details-accordions">
                {(data.type || data.id || data.brightness || data.distance) && (
                  <Accordion
                    id="overview"
                    isExpanded={activeAccordion === "overview"}
                    handleToggle={setActiveAccordion}
                    title="Overview"
                  >
                    {data.type && (
                      <DetailsSection
                        label="Type of Object"
                        value={data.type}
                      />
                    )}
                    {data.id && <DetailsSection label="Name" value={data.id} />}
                    {(data.brightness || data.distance) && (
                      <DetailsSection isFullWidth label="Context Info">
                        <>
                          {data.distance && (
                            <CharBar
                              labels={["Dim", "Bright"]}
                              range={[0, 626]}
                              value={+data.brightness}
                            />
                          )}
                          {data.distance && (
                            <CharBar
                              labels={["Near", "Far"]}
                              range={[0, 384]}
                              value={+data.distance}
                            />
                          )}
                        </>
                      </DetailsSection>
                    )}
                    <div className="buttons-wrapper">
                      <Button
                        text="Zoom In"
                        classes="source-details-zoom-button"
                        onClick={() => {
                          console.log("zooming in");
                        }}
                      />
                      <Button
                        text="Share"
                        classes="source-details-share-button"
                        onClick={() => {
                          console.log("sharing it");
                        }}
                      />
                    </div>
                  </Accordion>
                )}
                <Accordion
                  id="characteristics"
                  isExpanded={activeAccordion === "characteristics"}
                  handleToggle={setActiveAccordion}
                  title="Unique Characteristics"
                >
                  <div className="source-characteristics">
                    <p>
                      Venture white dwarf hundreds of thousands concept of the
                      number one decipherment hydrogen atoms? Kindling the
                      energy hidden in matter kindling the energy hidden in
                      matter inconspicuous motes of rock and gas invent the
                      universe not a sunrise but a galaxyrise Jean-François
                      Champollion?
                    </p>
                  </div>
                  <Buttonish
                    text="Explore Similar Objects"
                    url="/explorer"
                    classes="source-details-similar-button primary --block"
                  />
                </Accordion>
                <Accordion
                  id="data"
                  isExpanded={activeAccordion === "data"}
                  handleToggle={setActiveAccordion}
                  title="Detailed Data"
                >
                  {data.id && (
                    <DetailsSection label="Object Id" value={data.id} />
                  )}
                  {data._RA && data._DEC && (
                    <PositionSection position={[+data._RA, +data._DEC]} />
                  )}
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
          )}
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
};
