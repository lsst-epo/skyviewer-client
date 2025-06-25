"use client";
import { useRef, useSyncExternalStore } from "react";

function isShallowEqual(object1, object2) {
  const keys1 = object1 ? Object.keys(object1) : [];
  const keys2 = object2 ? Object.keys(object2) : [];

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

interface NetworkInformation extends EventTarget {
  downlink: number;
  downlinkMax: number;
  effectiveType: "slow-2g" | "2g" | "3g" | "4g";
  rtt: number;
  saveData: boolean;
  type:
    | "bluetooth"
    | "cellular"
    | "ethernet"
    | "none"
    | "wifi"
    | "wimax"
    | "other"
    | "unknown";
}

const getConnection = (): NetworkInformation | undefined => {
  return (
    (navigator as any)?.connection ||
    (navigator as any)?.mozConnection ||
    (navigator as any)?.webkitConnection
  );
};

const useNetworkStateSubscribe = (callback) => {
  window.addEventListener("online", callback, { passive: true });
  window.addEventListener("offline", callback, { passive: true });

  const connection = getConnection();

  if (connection) {
    connection.addEventListener("change", callback, { passive: true });
  }

  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);

    if (connection) {
      connection.removeEventListener("change", callback);
    }
  };
};

const getNetworkStateServerSnapshot = () => {
  return undefined;
};

interface NetworkState
  extends Partial<
    Pick<
      NetworkInformation,
      "downlink" | "downlinkMax" | "effectiveType" | "rtt" | "saveData" | "type"
    >
  > {
  online: boolean;
}

/** @link https://usehooks.com/usenetworkstate */
export default function useNetworkState() {
  const cache = useRef<NetworkState>();

  const getSnapshot = () => {
    const online = navigator.onLine;
    const connection = getConnection();

    const nextState = {
      online,
      downlink: connection?.downlink,
      downlinkMax: connection?.downlinkMax,
      effectiveType: connection?.effectiveType,
      rtt: connection?.rtt,
      saveData: connection?.saveData,
      type: connection?.type,
    };

    if (isShallowEqual(cache.current, nextState)) {
      return cache.current;
    } else {
      cache.current = nextState;
      return nextState;
    }
  };

  return useSyncExternalStore(
    useNetworkStateSubscribe,
    getSnapshot,
    getNetworkStateServerSnapshot
  );
}
