"use client";
import { FC } from "react";
import copy from "copy-to-clipboard";
import { useAladin } from "@/contexts/Aladin";
import IconComposer from "@/components/svg/IconComposer";
import ShareButton from "..";

interface LinkToViewProps {
  showLabel?: boolean;
}

const LinkToView: FC<LinkToViewProps> = ({ showLabel }) => {
  const { aladin, isLoading } = useAladin();

  const handleClick = () => {
    const { origin, pathname } = window.location;
    if (aladin) {
      const fov = aladin.getFov()[0].toFixed(2);
      const target = aladin.getRaDec().join(" ");

      const params = new URLSearchParams({ fov, target });

      copy(`${origin}${pathname}?${params.toString()}`);
    } else {
      copy(`${origin}${pathname}`);
    }
  };

  return (
    <ShareButton
      disabled={isLoading}
      showLabel={showLabel}
      icon={<IconComposer size="52" icon="ShareCopyUrl" />}
      text="Get Url"
      network="url"
      onClick={handleClick}
    />
  );
};

LinkToView.displayName = "Molecule.ShareButton.LinkToView";

export default LinkToView;
