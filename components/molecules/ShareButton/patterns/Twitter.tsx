"use client";
import clsx from "clsx/lite";
import { TwitterShareButton } from "react-share";
import { FaXTwitter } from "react-icons/fa6";

import styles from "../styles.module.css";
import { forwardRef } from "react";
import WithButtonLabel from "@/components/atomic/WithButtonLabel";
import { useTranslation } from "react-i18next";

interface TwitterShareProps {
  title?: string;
  hashtags?: Array<string>;
  url: string;
  showLabel?: boolean;
}

const TwitterShare = forwardRef<HTMLButtonElement, TwitterShareProps>(
  ({ title, hashtags, url, showLabel }, ref) => {
    const { t } = useTranslation();
    const label = t("menu.share.options.twitterX");

    return (
      <WithButtonLabel label={label} showLabel={showLabel}>
        <TwitterShareButton
          url={url}
          title={title}
          hashtags={hashtags}
          className={clsx(styles.shareButton, styles.twitter)}
          ref={ref}
          resetButtonStyle={false}
        >
          <FaXTwitter />
        </TwitterShareButton>
      </WithButtonLabel>
    );
  }
);

TwitterShare.displayName = "Molecule.TwitterShare";

export default TwitterShare;
