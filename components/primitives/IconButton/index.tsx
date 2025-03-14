import {
  DetailedHTMLProps,
  forwardRef,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
} from "react";
import classNames from "clsx/lite";
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
  (
    { className, children, icon, size, text, ...props }: IconButtonProps,
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={classNames(styles.iconButton, className)}
        title={text}
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
