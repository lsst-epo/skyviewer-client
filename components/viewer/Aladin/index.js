import { useEffect, useState, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { getSourceCatalogOptions } from "./utilities";
import debounce from "lodash.debounce";
import AladinGlobalContext from "@/contexts/AladinGlobal";
import ShadowCanvas from "./ShadowCanvas";

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
  onZoomChanged,
  onObjectClicked,
  onObjectHovered,
  onFootprintClicked,
  onFootprintHovered,
  // onPositionChanged,
  onMouseMove,
  onFullScreenToggled,
}) {
  const { aladinGlobal, aladin } = useContext(AladinGlobalContext) || {};

  useEffect(() => {
    if (!aladin && !aladinGlobal) return;
    // Restrict FOV
    aladin.setFovRange(fovRange[0], fovRange[1]);
    // Add Event Listeners
    addEventHandlers();
    // Add Catalogs
    addCatalogs(catalogs);
    // Add Markers
    addMarkers(markerLayers);
    addJpgs(jpgs);
    // eslint-disable-next-line no-console
    // console.log("mount");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aladinGlobal, aladin]);

  const filterFn = (catItem) => {
    // eslint-disable-next-line no-console
    return true;
  };

  const catFiltByVisReg = () => {
    if (!catalogs) return;

    catalogs.forEach((catalog) => {
      const { type, url, options: catOpts } = catalog;
      const corners = aladin.getFovCorners();
      const filteredCat = createCatalog({
        ...catalog,
        options: { ...getSourceCatalogOptions(catOpts), filter: filterFn },
      });
      // filteredCat.reportChange();
      // eslint-disable-next-line no-console
      // console.log(filteredCat);
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedPositionChange = useCallback(
    debounce((event) => {
      catFiltByVisReg();
    }, 1000),
    [aladin]
  );

  const onPositionChanged = (event) => {
    debouncedPositionChange(event);
    // event.persist();
  };

  const addEventHandlers = () => {
    const eventHandlers = {
      click: onClick || null,
      select: onSelect || null,
      zoomChanged: onZoomChanged || null,
      objectClicked: onObjectClicked || null,
      objectHovered: onObjectHovered || null,
      footprintClicked: onFootprintClicked || null,
      footprintHovered: onFootprintHovered || null,
      positionChanged: onPositionChanged || null,
      mouseMove: onMouseMove || null,
      fullScreenToggled: onFullScreenToggled || null,
    };

    for (const [event, eventHandler] of Object.entries(eventHandlers)) {
      if (eventHandler) aladin.on(event, eventHandler);
    }
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
    catalogs.forEach((catalog) => {
      aladin.addCatalog(createCatalog(catalog));
    });
  };

  const getMarkerSources = (markers) => {
    return markers.map((marker) => {
      const { position, popupTitle, popupDesc } = marker;
      const { ra, dec } = position;
      return aladinGlobal.marker(ra, dec, {
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
    });
  };

  const addJpgs = (jpgs) => {
    jpgs.forEach((jpg) => {
      aladin.displayJPG(jpg);
    });
  };

  // useEffect(() => {
  //   console.log('update');
  // });

  // useEffect(() => {
  //   // Initialize viewer
  //   // Do nothing if Global or instance have not been set
  //   if (!aladin && !aladinGlobal) return;
  //   // Restrict FOV
  //   aladin.setFovRange(fovRange[0], fovRange[1]);
  //   // Add Event Listeners
  //   addEventHandlers();
  //   // Add Catalogs
  //   addCatalogs(catalogs);
  //   // Add Markers
  //   addMarkers(markerLayers);
  //   addJpgs(jpgs);
  //   // eslint-disable-next-line no-console
  //   console.log("mount");
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [aladin, aladinGlobal]);

  return (
    <div>
      <ShadowCanvas catalog={markerLayers ? markerLayers[0].markers : null} />
      <div id="aladin-lite-div" className="aladin-container" />
    </div>
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
};
