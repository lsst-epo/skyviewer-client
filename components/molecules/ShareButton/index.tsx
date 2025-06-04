import { forwardRef, PropsWithChildren } from "react";
import { clsx } from "clsx/lite";
import IconButton, { IconButtonProps } from "@/components/atomic/IconButton";
import styles from "./styles.module.css";

const ShareButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<IconButtonProps>
>(({ className, text, children, ...props }, ref) => {
  return (
    <IconButton
      styleAs="none"
      className={clsx(styles.shareButton, className)}
      {...{ text, ref, ...props }}
    />
  );
});

ShareButton.displayName = "Molecule.ShareButton";

export default ShareButton;
