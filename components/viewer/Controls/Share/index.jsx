import { useEffect, useState, useContext } from "react";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";
import AladinGlobalContext from "@/contexts/AladinGlobal";

export default function Share() {
  const { aladin } = useContext(AladinGlobalContext) || {};
  const [shareImage, setShareImage] = useState(null);
  const toggleShare = () => {
    const uri = aladin.getViewDataURL();
    const name = "share";
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {shareImage && <img src={shareImage} alt="shared" />}
      <Button
        icon={<IconComposer icon="Share" />}
        onClick={toggleShare}
        text="Toggle Share"
        isIcon
        classes="share-button control-button"
      />
    </>
  );
}
