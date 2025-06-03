"use client";
import { IoIosCode } from "react-icons/io";
import ShareButton from "../..";
import { forwardRef, MouseEventHandler, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import EmbedGenerator from "@/components/molecules/EmbedGenerator";
import styles from "./styles.module.css";
import Center from "@rubin-epo/epo-react-lib/Center";

interface EmbedProps {
  onShare: () => void;
  label: string;
}

const EmbedButton = forwardRef<HTMLButtonElement, EmbedProps>(
  ({ label }, ref) => {
    const [open, setOpen] = useState(false);
    const openEmbed: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.preventDefault();

      setOpen(true);
    };

    const handleClose = () => {};

    return (
      <>
        <ShareButton
          icon={<IoIosCode />}
          text={label}
          onClick={openEmbed}
          ref={ref}
        />
        <Dialog open={open} className={styles.dialog} onClose={setOpen}>
          <Center maxWidth="50ch" gutter="var(--size-spacing-xs)">
            <DialogPanel className={styles.panel}>
              <EmbedGenerator />
            </DialogPanel>
          </Center>
        </Dialog>
      </>
    );
  }
);

EmbedButton.displayName = "Molecule.Embed";

export default EmbedButton;
