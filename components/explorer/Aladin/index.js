import { useEffect, useState, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import useResizeObserver from "use-resize-observer";
import { addCats } from "./utilities";
import ExplorerContext from "@/contexts/Explorer";
import AladinGlobalContext from "@/contexts/AladinGlobal";
import { AladinFocusProvider } from "@/contexts/AladinFocus";
import FiltersContext from "@/contexts/Filters";
import Controls from "@/components/explorer/Controls";
import SourceDetails from "@/components/explorer/SourceDetails";
import defaultFilters from "@/fixtures/defaultExplorerFilters";
import {
  useAstroObjectContent,
  getAstroObjectContent,
  getAstroObjectData,
} from "@/lib/api/astroObject";

export default function Aladin({
  selector,
  survey,
  target,
  fov,
  fovRange,
  options,
  catalogs,
  markerLayers,
  jpgs,
  onSelect,
  onObjectHovered,
  onFootprintClicked,
  onFootprintHovered,
  onMouseMove,
  onFullScreenToggled,
}) {
  const { settings } = useContext(ExplorerContext) || {};
  const [hasFocus, setHasFocus] = useState(false);
  const { aladinGlobal, aladin } = useContext(AladinGlobalContext) || {};
  const { filters } = useContext(FiltersContext) || {};
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
    if (!aladinReticleCanvas.current && aladinContainer.current) {
      setAladinReticleCanvas();
    }
  });

  useEffect(() => {
    if (!aladin && !aladinGlobal) return;
    // Restrict FOV
    aladin.setFovRange(fovRange[0], fovRange[1]);
    aladin.setFov(fov);
    // Add Event Listeners
    addAladinEventHandlers();

    // Update Catalogs
    if (catalogs) {
      addCats(aladinGlobal, aladin, catalogs);
    }
  }, [aladinGlobal, aladin, catalogs, jpgs]);

  useEffect(() => {
    if (!aladin) return;

    const { showCatalogs, showGrid, showLandmarks, showGoals } = settings;

    aladin.showHealpixGrid(showGrid);
    toggleAll(showCatalogs);
    toggleLandmarks(showLandmarks);
    toggleGoals(showGoals);

    addAladinEventHandlers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings]);

  useEffect(() => {
    if (!aladin) return;

    aladin.view.catalogs.forEach((cat) => {
      cat.filterFn = filtersChecker;
      cat.reportChange();
    });

    // setSrcsInRegion(getSrcsInRegion(aladin.getFovCorners()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  function setAladinReticleCanvas() {
    const els = aladinContainer.current.getElementsByClassName(
      "aladin-reticleCanvas"
    );
    const el = els[0];
    if (!el) return;
    el.tabIndex = 0;
    el.addEventListener("focus", onFocus);
    el.addEventListener("blur", onBlur);
    aladinReticleCanvas.current = el;
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
    aladinReticleCanvas.current.focus();
  };

  function getPixelPos(worldPos) {
    const [ra, dec] = worldPos;
    const pixelPos = aladin.world2pix(ra, dec);
    return [pixelPos[1], pixelPos[0]];
  }

  const showSourceDetails = (event) => {
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

  const addAladinEventHandlers = () => {
    const eventHandlers = {
      click: onClick || null,
      select: onSelect || null,
      zoomChanged: null,
      objectClicked: showSourceDetails,
      objectHovered: onObjectHovered || null,
      footprintClicked: onFootprintClicked || null,
      footprintHovered: onFootprintHovered || null,
      positionChanged: null,
      mouseMove: onMouseMove || null,
      fullScreenToggled: onFullScreenToggled || null,
    };

    for (const [event, eventHandler] of Object.entries(eventHandlers)) {
      if (eventHandler) aladin.on(event, eventHandler);
    }
  };

  const addJpgs = (jpgs) => {
    jpgs.forEach((jpg) => {
      aladin.displayJPG(jpg);
    });
  };

  const filtersChecker = (source) => {
    const types = filters.types;
    const {
      distance: { value: distanceRange },
      brightness: { value: brightnessRange },
    } = filters.characteristics;
    const { type, brightness, distance } = source?.data;
    const [minDistance, maxDistance] = distanceRange;
    const [minBrightness, maxBrightness] = brightnessRange;

    if (
      !types[type] ||
      distance < minDistance ||
      distance > maxDistance ||
      brightness < minBrightness ||
      brightness > maxBrightness
    ) {
      return false;
    }

    return true;
  };

  return (
    <AladinFocusProvider value={{ hasFocus, setHasFocus }}>
      <Controls defaultFilters={defaultFilters} />
      <SourceDetails
        data={sourceData}
        setData={setSourceData}
        handleClose={hideSourceDetails}
      />
      <div
        ref={aladinContainer}
        id="aladin-lite-div"
        className="aladin-container"
      />
    </AladinFocusProvider>
  );
}

Aladin.propTypes = {
  selector: PropTypes.string,
  survey: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  target: PropTypes.string,
  fov: PropTypes.number,
  fovRange: PropTypes.array,
  options: PropTypes.object,
  catalogs: PropTypes.array,
  markerLayers: PropTypes.array,
  jpgs: PropTypes.array,
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  onZoomChanged: PropTypes.func,
  onObjectHovered: PropTypes.func,
  onFootprintClicked: PropTypes.func,
  onFootprintHovered: PropTypes.func,
  onMouseMove: PropTypes.func,
  onFullScreenToggled: PropTypes.func,
};
