import { useEffect, useState, useRef, FunctionComponent } from "react";
import useResizeObserver from "use-resize-observer";
import { addCats } from "./utilities";
import { useExplorerSettings } from "@/contexts/Explorer";
import { useAladin } from "@/contexts/Aladin";
import { AladinFocusProvider } from "@/contexts/AladinFocus";
import FiltersContext from "@/contexts/Filters";
import Controls from "@/components/explorer/Controls";
import SourceDetails from "@/components/explorer/SourceDetails";
import defaultFilters from "@/fixtures/defaultExplorerFilters";
import {
  getAstroObjectContent,
  getAstroObjectData,
} from "@/lib/api/astroObject";
import { AladinEvent, AladinInstance, AladinOptions } from "@/types/aladin";
import AladinCanvas from "@/components/primitives/AladinCanvas";
import { Catalog } from "@/types/catalog";

interface AladinProps {
  survey: Array<string> | Array<object>;
  target: string;
  fov: number;
  fovRange: Array<number>;
  options: AladinOptions;
  catalogs: Array<Catalog>;
  markerLayers: Array<any>;
  jpgs: Array<any>;
}

const Aladin: FunctionComponent<AladinProps> = ({
  fov,
  fovRange,
  catalogs,
  jpgs,
  ...props
}) => {
  const { settings } = useExplorerSettings();
  const [hasFocus, setHasFocus] = useState(false);
  const { A, aladin, ref } = useAladin();
  // const { filters } = useContext(FiltersContext) || {};
  const [sourceData, setSourceData] = useState(null);
  const aladinReticleCanvas = useRef(null);

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
    // if (!aladinReticleCanvas.current && aladinContainer.current) {
    //   setAladinReticleCanvas();
    // }
  });

  useEffect(() => {
    if (!aladin || !A) return;
    // Restrict FOV
    aladin.setFoVRange(fovRange[0], fovRange[1]);
    aladin.setFov(fov);

    // Update Catalogs
    if (catalogs) {
      addCats(A, aladin, catalogs);
    }
  }, [A, aladin, catalogs]);

  useEffect(() => {
    if (!aladin) return;

    const { showCatalogs, showGrid, showLandmarks, showGoals } = settings;

    aladin.setCooGrid({ enabled: showGrid });
    toggleAll(showCatalogs);
    toggleLandmarks(showLandmarks);
    toggleGoals(showGoals);
  }, [settings]);

  // useEffect(() => {
  //   if (!aladin) return;

  //   aladin.view.catalogs.forEach((cat) => {
  //     cat.filterFn = filtersChecker;
  //     cat.reportChange();
  //   });

  //   // setSrcsInRegion(getSrcsInRegion(aladin.getFovCorners()));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [filters]);

  function setAladinReticleCanvas() {
    // const els = aladinContainer.current.getElementsByClassName(
    //   "aladin-reticleCanvas"
    // );
    // const el = els[0];
    // if (!el) return;
    // el.tabIndex = 0;
    // el.addEventListener("focus", onFocus);
    // el.addEventListener("blur", onBlur);
    // aladinReticleCanvas.current = el;
  }

  function toggleAll(show) {
    const cats = aladin.view.catalogs;

    if (cats.length < 1) return;

    cats.forEach((cat) => {
      show ? cat.show() : cat.hide();
      cat.reportChange();
    });
  }

  function toggleLandmarks(show) {
    const cats = aladin.view.catalogs;
    const landmarkCats = cats.filter((cat) => {
      const { name } = cat;
      return name === "landmark";
    });

    if (landmarkCats.length < 1) return;

    landmarkCats.forEach((cat) => {
      show ? cat.show() : cat.hide();
      cat.reportChange();
    });
  }

  function toggleGoals(show) {
    const cats = aladin.view.catalogs;
    const goalCats = cats.filter((cat) => {
      const { name } = cat;

      return name === "goal";
    });

    if (goalCats.length < 1) return;

    goalCats.forEach((cat) => {
      show ? cat.show() : cat.hide();
      cat.reportChange();
    });
  }

  const onFocus = () => {
    setHasFocus(true);
  };

  const onBlur = () => {
    setHasFocus(false);
  };

  const onClick = (event) => {
    if (!event) return;
    // aladinReticleCanvas.current.focus();
  };

  function getPixelPos(worldPos) {
    const [ra, dec] = worldPos;
    const pixelPos = aladin.world2pix(ra, dec);
    return [pixelPos[1], pixelPos[0]];
  }

  const showSourceDetails = (event) => {
    console.log("clicked", event);
    if (!event) return;
    const { data } = event;
    const { _RA: ra, _DEC: dec, id } = data;

    data.position = getPixelPos([ra, dec]);
    setSourceData(data);
    getAstroObjectContent(id).then((contentResponse) => {
      getAstroObjectData(id).then((dataResponse) => {
        setSourceData({
          ...data,
          ...contentResponse?.astroObject,
          ...dataResponse?.astroObjects,
          position: getPixelPos([ra, dec]),
        });
      });
    });
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
    <AladinFocusProvider value={{ hasFocus, setHasFocus }}>
      <Controls defaultFilters={defaultFilters} />
      {/* <SourceDetails
        data={sourceData}
        setData={setSourceData}
        handleClose={hideSourceDetails}
      /> */}
      <AladinCanvas
        onClick={(args) => console.log("click", args)}
        onObjectClicked={showSourceDetails}
        onObjectHovered={(args) => console.log("hovered", args)}
      />
    </AladinFocusProvider>
  );
};

Aladin.displayName = "Molecule.Aladin";

export default Aladin;
