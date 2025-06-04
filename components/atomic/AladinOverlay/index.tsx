"use client";
import { FunctionComponent, PropsWithChildren } from "react";
import clsx from "clsx/lite";
import { useAladin } from "@/contexts/Aladin";
import styles from "./styles.module.css";

interface AladinOverlayProps {
  space?: string;
  className?: string;
  wrapperClassName?: string;
}

const AladinOverlay: FunctionComponent<
  PropsWithChildren<AladinOverlayProps>
> = ({ children, space, className, wrapperClassName }) => {
  const { isLoading } = useAladin();
  return (
    <div
      style={{ "--size-padding-overlay": space }}
      className={clsx(styles.aladinOverlay, wrapperClassName)}
      data-loaded={!isLoading}
    >
      <div className={clsx(styles.aladinOverlayInner, className)}>
        {children}
      </div>
    </div>
  );
};

AladinOverlay.displayName = "Atom.AladinOverlay";

export default AladinOverlay;
