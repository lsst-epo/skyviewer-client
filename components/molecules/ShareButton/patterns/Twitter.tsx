"use client";
import classnames from "clsx";
import { TwitterShareButton } from "react-share";
import IconComposer from "@/components/svg/IconComposer";
import styles from "../styles.module.scss";
import { forwardRef } from "react";

interface TwitterShareProps {
  title?: string;
  hashtags?: Array<string>;
  showLabel?: boolean;
}

const TwitterShare = forwardRef<HTMLButtonElement, TwitterShareProps>(
  ({ title, hashtags, showLabel }, ref) => {
    return (
      <TwitterShareButton
        url={
          typeof window !== "undefined"
            ? window.location.href
            : "https://www.rubinobservatory.com"
        }
        title={title}
        data-network="twitter"
        hashtags={hashtags}
        className={styles.shareButton}
        ref={ref}
      >
        <div className={styles.shareIcon}>
          <IconComposer icon="ShareTwitter" />
        </div>
        <div
          className={classnames(styles.shareNetwork, {
            "screen-reader-only": !showLabel,
          })}
        >
          Twitter
        </div>
      </TwitterShareButton>
    );
  }
);

TwitterShare.displayName = "Molecule.TwitterShare";

export default TwitterShare;
