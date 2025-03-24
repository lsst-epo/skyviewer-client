import { forwardRef, PropsWithChildren, useId } from "react";
import { clsx } from "clsx/lite";
import styles from "./styles.module.css";
import IconButton, { IconButtonProps } from "@/components/atomic/IconButton";

interface ShareButtonProps extends IconButtonProps {
  network: string;
  message?: string;
  description?: string;
}

const ShareButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ShareButtonProps>
>(
  (
    { network, message, description, className, text, children, ...props },
    ref
  ) => {
    return (
      <IconButton
        data-network={network}
        data-message={message}
        data-description={description}
        className={clsx(styles.shareButton, className)}
        {...{ text, ref, ...props }}
      />
    );
  }
);

ShareButton.displayName = "Molecule.ShareButton";

export default ShareButton;
