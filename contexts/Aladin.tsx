import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import {
  Aladin,
  AladinInstance,
  AladinOptions,
  HiPSImageFormat,
} from "@/types/aladin";

interface AladinProps {
  selector: string | HTMLElement | null;
  imgFormat: HiPSImageFormat;
  fov: number;
  target: string;
  survey: string;
  options?: AladinOptions;
}

interface AladinContextValue {
  aladin: AladinInstance;
  A: Aladin;
}

const AladinContext = createContext<AladinContextValue | null>(null);

export const AladinProvider: FunctionComponent<
  PropsWithChildren<AladinProps>
> = ({ children, selector, imgFormat, fov, target, survey, options = {} }) => {
  console.log({ selector });

  const [aladin, setAladin] = useState<AladinInstance | null>(null);
  const [A, setGlobalInstance] = useState<Aladin | null>(null);

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
    console.log({ A, selector });
    if (A && selector) {
      console.log({ selector });
      A.init.then(() => {
        const aladin = A.aladin(
          selector,
          Object.assign(options, {
            fov,
            target,
          })
        );

        aladin.setImageSurvey(
          A.imageHiPS(survey, {
            imgFormat,
            maxOrder: 11,
          })
        );

        console.log({ aladin });

        setAladin(aladin);
      });
    }
  }, [A, selector, fov, imgFormat, target, survey, options]);

  console.log({ A, aladin });

  return (
    <AladinContext.Provider value={{ aladin, A }}>
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
