import { FunctionComponent, ChangeEventHandler } from "react";
import IconComposer from "@/components/svg/IconComposer";
import buttonStyles from "../IconButton/styles.module.css";
import styles from "./styles.module.css";
import classNames from "classnames";

interface IconToggleProps {
  isChecked: boolean;
  icon: string;
  label?: string;
  iconSize?: string | number;
  className?: string;
  onToggleCallback: ChangeEventHandler<HTMLInputElement>;
}

const IconToggle: FunctionComponent<IconToggleProps> = ({
  icon,
  iconSize,
  isChecked,
  label,
  onToggleCallback,
  className,
}) => {
  return (
    <label
      className={classNames(styles.iconToggle, className)}
      data-checked={isChecked}
    >
      <span className="visually-hidden">{label}</span>
      <IconComposer icon={icon} size={iconSize} />
      <input
        className="visually-hidden"
        type="checkbox"
        checked={isChecked}
        onChange={onToggleCallback}
      />
    </label>
  );
};

IconToggle.displayName = "Atomic.IconToggle";

export default IconToggle;
