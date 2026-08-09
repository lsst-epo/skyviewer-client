"use client";

import { FC, useRef, useState } from "react";
import { useInterval } from "usehooks-ts";
import saveAs from "file-saver";
import { useTranslation } from "react-i18next";
import { useAladin } from "@/contexts/Aladin";
import useAladinEvent from "@/hooks/useAladinEvent";

interface ImageExportProps {
  fileType: ExportFileType;
  layersToLoad: number;
}

const ImageExport: FC<ImageExportProps> = ({ fileType, layersToLoad }) => {
  const { t } = useTranslation();
  const loaded = useRef<number>(0);
  const [waitingForRender, setWaiting] = useState(false);

  const { aladin } = useAladin();

  useAladinEvent("HiPSLayer.added", () => {
    loaded.current = loaded.current + 1;

    if (loaded.current === layersToLoad) {
      setWaiting(true);
    }
  });

  const prepareScreenshot = async () => {
    if (aladin && !aladin.view.wasm.isRendering()) {
      setWaiting(false);

      const imgTypes: Record<ExportFileType, AladinImageExportType> = {
        png: "image/png",
        jpeg: "image/jpeg",
        jpg: "image/jpeg",
        webp: "image/webp",
      };

      const imageType = imgTypes[fileType];

      const blob = await aladin?.getViewData("blob", imageType, false);

      const [ra, dec] = aladin.getRaDec();
      const [fov] = aladin.getFov();
      const filename = t("menu.share.options.image.filename", {
        ra: ra.toFixed(5),
        dec: dec.toFixed(5),
        fov: fov.toFixed(2),
        extension: fileType,
      });

      saveAs(blob, filename);

      // window.close();
    }
  };

  useInterval(prepareScreenshot, waitingForRender ? 100 : null);

  return null;
};

ImageExport.displayName = "Organism.ImageExport";

export default ImageExport;
