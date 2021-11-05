import { useRef, useEffect, useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { capitalize } from "@/helpers";
import ReactSlider from "react-slider";

export default function Slider({
  min,
  max,
  step,
  value,
  doubleHandle,
  onChangeCallback,
  label,
  minLabel,
  maxLabel,
  labelledbyId,
  describedbyId,
  classes,
}) {
  const [showThumbLabels, setShowThumbLabels] = useState(false);

  const handleBeforeChange = (val, i) => {
    setShowThumbLabels(true);
  };

  const handleChange = (val, i) => {
    setShowThumbLabels(false);
    if (onChangeCallback) onChangeCallback(val, label);
  };

  return (
    <div className="horizontal-slider-container">
      <div className="track-labels">
        <div className="min-label">{minLabel}</div>
        <div className="max-label">{maxLabel}</div>
      </div>
      <ReactSlider
        {...{ min, max, step, value }}
        onChange={() => {
          setShowThumbLabels(true);
        }}
        onAfterChange={handleChange}
        className={classnames("horizontal-slider", {
          "show-thumb-labels": showThumbLabels,
        })}
        thumbClassName={"thumb"}
        trackClassName="track"
        renderThumb={(props, state) => (
          <div {...props}>
            <span className="thumb-label">{state.valueNow}</span>
          </div>
        )}
      />
    </div>
  );
}

Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
};

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.array,
  doubleHandle: PropTypes.bool,
  label: PropTypes.string,
  minLabel: PropTypes.string,
  maxLabel: PropTypes.string,
  labelledbyId: PropTypes.string,
  describedbyId: PropTypes.string,
  onChangeCallback: PropTypes.func,
  classes: PropTypes.string,
};
