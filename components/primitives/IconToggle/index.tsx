import { FunctionComponent, ChangeEventHandler, ReactNode } from "react";
import classNames from "clsx/lite";
import styles from "./styles.module.css";

interface IconToggleProps {
  isChecked: boolean;
  icon: ReactNode;
  label?: string;
  className?: string;
  onToggleCallback: ChangeEventHandler<HTMLInputElement>;
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
    <label
      className={classNames(styles.iconToggle, className)}
      data-checked={isChecked}
    >
      <span className="visually-hidden">{label}</span>
      {icon}
      <input
        className="visually-hidden"
        type="checkbox"
        checked={isChecked}
        onChange={onToggleCallback}
        disabled={disabled}
      />
    </label>
  );
};

IconToggle.displayName = "Atomic.IconToggle";

export default IconToggle;
