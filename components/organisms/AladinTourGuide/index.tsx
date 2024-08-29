"use client";
import {
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { useAladin } from "@/contexts/Aladin";
import { useSearchParams } from "next/navigation";
import AladinCanvas from "@/components/primitives/AladinCanvas";
import AladinOverlay from "@/components/primitives/AladinOverlay";
import PoiDescription from "@/components/molecules/PoiDescription";
import styles from "./styles.module.css";

interface AstroObject {
  astroObjectId: string;
  characteristics: string;
  dec: number;
  ra: number;
  title: string;
}

interface TourPoi {
  id: string;
  description: string;
  fov: number;
  astroObject: Array<AstroObject>;
}

interface AladinTourGuideProps {
  poiIndex: number;
  title?: string;
  tourPois: Array<TourPoi>;
  controls?: ReactNode;
  config?: {
    zoomOutFov?: number;
    transitionTimeZoom?: number;
    transitionTimeMove?: number;
  };
}

const AladinTourGuide: FunctionComponent<AladinTourGuideProps> = ({
  title,
  tourPois,
  poiIndex,
  controls,
  config = {},
}) => {
  const {
    zoomOutFov = 10,
    transitionTimeZoom = 0.5,
    transitionTimeMove = 1.8,
  } = config;

  const firstRender = useRef(true);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const { aladin, isLoading } = useAladin();
  const poi = tourPois[currentIndex || 0];

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      setCurrentIndex(poiIndex);
      return;
    }

    if (!isLoading && poiIndex !== currentIndex) {
      const targetPoi = tourPois[poiIndex];
      const { astroObject, fov } = targetPoi;
      if (!astroObject || astroObject?.length < 1) return;
      const { ra, dec } = astroObject[0];

      aladin?.zoomToFoV(zoomOutFov, transitionTimeZoom, () => {
        aladin?.animateToRaDec(ra, dec, transitionTimeMove, () => {
          aladin?.zoomToFoV(fov, transitionTimeZoom, () => {
            setCurrentIndex(poiIndex);
          });
        });
      });
    }
  }, [isLoading, poiIndex]);

  return (
    <>
      <AladinCanvas showLogo={false} />
      <AladinOverlay className={styles.tourOverlay}>
        <PoiDescription
          isOpen={currentIndex === poiIndex}
          tourTitle={title}
          title={poi?.astroObject[0]?.title}
          description={poi?.description}
        />
        {controls}
      </AladinOverlay>
    </>
  );
};

AladinTourGuide.displayName = "Organism.AladinTourGuide";

export default AladinTourGuide;
