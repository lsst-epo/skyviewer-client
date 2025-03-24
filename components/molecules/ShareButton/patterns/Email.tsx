"use client";
import { forwardRef } from "react";
import classnames from "clsx";
import { EmailShareButton } from "react-share";
import IconComposer from "@/components/svg/IconComposer";
import ShareButton from "..";
import { useTranslation } from "react-i18next";
import WithButtonLabel from "@/components/atomic/WithButtonLabel";
import styles from "../styles.module.css";

interface EmailShareProps {
  showLabel?: boolean;
  subject?: string;
  body?: string;
  separator?: string;
}

const EmailShare = forwardRef<HTMLButtonElement, EmailShareProps>(
  ({ subject, body, separator = " ", showLabel }, ref) => {
    const { t } = useTranslation();
    const label = t("menu.share.options.email");

    return (
      <WithButtonLabel label={label} showLabel={showLabel}>
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
          title={label}
          ref={ref}
          resetButtonStyle={false}
        >
          <IconComposer icon="ShareEmail" />
        </EmailShareButton>
      </WithButtonLabel>
    );
  }
);

EmailShare.displayName = "Molecule.EmailShare";

export default EmailShare;
