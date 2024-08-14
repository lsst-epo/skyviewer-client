"use client";
import {
  createContext,
  FunctionComponent,
  MutableRefObject,
  PropsWithChildren,
  RefCallback,
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  Aladin,
  AladinInstance,
  AladinOptions,
  ImageHiPSOptions,
} from "@/types/aladin";
import defaultOptions, {
  defaultHiPSOptions,
} from "@/fixtures/defaultAladinOptions";
import { useOnClickOutside } from "@/hooks/listeners";

interface AladinProps {
  fovRange?: Array<number>;
  options?: AladinOptions;
  hipsConfig: {
    id: string;
    options: ImageHiPSOptions;
  };
}

interface AladinContextValue {
  aladin: AladinInstance | null;
  A: Aladin | null;
  setRef: RefCallback<HTMLElement>;
  ref: MutableRefObject<HTMLElement | null>;
  hasFocus: boolean;
}

const AladinContext = createContext<AladinContextValue | null>(null);

export const AladinProvider: FunctionComponent<
  PropsWithChildren<AladinProps>
> = ({ children, fovRange = [2, 90], hipsConfig, options = {} }) => {
  const A = useRef<Aladin | null>(null);
  const aladin = useRef<AladinInstance | null>(null);

  const [hasFocus, setFocus] = useState(false);

  const renderRef = useRef<HTMLElement | null>(null);
  const setRef: RefCallback<HTMLElement> = useCallback((node: HTMLElement) => {
    renderRef.current = node;
  }, []);

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  useLayoutEffect(() => {
    let isUnmounted = false;

    (async () => {
      const global: Aladin = (await import("aladin-lite")).default;

      if (!isUnmounted) {
        global.init.then(() => {
          const newInstance: AladinInstance = global.aladin(
            renderRef?.current || "",
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
          renderRef?.current?.addEventListener("click", onFocus);

          A.current = global;
          aladin.current = newInstance;
        });
      }
    })();

    return () => {
      isUnmounted = true;
      renderRef?.current?.removeEventListener("click", onFocus);
      aladin.current = null;
      A.current = null;
    };
  }, []);

  useOnClickOutside(renderRef, onBlur);

  return (
    <AladinContext.Provider
      value={{
        aladin: aladin.current,
        A: A.current,
        setRef,
        ref: renderRef,
        hasFocus,
      }}
    >
      {children}
    </AladinContext.Provider>
  );
};

export const useAladin = () => {
  const context = useContext(AladinContext);

  if (context) {
    return context;
  } else {
    throw new Error("Must be used inside of an AladinProvider");
  }
};

export default AladinContext;
