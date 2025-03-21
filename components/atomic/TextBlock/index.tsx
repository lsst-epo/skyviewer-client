import { FC } from "react";
import clsx from "clsx/lite";
import styles from "./styles.module.css";

const TextBlock: FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  return (
    <div
      className={clsx(styles.richTextContent, className)}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

TextBlock.displayName = "Primitive.TextBlock";

export default TextBlock;
