import { ShareData } from "@/types/share";
import { fallbackLng } from "@/lib/i18n/settings";

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

  return navigator.userAgent.includes("Mobi") && !!navigator.share;
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

export const simplifiedFraction = ({
  numerator,
  denominator,
  locale = fallbackLng,
}: {
  numerator: number;
  denominator: number;
  locale?: string;
}) => {
  const decimal = numerator / denominator;
  const precision = decimal >= 10 ? 0 : 1;

  const { format: decimalFormatter } = new Intl.NumberFormat(locale, {
    style: "decimal",
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  });

  if (decimal >= 1) {
    return decimalFormatter(decimal);
  } else {
    const { format } = new Intl.NumberFormat(locale, {
      style: "decimal",
      maximumFractionDigits: 0,
    });
    const whole = Math.round(1 / decimal);
    const places = whole.toString().length;

    const pow = places - 1;
    const base = Math.pow(10, pow);
    const finalDenominator = Math.round(whole / base) * base;

    if (finalDenominator === 1) {
      return decimalFormatter(finalDenominator);
    }

    return `${format(1)}/${format(finalDenominator)}`;
  }
};
