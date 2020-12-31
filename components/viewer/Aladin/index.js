import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import defaultOptions from "./defaultOptions";
import { getSourceCatalogOptions } from "./utilities";

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
  onPositionChanged,
  onMouseMove,
  onFullScreenToggled,
}) {
  const [aladinGlobal, setAladinGlobal] = useState(null);
  const [aladin, setAladin] = useState(null);

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

  const createHiPSCatalog = (catalog) => {
    const { url, options: catOpts } = catalog;
    return aladinGlobal.catalogHiPS(url, getSourceCatalogOptions(catOpts));
  };

  const createCatalog = (catalog) => {
    const { type, options: catOpts } = catalog;

    if (type === "HiPS") {
      return createHiPSCatalog(catalog);
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

  useEffect(() => {
    // Initialize aladin Global
    setAladinGlobal(window.A);
    // Initialize aladin instance
    setAladin(
      window.A.aladin(
        selector,
        Object.assign(options, {
          survey,
          fov,
          target,
        })
      )
    );
  }, [selector, survey, fov, target, options]);

  useEffect(() => {
    // Initialize viewer
    // Do nothing if Global or instance have not been set
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
    console.log("mount");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aladin, aladinGlobal]);

  return <div id="aladin-lite-div" className="aladin-container" />;
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
  onPositionChanged: PropTypes.func,
  onMouseMove: PropTypes.func,
  onFullScreenToggled: PropTypes.func,
};

Aladin.defaultProps = {
  fov: 20,
  options: defaultOptions,
  fovRange: [0.03, 80],
};
