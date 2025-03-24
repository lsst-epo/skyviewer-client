"use client";
import { forwardRef } from "react";
import { IoIosLink } from "react-icons/io";
import ShareButton from "..";

interface LinkToViewProps {
  onShare: () => void;
  label: string;
}

const LinkToView = forwardRef<HTMLButtonElement, LinkToViewProps>(
  ({ label, onShare }, ref) => {
    return (
      <ShareButton
        ref={ref}
        icon={<IoIosLink />}
        text={label}
        onClick={onShare}
      />
    );
  }
);

LinkToView.displayName = "Molecule.ShareButton.LinkToView";

export default LinkToView;
