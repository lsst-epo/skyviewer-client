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
import { useOnClickOutside } from "@/hooks/listeners";
import AladinContext, { defaultValue } from "@/contexts/Aladin";
import styles from "./styles.module.css";

export interface AladinProps {
  fovRange?: Array<number>;
  options?: AladinOptions;
  disableInteraction?: boolean;
  hipsConfig: {
    id: string;
    options: ImageHiPSOptions;
  };
}

export const Aladin: FunctionComponent<PropsWithChildren<AladinProps>> = ({
  children,
  fovRange = [2, 90],
  hipsConfig,
  disableInteraction = false,
  options = {},
}) => {
  const A = useRef<Aladin | null>(null);
  const aladin = useRef<AladinInstance | null>(null);

  const [hasFocus, setFocus] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [node, setNode] = useState<HTMLDivElement | null>(null);

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

  useOnClickOutside(node, onBlur);

  const onMounted = useCallback<RefCallback<HTMLDivElement>>((node) => {
    if (node) {
      import("aladin-lite").then((module) => {
        const global: Aladin = module.default;

        global.init.then(() => {
          const newInstance: AladinInstance = global.aladin(node, {
            ...defaultOptions,
            ...options,
            survey: hipsConfig.id,
          });

          newInstance.setBaseImageLayer(
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
          setNode(node);
        });
      });
    }

    return () => {
      A.current = null;
      aladin.current = null;
      setNode(null);
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
        tabIndex={-1}
      />
      {children}
    </AladinContext.Provider>
  );
};

Aladin.displayName = "Organism.Aladin";

export default Aladin;
