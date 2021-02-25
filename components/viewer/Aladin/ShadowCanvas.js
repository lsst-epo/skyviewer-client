import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";
import AladinGlobalContext from "@/contexts/AladinGlobal";
import useFocusTrap from "@/hooks/useFocusTrap";
import { useKeyDownEvent } from "@/hooks/listeners";

export default function ShadowCanvas({ catalog }) {
  const [details, setDetails] = useState(null);
  const detailsDialogRef = useRef(null);

  useFocusTrap(detailsDialogRef, !!details);
  useKeyDownEvent(handleKeyDown);

  function handleKeyDown({ key }) {
    if (!details || key !== "Escape") return;
    setDetails(null);
  }

  const objects = catalog.map((object) => {
    const { popupTitle, popupDesc } = object;
    return (
      <li key={popupTitle} role="menuitem">
        <Button
          onClick={() => setDetails(object)}
          text={`Open Object Details for ${popupTitle}`}
          classes="info-button"
        />
      </li>
    );
  });

  return (
    <div className="shadow-canvas-container">
      <h4 id="vis-obj-label">Objects in current region</h4>
      <ul role="menu" aria-labelledby="vis-obj-label">{objects}</ul>
      {details && (
        <div
          role="dialog"
          aria-modal={true}
          ref={detailsDialogRef}
          aria-labelledby="obj-details-label"
          aria-describedby="obj-details-desc"
        >
          <Button
            onClick={() => setDetails(null)}
            text={`Close Object Details`}
            classes="close-button"
          />
          <h4 id="obj-details-label">{details.popupTitle}</h4>
          <div id="obj-details-desc">
            <h5>Description</h5>
            <p>{details.popupDesc}</p>
            <h5>Position</h5>
            <p>
              RA: {details.position.ra}; Dec {details.position.dec}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

ShadowCanvas.propTypes = {
  catalog: PropTypes.array,
};
