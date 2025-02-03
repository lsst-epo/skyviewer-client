"use client";
import PropTypes from "prop-types";
import classnames from "classnames";
import { FacebookShareButton } from "react-share";
import IconComposer from "@/components/svg/IconComposer";
import styles from "../styles.module.scss";

export default function ShareButton({ quote, hashtag, showLabel }) {
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

ShareButton.propTypes = {
  quote: PropTypes.string,
  hashtag: PropTypes.string,
  showLabel: PropTypes.bool,
};
