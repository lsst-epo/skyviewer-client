import { useEffect, useState, useContext, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import classnames from "classnames";
import { getSourceCatalogOptions } from "./utilities";
import ExplorerContext from "@/contexts/Explorer";
import AladinGlobalContext from "@/contexts/AladinGlobal";
import AladinCatalogsContext from "@/contexts/AladinCatalogs";
import FiltersContext from "@/contexts/Filters";
import SourcesList from "./SourcesList";
import Controls from "../Controls";

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
  onClick,
  onSelect,
  onObjectClicked,
  onObjectHovered,
  onFootprintClicked,
  onFootprintHovered,
  onMouseMove,
  onFullScreenToggled,
  // filterFunc,
}) {
  const { settings, setSettings } = useContext(ExplorerContext) || {};
  const { aladinGlobal, aladin } = useContext(AladinGlobalContext) || {};
  const { filters } = useContext(FiltersContext) || {};
  const [srcsInRegion, setSrcsInRegion] = useState(null);

  useEffect(() => {
    if (!aladin && !aladinGlobal) return;
    // Restrict FOV
    aladin.setFovRange(fovRange[0], fovRange[1]);
    aladin.setFov(fov);
    // Add Event Listeners
    addEventHandlers();

    // Update Catalogs
    if (catalogs) addCatalogs(aladinizeCats(catalogs));

    // Update Markers
    // addMarkers(markerLayers);

    if (jpgs) addJpgs(jpgs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aladinGlobal, aladin, catalogs, jpgs]);

  useEffect(() => {
    if (!aladin) return;

    const { showCatalogs, showGrid } = settings;

    aladin.showCatalog(showCatalogs);
    aladin.showHealpixGrid(showGrid);
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

  function posIsInRegion(position, region) {
    // console.log(position, region);
    // dec: up = +; down = -  and  ra: left = +; right = -
    const [
      [topLeftRa, topLeftDec],
      [topRightRa, topRightDec],
      [bottomRightRa, bottomRightDec],
      [bottomLeftRa, bottomLeftDec],
    ] = region;
    const [ra, dec] = position;

    if (
      ra > topLeftRa ||
      ra < topRightRa ||
      ra > bottomLeftRa ||
      ra < bottomRightRa
    ) {
      return false;
    }

    if (
      dec > topLeftDec ||
      dec > topRightDec ||
      dec < bottomLeftDec ||
      dec < bottomRightDec
    ) {
      return false;
    }

    return true;
  }

  function getSrcsInRegion(region) {
    if (!aladin) return;
    const srcsInRegion = [];

    aladin.view.catalogs.forEach((catalog) => {
      const { order1Sources, order2Sources, sources: catSources } = catalog;
      const sources = [
        ...new Set([
          ...(order1Sources || []),
          ...(order2Sources || []),
          ...(catSources || []),
        ]),
      ];

      sources.forEach((source) => {
        const { ra, dec } = source;
        if (posIsInRegion([ra, dec], region)) {
          filtersChecker(source);
          srcsInRegion.push(source);
        }
      });
    });

    return srcsInRegion;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedRegionSrcsSetter = useCallback(
    debounce((event) => {
      // setSrcsInRegion(getSrcsInRegion(aladin.getFovCorners()));
    }, 1000),
    [aladin]
  );

  const onPositionChanged = (event) => {
    debouncedRegionSrcsSetter(event);
    // event.persist();
  };

  const onZoomChanged = (event) => {
    debouncedRegionSrcsSetter(event);
    // event.persist();
  };

  const addEventHandlers = () => {
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

  return (
    <>
      <Controls />
      <div
        id="aladin-lite-div"
        className={classnames("aladin-container", {
          "show-catalogs": settings.showCatalogs,
        })}
      />
      <SourcesList sources={srcsInRegion} />
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
  // onPositionChanged: PropTypes.func,
  onMouseMove: PropTypes.func,
  onFullScreenToggled: PropTypes.func,
  // filterFunc: PropTypes.func,
};
