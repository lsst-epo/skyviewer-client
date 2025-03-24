"use client";
import { forwardRef } from "react";
import { useAladin } from "@/contexts/Aladin";
import { IoIosLink } from "react-icons/io";
import ShareButton from "..";
import { currentViewAsParams } from "@/lib/aladin/helpers";
import WithButtonLabel from "@/components/atomic/WithButtonLabel";
import { useTranslation } from "react-i18next";

interface LinkToViewProps {
  showLabel?: boolean;
}

const LinkToView = forwardRef<HTMLButtonElement, LinkToViewProps>(
  ({ showLabel }, ref) => {
    const { aladin, isLoading } = useAladin();
    const { t } = useTranslation();
    const label = t("menu.share.options.url");

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
      <WithButtonLabel label={label} showLabel={showLabel}>
        <ShareButton
          ref={ref}
          disabled={isLoading}
          icon={<IoIosLink />}
          text={label}
          network="url"
          onClick={handleClick}
        />
      </WithButtonLabel>
    );
  }
);

LinkToView.displayName = "Molecule.ShareButton.LinkToView";

export default LinkToView;
