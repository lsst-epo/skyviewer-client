import { createGlobalStyle } from "styled-components";

const BREAK_DESKTOP = "1280px";
const BREAK_TABLET = "850px";
const BREAK_PHABLET = "600px";
const BREAK_MOBILE = "400px";
const CONTAINER_MAX = "2560px";
const CONTAINER_FULL = "1920px";
const CONTAINER_WIDE = "1435px";
const CONTAINER_REGULAR = "1160px";
const CONTAINER_NARROW = "900px";
const FONT_SIZE_BASE_DESKTOP = "22px";
const FONT_SIZE_BASE_MOBILE = "16px";
const FONT_STACK_BASE = `"Open Sans", system-ui`;
const LINE_HEIGHT_BASE = "1.636";
const PADDING_LARGE = "75px";
const PADDING_MEDIUM = "40px";
const PADDING_SMALL = "20px";

const GlobalStyles = createGlobalStyle`
    :root {
        --white: #ffffff;
        --offWhite: #e9e9e9;
        --neutral02: #fafafa;
        --neutral08: #ebebeb;
        --neutral10: #f5f5f5;
        --neutral15: #e3e4e8;
        --neutral60: #666666;
        --neutral80: #404040;
        --neutral90: #2b2e34;
        --black: #000000;
        --turquoise50: #00bebf;
        --turquoise55: #009fa1;
        --turquoise60: #078b8c;
        --turquoise70: #058b8c;
        --turquoise80: #117273;
        --turquoise85: #12726d;
        --turquoise90: #0c4a4c;
        --blue10: #eef5fb;
        --red: #ff8488;
        --break-desktop: ${BREAK_DESKTOP};
        --break-tablet: ${BREAK_TABLET};
        --break-phablet: ${BREAK_PHABLET};
        --break-mobile: ${BREAK_MOBILE};
        --padding-large: ${PADDING_LARGE};
        --padding-medium: ${PADDING_MEDIUM};
        --padding-small: ${PADDING_SMALL};
        --font-size-base-desktop: ${FONT_SIZE_BASE_DESKTOP};
        --font-size-base-mobile: ${FONT_SIZE_BASE_MOBILE};
        --font-stack-base: ${FONT_STACK_BASE};
        --line-height-base: ${LINE_HEIGHT_BASE};
    }
`;

export default GlobalStyles;

export const applyFluidScale = (
  properties = [],
  maxValue = "100%",
  minValue = "60%",
  maxVW = BREAK_DESKTOP,
  minVW = BREAK_TABLET
) => {
  typeof properties === "string" && (properties = [properties]);

  const mainString = properties
    .map((p) => {
      return `--${p}: ${maxValue};${p}: var(--${p});`;
    })
    .join("\n");

  let firstMediaString = properties
    .map(
      (p) => `--${p}: ${calculateFluidScale(maxValue, minValue, maxVW, minVW)};`
    )
    .join("\n");

  firstMediaString = `@media (max-width: ${maxVW}) {
            ${firstMediaString}
        }`;

  let secondMediaString = properties.map((p) => `--${p}: ${minValue};`).join();

  secondMediaString = `@media (max-width: ${minVW}) {
            ${secondMediaString}
        }`;

  let supportsString = properties
    .map((p) => {
      /* eslint-disable */
      return minValue > maxValue
        ? `--${p}: clamp(${maxValue},${calculateFluidScale(
            maxValue,
            minValue,
            maxVW,
            minVW
          )},${minValue});`
        : `--${p}: clamp(${minValue},${calculateFluidScale(
            maxValue,
            minValue,
            maxVW,
            minVW
          )},${maxValue});`;
    })
    .join("\n");

  supportsString = `@supports (width: clamp(1px, 2px, 3px)) {
            ${supportsString}
        }`;

  return `${mainString}
  ${firstMediaString}
  ${secondMediaString}
  ${supportsString}`;
};

const calculateFluidScale = (maxValue, minValue, maxVW = 130, minVW = 60) => {
  return `calc(${minValue} + ${
    stripUnit(maxValue) - stripUnit(minValue)
  } * (100vw - ${minVW}) / ${stripUnit(maxVW) - stripUnit(minVW)})`;
};

const stripUnit = (unit) => parseInt(unit.toString().replace(/\D/g, ""));

export const protoContainer = (
  maxWidth = CONTAINER_WIDE,
  widePadding = PADDING_LARGE,
  narrowPadding = PADDING_SMALL
) => {
  /* eslint-disable */
  const units = widePadding.toString().split(/\d+/);
  const unit = units?.[0] || "px";
  const maxValue = stripUnit(maxWidth) + 2 * stripUnit(widePadding);
  const minValue = stripUnit(maxWidth) + 2 * stripUnit(narrowPadding);

  return `
    ${applyFluidScale("max-width", maxValue + unit, minValue + unit)}
    ${applyFluidScale(
      ["padding-right", "padding-left"],
      widePadding,
      narrowPadding
    )}
    margin-right: auto;
    margin-left: auto;
    `;
};

export const containerMax = () => protoContainer(CONTAINER_MAX);

export const containerFull = () => protoContainer(CONTAINER_FULL);

export const containerWide = () => protoContainer(CONTAINER_WIDE);

export const containerRegular = () => protoContainer(CONTAINER_REGULAR);

export const containerNarrow = () => protoContainer(CONTAINER_NARROW);
