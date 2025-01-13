import { FunctionComponent, PropsWithChildren } from "react";
import Stack, { StackProps } from "@/components/primitives/Stack";
import style from "./styles.module.css";

const ControlsContainer: FunctionComponent<PropsWithChildren<StackProps>> = ({
  children,
  ...props
}) => {
  return (
    <Stack
      {...props}
      space="var(--size-spacing-2xs)"
      className={style.controlsContainer}
    >
      {children}
    </Stack>
  );
};

ControlsContainer.displayName = "Molecule.Controls.Container";

export default ControlsContainer;
