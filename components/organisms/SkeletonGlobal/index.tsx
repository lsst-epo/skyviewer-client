import { FC, PropsWithChildren } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

const SkeletonGlobal: FC<PropsWithChildren> = ({ children }) => {
  const steps: Array<{ color: string; step: string }> = [
    { color: "var(--base-color)", step: "40%" },
    { color: "var(--highlight-color)", step: "41%" },
    { color: "var(--highlight-color)", step: "42%" },
    { color: "var(--base-color)", step: "43%" },
    { color: "var(--base-color)", step: "43%" },
    { color: "var(--highlight-color)", step: "43.5%" },
    { color: "var(--base-color)", step: "44%" },
  ];

  return (
    <SkeletonTheme
      baseColor="var(--color-rubin-gray-100)"
      highlightColor="rgb(from #fff r g b / 0.67)"
      customHighlightBackground={`linear-gradient(110deg,${steps.reduce(
        (prev, { color, step }, i) => {
          return `${prev}${i > 0 ? "," : ""} ${color} ${step}`;
        },
        ""
      )}`}
    >
      {children}
    </SkeletonTheme>
  );
};

SkeletonGlobal.displayName = "Organism.SkeletonGlobal";

export default SkeletonGlobal;
