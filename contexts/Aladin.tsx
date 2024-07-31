import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  RefCallback,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import defaultOptions from "@/fixtures/defaultAladinOptions";
import {
  Aladin,
  AladinInstance,
  AladinOptions,
  HiPSImageFormat,
} from "@/types/aladin";

interface AladinProps {
  imgFormat: HiPSImageFormat;
  fov: number;
  target: string;
  survey: string;
  options?: AladinOptions;
}

interface AladinContextValue {
  aladin: AladinInstance | null;
  A: Aladin | null;
  ref: RefCallback<HTMLElement>;
}

const AladinContext = createContext<AladinContextValue | null>(null);

export const AladinProvider: FunctionComponent<
  PropsWithChildren<AladinProps>
> = ({ children, imgFormat, fov, target, survey, options = {} }) => {
  const [aladin, setAladin] = useState<AladinInstance | null>(null);
  const [A, setGlobalInstance] = useState<Aladin | null>(null);
  const renderRef = useRef<HTMLElement | null>(null);
  const setRef: RefCallback<HTMLElement> = useCallback((node: HTMLElement) => {
    renderRef.current = node;
  }, []);

  useLayoutEffect(() => {
    let isUnmounted = false;

    (async () => {
      const { default: instance } = await import("aladin-lite");
      if (!isUnmounted) {
        setGlobalInstance(instance);
      }
    })();

    return () => {
      isUnmounted = true;
      setGlobalInstance(null);
    };
  }, []);

  useEffect(() => {
    if (A && renderRef && renderRef?.current) {
      A.init.then(() => {
        const aladin = A.aladin(
          renderRef?.current,
          Object.assign(defaultOptions, {
            fov,
            target,
          })
        );
        aladin.setImageSurvey(
          A.imageHiPS(survey, {
            imgFormat,
            maxOrder: 11,
            cooFrame: "ICRS",
          })
        );

        setAladin(aladin);
      });
    }
  }, [A, renderRef]);

  return (
    <AladinContext.Provider value={{ aladin, A, ref: setRef }}>
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
