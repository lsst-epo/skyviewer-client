"use client";
import { FC } from "react";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import { useTranslation } from "react-i18next";
import IconButton from "@/components/atomic/IconButton";
import { useAladin } from "@/contexts/Aladin";
import useAladinMove from "@/hooks/useAladinMove";

const ReturnToInital: FC = () => {
  const { t } = useTranslation();
  const { isLoading, aladin } = useAladin();
  const goToPosition = useAladinMove();

  const onClick = () => {
    if (!isLoading) {
      const { target } = aladin.options;
      const initialPosition = target.split(" ").map(parseFloat);

      goToPosition({ ra: initialPosition[0], dec: initialPosition[1] });
    }
  };

  return (
    <IconButton
      icon={<IconComposer icon="Pin" />}
      onClick={onClick}
      disabled={isLoading}
      text={t("controls.return_to_initial")}
    />
  );
};

ReturnToInital.displayName = "Molecule.ExplorerControl.ReturnToInitial";

export default ReturnToInital;
