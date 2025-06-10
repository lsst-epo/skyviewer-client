/* eslint-disable react/jsx-key, jsx-a11y/anchor-has-content */
import { FC, FormEventHandler, useId, useRef, useState } from "react";
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

import clsx from "clsx/lite";
import { useRouter } from "@/lib/i18n/navigation";
import { viewAsParams } from "@/lib/aladin/helpers";
import { position } from "@/lib/schema/astro";
import useAladinMove from "@/hooks/useAladinMove";
import { useAladin } from "@/contexts/Aladin";
import IconButton from "@/components/atomic/IconButton";
import styles from "./styles.module.css";

const TargetSchema = z
  .string()
  .transform((output) => {
    return output.split(" ").map((value) => {
      const clean = value.replace(/(^[\s\u200b]*|[\s\u200b]*$)/g, "");
      return parseFloat(clean);
    });
  })
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
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
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
  const targetFov = 0.6;

  const clearSearch = () => {
    setInput("\u200b");
    setError(null);
    setFound(null);
  };

  const closeSearchBar = () => {
    clearSearch();

    setPending(false);
    setOpen(false);
  };

  const openSearchBar = () => {
    setOpen(true);
  };

  const toggleSearchBar = () => {
    if (isOpen) {
      closeSearchBar();
    } else {
      openSearchBar();

      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          // this is necessary for a headlessui bug that does not remove the portal
          // if no input has been put into the search area
          setInput("\u200b");
        }
      });
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
    panAndGo({
      ...position,
      fov: targetFov,
      onComplete: () => {
        router.push(
          `?${viewAsParams({
            target: [position.ra, position.dec],
            fov: targetFov,
          }).toString()}`
        );
      },
    });
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
      transition: { duration: 0.4, ease: "easeInOut", type: "tween" },
    },
    controls: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const isEditing = input?.length > 0;

  return (
    <>
      <IconButton
        styleAs="none"
        text={t("menu.search.open")}
        onClick={toggleSearchBar}
        icon={<IoSearchOutline />}
        className={clsx(styles.toggleButton, buttonClassName)}
      />
      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            open={isOpen}
            className={clsx(styles.dialog, className)}
            onClose={() => closeSearchBar()}
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
                  <button
                    type="submit"
                    title={t("menu.search.submit")}
                    className={styles.searchIcon}
                  >
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
                    ref={inputRef}
                  />
                  <AnimatePresence propagate>
                    {isEditing && (
                      <motion.button
                        type="button"
                        title={t("menu.search.clear")}
                        className={styles.closeButton}
                        onClick={clearSearch}
                        {...animations.controls}
                      >
                        <IoClose />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </motion.form>
                <CloseButton
                  as={motion.button}
                  className={styles.cancelButton}
                  initial={{ x: 15, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 15, opacity: 0 }}
                  transition={animations.dialog.transition}
                  key={t("navigation.cta.cancel")}
                >
                  {t("navigation.cta.cancel")}
                </CloseButton>
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
                            <span className={styles.noWrap} />,
                            <Link
                              className={styles.noWrap}
                              href={{
                                query: viewAsParams({
                                  target: [found.ra, found.dec],
                                  fov: targetFov,
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
                    Skyviewer searches common names of astronomical objects,
                    e.g. “M49” or “Messier 49,” using the
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
                    astronomical databases. Skyviewer can also search on
                    coordinate locations of objects using right ascension (RA)
                    and declination (DEC) in decimal format, e.g. “186.2 7.0.”
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
