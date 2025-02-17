import {
  DetailedHTMLProps,
  forwardRef,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
} from "react";
import classNames from "clsx";
import styles from "./styles.module.css";

interface IconButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  disabled?: boolean;
  text: string;
  icon: ReactNode;
  size?: string | number;
}

const IconButton: FunctionComponent<IconButtonProps> = forwardRef(
  ({ className, children, icon, size, text, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(styles.iconButton, className)}
        {...props}
      >
        <span className="visually-hidden">{text}</span>
        {icon}
      </button>
    );
  }
);

IconButton.displayName = "Atom.IconButton";

export default IconButton;
