"use client";
import { FunctionComponent, useRef, useState } from "react";
import defaultOptions from "@/fixtures/defaultAladinOptions";
import defaultFilters from "@/fixtures/defaultExplorerFilters";
import { ExplorerProvider } from "@/contexts/Explorer";
import { AladinProvider } from "@/contexts/Aladin";
import { FiltersProvider } from "@/contexts/Filters";
import Aladin from "@/components/explorer/Aladin";
import { AladinOptions, HiPSImageFormat } from "types/aladin";

interface ExplorerProps {
  survey: string;
  target: string;
  imgFormat: HiPSImageFormat;
  fov: number;
  fovRange: Array<number>;
  options: AladinOptions;
}

const Explorer: FunctionComponent<ExplorerProps> = ({
  options = defaultOptions,
  survey,
  fov = 20,
  fovRange,
  target,
  imgFormat,
}) => {
  const [filters, setFilters] = useState(defaultFilters);
  // const aladinRef = useRef<HTMLDivElement>(null);
  const [aladinRef, setAladinRef] = useState<HTMLDivElement | null>(null);

  console.log({ aladinRef });

  return (
    <AladinProvider
      {...{
        selector: aladinRef,
        survey,
        imgFormat,
        fov,
        target,
        options,
      }}
    >
      <ExplorerProvider {...{ zoomLevel: fov, zoomRange: fovRange }}>
        <div ref={(node) => setAladinRef(node)} />
      </ExplorerProvider>
    </AladinProvider>
  );
};

export default Explorer;
