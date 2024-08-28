import isNil from "lodash/isNil";
import mergeWith from "lodash/mergeWith";
import { ShareData } from "@/types/share";

export const defaultsMerger = (objValue: any, srcValue: any) => {
  if (isNil(srcValue) && objValue) {
    return isNil(objValue) ? srcValue : objValue;
  }

  return srcValue;
};

export const mergeWithDefaults = <T = any, P = any>(
  value: T,
  defaultValues: P
) => mergeWith({}, defaultValues, value, defaultsMerger);

/**
 * maps an input domain to a final range
 * ex. for a domain of [0,10] and range of [10,20]
 * a value of 5 would become 15
 * @param domain observed set of values, the input data.
 * @param range transformed, or visual values. Often corresponds to desired pixel size.
 * @param clamp should values outside the domain be clamped to the range
 * @returns (domainValue: number) => rangeValue: number
 */
export const getLinearScale = (
  domain: number[] = [0, 1],
  range: number[] = [0, 1],
  options?: { clamp?: boolean; fractionDigits?: number }
): ((domainValue: number) => number) => {
  const defaultOptions = { clamp: false, fractionDigits: 2 };
  const { clamp, fractionDigits } = { ...defaultOptions, ...options };

  return (val: number) => {
    const sub = domain[1] - domain[0];

    if (sub === 0) {
      return (range[0] + range[1]) / 2;
    }
    let t = (val - domain[0]) / sub;

    if (clamp) {
      t = Math.min(Math.max(t, 0), 1);
    }

    return Number(
      (t * (range[1] - range[0]) + range[0]).toFixed(fractionDigits)
    );
  };
};

export const hasWebShare = () => {
  if (typeof window === "undefined") return false;
  if (
    typeof navigator.share === "undefined" ||
    typeof navigator.canShare === "undefined"
  )
    return false;

  return navigator.canShare();
};

export const webShare = async (data: ShareData) => {
  if (navigator.share && navigator.canShare()) {
    try {
      await navigator.share(data);
    } catch (e) {
      console.warn(e);
    }
  } else {
    console.warn("Web Share API is not available in this browser.");
  }
};
