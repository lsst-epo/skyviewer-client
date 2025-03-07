"use client";
import { forwardRef } from "react";
import { useAladin } from "@/contexts/Aladin";
import IconComposer from "@/components/svg/IconComposer";
import ShareButton from "..";
import { currentViewAsParams } from "@/lib/aladin/helpers";

interface LinkToViewProps {
  showLabel?: boolean;
}

const LinkToView = forwardRef<HTMLButtonElement, LinkToViewProps>(
  ({ showLabel }, ref) => {
    const { aladin, isLoading } = useAladin();

    const handleClick = async () => {
      const { origin, pathname } = window.location;
      let path = `${origin}${pathname}`;
      if (aladin) {
        path += `?${currentViewAsParams(aladin).toString()}`;
      }

      try {
        await navigator.clipboard.writeText(path);
      } catch (error) {
        console.error(error.message);
      }
    };

    return (
      <ShareButton
        ref={ref}
        disabled={isLoading}
        showLabel={showLabel}
        icon={<IconComposer size="52" icon="ShareCopyUrl" />}
        text="Get a link"
        network="url"
        onClick={handleClick}
      />
    );
  }
);

LinkToView.displayName = "Molecule.ShareButton.LinkToView";

export default LinkToView;
