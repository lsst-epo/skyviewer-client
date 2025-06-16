"use client";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import styles from "./styles.module.css";

const Banner: FC<PropsWithChildren> = ({ children }) => {
  const { t } = useTranslation();
  const [isLivePreview, setLivePreview] = useState(false);

  useEffect(() => {
    if (window && window.top !== window.self) {
      setLivePreview(true);
    }
  }, []);

  if (isLivePreview) return null;

  return (
    <div className={styles.previewModeBanner}>
      <span className={styles.info}>
        <IconComposer icon="InfoCircle" />
        {t("preview_mode.is_enabled")}
      </span>
      <div className={styles.actions}>{children}</div>
    </div>
  );
};

Banner.displayName = "Organism.PreviewMode.Banner";

export default Banner;
