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
import { SurveyLayer } from "@/lib/schema/survey";
import AladinContext, { defaultValue } from "@/contexts/Aladin";
import styles from "./styles.module.css";

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
          const instance = global.aladin(node, {
            ...staticAladinOptions,
            ...savedAladinOptions,
            ...options,
            survey: base.survey.path,
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

          layers.forEach(
            ({
              id,
              survey: {
                path,
                opacity,
                maxOrder,
                imgFormat,
                tileSize,
                showOnLoad,
                optionalLayer
              },
            }) => {
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

              let effectiveOpacity = opacity;
              if(optionalLayer) {
                effectiveOpacity = showOnLoad ? opacity : 0;
              }

              hips.setOpacity(effectiveOpacity);

              instance.setOverlayImageLayer(hips, id);
            }
          );

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
    // exhaustively: debug, initializeWithParams, layers, options, position,
    // savedAladinOptions, signature, zoomRange. All of them are read to build
    // the instance once and must not re-run this: it is a ref callback, so a
    // new identity makes React call it with null and then the node again,
    // building a second aladin. Aladin instances cannot be destroyed (View
    // .redraw re-arms its own requestAnimationFrame and nothing releases the
    // WebGL context), so that leaks contexts until the browser refuses more.
    // Later changes go through the swap effect above instead
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSaveOptions = useCallback(
    (options: Partial<AladinOptions>) => {
      // merge through the updater rather than the captured value: this
      // callback is memoized on a stable setter, so it would keep merging
      // into the savedAladinOptions of the render that created it and drop
      // every option saved since
      setSavedAladinOptions((saved) => ({ ...saved, ...options }));
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
    // the refs are deliberately not dependencies — they are populated during
    // initialization, and isLoading flipping false is what republishes them
  }, [isLoading, hasFocus, handleSaveOptions]);

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
