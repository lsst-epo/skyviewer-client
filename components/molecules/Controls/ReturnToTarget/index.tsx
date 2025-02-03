"use client";
import classNames from "classnames";
import { FunctionComponent } from "react";
import IconButton from "@/components/primitives/IconButton";
import { useAladin } from "@/contexts/Aladin";
import { useTranslation } from "react-i18next";

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
      icon="Pin"
      onClick={handleClick}
      disabled={isLoading}
    />
  );
};

ReturnToTarget.displayName = "Molecule.Control.ReturnToTarget";

export default ReturnToTarget;
