/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
"use client";
import { useSearchParams } from "next/navigation";
import {
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  RefCallback,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLocalStorage, useOnClickOutside } from "usehooks-ts";
import staticAladinOptions from "@/fixtures/defaultAladinOptions";
import { clientInitialPosition } from "@/lib/helpers";
import { forceHiPSMinOrder } from "@/lib/aladin/helpers";
import { SurveyLayer } from "@/lib/schema/survey";
import AladinContext, { defaultValue } from "@/contexts/Aladin";
import styles from "./styles.module.css";

// Rubin HiPS only contain tiles for orders 3 and above (plus an order-3 Allsky
// preview), but their properties files do not declare hips_order_min. Without
// it, Aladin requests the non-existent order 0-2 tiles once zoomed out far
// enough and the imagery vanishes; declaring the minimum order makes Aladin
// fall back to the Allsky preview instead, so the covered sky stays visible at
// any zoom level.
const HIPS_MIN_ORDER = 3;

export interface AladinProps {
  menu?: ReactNode;
  fovRange?: Array<number>;
  options?: AladinOptions;
  disableInteraction?: boolean;
  initializeWithParams?: boolean;
  layers: Array<SurveyLayer>;
  debug?: boolean;
}

export const Aladin: FunctionComponent<PropsWithChildren<AladinProps>> = ({
  children,
  fovRange,
  disableInteraction = false,
  initializeWithParams = false,
  options = {},
  layers,
  menu,
  debug = false,
}) => {
  const searchParams = useSearchParams();
  const position = clientInitialPosition({ searchParams, fovRange });

  const [savedAladinOptions, setSavedAladinOptions] =
    useLocalStorage<AladinOptions>("aladin-options", {
      cooFrame: staticAladinOptions.cooFrame,
    });

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

        layers.reverse();

        const [base] = layers.splice(0, 1);

        global.init.then(() => {
          const createHiPS = (
            { path, maxOrder, imgFormat, tileSize }: SurveyLayer["survey"],
            { isBase = false } = {}
          ) => {
            const hips = global.HiPS(path, {
              maxOrder,
              imgFormat,
              tileSize,
              successCallback: () => {
                if (debug) {
                  console.info("Loaded", path);
                }
              },
              errorCallback: () => {
                if (debug) {
                  console.info("Error loading", path);
                }
              },
            });

            // Only the base layer falls back to the Allsky preview: the
            // preview's uncovered cells are opaque black (no alpha channel),
            // which is invisible against the black sky for the base but would
            // black out everything beneath an overlay.
            return isBase ? forceHiPSMinOrder(hips, HIPS_MIN_ORDER) : hips;
          };

          const instance = global.aladin(node, {
            ...staticAladinOptions,
            ...savedAladinOptions,
            ...options,
            survey: createHiPS(base.survey, { isBase: true }),
            ...(initializeWithParams && position),
          });

          if (debug) {
            instance.on("layerChanged", (layer, stack, action) => {
              console.info({ layer, stack, action });
            });
          }

          if (fovRange) {
            instance.setFoVRange(fovRange[0], fovRange[1]);
          }

          layers.forEach(({ id, survey }) => {
            const { opacity, showOnLoad, optionalLayer } = survey;
            const hips = createHiPS(survey);

            let effectiveOpacity = opacity;
            if (optionalLayer) {
              effectiveOpacity = showOnLoad ? opacity : 0;
            }

            hips.setOpacity(effectiveOpacity);

            instance.setOverlayImageLayer(hips, id);
          });

          if (debug) {
            console.info(instance);
          }

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

  const handleSaveOptions = useCallback(
    (options: Partial<AladinOptions>) => {
      setSavedAladinOptions({ ...savedAladinOptions, ...options });
    },
    [setSavedAladinOptions]
  );

  const value = useMemo(() => {
    return isLoading || !aladin.current || !A.current
      ? defaultValue
      : {
          aladin: aladin.current,
          A: A.current,
          hasFocus,
          isLoading,
          saveOptions: handleSaveOptions,
        };
  }, [isLoading, hasFocus]);

  return (
    <AladinContext.Provider value={value}>
      {menu}
      <div className={styles.aladinWrapper}>
        <div
          className={styles.aladin}
          data-loaded={!isLoading}
          data-allow-interaction={!disableInteraction}
          ref={onMounted}
          onFocus={onFocus}
          onClick={onFocus}
          onBlur={onBlur}
          role="presentation"
        />
        {children}
      </div>
    </AladinContext.Provider>
  );
};

Aladin.displayName = "Organism.Aladin";

export default Aladin;
