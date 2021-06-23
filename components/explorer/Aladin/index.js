import { useEffect, useState, useContext, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import { getSourceCatalogOptions } from "./utilities";
import ExplorerContext from "@/contexts/Explorer";
import AladinGlobalContext from "@/contexts/AladinGlobal";
import AladinCatalogsContext from "@/contexts/AladinCatalogs";
import FiltersContext from "@/contexts/Filters";
import SourcesList from "@/components/explorer/Aladin/SourcesList";
import Controls from "@/components/explorer/Controls";

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
  onObjectClicked,
  onObjectHovered,
  onFootprintClicked,
  onFootprintHovered,
  onMouseMove,
  onFullScreenToggled,
}) {
  const { settings, setSettings } = useContext(ExplorerContext) || {};
  const { aladinGlobal, aladin } = useContext(AladinGlobalContext) || {};
  const { filters } = useContext(FiltersContext) || {};
  const [srcsInRegion, setSrcsInRegion] = useState(null);
  const aladinContainer = useRef(null);
  const aladinReticleCanvas = useRef(null);

  useEffect(() => {
    const { hasFocus } = settings;
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
    if (catalogs) addCatalogs(aladinizeCats(catalogs));

    // Update Markers
    // addMarkers(markerLayers);

    if (jpgs) addJpgs(jpgs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // function posIsInRegion(position, region) {
  //   // console.log(position, region);
  //   // dec: up = +; down = -  and  ra: left = +; right = -
  //   const [
  //     [topLeftRa, topLeftDec],
  //     [topRightRa, topRightDec],
  //     [bottomRightRa, bottomRightDec],
  //     [bottomLeftRa, bottomLeftDec],
  //   ] = region;
  //   const [ra, dec] = position;

  //   if (
  //     ra > topLeftRa ||
  //     ra < topRightRa ||
  //     ra > bottomLeftRa ||
  //     ra < bottomRightRa
  //   ) {
  //     return false;
  //   }

  //   if (
  //     dec > topLeftDec ||
  //     dec > topRightDec ||
  //     dec < bottomLeftDec ||
  //     dec < bottomRightDec
  //   ) {
  //     return false;
  //   }

  //   return true;
  // }

  // function getSrcsInRegion(region) {
  //   if (!aladin) return;
  //   const srcsInRegion = [];

  //   aladin.view.catalogs.forEach((catalog) => {
  //     const { order1Sources, order2Sources, sources: catSources } = catalog;
  //     const sources = [
  //       ...new Set([
  //         ...(order1Sources || []),
  //         ...(order2Sources || []),
  //         ...(catSources || []),
  //       ]),
  //     ];

  //     sources.forEach((source) => {
  //       const { ra, dec } = source;
  //       if (posIsInRegion([ra, dec], region)) {
  //         filtersChecker(source);
  //         srcsInRegion.push(source);
  //       }
  //     });
  //   });

  //   return srcsInRegion;
  // }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedRegionSrcsSetter = useCallback(
    debounce((event) => {
      // setSrcsInRegion(getSrcsInRegion(aladin.getFovCorners()));
    }, 1000),
    [aladin]
  );

  const onFocus = () => {
    setSettings({
      ...settings,
      hasFocus: true,
    });
  };

  const onBlur = () => {
    setSettings({
      ...settings,
      hasFocus: false,
    });
  };

  const onClick = (event) => {
    aladinReticleCanvas.current.focus();
  };

  const onPositionChanged = (event) => {
    // debouncedRegionSrcsSetter(event);
    // event.persist();
  };

  const onZoomChanged = (event) => {
    if (isNaN(Number(event))) return;

    setSettings({
      ...settings,
      zoomLevel: Number(event).toFixed(1),
    });
    // debouncedRegionSrcsSetter(event);
    // event.persist();
  };

  const addAladinEventHandlers = () => {
    const eventHandlers = {
      click: onClick || null,
      select: onSelect || null,
      zoomChanged: onZoomChanged,
      objectClicked: onObjectClicked || null,
      objectHovered: onObjectHovered || null,
      footprintClicked: onFootprintClicked || null,
      footprintHovered: onFootprintHovered || null,
      positionChanged: onPositionChanged,
      mouseMove: onMouseMove || null,
      fullScreenToggled: onFullScreenToggled || null,
    };

    for (const [event, eventHandler] of Object.entries(eventHandlers)) {
      if (eventHandler) aladin.on(event, eventHandler);
    }
  };

  const createHiPSCatalog = (catalog) => {
    const { url, options: catOpts } = catalog;
    return aladinGlobal.catalogHiPS(
      url,
      getSourceCatalogOptions(catOpts, filtersChecker)
    );
  };

  const createCatalog = (catalog) => {
    const { type, url, options: catOpts } = catalog;

    if (type === "HiPS") {
      return aladinGlobal.catalogHiPS(url, getSourceCatalogOptions(catOpts));
    }

    if (type === "markers") {
      return aladinGlobal.catalog(getSourceCatalogOptions(catOpts));
    }

    return aladinGlobal.catalog(getSourceCatalogOptions(catOpts));
  };

  const aladinizeCats = (catalogs) => {
    return catalogs.map((cat) => {
      return createCatalog(cat);
    });
  };

  const addCatalogs = (catalogs) => {
    catalogs.forEach((cat) => {
      // cat.isShowing = false;
      aladin.addCatalog(cat);
    });
  };

  const getMarkerSources = (markers) => {
    return markers.map((marker) => {
      const { data, popupTitle, popupDesc } = marker;
      const { ra, dec } = data;
      return aladinGlobal.marker(ra, dec, {
        data,
        popupTitle,
        popupDesc,
      });
    });
  };

  const addMarkers = (markerLayers) => {
    if (!markerLayers) return;
    markerLayers.forEach((markerLayer) => {
      const { markers } = markerLayer;
      const markerLayerCatalog = createCatalog(markerLayer);
      const markerSources = getMarkerSources(markers);

      aladin.addCatalog(markerLayerCatalog);
      markerLayerCatalog.addSources(markerSources);
      // console.log('marks', markerLayerCatalog);
    });
  };

  const addJpgs = (jpgs) => {
    jpgs.forEach((jpg) => {
      aladin.displayJPG(jpg);
    });
  };

  const filtersChecker = (source) => {
    // const types = filters.types;
    const {
      score: { value },
    } = filters.characteristics;
    const [min, max] = value;
    // return types[source.data.type];
    return source.data.score >= min && source.data.score <= max;
  };

  // <SourcesList sources={srcsInRegion} />
  return (
    <>
      <Controls />
      <div
        ref={aladinContainer}
        id="aladin-lite-div"
        className="aladin-container"
      />
    </>
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
  onObjectClicked: PropTypes.func,
  onObjectHovered: PropTypes.func,
  onFootprintClicked: PropTypes.func,
  onFootprintHovered: PropTypes.func,
  onMouseMove: PropTypes.func,
  onFullScreenToggled: PropTypes.func,
};
