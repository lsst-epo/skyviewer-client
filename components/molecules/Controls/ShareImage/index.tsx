"use client";
import { FunctionComponent } from "react";
import IconButton from "@/components/atomic/IconButton";
import { useAladin } from "@/contexts/Aladin";
import { useTranslation } from "react-i18next";
import { hasWebShare, webShare } from "@/lib/utilities";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";

interface ShareImageProps {
  className?: string;
}

const ShareImage: FunctionComponent<ShareImageProps> = ({ className }) => {
  const { t } = useTranslation();
  const { aladin, isLoading } = useAladin();

  const handleClick = async () => {
    if (!isLoading) {
      const dataUrl = await aladin?.getViewData("blob", "image/png", false);

      if (dataUrl) {
        const data = {
          files: [
            new File([dataUrl], "image.png", {
              type: dataUrl.type,
            }),
          ],
          title: "Rubin Observatory",
          text: "Check this image out!!!!!!",
        };
        await webShare(data);
      }
    }
  };

  if (!hasWebShare()) return null;

  return (
    <IconButton
      text={t("controls.save_image")}
      className={className}
      icon={<IconComposer icon="ShareToggle" />}
      onClick={handleClick}
      disabled={isLoading}
    />
  );
};

ShareImage.displayName = "Molecule.Control.ShareImage";

export default ShareImage;
