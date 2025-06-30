"use client";

import { useEventListener } from "usehooks-ts";
import { useRef } from "react";
import useAladinEvent from "./useAladinEvent";
import { useAladin } from "@/contexts/Aladin";

const useAladinContextMenu = ({
  onOpen,
  onClose,
}: {
  onOpen: (onOpenProps: { x: number; y: number }) => void;
  onClose: () => void;
}) => {
  const longPressStart = useRef<{ x: number; y: number }>();
  const timerRef = useRef<NodeJS.Timeout>();
  const isLongPress = useRef<boolean>();
  const { isLoading } = useAladin({
    callbacks: {
      onRightClickMove: () => undefined,
    },
  });

  const startPressTimer = (position: { x: number; y: number }) => {
    longPressStart.current = position;
    isLongPress.current = false;
    timerRef.current = setTimeout(() => {
      isLongPress.current = true;
      onOpen && onOpen(position);
    }, 500);
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      return onClose && onClose();
    }
  };

  const handleTouchEvent = ({ state, type, xy }: CanvasEventDetail) => {
    if (type === "touchstart" && xy) {
      onClose && onClose();
      return startPressTimer(xy);
    }

    if (type === "touchmove") {
      if (isLongPress.current) {
        clearTimeout(timerRef.current);
        return onClose && onClose();
      } else {
        if (xy && longPressStart.current) {
          const drift =
            Math.abs(xy.y - longPressStart.current.y) +
            Math.abs(xy.x - longPressStart.current.x);

          if (drift > 4) {
            longPressStart.current = undefined;
            clearTimeout(timerRef.current);
          }
        }

        return;
      }
    }

    if (type === "touchend") {
      clearTimeout(timerRef.current);
    }
  };

  const handleClick = ({
    detail: { state, type, xy },
  }: AladinEventMap["Event"]) => {
    const touchEvents = ["touchstart", "touchend", "touchmove"];
    const closeActions = ["click", "mousedown", "wheel"];

    if (type && touchEvents.includes(type)) {
      return handleTouchEvent({ state, type, xy });
    }

    if (type && closeActions.includes(type)) {
      return onClose && onClose();
    }

    if (state.rightClickPressed) {
      if (type === "mousemove") {
        return onClose && onClose();
      }

      if (!isLoading && xy) {
        return onOpen && onOpen(xy);
      }
    }
  };

  useAladinEvent("zoom.changed", onClose);
  useAladinEvent("Event", handleClick);
  useEventListener("keydown", handleKeydown);
};

export default useAladinContextMenu;
