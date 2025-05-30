"use client";
import { FunctionComponent, PropsWithChildren } from "react";
import classNames, { clsx } from "clsx/lite";
import styles from "./styles.module.css";
import { useAladin } from "@/contexts/Aladin";

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
      <div className={classNames(styles.aladinOverlayInner, className)}>
        {children}
      </div>
    </div>
  );
};

AladinOverlay.displayName = "Atom.AladinOverlay";

export default AladinOverlay;
