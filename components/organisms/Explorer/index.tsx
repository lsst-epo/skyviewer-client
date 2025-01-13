"use client";
import { useEffect, useState, FunctionComponent } from "react";
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
import { getPixelPosition } from "@/lib/aladin/helpers";

interface AladinProps {
  catalogs?: Array<Catalog>;
  markerLayers?: Array<any>;
  jpgs?: Array<any>;
}

const Explorer: FunctionComponent<AladinProps> = ({ catalogs, jpgs }) => {
  const { A, aladin, ref } = useAladin();
  const [additionalSourceData, setAdditionalSourceData] = useState<
    Record<string, any>
  >({});
  const [sourceData, setSourceData] = useState<any>(null);

  useResizeObserver({
    ref,
    onResize: () => {
      if (!sourceData || !aladin) return;

      const { _RA: ra, _DEC: dec } = sourceData;

      setSourceData({
        ...sourceData,
        position: getPixelPosition(aladin, { ra, dec }),
      });
    },
  });

  useEffect(() => {
    if (!aladin || !A) return;

    // Update Catalogs
    if (catalogs) {
      addCats(A, aladin, catalogs);
    }
  }, [A, aladin, catalogs]);

  const showSourceDetails: ObjectClickedHandler = async (event) => {
    if (!event) return;
    const { data, ra, dec } = event;
    const { id } = data;
    const additionalData = additionalSourceData[id];
    const position = aladin ? getPixelPosition(aladin, { ra, dec }) : [];

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
