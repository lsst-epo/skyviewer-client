"use client";

import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import { useSearchParams } from "next/navigation";
import { FC, useRef, useState } from "react";
import { fadeLayer } from "@/lib/aladin/animation";
import { useAladin } from "@/contexts/Aladin";
import styles from "./styles.module.css";

const ToggleImageLayer: FC = () => {
  const [hide, setHide] = useState(false);
  const searchParams = useSearchParams();
  const isDemo = searchParams.get("demo") === "1";
  const hips = useRef<HiPS>();
  useAladin({
    callbacks: {
      onLoaded: ({ A, aladin }) => {
        if (isDemo) {
          hips.current = A.imageHiPS("P/PanSTARRS/DR1/color-z-zg-g", {
            opacity: 1,
          });
          aladin.setOverlayImageLayer(hips.current);
        }
      },
    },
  });

  if (!isDemo) return null;

  const toggleLayers = () => {
    if (hips.current) {
      if (hips.current.getOpacity() > 0) {
        fadeLayer({ hips: hips.current, from: 1, to: 0 });
        setHide(true);
      } else {
        fadeLayer({ hips: hips.current, from: 0, to: 1 });
      }
    }
  };

  return (
    <button data-hide={hide} className={styles.toggle} onClick={toggleLayers}>
      <IconComposer size="2em" icon="CircularLoader" />
    </button>
  );
};

export default ToggleImageLayer;
