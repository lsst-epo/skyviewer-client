"use client";
import { FC, MouseEventHandler, useState } from "react";
import { useEventListener } from "usehooks-ts";
import {
  autoPlacement,
  autoUpdate,
  offset,
  useFloating,
} from "@floating-ui/react-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import Stack from "@rubin-epo/epo-react-lib/Stack";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import { useAladin } from "@/contexts/Aladin";
import { viewAsParams } from "@/lib/aladin/helpers";
import IconButton from "@/components/atomic/IconButton";
import styles from "./styles.module.css";

interface AladinScreenPosition {
  screen: [number, number];
  formatted: [string, string];
  aladin: [number, number];
}

const formatCoordinate = (coo: string): [string, string] => {
  const splitter = coo.includes("+") ? "+" : "-";

  const [ra, dec] = coo.split(splitter);

  return [
    ra.padEnd(11, "0"),
    `${splitter === "-" ? "-" : ""}${dec.padEnd(11, "0")}`,
  ];
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
    refs: { setFloating, setReference },
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

  const handleRightClick = (event: MouseEvent) => {
    if (!isLoading) {
      event.preventDefault();
      event.stopPropagation();

      const { clientX, clientY, offsetX, offsetY } = event;

      const frame = aladin.getFrame();
      const position = aladin?.pix2world(offsetX, offsetY, frame);
      const coo = A.coo(...position, 6);
      coo.setFrame(frame);

      setPosition({
        screen: [clientX, clientY],
        aladin: position,
        formatted: formatCoordinate(coo.format("s")),
      });
    }
  };

  useEventListener("contextmenu", handleRightClick);

  const handleClose = (value: boolean) => {
    if (!value) {
      setPosition(undefined);
    }
  };

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
    } catch (error) {
      console.error(error.message);
    }

    handleClose(false);
  };

  return (
    <Dialog
      className={styles.dialog}
      open={!!position?.aladin}
      onClose={handleClose}
    >
      <div
        className={styles.anchor}
        style={{ top: position?.screen[1], left: position?.screen[0] }}
        ref={setReference}
      ></div>

      {position?.aladin && (
        <DialogPanel
          as="div"
          className={styles.panel}
          ref={setFloating}
          style={floatingStyles}
        >
          <Stack className={styles.text} space="0">
            <pre>ra: {position.formatted[0]}</pre>
            <pre>dec: {position.formatted[1]}</pre>
          </Stack>
          <IconButton
            className={styles.copy}
            onClick={handleCopyLink}
            disabled={!position.aladin}
            text={t("controls.get_a_link")}
            icon={<IconComposer size={14} icon="ShareCopyUrl" />}
          />
        </DialogPanel>
      )}
    </Dialog>
  );
};

CurrentPositionPopover.displayName = "Organism.CurrentPositionPopover";

export default CurrentPositionPopover;
