"use client";
import { FC } from "react";
import { IoIosLink } from "react-icons/io";

import { useCopyToClipboard } from "usehooks-ts";
import { useTranslation } from "react-i18next";
import ShareButton from "..";
import WithButtonLabel from "@/components/atomic/WithButtonLabel";

interface CopyUrlButtonProps {
  showLabel?: boolean;
  urlToCopy?: string;
}

const CopyUrlButton: FC<CopyUrlButtonProps> = ({ showLabel, urlToCopy }) => {
  const [, copy] = useCopyToClipboard();
  const { t } = useTranslation();
  const label = t("share.menu.options.copy");

  return (
    <WithButtonLabel label={label} showLabel={showLabel}>
      <ShareButton
        icon={<IoIosLink />}
        text={label}
        network="url"
        onClick={() => copy(urlToCopy || window.location.href)}
      ></ShareButton>
    </WithButtonLabel>
  );
};

CopyUrlButton.displayName = "Molecule.ShareButton.CopyUrl";

export default CopyUrlButton;
