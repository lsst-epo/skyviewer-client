import { useEffect, useState, useContext, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { getSourceCatalogOptions } from "./utilities";
import debounce from "lodash.debounce";
import AladinGlobalContext from "@/contexts/AladinGlobal";
import SourcesList from "./SourcesList";
import FiltersContext from "@/contexts/Filters";
// import { AladinCatalogsProvider } from "@/contexts/AladinCatalogs";
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
    // Add Catalogs
    addCatalogs(catalogs);
    // Add Markers
    // addMarkers(markerLayers);
    addJpgs(jpgs);
    // eslint-disable-next-line no-console
    // console.log("mount");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aladinGlobal, aladin]);

  useEffect(() => {
    if (!aladin) return;

    aladin.view.catalogs.forEach((cat) => {
      cat.filterFn = filtersChecker;
      cat.reportChange();
    });

    setSrcsInRegion(getSrcsInRegion(aladin.getFovCorners()));
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
      setSrcsInRegion(getSrcsInRegion(aladin.getFovCorners()));
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

  const addCatalogs = (catalogs) => {
    if (!catalogs) return;

    const aladinCats = catalogs.map((cat) => {
      return createCatalog(cat);
    });

    aladinCats.forEach((cat) => {
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
      <div id="aladin-lite-div" className="aladin-container" />
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
