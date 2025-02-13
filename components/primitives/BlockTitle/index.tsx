import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

interface BlockTitleProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

const BlockTitle: FC<PropsWithChildren<BlockTitleProps>> = ({
  as: Tag = "h1",
  className,
  children,
}) => {
  return <Tag className={clsx(styles.blockTitle, className)}>{children}</Tag>;
};
BlockTitle.displayName = "Atom.BlockTitle";

export default BlockTitle;
