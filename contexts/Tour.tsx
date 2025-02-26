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
import { getTourPois } from "@/services/api/tours";
import { useAladin } from "./Aladin";
import { isAtLocation } from "@/lib/aladin/helpers";
import { pan, panAndZoom } from "@/lib/aladin/animation";

type PoiSteps = NonNullable<Awaited<ReturnType<typeof getTourPois>>>;
type PoiStep = PoiSteps[number];

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

const isNarrowScreen = () => window.matchMedia("(width < 1130px)").matches;

const adjustPositionForScreen = ({ aladin }: { aladin: AladinInstance }) => {
  if (isNarrowScreen()) {
    const duration =
      parseFloat(
        window
          .getComputedStyle(document.body)
          .getPropertyValue("--time-transition-slow")
      ) || 0.4;

    const start = aladin.getRaDec();
    const [width, height] = aladin.getSize();
    const centerX = width / 2;
    const centerY = height * 0.75;

    const end = aladin.pix2world(centerX, centerY);

    pan({
      start: { ra: start[0], dec: start[1] },
      end: { ra: end[0], dec: end[1] },
      duration,
      aladin,
    });
  }
};

const nextAnimation = ({
  currentPoi,
  nextPoi,
  pois,
}: {
  currentPoi: number;
  nextPoi: number;
  pois: PoiSteps;
}) => {
  const direction = nextPoi < currentPoi ? "backward" : "forward";
  const animationIndex = direction === "forward" ? nextPoi - 2 : nextPoi - 1;
  const { zoomOutTime, zoomInTime, panTime, zoomOutFov } = pois[animationIndex];

  return {
    zoomInTime: direction === "backward" ? zoomOutTime : zoomInTime,
    zoomOutFov,
    zoomOutTime: direction === "backward" ? zoomInTime : zoomOutTime,
    panTime,
  };
};

export const TourProvider: FC<PropsWithChildren<TourProviderProps>> = ({
  pois,
  children,
}) => {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const poiParam = searchParams.get("poi");
  const poi = poiParam ? parseInt(poiParam) : undefined;
  const limit = pois.length;

  const [currentPoi, setCurrentPoi] = useState<number | null>(null);
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    if (typeof poi !== "undefined" && currentPoi === null && !isLoading) {
      setCurrentPoi(poi);
      setPending(false);
      adjustPositionForScreen({ aladin });
    }
  }, [poi]);

  const onLoaded = useCallback<
    NonNullable<AdditionalAladinCallbacks["onLoaded"]>
  >(({ aladin }) => {
    if (poi) {
      endTransition({ poi, aladin });
    }
  }, []);

  const { isLoading, aladin } = useAladin({
    callbacks: { onLoaded },
  });

  const endTransition = ({
    poi: nextPoi,
    aladin,
  }: {
    poi: number;
    aladin: AladinInstance;
  }) => {
    if (searchParams.get("poi") !== nextPoi.toString()) {
      const params = new URLSearchParams(searchParams);
      params.set("poi", nextPoi.toString());
      push(`?${params.toString()}`);
    }

    setCurrentPoi(nextPoi);
    setPending(false);
    adjustPositionForScreen({ aladin });
  };

  const startTransition = ({ poi }: { poi: number }) => {
    if (!isLoading) {
      setPending(true);

      if (currentPoi) {
        const targetPoi = pois[poi - 1];

        const {
          fov,
          object: { ra, dec },
        } = targetPoi;

        const currentPosition = aladin.getRaDec();

        if (currentPoi && !isAtLocation(currentPosition, [ra, dec])) {
          const { zoomOutTime, zoomOutFov, zoomInTime, panTime } =
            nextAnimation({
              currentPoi,
              nextPoi: poi,
              pois,
            });

          panAndZoom({
            fov: { start: aladin.getFov()[0], middle: zoomOutFov, end: fov },
            position: {
              start: { ra: currentPosition[0], dec: currentPosition[1] },
              end: { ra, dec },
            },
            duration: [zoomOutTime, panTime, zoomInTime],
            aladin,
            onComplete: () => endTransition({ poi, aladin }),
          });
        } else {
          endTransition({ poi, aladin });
        }
      } else {
        endTransition({ poi, aladin });
      }
    }
  };

  const nextPoi = () => {
    console.log({ currentPoi });
    if (currentPoi) {
      if (currentPoi < limit) {
        startTransition({ poi: currentPoi + 1 });
      } else {
        push("/");
      }
    } else {
      startTransition({ poi: 1 });
    }
  };

  const previousPoi = () => {
    if (currentPoi && currentPoi > 1) {
      startTransition({ poi: currentPoi - 1 });
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

export const useTour: (props?: UseAladinProps) => TourContextValue = () => {
  const context = useContext(TourContext);

  if (context) {
    return context;
  } else {
    throw new Error("Must be used inside of a TourProvider");
  }
};

export default TourContext;
