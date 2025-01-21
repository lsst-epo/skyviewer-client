"use client";
import { FC } from "react";
import copy from "copy-to-clipboard";
import IconComposer from "@/components/svg/IconComposer";
import ShareButton from "..";

interface CopyUrlButtonProps {
  showLabel?: boolean;
}

const CopyUrlButton: FC<CopyUrlButtonProps> = ({ showLabel }) => {
  return (
    <ShareButton
      showLabel={showLabel}
      icon={<IconComposer size="52" icon="ShareCopyUrl" />}
      text="Get Url"
      network="url"
      onClick={() => {
        copy(window.location.href);
      }}
    />
  );
};

CopyUrlButton.displayName = "Molecule.ShareButton.CopyUrl";

export default CopyUrlButton;
