import { ShareData } from "@/types/share";

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

export const hasWebShare = (data?: ShareData): boolean => {
  if (typeof window === "undefined") return false;
  if (
    typeof navigator.share === "undefined" ||
    typeof navigator.canShare === "undefined"
  )
    return false;

  return navigator.canShare(data);
};

export const shouldShare = () => {
  if (typeof window === "undefined") return false;

  return navigator.userAgent.includes("Mobi");
};

export const webShare = async ({
  data,
  nonNativeShare,
}: {
  data: ShareData;
  nonNativeShare?: () => void;
}) => {
  if (hasWebShare(data)) {
    try {
      await navigator.share(data);
    } catch (e) {
      console.warn(e);
    }
  } else {
    nonNativeShare && nonNativeShare();
  }
};

export function roundToStep(value: number, step = 1.0) {
  const inv = 1.0 / step;
  return Math.round(value * inv) / inv;
}
