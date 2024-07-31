"use client";
import { FunctionComponent, useState } from "react";
import defaultFilters from "@/fixtures/defaultExplorerFilters";
import { ExplorerProvider } from "@/contexts/Explorer";
import { AladinProvider } from "@/contexts/Aladin";
import { FiltersProvider } from "@/contexts/Filters";
import Aladin from "@/components/organisms/Aladin";
import { AladinOptions, HiPSImageFormat } from "types/aladin";
import { Catalog } from "@/types/catalog";

interface ExplorerProps {
  catalogs: Array<Catalog>;
  survey: string;
  target: string;
  imgFormat: HiPSImageFormat;
  fov: number;
  fovRange: Array<number>;
  options: AladinOptions;
}

const Explorer: FunctionComponent<ExplorerProps> = ({
  options,
  survey,
  fov = 20,
  fovRange,
  target,
  imgFormat,
  catalogs,
}) => {
  const [filters, setFilters] = useState(defaultFilters);

  return (
    <AladinProvider
      {...{
        survey,
        imgFormat,
        fov,
        target,
        options,
      }}
    >
      <ExplorerProvider {...{ zoomLevel: fov, zoomRange: fovRange }}>
        <Aladin {...{ fov, fovRange, target, options, catalogs }} />
      </ExplorerProvider>
    </AladinProvider>
  );
};

export default Explorer;
