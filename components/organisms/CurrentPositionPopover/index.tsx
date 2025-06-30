"use client";
import { FC, MouseEventHandler, useState } from "react";
import {
  autoPlacement,
  autoUpdate,
  offset,
  useFloating,
} from "@floating-ui/react-dom";

import { useOnClickOutside } from "usehooks-ts";
import { useTranslation } from "react-i18next";
import Stack from "@rubin-epo/epo-react-lib/Stack";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import { useAladin } from "@/contexts/Aladin";
import { frameMap, viewAsParams } from "@/lib/aladin/helpers";
import IconButton from "@/components/atomic/IconButton";
import useAladinContextMenu from "@/hooks/useAladinContextMenu";
import styles from "./styles.module.css";

interface AladinScreenPosition {
  screen: [number, number];
  formatted: [string, string];
  aladin: [number, number];
}

const formatCoordinate = (
  coo: string,
  display: "d" | "s"
): [string, string] => {
  const splitter = coo.includes("+") ? "+" : "-";
  const sign = splitter === "-" ? "-" : "";
  const [ra, dec] = coo.split(splitter);

  if (display === "d") {
    return [ra, `${sign}${dec}`];
  } else {
    return [ra.padEnd(11, "0"), `${sign}${dec.padEnd(11, "0")}`];
  }
};

const CurrentPositionPopover: FC = () => {
  const { t } = useTranslation();
  const [position, setPosition] = useState<AladinScreenPosition>();
  const { aladin, A, isLoading } = useAladin({
    callbacks: {
      onRightClickMove: () => undefined,
    },
  });

  const {
    refs: { floating, setFloating, setReference },
    floatingStyles,
  } = useFloating({
    whileElementsMounted: autoUpdate,
    open: !!position?.aladin,
    transform: true,
    middleware: [
      autoPlacement({
        allowedPlacements: [
          "right-start",
          "right-end",
          "left-end",
          "left-start",
        ],
      }),
      offset(10),
    ],
  });

  const closeContextMenu = () => {
    setPosition(undefined);
  };

  const openContextMenu = ({ x, y }: { x: number; y: number }) => {
    if (!isLoading) {
      const frame = aladin.getFrame();
      const format = frameMap[frame];

      let precision = 5;

      if (format === "s") {
        precision++;
      }

      const position = aladin.pix2world(x, y, frame);
      const coo = A.coo(...position, precision);
      coo.setFrame(frame);

      setPosition({
        screen: [x, y],
        aladin: position,
        formatted: formatCoordinate(coo.format(format), format),
      });
    }
  };

  useAladinContextMenu({ onOpen: openContextMenu, onClose: closeContextMenu });

  useOnClickOutside(floating, closeContextMenu);

  const handleCopyLink: MouseEventHandler = async () => {
    const { origin, pathname } = window.location;
    let path = `${origin}${pathname}`;
    if (aladin && position?.aladin) {
      path += `?${viewAsParams({
        fov: aladin.getFov()[0],
        target: position?.aladin,
      }).toString()}`;
    }

    try {
      await navigator.clipboard.writeText(path);

      closeContextMenu();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    !!position?.aladin && (
      <>
        <div
          className={styles.anchor}
          style={{ top: position?.screen[1], left: position?.screen[0] }}
          ref={setReference}
        ></div>
        <div className={styles.panel} ref={setFloating} style={floatingStyles}>
          <Stack className={styles.text} space="0">
            <pre>ra: {position?.formatted[0]}</pre>
            <pre>dec: {position?.formatted[1]}</pre>
          </Stack>
          <IconButton
            styleAs="none"
            className={styles.copy}
            onClick={handleCopyLink}
            disabled={!position?.aladin}
            text={t("controls.get_a_link")}
            icon={<IconComposer size={14} icon="ShareCopyUrl" />}
          />
        </div>
      </>
    )
  );
};

CurrentPositionPopover.displayName = "Organism.CurrentPositionPopover";

export default CurrentPositionPopover;
