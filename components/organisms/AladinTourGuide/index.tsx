"use client";
import { FunctionComponent, useEffect, useState } from "react";
import { useAladin } from "@/contexts/Aladin";
import { useSearchParams } from "next/navigation";
import AladinCanvas from "@/components/primitives/AladinCanvas";
import AladinOverlay from "@/components/primitives/AladinOverlay";
import PoiDescription from "@/components/molecules/PoiDescription";
import NavigationList from "@/components/molecules/NavigationList";
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
  data: {
    title: string;
    tourPois: Array<TourPoi>;
    factsContentBlocks: Array<any>;
    introContentBlocks: Array<any>;
  };
  tour: string;
  initialFoV: number;
}

const AladinTourGuide: FunctionComponent<AladinTourGuideProps> = ({
  data,
  tour,
  initialFoV,
}) => {
  const searchParams = useSearchParams();
  const poiIndex = parseInt(searchParams.get("poi") || "1") - 1;
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const { aladin } = useAladin();
  const poi = data.tourPois[currentIndex || 0];

  useEffect(() => {
    if (poiIndex !== currentIndex && aladin) {
      const targetPoi = data.tourPois[poiIndex];
      const { astroObject, fov } = targetPoi;
      if (!aladin || !astroObject || astroObject?.length < 1) return;
      const { ra, dec } = astroObject[0];

      aladin.zoomToFoV(initialFoV, 0.5, () => {
        aladin.animateToRaDec(ra, dec, 1.8, () => {
          aladin.zoomToFoV(fov, 0.5, () => {
            setCurrentIndex(poiIndex);
          });
        });
      });
    }
  }, [aladin, poiIndex]);

  const getNavLinks = (current: number, data) => {
    const { tourPois, factsContentBlocks, introContentBlocks } = data;
    const next = current < tourPois?.length - 1 ? current + 1 : null;
    const previous = current > 1 ? current - 1 : null;

    const lastStep = factsContentBlocks.length + introContentBlocks.length;

    return [
      {
        url:
          previous === null
            ? `/tours/${tour}/intro?step=${lastStep}`
            : `/tours/${tour}/tour?poi=${previous}`,
        text: "Back",
      },
      {
        url:
          next === null
            ? `/tours/${tour}/summary`
            : `/tours/${tour}/tour?poi=${next}`,
        text: "Next",
      },
    ];
  };

  return (
    <>
      <AladinCanvas />
      <AladinOverlay className={styles.tourOverlay}>
        <PoiDescription
          isOpen={currentIndex === poiIndex}
          tourTitle={data.title}
          title={poi?.astroObject[0]?.title}
          description={poi?.description}
        />
        <NavigationList
          className={styles.navigationList}
          links={getNavLinks(poiIndex + 1, data)}
        />
      </AladinOverlay>
    </>
  );
};

AladinTourGuide.displayName = "Organism.AladinTourGuide";

export default AladinTourGuide;
