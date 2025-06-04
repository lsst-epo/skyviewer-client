import { FC, PropsWithChildren } from "react";
import Stack, { type StackProps } from "@rubin-epo/epo-react-lib/Stack";
import clsx from "clsx/lite";
import styles from "./styles.module.css";

type VerticalAlignment = "top" | "middle" | "bottom";
type HorizontalAlignment = "left" | "center" | "right";
interface ControlStackProps extends StackProps {
  position?: `${VerticalAlignment} ${HorizontalAlignment}`;
  centered?: boolean;
}

const ControlStack: FC<PropsWithChildren<ControlStackProps>> = ({
  children,
  className,
  position = "top left",
  centered = true,
  ...props
}) => {
  const [vertical, horizontal] = position.split(" ");

  return (
    <div
      data-vertical={vertical}
      data-horizontal={horizontal}
      data-centered={centered}
      className={clsx(styles.controlsContainer, className)}
    >
      <Stack
        {...props}
        className={styles.controlsInner}
        space="var(--size-spacing-2xs)"
      >
        {children}
      </Stack>
    </div>
  );
};

ControlStack.displayName = "Molecule.Controls.Stack";

export default ControlStack;
