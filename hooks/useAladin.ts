import { useEffect, useLayoutEffect, useState } from "react";
import {
  Aladin,
  AladinInstance,
  AladinOptions,
  HiPSImageFormat,
} from "@/types/aladin";

interface UseAladinProps {
  selector: string | HTMLElement | null;
  imgFormat: HiPSImageFormat;
  fov: number;
  target: string;
  survey: string;
  options?: AladinOptions;
}

type UseAladin = (props: UseAladinProps) => any;

const useAladin: UseAladin = ({
  selector,
  survey,
  imgFormat,
  fov,
  target,
  options = {},
}) => {
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
    if (A && selector) {
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

        setAladin(aladin);
      });
    }
  }, [A]);

  return { aladin, A };
};

export default useAladin;
