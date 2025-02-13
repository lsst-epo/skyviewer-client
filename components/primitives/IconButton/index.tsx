import { DetailedHTMLProps, FunctionComponent, HTMLAttributes } from "react";
import classNames from "clsx";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import styles from "./styles.module.css";

interface IconButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  disabled?: boolean;
  text: string;
  icon: string;
  size?: string | number;
}

const IconButton: FunctionComponent<IconButtonProps> = ({
  className,
  children,
  icon,
  size,
  text,
  ...props
}) => {
  return (
    <button className={classNames(className, styles.iconButton)} {...props}>
      <span className="visually-hidden">{text}</span>
      <IconComposer {...{ icon, size }} />
    </button>
  );
};

IconButton.displayName = "Atom.IconButton";

export default IconButton;
