/* eslint-disable react/jsx-key, jsx-a11y/anchor-has-content */
import { FC, FormEventHandler, useId, useState } from "react";
import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";
import { z } from "zod";
import { CloseButton, Dialog, DialogPanel } from "@headlessui/react";
import {
  AnimatePresence,
  motion,
  TargetAndTransition,
  Transition,
} from "motion/react";
import { IoSearchOutline, IoClose } from "react-icons/io5";
import Skeleton from "react-loading-skeleton";
import { viewAsParams } from "@/lib/aladin/helpers";
import { position } from "@/lib/schema/astro";
import useAladinMove from "@/hooks/useAladinMove";
import { useAladin } from "@/contexts/Aladin";
import IconButton from "@/components/atomic/IconButton";
import styles from "./styles.module.css";
import clsx from "clsx";

const TargetSchema = z
  .string()
  .transform((output) => output.split(" ").map(parseFloat))
  .pipe(position)
  .transform((output) => {
    return { ra: output[0], dec: output[1] };
  });

interface FoundTarget {
  name?: string;
  ra: number;
  dec: number;
}

interface SearchProps {
  buttonClassName?: string;
  className?: string;
}

const Search: FC<SearchProps> = ({ buttonClassName, className }) => {
  const { A } = useAladin();
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const id = useId();
  const [pending, setPending] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [found, setFound] = useState<FoundTarget | null>(null);
  const [input, setInput] = useState<string>("");
  const { format } = new Intl.NumberFormat(language, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 5,
    unit: "degree",
  });
  const panAndGo = useAladinMove();

  const closeSearchBar = (value = false) => {
    if (error) {
      setInput("");
      setError(null);
      setFound(null);
    }

    setPending(value);
    setOpen(value);
  };

  const openSearchBar = () => {
    setOpen(true);
  };

  const toggleSearchBar = () => {
    if (isOpen) {
      closeSearchBar();
    } else {
      openSearchBar();
    }
  };

  const showError = (error: string) => {
    setFound(null);
    setPending(false);
    setError(error);
  };

  const goToPosition = ({ name, ...position }: FoundTarget) => {
    setFound({ ...position, name });
    setPending(false);
    panAndGo(position);
  };

  const resolveSearch = (search: string) => {
    const isObjectName = /[a-zA-Z]/.test(search);

    if (isObjectName) {
      A?.Utils.Sesame.resolveAstronomicalName(
        search,
        (position) => {
          if (Number.isNaN(position.ra) || Number.isNaN(position.dec)) {
            showError(t("menu.search.error", { context: "object", search }));
          } else {
            goToPosition({ ...position, name: search });
          }
        },
        () => {
          showError(t("menu.search.error", { context: "object", search }));
        }
      );
    } else {
      const { data: position, error } = TargetSchema.safeParse(search);

      if (error) {
        showError(t("menu.search.error", { context: "coordinate" }));
      } else {
        goToPosition(position);
      }
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setError(null);
    setPending(true);

    if (input && typeof input === "string") {
      resolveSearch(input);
    }
  };

  const animations: Record<
    string,
    {
      initial: TargetAndTransition;
      animate: TargetAndTransition;
      exit: TargetAndTransition;
      transition: Transition;
    }
  > = {
    dialog: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    controls: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const hasCancel = input.length > 0;

  return (
    <>
      <IconButton
        text={t("menu.search.open")}
        onClick={toggleSearchBar}
        icon={<IoSearchOutline />}
        data-open={isOpen}
        className={clsx(styles.toggleButton, buttonClassName)}
      />
      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            open={isOpen}
            className={clsx(styles.dialog, className)}
            onClose={closeSearchBar}
          >
            <DialogPanel className={styles.panel}>
              <motion.div className={styles.backdrop} {...animations.dialog} />
              <div className={styles.formWrapper}>
                <motion.form
                  className={styles.form}
                  initial={{ width: "var(--size-spacing-l)" }}
                  animate={{ width: "100%" }}
                  exit={{ width: "var(--size-spacing-l)" }}
                  transition={animations.dialog.transition}
                  onSubmit={handleSubmit}
                >
                  <button type="submit" className={styles.searchIcon}>
                    <IoSearchOutline />
                  </button>
                  <input
                    className={styles.searchInput}
                    name="search"
                    type="search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={pending}
                    required
                    placeholder={t("menu.search.placeholder")}
                    autoComplete="off"
                    aria-describedby={id}
                  />
                  <AnimatePresence propagate>
                    {hasCancel && (
                      <CloseButton
                        as={motion.button}
                        className={styles.closeButton}
                        {...animations.controls}
                      >
                        <IoClose />
                      </CloseButton>
                    )}
                  </AnimatePresence>
                </motion.form>
                {hasCancel && (
                  <AnimatePresence propagate>
                    <CloseButton
                      as={motion.button}
                      className={styles.cancelButton}
                      initial={{ x: 15, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 15, opacity: 0 }}
                      transition={animations.controls.transition}
                    >
                      {t("navigation.cta.cancel")}
                    </CloseButton>
                  </AnimatePresence>
                )}
              </div>

              <motion.div className={styles.info} {...animations.dialog}>
                <hr className={styles.hr} />
                <output>
                  {pending ? (
                    <div>
                      <Skeleton />
                      <Skeleton width="50%" />
                    </div>
                  ) : (
                    <>
                      {error}
                      {found && (
                        <Trans
                          i18nKey="menu.search.found"
                          values={{
                            name: found.name,
                            position: `${format(found.ra)}° ${format(
                              found.dec
                            )}°`,
                          }}
                          components={[
                            <Link
                              className={styles.outputPosition}
                              onClick={() => {
                                panAndGo(found);
                              }}
                              href={{
                                query: viewAsParams({
                                  target: [found.ra, found.dec],
                                }).toString(),
                              }}
                            />,
                          ]}
                          context={found.name ? "object" : "position"}
                        ></Trans>
                      )}
                    </>
                  )}
                </output>
                <div className={styles.helpText}>
                  <Trans i18nKey="menu.search.take_a_tour">
                    Don&apos;t know what to look for?
                    <Link href="/tours">Take a tour</Link>
                  </Trans>
                </div>
                <div id={id} className={styles.helpText}>
                  <Trans
                    i18nKey="menu.search.instructions"
                    components={[
                      <a
                        href="https://simbad.cds.unistra.fr/simbad/"
                        hrefLang="en"
                        target="_blank"
                        rel="noreferrer"
                      />,
                      <a
                        href="https://ned.ipac.caltech.edu/"
                        hrefLang="en"
                        target="_blank"
                        rel="noreferrer"
                      />,
                    ]}
                  >
                    Skyviewer searches common names using the
                    <a
                      href="https://simbad.cds.unistra.fr/simbad/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SIMBAD
                    </a>
                    and
                    <a
                      href="https://ned.ipac.caltech.edu/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      NED
                    </a>
                    astronomical databases and RA/DEC coordinates in decimal
                    format, ex. 186.2 7.0
                  </Trans>
                </div>
              </motion.div>
            </DialogPanel>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default Search;
