"use client";
import { FC } from "react";
import IconButton from "@/components/atomic/IconButton";
import { useTranslation } from "react-i18next";
import IconComposer from "@/components/svg/IconComposer";
import { getPathname } from "@/lib/i18n/navigation";

interface OpenToursProps {
  className?: string;
}

const OpenTours: FC<OpenToursProps> = ({ className }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const handleOpen = () => {
    const { origin } = window.location;
    const pathname = getPathname({
      href: { pathname: "/guided-experiences" },
      locale: language,
    });

    const url = new URL(pathname, origin).toString();

    window.open(url, "_blank");
  };

  return (
    <IconButton
      className={className}
      onClick={handleOpen}
      icon={<IconComposer icon="MapSearch" />}
      text={t("controls.open_tours")}
    />
  );
};

OpenTours.displayName = "Molecule.ExplorerControl.OpenTours";

export default OpenTours;
