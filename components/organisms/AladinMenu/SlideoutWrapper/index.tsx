"use client";
import { FC, PropsWithChildren, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { SlideoutMenu } from "@rubin-epo/epo-react-lib/SlideoutMenu";
import { IoMenu } from "react-icons/io5";
import IconButton from "@/components/atomic/IconButton";
import styles from "./styles.module.css";
import clsx from "clsx";

const SlideoutWrapper: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  const id = useId();
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <IconButton
        styleAs="none"
        className={styles.button}
        id="menuToggle"
        icon={<IoMenu />}
        text={t("menu.main.open")}
        onClick={() => setOpen((open) => !open)}
      />
      <SlideoutMenu
        id={id}
        title={t("menu.main.title")}
        callToAction={t("menu.main.cta")}
        isOpen={isOpen}
        onCloseCallback={() => setOpen(false)}
        className={clsx(styles.menu, className)}
      >
        {children}
      </SlideoutMenu>
    </>
  );
};

SlideoutWrapper.displayName = "Organism.AladinMenu.Slideout";

export default SlideoutWrapper;
