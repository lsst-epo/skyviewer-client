"use client";
import { useState, FunctionComponent, useCallback } from "react";
import { addCats } from "./utilities";
import { useAladin } from "@/contexts/Aladin";
import SourceDetails from "@/components/explorer/SourceDetails";
import {
  getAstroObjectContent,
  getAstroObjectData,
} from "@/services/api/astroObject";
import { getPixelPosition } from "@/lib/aladin/helpers";
import { Catalog } from "@/services/api/catalogs/schema";

interface CatalogProps {
  catalogs?: Array<Catalog>;
  onCatalogsAdded?: (catalogs: AladinCatalog[]) => void
}

const Catalogs: FunctionComponent<CatalogProps> = ({
  catalogs,
  onCatalogsAdded
}) => {
  const [sourceData, setSourceData] = useState<any>(null);
  const [additionalSourceData, setAdditionalSourceData] = useState<
    Record<string, any>
  >({});

  const showSourceDetails: ObjectClickedCallback = async (event) => {
    if (!event) return;

    const { data, ra, dec } = event;
    const { id } = data;
    if (!id) return;

    const additionalData = additionalSourceData[id];
    const position = pixelPosition({ ra, dec });

    setSourceData({ ...data, ...additionalData, position });

    if (!additionalData) {
      Promise.all([getAstroObjectContent(id), getAstroObjectData(id)]).then(
        (dataArray) => {
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

          if (sourceData?.id === id) {
            setSourceData({
              ...data,
              ...remoteAdditionalData,
              position,
            });
          }
        }
      );
    }
  };

  const repositionPopup = useCallback(() => {
    if (!sourceData || !aladin) return;

    const { _RA: ra, _DEC: dec } = sourceData;

    setSourceData({
      ...sourceData,
      position: pixelPosition({ ra, dec }),
    });
  }, [sourceData]);

  const onLoaded = useCallback(
   async ({ aladin, A }) => {
      if (catalogs) {
        const addedCatalogs = await addCats(A, aladin, catalogs);
        onCatalogsAdded?.(addedCatalogs)
      }
    },
    [catalogs, onCatalogsAdded]
  );

  const { aladin } = useAladin({
    callbacks: {
      onObjectClicked: showSourceDetails,
      onResizeChanged: repositionPopup,
      onLoaded,
    },
  });

  const pixelPosition = ({ ra, dec }: { ra: number; dec: number }) => {
    return aladin ? getPixelPosition(aladin, { ra, dec }) : [];
  };

  const hideSourceDetails = () => {
    setSourceData(null);
  };

  return (
    <SourceDetails
      data={sourceData}
      setData={setSourceData}
      handleClose={hideSourceDetails}
    />
  );
};

Catalogs.displayName = "Organisms.Catalogs";

export default Catalogs;
