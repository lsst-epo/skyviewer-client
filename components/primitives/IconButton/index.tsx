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
  styleAs?: "primary" | "secondary";
  text: string;
  icon: ReactNode;
}

const IconButton: FunctionComponent<IconButtonProps> = forwardRef(
  (
    {
      className,
      children,
      icon,
      text,
      styleAs = "primary",
      ...props
    }: IconButtonProps,
    ref
  ) => {
    return (
      <button
        ref={ref}
        data-style-as={styleAs}
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
