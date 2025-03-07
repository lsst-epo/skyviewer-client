"use client";
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAudioPlayerContext } from "react-use-audio-player";
import { getTourPois } from "@/services/api/tours";
import { useAladin } from "./Aladin";
import { isAtLocation } from "@/lib/aladin/helpers";
import { adjustPositionForScreen, panAndZoom } from "@/lib/aladin/animation";

type PoiSteps = NonNullable<Awaited<ReturnType<typeof getTourPois>>>;
type PoiStep = PoiSteps[number];

interface Transition {
  between: [number | null, number];
  aladin: AladinInstance;
}

interface TourContextValue {
  isPending: boolean;
  nextPoi: () => void;
  previousPoi: () => void;
  currentPoi?: PoiStep;
  position: {
    current?: number;
    total: number;
  };
}

const TourContext = createContext<TourContextValue | null>(null);

interface TourProviderProps {
  pois: PoiSteps;
}

interface UseTourProps {}

export const TourProvider: FC<PropsWithChildren<TourProviderProps>> = ({
  pois,
  children,
}) => {
  const { push, prefetch } = useRouter();
  const searchParams = useSearchParams();

  const poiParam = searchParams.get("poi");
  const poi = poiParam ? parseInt(poiParam) : undefined;
  const limit = pois.length;

  const [currentPoi, setCurrentPoi] = useState<number | null>(poi || null);
  const [isPending, setPending] = useState(false);
  const { load, stop } = useAudioPlayerContext();

  const onLoaded = useCallback<
    NonNullable<AdditionalAladinCallbacks["onLoaded"]>
  >(({ aladin }) => {
    if (poi) {
      startTransition({ between: [null, poi], aladin });
    }
  }, []);

  const { isLoading, aladin } = useAladin({ callbacks: { onLoaded } });

  // update state when search param changes
  useEffect(() => {
    if (typeof poi !== "undefined" && !isLoading && poi !== currentPoi) {
      startTransition({ between: [currentPoi, poi], aladin });
    }
  }, [poi, isLoading]);

  const queueAudio = ({
    audio,
  }: {
    audio?: { src: string; format: string };
  }) => {
    if (audio) {
      stop();

      const { src, format } = audio;
      load(src, {
        loop: false,
        format,
      });
    }
  };

  const doAnimatedTransition = ({
    between: [from, to],
    aladin,
    onComplete,
  }: {
    between: [number, number];
    aladin: AladinInstance;
    onComplete?: VoidFunction;
  }) => {
    const toIndex = to - 1;
    const {
      fov,
      object: { ra, dec },
    } = pois[toIndex];

    const current = aladin.getRaDec();

    if (!isAtLocation(current, [ra, dec])) {
      const direction = to < from ? "backward" : "forward";
      const animationIndex = direction === "forward" ? toIndex - 1 : toIndex;
      const { zoomOutTime, zoomInTime, panTime, zoomOutFov } =
        pois[animationIndex];

      panAndZoom({
        fov: { start: aladin.getFov()[0], middle: zoomOutFov, end: fov },
        position: {
          start: { ra: current[0], dec: current[1] },
          end: { ra, dec },
        },
        duration: [zoomOutTime, panTime, zoomInTime],
        aladin,
        onComplete,
      });
    } else {
      onComplete && onComplete();
    }
  };

  const endTransition = ({ between: [, to], aladin }: Transition) => {
    if (searchParams.get("poi") !== to.toString()) {
      const params = new URLSearchParams(searchParams);
      params.set("poi", to.toString());
      push(`?${params.toString()}`);
    }

    setCurrentPoi(to);
    adjustPositionForScreen({ aladin });

    setPending(false);
  };

  const startTransition = ({ between: [from, to], aladin }: Transition) => {
    if (!isPending) {
      setPending(true);

      if (to > limit) {
        push("summary");
        return;
      }

      if (to < 1) {
        push("intro");
        return;
      }

      if (to === limit) {
        prefetch("summary");
      }

      queueAudio({
        audio: pois[to - 1].audio,
      });

      if (from !== null) {
        doAnimatedTransition({
          between: [from, to],
          aladin,
          onComplete: () => endTransition({ between: [from, to], aladin }),
        });
      } else {
        endTransition({ between: [from, to], aladin });
      }
    }
  };

  const nextPoi = () => {
    if (!isLoading) {
      if (currentPoi) {
        startTransition({ between: [currentPoi, currentPoi + 1], aladin });
      } else {
        startTransition({ between: [null, 1], aladin });
      }
    }
  };

  const previousPoi = () => {
    if (currentPoi && currentPoi > 1) {
      if (!isLoading) {
        startTransition({ between: [currentPoi, currentPoi - 1], aladin });
      }
    } else {
      push("intro");
    }
  };

  return (
    <TourContext.Provider
      value={{
        isPending,
        nextPoi,
        previousPoi,
        currentPoi: currentPoi === null ? undefined : pois[currentPoi - 1],
        position: { current: currentPoi || undefined, total: limit },
      }}
    >
      {children}
    </TourContext.Provider>
  );
};

export const useTour: (props?: UseTourProps) => TourContextValue = () => {
  const context = useContext(TourContext);

  if (context) {
    return context;
  } else {
    throw new Error("Must be used inside of a TourProvider");
  }
};

export default TourContext;
