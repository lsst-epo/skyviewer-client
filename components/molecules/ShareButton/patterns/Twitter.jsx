"use client";
import PropTypes from "prop-types";
import classnames from "clsx";
import { TwitterShareButton } from "react-share";
import IconComposer from "@/components/svg/IconComposer";
import styles from "../styles.module.scss";

export default function ShareButton({ title, hashtags, showLabel }) {
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

ShareButton.propTypes = {
  title: PropTypes.string,
  via: PropTypes.string,
  hashtags: PropTypes.array,
  related: PropTypes.array,
  showLabel: PropTypes.bool,
};
