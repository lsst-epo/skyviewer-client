import { forwardRef, PropsWithChildren } from "react";
import { clsx } from "clsx/lite";
import styles from "./styles.module.css";
import IconButton, { IconButtonProps } from "@/components/atomic/IconButton";

const ShareButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<IconButtonProps>
>(({ className, text, children, ...props }, ref) => {
  return (
    <IconButton
      className={clsx(styles.shareButton, className)}
      {...{ text, ref, ...props }}
    />
  );
});

ShareButton.displayName = "Molecule.ShareButton";

export default ShareButton;
