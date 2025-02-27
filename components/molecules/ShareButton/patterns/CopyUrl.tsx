"use client";
import { FC } from "react";
import IconComposer from "@/components/svg/IconComposer";
import ShareButton from "..";

interface CopyUrlButtonProps {
  showLabel?: boolean;
  urlToCopy?: string;
}

const CopyUrlButton: FC<CopyUrlButtonProps> = ({ showLabel, urlToCopy }) => {
  return (
    <ShareButton
      showLabel={showLabel}
      icon={<IconComposer size="52" icon="ShareCopyUrl" />}
      text="Get Url"
      network="url"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(
            urlToCopy || window.location.href
          );
        } catch (error) {
          console.error(error.message);
        }
      }}
    />
  );
};

CopyUrlButton.displayName = "Molecule.ShareButton.CopyUrl";

export default CopyUrlButton;
