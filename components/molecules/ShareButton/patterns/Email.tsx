"use client";
import { forwardRef } from "react";
import { EmailShareButton } from "react-share";
import IconComposer from "@/components/svg/IconComposer";
import { useTranslation } from "react-i18next";
import WithButtonLabel from "@/components/atomic/WithButtonLabel";
import styles from "../styles.module.css";

interface EmailShareProps {
  url: string;
  showLabel?: boolean;
  subject?: string;
  body?: string;
  separator?: string;
}

const EmailShare = forwardRef<HTMLButtonElement, EmailShareProps>(
  ({ showLabel, ...props }, ref) => {
    const { t } = useTranslation();
    const label = t("menu.share.options.email");

    return (
      <WithButtonLabel label={label} showLabel={showLabel}>
        <EmailShareButton
          {...props}
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
