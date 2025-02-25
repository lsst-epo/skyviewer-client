import classNames from "clsx/lite";
import { FunctionComponent, useRef } from "react";
import styles from "./styles.module.css";
import { useAladin } from "@/contexts/Aladin";

const generateScalePath = (
  maxWidth: number,
  objectFov: number,
  legendFov: number
) => {
  const length = (maxWidth * (objectFov / legendFov)).toFixed(0);

  return `M0,-25 L0,-20 L${length},-20 L${length},-25`;
};

const getTickSize = (fov: number) => {
  if (fov < 2) return 0.5;
  if (fov < 20) return 1;
  if (fov < 50) return 5;

  return 10;
};

const FOVScale: FunctionComponent<{
  fov?: number;
  className?: string;
}> = ({ fov, className }) => {
  const { aladin } = useAladin();
  const svgRef = useRef<SVGSVGElement>(null);
  const [windowWidth] = aladin?.getSize() || [];
  const legendWidth = svgRef.current?.clientWidth;
  const legendViewBoxWidth = 1000;
  const tickHeight = 10;

  const objectsToCompare = [
    { size: 0.5, name: "Our Moon" },
    { size: 3.5, name: "Rubin's Camera" },
    { size: 25, name: "Length of the Big Dipper" },
  ];

  if (!windowWidth || !legendWidth || !fov) {
    return null;
  }

  const legendFov = (fov / windowWidth) * legendWidth;
  const visibleObject = objectsToCompare
    .sort((a, b) => b.size - a.size)
    .find(({ size }) => size < legendFov);

  const tickSize = getTickSize(legendFov);
  const degreeTicks = Math.max(
    Math.floor(legendFov / getTickSize(tickSize)),
    0
  );

  const ticks = new Array(degreeTicks).fill(undefined);

  return (
    <svg
      ref={svgRef}
      className={classNames(className, styles.fovContainer)}
      viewBox={`0 0 ${legendViewBoxWidth} 100`}
    >
      {visibleObject && (
        <g transform="translate(0,100)">
          <text y="-25" dominantBaseline="text-after-edge">
            {visibleObject.name}
          </text>
          <path
            d={`M0,-${tickHeight} L1,0 L${legendViewBoxWidth},0 L${legendViewBoxWidth},-${tickHeight}`}
            className={styles.scaleBar}
          />
          <path
            d={generateScalePath(
              legendViewBoxWidth,
              visibleObject.size,
              legendFov
            )}
            className={styles.scaleBar}
          />
          {ticks.map((tick, i) => {
            const position =
              (legendViewBoxWidth / legendFov) * tickSize * (i + 1);
            return (
              <line
                key={i}
                y1={`-${tickHeight}`}
                y2={0}
                x1={position}
                x2={position}
                stroke="var(--color-font-invert)"
                strokeWidth="1"
              />
            );
          })}
        </g>
      )}
    </svg>
  );
};

export default FOVScale;
