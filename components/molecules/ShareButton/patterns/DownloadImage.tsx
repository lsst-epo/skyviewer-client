"use client";
import { TfiDownload } from "react-icons/tfi";
import ShareButton from "..";
import { forwardRef } from "react";

interface GetImageProps {
  onShare: () => void;
  label: string;
}

const GetImageButton = forwardRef<HTMLButtonElement, GetImageProps>(
  ({ onShare, label }, ref) => {
    return (
      <ShareButton
        icon={<TfiDownload />}
        text={label}
        onClick={onShare}
        ref={ref}
      />
    );
  }
);

GetImageButton.displayName = "Molecule.DownloadImage";

export default GetImageButton;
