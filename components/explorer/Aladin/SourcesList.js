import { useState, useRef } from "react";
import PropTypes from "prop-types";
import Button from "@/primitives/Button";
import useFocusTrap from "@/hooks/useFocusTrap";
import { useKeyDownEvent } from "@/hooks/listeners";

export default function SourcesList({ sources }) {
  const [activeSrc, setActiveSrc] = useState(null);
  const detailsDialogRef = useRef(null);

  useFocusTrap(detailsDialogRef, !!activeSrc);
  useKeyDownEvent(handleKeyDown);

  function handleKeyDown({ key }) {
    if (!activeSrc || key !== "Escape") return;
    setActiveSrc(null);
  }

  function getSrc(src, id) {
    const { popupTitle, popupDesc, data } = src;
    const { name } = data || {};
    return (
      <li key={id}>
        <Button
          onClick={() => setActiveSrc(src)}
          text={`Open Object Details for ${name || popupTitle}`}
          classes="info-button"
        />
      </li>
    );
  }

  function getSrcs() {
    return (
      <ul aria-labelledby="vis-obj-label">
        {sources.map((src, i) => {
          return getSrc(src, i);
        })}
      </ul>
    );
  }

  function getDetails(src) {
    const { data, ra, dec, popupTitle, popupDesc } = src || {};
    const { name } = data || {};
    return (
      <>
        <h4 id="obj-details-label">{name || src.popupTitle}</h4>
        <div id="obj-details-desc">
          <h5>Description</h5>
          {popupDesc && <p>{popupDesc}</p>}
          <h5>Position</h5>
          <p>
            RA: {ra}; Dec {dec}
          </p>
        </div>
      </>
    );
  }

  return (
    <div className="sources-list-container">
      <h4 id="vis-obj-label">Objects in current region</h4>
      {sources && getSrcs()}
      {activeSrc && (
        <div
          role="dialog"
          aria-modal={true}
          ref={detailsDialogRef}
          aria-labelledby="obj-details-label"
          aria-describedby="obj-details-desc"
        >
          <Button
            onClick={() => setActiveSrc(null)}
            text={`Close Object Details`}
            classes="close-button"
          />
          {getDetails(activeSrc)}
        </div>
      )}
    </div>
  );
}

SourcesList.propTypes = {
  sources: PropTypes.array,
};
