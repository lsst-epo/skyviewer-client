import { type ButtonStyleAs } from "@rubin-epo/epo-react-lib/Button";
import clsx from "clsx/lite";
import { Link } from "next-view-transitions";
import { LinkProps } from "next/link";
import { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./styles.module.css";

interface TransitionButtonishProps extends LinkProps {
  styleAs?: ButtonStyleAs;
  isBlock?: boolean;
  icon?: ReactNode;
  iconAlignment?: "left" | "right";
  className?: string;
}

const TransitionButtonish: FC<PropsWithChildren<TransitionButtonishProps>> = ({
  children,
  className,
  icon,
  iconAlignment,
  styleAs = "primary",
  isBlock,
  ...props
}) => {
  return (
    <Link
      data-is-block={isBlock}
      data-style-as={styleAs}
      dir={iconAlignment === "right" ? "rtl" : undefined}
      className={clsx(styles.buttonish, className)}
      {...props}
    >
      {icon}
      <span className={styles.buttonText}>{children}</span>
    </Link>
  );
};

TransitionButtonish.displayName = "Molecule.TransitionButtonish";

export default TransitionButtonish;
