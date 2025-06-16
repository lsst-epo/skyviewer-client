"use client";
import { FC, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import endPreviewMode from "@/services/actions/endPreviewMode";
import styles from "../styles.module.css";

const DisablePreviewMode: FC = () => {
  const [isPending, startTransition] = useTransition();
  const { t } = useTranslation();
  const { refresh } = useRouter();
  const handleDisable = async () => {
    await endPreviewMode();

    refresh();
  };

  return (
    <button
      className={styles.button}
      onClick={() => startTransition(handleDisable)}
      disabled={isPending}
    >
      {t("preview_mode.exit")}
    </button>
  );
};

DisablePreviewMode.displayName = "Organism.PreviewMode.Disable";

export default DisablePreviewMode;
