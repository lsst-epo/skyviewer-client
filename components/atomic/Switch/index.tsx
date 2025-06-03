import { FC } from "react";
import { Switch as BaseSwitch, type SwitchProps } from "@headlessui/react";
import clsx from "clsx";
import styles from "./styles.module.css";

const Switch: FC<SwitchProps> = ({ className, ...props }) => {
  return <BaseSwitch className={clsx(styles.switch, className)} {...props} />;
};

Switch.displayName = "Atom.Switch";

export default Switch;
