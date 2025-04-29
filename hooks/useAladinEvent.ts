"use client";

import { useAladin } from "@/contexts/Aladin";
import { useEffect, useRef } from "react";
import { useIsomorphicLayoutEffect } from "usehooks-ts";

const useAladinEvent = <K extends keyof AladinEventMap>(
  event: K,
  handler: (event: AladinEventMap[K]) => void
) => {
  const eventKey = `AL:${event}`;
  const { isLoading, aladin } = useAladin();

  const savedHandler = useRef(handler);

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const listener: typeof handler = (event) => {
      savedHandler.current(event);
    };

    if (!isLoading) {
      // Create event listener that calls handler function stored in ref

      aladin.aladinDiv.addEventListener(eventKey, listener);
    }

    return () => {
      aladin?.aladinDiv.removeEventListener(eventKey, listener);
    };
  }, [isLoading, eventKey]);
};

export default useAladinEvent;
