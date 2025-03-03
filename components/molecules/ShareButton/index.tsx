import { forwardRef, MouseEventHandler, ReactNode } from "react";
import classnames from "clsx";
import styles from "./styles.module.scss";

interface ShareButtonProps {
  icon?: ReactNode;
  text: string;
  network: string;
  message?: string;
  description?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  showLabel?: boolean;
  disabled?: boolean;
}

const ShareButton = forwardRef<HTMLButtonElement, ShareButtonProps>(
  (
    {
      icon,
      text,
      network,
      onClick,
      message,
      description,
      showLabel = false,
      disabled,
    },
    ref
  ) => {
    return (
      <button
        {...{ onClick, disabled, ref }}
        className={classnames(styles.shareButton, "st-custom-button")}
        data-network={network}
        data-message={message}
        data-description={description}
      >
        <div className={classnames(styles.shareIcon, network)}>{icon}</div>
        <div
          className={classnames({
            "screen-reader-only": !showLabel,
          })}
        >
          {text}
        </div>
      </button>
    );
  }
);

ShareButton.displayName = "Molecule.ShareButton";

export default ShareButton;
