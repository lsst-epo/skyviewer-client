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

const transitionTime = 2;
const zoomTime = transitionTime / 2;

const isNarrowScreen = () => window.matchMedia("(width < 1130px)").matches;

const screenAdjustedPosition = ({
  aladin,
  position,
}: {
  aladin: AladinInstance;
  position: [number, number];
}) => {
  const [width, height] = position;
};

const adjustPositionForScreen = ({ aladin }: { aladin: AladinInstance }) => {
  if (isNarrowScreen()) {
    const descriptionTransitionTime =
      parseFloat(
        window
          .getComputedStyle(document.body)
          .getPropertyValue("--time-transition-slow")
      ) || 0.4;

    const [width, height] = aladin.getSize();
    const centerX = width / 2;
    const centerY = height * 0.75;

    const newPosition = aladin.pix2world(centerX, centerY);

    aladin.animateToRaDec(...newPosition, descriptionTransitionTime);
  } else {
  }
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

  const onLoaded = useCallback<
    NonNullable<AdditionalAladinCallbacks["onLoaded"]>
  >(({ aladin }) => {
    console.log({ poi });
    if (poi) {
      endTransition({ poi, aladin });
    }
  }, []);

  const { isLoading, aladin } = useAladin({
    callbacks: { onLoaded },
  });

  const endTransition = ({
    poi,
    aladin,
  }: {
    poi: number;
    aladin: AladinInstance;
  }) => {
    setCurrentPoi(poi);
    setPending(false);
    adjustPositionForScreen({ aladin });
  };

  const moveToPosition = ({
    aladin,
    fov,
    position,
    poi,
  }: {
    aladin: AladinInstance;
    fov: number;
    position: [number, number];
    poi: number;
  }) => {
    aladin.zoomToFoV(10, zoomTime, () =>
      aladin.animateToRaDec(...position, transitionTime, () =>
        aladin.zoomToFoV(fov, zoomTime, () => {
          endTransition({ poi, aladin });
        })
      )
    );
  };

  useEffect(() => {
    if (!isLoading && typeof poi !== "undefined") {
      const {
        fov,
        object: { ra, dec },
      } = pois[poi - 1];

      const currentPosition = aladin.getRaDec();
      const newPosition: [number, number] = [ra, dec];

      if (!isAtLocation(currentPosition, newPosition)) {
        moveToPosition({ aladin, fov, position: newPosition, poi });
      } else {
        endTransition({ poi, aladin });
      }
    }
  }, [poi]);

  const nextPoi = () => {
    setPending(true);
    const params = new URLSearchParams(searchParams);

    if (!poi) {
      params.set("poi", "1");
      push(`?${params.toString()}`);
    } else {
      if (poi < limit) {
        const position = poi + 1;
        params.set("poi", position.toString());
        push(`?${params.toString()}`);
      } else {
        push("/");
      }
    }
  };

  const previousPoi = () => {
    setPending(true);
    const params = new URLSearchParams(searchParams);

    if (poi && poi > 1) {
      const position = poi - 1;
      params.set("poi", position.toString());
      push(`?${params.toString()}`);
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
