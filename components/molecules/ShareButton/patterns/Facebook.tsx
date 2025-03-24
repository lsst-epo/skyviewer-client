"use client";
import clsx from "clsx/lite";
import { FacebookShareButton } from "react-share";
import { FaFacebookF } from "react-icons/fa";
import styles from "../styles.module.css";
import { forwardRef } from "react";
import WithButtonLabel from "@/components/atomic/WithButtonLabel";
import { useTranslation } from "react-i18next";

interface FacebookShareProps {
  quote?: string;
  hashtag?: string;
  showLabel?: boolean;
}

const FacebookShare = forwardRef<HTMLButtonElement, FacebookShareProps>(
  ({ quote, hashtag, showLabel }, ref) => {
    const { t } = useTranslation();
    const label = t("menu.share.options.facebook");
    return (
      <WithButtonLabel label={label} showLabel={showLabel}>
        <FacebookShareButton
          className={clsx(styles.shareButton, styles.facebook)}
          url={
            typeof window !== "undefined"
              ? window.location.href
              : "https://www.rubinobservatory.com"
          }
          data-network="facebook"
          hashtag={hashtag}
          ref={ref}
          resetButtonStyle={false}
        >
          <FaFacebookF />
        </FacebookShareButton>
      </WithButtonLabel>
    );
  }
);

FacebookShare.displayName = "Molecule.FacebookShare";

export default FacebookShare;
