"use client";
import PropTypes from "prop-types";
import classnames from "classnames";
import { EmailShareButton } from "react-share";
import IconComposer from "@/components/svg/IconComposer";
import styles from "./styles.module.scss";

export default function ShareButton({
  subject,
  body,
  separator = " ",
  showLabel,
}) {
  return (
    <EmailShareButton
      url={
        typeof window !== "undefined"
          ? window.location.href
          : "https://www.rubinobservatory.com"
      }
      subject={subject}
      body={body}
      data-network="email"
      separator={separator}
      className={styles.shareButton}
    >
      <div className={styles.shareIcon}>
        <IconComposer icon="ShareEmail" />
      </div>
      <div
        className={classnames(styles.shareNetwork, {
          "screen-reader-only": !showLabel,
        })}
      >
        Email
      </div>
    </EmailShareButton>
  );
}

ShareButton.propTypes = {
  subject: PropTypes.string,
  body: PropTypes.string,
  separator: PropTypes.string,
  showLabel: PropTypes.bool,
};
