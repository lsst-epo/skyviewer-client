import { FunctionComponent, ReactNode } from "react";
import { Checkbox } from "@headlessui/react";
import classNames from "clsx/lite";
import styles from "./styles.module.css";

interface IconToggleProps {
  isChecked: boolean;
  icon: ReactNode;
  label?: string;
  className?: string;
  onToggleCallback: (checked: boolean) => void;
  disabled?: boolean;
}

const IconToggle: FunctionComponent<IconToggleProps> = ({
  icon,
  isChecked,
  label,
  onToggleCallback,
  className,
  disabled,
}) => {
  return (
    <Checkbox
      checked={isChecked}
      disabled={disabled}
      onChange={onToggleCallback}
      title={label}
      className={classNames(styles.iconToggle, className)}
    >
      <span className="visually-hidden">{label}</span>
      {icon}
    </Checkbox>
  );
};

IconToggle.displayName = "Atomic.IconToggle";

export default IconToggle;
