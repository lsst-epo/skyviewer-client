import { FC, PropsWithChildren } from "react";
import clsx from "clsx/lite";
import styles from "./styles.module.css";

interface GridProps {
  minimum?: string;
  space?: string;
  className?: string;
}

const Grid: FC<PropsWithChildren<GridProps>> = ({
  space,
  minimum,
  className,
  children,
}) => {
  return (
    <div
      style={{
        "--size-gap-grid": space,
        "--size-column-min": minimum,
      }}
      className={clsx(styles.grid, className)}
    >
      {children}
    </div>
  );
};

Grid.displayName = "Atom.Grid";

export default Grid;
