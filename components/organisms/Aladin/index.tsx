"use client";
import {
  FunctionComponent,
  PropsWithChildren,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import defaultOptions, {
  defaultHiPSOptions,
} from "@/fixtures/defaultAladinOptions";
import { useOnClickOutside } from "@/hooks/listeners";
import AladinContext, { defaultValue } from "@/contexts/Aladin";
import styles from "./styles.module.css";

interface AladinProps {
  fovRange?: Array<number>;
  options?: AladinOptions;
  hipsConfig: {
    id: string;
    options: ImageHiPSOptions;
  };
}

export const Aladin: FunctionComponent<PropsWithChildren<AladinProps>> = ({
  children,
  fovRange = [2, 90],
  hipsConfig,
  options = {},
}) => {
  const A = useRef<Aladin | null>(null);
  const aladin = useRef<AladinInstance | null>(null);

  const [hasFocus, setFocus] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const ref = useRef<HTMLDivElement>(null);

  const onFocus = () => {
    if (!hasFocus) {
      setFocus(true);
    }
  };

  const onBlur = () => {
    if (hasFocus) {
      setFocus(false);
    }
  };

  useLayoutEffect(() => {
    let isUnmounted = false;

    (async () => {
      const global: Aladin = (await import("aladin-lite")).default;

      if (!isUnmounted) {
        global.init.then(() => {
          const newInstance: AladinInstance = global.aladin(
            ref?.current || "",
            Object.assign(defaultOptions, options)
          );
          newInstance.setImageSurvey(
            global.imageHiPS(hipsConfig.id, {
              ...defaultHiPSOptions,
              ...hipsConfig.options,
              successCallback: () => {
                newInstance.setFoVRange(fovRange[0], fovRange[1]);
              },
            })
          );

          A.current = global;
          aladin.current = newInstance;
          setLoading(false);
        });
      }
    })();

    return () => {
      isUnmounted = true;
      aladin.current = null;
      A.current = null;
    };
  }, []);

  useOnClickOutside(ref, onBlur);

  const value =
    isLoading || !aladin.current || !A.current || !ref.current
      ? defaultValue
      : {
          aladin: aladin.current,
          A: A.current,
          hasFocus,
          isLoading: isLoading as false,
          ref,
        };

  return (
    <AladinContext.Provider value={value}>
      <div
        className={styles.aladinContainer}
        data-loaded={!isLoading}
        ref={ref}
        onFocus={onFocus}
        onClick={onFocus}
        onBlur={onBlur}
        tabIndex={-1}
      />
      {children}
    </AladinContext.Provider>
  );
};

Aladin.displayName = "Organism.Aladin";

export default Aladin;
