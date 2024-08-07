import { FunctionComponent, ChangeEventHandler } from "react";
import IconComposer from "@/components/svg/IconComposer";
import styles from "./styles.module.css";

interface IconToggleProps {
  isChecked: boolean;
  icon: string;
  label?: string;
  iconSize?: string | number;
  onToggleCallback: ChangeEventHandler<HTMLInputElement>;
}

const IconToggle: FunctionComponent<IconToggleProps> = ({
  icon,
  iconSize,
  isChecked,
  label,
  onToggleCallback,
}) => {
  return (
    <label className={styles.toggleContainer} data-checked={isChecked}>
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
