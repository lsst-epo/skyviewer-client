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
  HiPSImageFormat,
} from "@/types/aladin";
import defaultOptions from "@/fixtures/defaultAladinOptions";
import { useOnClickOutside } from "@/hooks/listeners";

interface AladinProps {
  fovRange?: Array<number>;
  imgFormat: HiPSImageFormat;
  survey: string;
  options?: AladinOptions;
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
> = ({ children, imgFormat, survey, fovRange = [2, 90], options = {} }) => {
  const [aladin, setAladin] = useState<AladinInstance | null>(null);
  const [A, setGlobalInstance] = useState<Aladin | null>(null);

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
      const { default: A } = await import("aladin-lite");

      if (!isUnmounted) {
        A.init.then(() => {
          const aladin: AladinInstance = A.aladin(
            renderRef?.current,
            Object.assign(defaultOptions, options)
          );
          renderRef?.current?.addEventListener("click", onFocus);
          aladin.setFoVRange(fovRange[0], fovRange[1]);

          setAladin(aladin);
        });
        setGlobalInstance(A);
      }
    })();

    return () => {
      isUnmounted = true;
      renderRef?.current?.removeEventListener("click", onFocus);
      setAladin(null);
      setGlobalInstance(null);
    };
  }, []);

  useOnClickOutside(renderRef, onBlur);

  return (
    <AladinContext.Provider
      value={{ aladin, A, setRef, ref: renderRef, hasFocus }}
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
