"use client";
import { forwardRef } from "react";
import classnames from "clsx";
import { EmailShareButton } from "react-share";
import IconComposer from "@/components/svg/IconComposer";
import styles from "../styles.module.scss";

interface EmailShareProps {
  showLabel?: boolean;
  subject?: string;
  body?: string;
  separator?: string;
}

const EmailShare = forwardRef<HTMLButtonElement, EmailShareProps>(
  ({ subject, body, separator = " ", showLabel }, ref) => {
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
        ref={ref}
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
);

EmailShare.displayName = "Molecule.EmailShare";

export default EmailShare;
