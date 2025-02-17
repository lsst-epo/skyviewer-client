"use client";
import classnames from "clsx";
import { FacebookShareButton } from "react-share";
import IconComposer from "@/components/svg/IconComposer";
import styles from "../styles.module.scss";
import { forwardRef } from "react";

interface FacebookShareProps {
  quote?: string;
  hashtag?: string;
  showLabel?: boolean;
}

const FacebookShare = forwardRef<HTMLButtonElement, FacebookShareProps>(
  ({ quote, hashtag, showLabel }, ref) => {
    return (
      <FacebookShareButton
        className={styles.shareButton}
        url={
          typeof window !== "undefined"
            ? window.location.href
            : "https://www.rubinobservatory.com"
        }
        data-network="facebook"
        quote={quote}
        hashtag={hashtag}
        ref={ref}
      >
        <div className={styles.shareIcon}>
          <IconComposer icon="ShareFacebook" />
        </div>
        <div
          className={classnames(styles.shareNetwork, {
            "screen-reader-only": !showLabel,
          })}
        >
          Facebook
        </div>
      </FacebookShareButton>
    );
  }
);

FacebookShare.displayName = "Molecule.FacebookShare";

export default FacebookShare;
