"use client";
import { useEffect, useState, useRef, FunctionComponent } from "react";
import useResizeObserver from "use-resize-observer";
import { addCats } from "./utilities";
import { useAladin } from "@/contexts/Aladin";
import SourceDetails from "@/components/explorer/SourceDetails";
import {
  getAstroObjectContent,
  getAstroObjectData,
} from "@/lib/api/astroObject";
import { ObjectClickedHandler } from "@/types/aladin";
import AladinCanvas from "@/components/primitives/AladinCanvas";
import { Catalog } from "@/types/catalog";

interface AladinProps {
  catalogs?: Array<Catalog>;
  markerLayers?: Array<any>;
  jpgs?: Array<any>;
}

const Explorer: FunctionComponent<AladinProps> = ({
  catalogs,
  jpgs,
  ...props
}) => {
  const { A, aladin, ref } = useAladin();
  // const { filters } = useContext(FiltersContext) || {};
  const [additionalSourceData, setAdditionalSourceData] = useState<
    Record<string, any>
  >({});
  const [sourceData, setSourceData] = useState(null);
  const aladinReticleCanvas = useRef(null);

  console.log({ aladin });

  const { ref: aladinContainer } = useResizeObserver({
    onResize: () => {
      if (!sourceData) return;

      const currentSourceData = { ...sourceData };
      const { _RA: ra, _DEC: dec } = currentSourceData;

      currentSourceData.position = getPixelPos([ra, dec]);
      setSourceData(currentSourceData);
    },
  });

  useEffect(() => {
    if (!aladin || !A) return;

    // Update Catalogs
    if (catalogs) {
      addCats(A, aladin, catalogs);
    }
  }, [A, aladin, catalogs]);

  // useEffect(() => {
  //   if (!aladin) return;

  //   const { showGoals } = settings;

  //   toggleGoals(showGoals);
  // }, [settings]);

  // useEffect(() => {
  //   if (!aladin) return;

  //   aladin.view.catalogs.forEach((cat) => {
  //     cat.filterFn = filtersChecker;
  //     cat.reportChange();
  //   });

  //   // setSrcsInRegion(getSrcsInRegion(aladin.getFovCorners()));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [filters]);

  // function toggleGoals(show) {
  //   const cats = aladin.view.catalogs;
  //   const goalCats = cats.filter((cat) => {
  //     const { name } = cat;

  //     return name === "goal";
  //   });

  //   if (goalCats.length < 1) return;

  //   goalCats.forEach((cat) => {
  //     show ? cat.show() : cat.hide();
  //     cat.reportChange();
  //   });
  // }

  function getPixelPos(worldPos: Array<number>) {
    const [ra, dec] = worldPos;
    return Array.from(aladin?.world2pix(ra, dec)).reverse();
  }

  const showSourceDetails: ObjectClickedHandler = async (event) => {
    if (!event) return;
    const { data, ra, dec } = event;
    const { id } = data;
    const additionalData = additionalSourceData[id];
    const position = getPixelPos([ra, dec]);

    setSourceData({ ...data, ...additionalData, position });

    if (!additionalData) {
      const dataArray = await Promise.all([
        getAstroObjectContent(id),
        getAstroObjectData(id),
      ]);

      const remoteAdditionalData = dataArray.reduce((prev, curr) => {
        return {
          ...prev,
          ...curr.astroObject,
        };
      }, {});

      setAdditionalSourceData({
        ...additionalSourceData,
        [id]: remoteAdditionalData,
      });
      setSourceData({
        ...data,
        ...remoteAdditionalData,
        position,
      });
    }
  };

  const hideSourceDetails = () => {
    setSourceData(null);
  };

  // const addJpgs = (jpgs) => {
  //   jpgs.forEach((jpg) => {
  //     aladin.displayJPG(jpg);
  //   });
  // };

  // const filtersChecker = (source) => {
  //   const types = filters.types;
  //   const {
  //     distance: { value: distanceRange },
  //     brightness: { value: brightnessRange },
  //   } = filters.characteristics;
  //   const { type, brightness, distance } = source?.data;
  //   const [minDistance, maxDistance] = distanceRange;
  //   const [minBrightness, maxBrightness] = brightnessRange;

  //   if (
  //     !types[type] ||
  //     distance < minDistance ||
  //     distance > maxDistance ||
  //     brightness < minBrightness ||
  //     brightness > maxBrightness
  //   ) {
  //     return false;
  //   }

  //   return true;
  // };

  return (
    <>
      <SourceDetails
        data={sourceData}
        setData={setSourceData}
        handleClose={hideSourceDetails}
      />
      <AladinCanvas onObjectClicked={showSourceDetails} />
    </>
  );
};

Explorer.displayName = "Organisms.Explorer";

export default Explorer;
