"use client";
import classNames from "clsx/lite";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import IconButton from "@/components/atomic/IconButton";
import { useAladin } from "@/contexts/Aladin";

interface ReturnToTargetProps {
  className?: string;
}

const ReturnToTarget: FunctionComponent<ReturnToTargetProps> = ({
  className,
}) => {
  const { t } = useTranslation();
  const { aladin, isLoading } = useAladin();

  const handleClick = async () => {
    if (!isLoading) {
      aladin?.gotoObject(aladin?.options.target);
    }
  };

  return (
    <IconButton
      text={t("controls.save_image")}
      className={classNames(className)}
      icon={<IconComposer icon="Pin" />}
      onClick={handleClick}
      disabled={isLoading}
    />
  );
};

ReturnToTarget.displayName = "Molecule.Control.ReturnToTarget";

export default ReturnToTarget;
