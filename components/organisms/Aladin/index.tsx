/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
"use client";
import {
  FunctionComponent,
  PropsWithChildren,
  RefCallback,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import defaultOptions, {
  defaultHiPSOptions,
} from "@/fixtures/defaultAladinOptions";
import { SurveyLayer } from "@/lib/schema/survey";
import { useOnClickOutside } from "usehooks-ts";
import AladinContext, { defaultValue } from "@/contexts/Aladin";
import styles from "./styles.module.css";

export interface AladinProps {
  fovRange?: Array<number>;
  options?: AladinOptions;
  disableInteraction?: boolean;
  layers: Array<SurveyLayer>;
}

export const Aladin: FunctionComponent<PropsWithChildren<AladinProps>> = ({
  children,
  fovRange,
  disableInteraction = false,
  options = {},
  layers,
}) => {
  const A = useRef<A | null>(null);
  const aladin = useRef<Aladin | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const [hasFocus, setFocus] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  useOnClickOutside(ref, onBlur);

  const onMounted = useCallback<RefCallback<HTMLDivElement>>((node) => {
    if (node) {
      import("aladin-lite").then((module) => {
        const global: A = module.default;

        global.init.then(() => {
          const instance = global.aladin(node, {
            ...defaultOptions,
            ...options,
          });

          if (fovRange) {
            instance.setFoVRange(fovRange[0], fovRange[1]);
          }

          layers.reverse().forEach(({ id, survey: { path, ...survey } }, i) => {
            const hips = global.HiPS(path, {
              ...defaultHiPSOptions,
              ...survey,
            });

            if (i === 0) {
              if (!fovRange) {
                instance.setFoVRange(survey.fovRange[0], survey.fovRange[1]);
              }

              instance.setBaseImageLayer(hips);
            } else {
              instance.setOverlayImageLayer(hips, id);
            }
          });

          A.current = global;
          aladin.current = instance;
          ref.current = node;
          setLoading(false);
        });
      });
    }

    return () => {
      A.current = null;
      aladin.current = null;
      ref.current = null;
    };
  }, []);

  const value = useMemo(() => {
    return isLoading || !aladin.current || !A.current
      ? defaultValue
      : {
          aladin: aladin.current,
          A: A.current,
          hasFocus,
          isLoading,
        };
  }, [isLoading, hasFocus]);

  return (
    <AladinContext.Provider value={value}>
      <div
        className={styles.aladinContainer}
        data-loaded={!isLoading}
        data-allow-interaction={!disableInteraction}
        ref={onMounted}
        onFocus={onFocus}
        onClick={onFocus}
        onBlur={onBlur}
        // tabIndex={-1}
        role="presentation"
      />
      {children}
    </AladinContext.Provider>
  );
};

Aladin.displayName = "Organism.Aladin";

export default Aladin;
