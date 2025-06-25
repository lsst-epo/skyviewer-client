"use client";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { announce, clearAnnouncer } from "@react-aria/live-announcer";
import clsx from "clsx";
import { IoCloudOfflineOutline } from "react-icons/io5";
import useNetworkState from "@/hooks/useNetworkState";
import styles from "./styles.module.css";

interface NetworkStateProps {
  className?: string;
}

const slowNetworks = ["slow-2g", "2g", "3g"];

const NetworkState: FC<NetworkStateProps> = ({ className }) => {
  const { t } = useTranslation();
  const network = useNetworkState();
  const isOffline = network && !network?.online;
  const isLowBandwidth =
    network &&
    network?.effectiveType &&
    slowNetworks.includes(network.effectiveType);

  const hasNetworkStatus = isOffline || isLowBandwidth;
  const status = hasNetworkStatus
    ? t(isOffline ? "network.offline" : "network.limited_connection")
    : undefined;

  useEffect(() => {
    if (status) {
      announce(status);
    }

    return () => {
      clearAnnouncer("polite");
    };
  }, [status]);

  return (
    <div className={clsx(styles.networkState, className)}>
      {status && (
        <>
          <IoCloudOfflineOutline /> {status}
        </>
      )}
    </div>
  );
};

export default NetworkState;
