"use client";
import { FC, useEffect, useId, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import revalidate from "@/services/actions/revalidate";
import styles from "./styles.module.css";

const RevalidateCurrentPath: FC<{ token: string }> = ({ token }) => {
  const id = useId();
  const [showTooltip, setShowTooltip] = useState(false);
  const [revalidationState, setRevalidationState] = useState<{
    state: "success" | "error";
    message: string;
  }>();
  const { t } = useTranslation();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    setRevalidationState(undefined);
  }, [pathname]);

  useEffect(() => {
    if (searchParams) {
      const paths = searchParams.getAll("paths");

      if (paths.includes(pathname)) {
        setRevalidationState({
          state: "success",
          message: t("preview_mode.revalidate", {
            context: "success",
            pathname,
          }),
        });
      }

      router.replace({ pathname, query: {} });
    }
  }, [searchParams]);

  const handleRevalidate = async () => {
    await revalidate({ uri: pathname, token });
  };

  return (
    <div className={styles.revalidation}>
      <output htmlFor={id} className={styles.output}>
        <Transition show={!isPending && !!revalidationState}>
          <span className={styles.outputText}>
            {revalidationState?.message}
          </span>
        </Transition>
      </output>
      <div className={styles.buttonWrapper}>
        <button
          id={id}
          aria-describedby={`${id}-description`}
          className={styles.button}
          onClick={() => {
            setRevalidationState(undefined);
            startTransition(handleRevalidate);
          }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          disabled={isPending}
        >
          {t("preview_mode.revalidate")}
        </button>
        <Transition unmount={false} show={showTooltip}>
          <div id={`${id}-description`} className={styles.panel}>
            {t("preview_mode.revalidate_tooltip")}
          </div>
        </Transition>
      </div>
    </div>
  );
};

RevalidateCurrentPath.displayName = "Organism.PreviewMode.Revalidate";

export default RevalidateCurrentPath;
