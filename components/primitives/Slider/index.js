import { useRef, useEffect, useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { capitalize } from "@/helpers";

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
  const sliderLeftRef = useRef(null);
  const sliderRightRef = useRef(null);
  const sliderRightLabelRef = useRef(null);
  const [selectedLeft, setSelectedLeft] = useState(0);
  const [selectedRight, setSelectedRight] = useState(0);
  const [labelRightPos, setlabelRightPos] = useState(0);
  const [labelLeftPos, setlabelLeftPos] = useState(0);
  // const [selectedWidth, setSelectedWidth] = useState("100%");

  useEffect(() => {
    if (!sliderLeftRef.current) return;

    setSelectedLeft(getSelectedLeft());
    setSelectedRight(getSelectedRight());
    setlabelRightPos(getLabelRightPos());
    setlabelLeftPos(getLabelLeftPos());
    // setSelectedWidth(getSelectedWidth());
  }, [min, max, value]);

  function handleDoubleChange() {
    const leftVal = +sliderLeftRef.current.value;
    const rightVal = +sliderRightRef.current.value;

    if (leftVal > rightVal) return;
    if (onChangeCallback) onChangeCallback([leftVal, rightVal], label);
  }

  function getSelectedLeft() {
    const range = max - min;
    const rangeWidth = sliderLeftRef.current.offsetWidth - 26;

    return `${(value[0] / range) * rangeWidth}px`;
  }

  function getSelectedRight() {
    const range = max - min;
    const rangeWidth = sliderRightRef.current.offsetWidth - 26;

    return `${(value[1] / range) * rangeWidth}px`;
  }

  function getLabelRightPos() {
    const range = max - min;
    const rangeWidth = sliderRightRef.current.offsetWidth - 26;

    return `${
      (value[1] / range) * rangeWidth - sliderRightLabelRef.current.offsetWidth
    }px`;
  }

  function getLabelLeftPos() {
    const range = max - min;
    const rangeWidth = sliderRightRef.current.offsetWidth - 26;

    return `${(value[0] / range) * rangeWidth + 26}px`;
  }

  // function getSelectedWidth() {
  //   const valDiff = value[1] - value[0];
  //   const range = max - min;
  //   const offset = getOffset(valDiff / range, 26);
  //   const rangeWidth = sliderLeftRef.current.offsetWidth + offset;
  //   return `${(valDiff / range) * rangeWidth}px`;
  // }

  // function getOffset(percent, handleWidth) {
  //   if (percent === 0.5) {
  //     return 0;
  //   }

  //   if (percent > 0.5) {
  //     return handleWidth;
  //   }

  //   if (percent < 0.5) {
  //     // return -1 * handleWidth;
  //     return -1 * (handleWidth * 2);
  //   }
  // }

  return (
    <>
      {doubleHandle && (
        <div className="double-handle-slider">
          <div className="track-labels">
            <div className="min-label">{minLabel}</div>
            <div className="max-label">{maxLabel}</div>
          </div>
          {/* <label className="screen-reader-only">{label}</label> */}
          <div className="slider-container">
            {/* <div
              className="selected-left"
              style={{
                left: selectedLeft,
                width: selectedWidth,
              }}
            />
            <div
              className="selected-right"
              style={{
                left: selectedRight,
                right: 0,
              }}
            /> */}
            <input
              ref={sliderLeftRef}
              type="range"
              min={min}
              max={max}
              step={step}
              value={value[0]}
              onChange={handleDoubleChange}
              className="slider-left"
              labelledby="#slider-label-left"
            />
            <input
              ref={sliderRightRef}
              type="range"
              min={min}
              max={max}
              step={step}
              value={value[1]}
              onChange={handleDoubleChange}
              className="slider-right"
              labelledby="#slider-label-right"
            />
            <label
              id="slider-label-left"
              className="slider-label slider-label-left"
              style={{
                top: 20,
                left: labelLeftPos,
              }}
            >
              {value[0]}
            </label>
            <label
              ref={sliderRightLabelRef}
              id="slider-label-right"
              className="slider-label slider-label-right"
              style={{
                top: 20,
                left: labelRightPos,
              }}
            >
              {value[1]}
            </label>
          </div>
        </div>
      )}
    </>
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
