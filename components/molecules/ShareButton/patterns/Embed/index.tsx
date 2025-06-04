"use client";
import { IoIosCode, IoIosClose } from "react-icons/io";
import { forwardRef, MouseEventHandler, useState } from "react";
import { CloseButton, Dialog, DialogPanel } from "@headlessui/react";
import Center from "@rubin-epo/epo-react-lib/Center";
import ShareButton from "../..";
import EmbedGenerator from "@/components/molecules/EmbedGenerator";
import styles from "./styles.module.css";

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
              <CloseButton className={styles.close}>
                <IoIosClose size="1.5em" />
              </CloseButton>
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
