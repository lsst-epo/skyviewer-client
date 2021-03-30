import { useEffect, useState, useContext, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { getSourceCatalogOptions } from "./utilities";
import debounce from "lodash.debounce";
import AladinGlobalContext from "@/contexts/AladinGlobal";
import ShadowCanvas from "./ShadowCanvas";
import FiltersContext from "@/contexts/Filters";
import { AladinCatalogsProvider } from "@/contexts/AladinCatalogs";
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
  onZoomChanged,
  onObjectClicked,
  onObjectHovered,
  onFootprintClicked,
  onFootprintHovered,
  // onPositionChanged,
  onMouseMove,
  onFullScreenToggled,
  filterFunc,
}) {
  const { aladinGlobal, aladin } = useContext(AladinGlobalContext) || {};
  const { filters } = useContext(FiltersContext) || {};
  const [cats, setCats] = useState(null);

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
    addMarkers(markerLayers);
    addJpgs(jpgs);
    // eslint-disable-next-line no-console
    // console.log("mount");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aladinGlobal, aladin]);

  useEffect(() => {
    if (!aladin) return;

    cats.forEach((cat) => {
      cat.filterFn = filter;
      cat.reportChange();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const catFiltByVisReg = () => {
    if (!catalogs) return;

    catalogs.forEach((catalog) => {
      // const { type, url, options: catOpts } = catalog;
      // const corners = aladin.getFovCorners();
      // const filteredCat = createCatalog({
      //   ...catalog,
      //   options: { ...getSourceCatalogOptions(catOpts), filter: filterFn },
      // });
      // filteredCat.reportChange();
      // eslint-disable-next-line no-console
      console.log(catalog);
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

  const createHiPSCatalog = (catalog) => {
    const { url, options: catOpts } = catalog;
    return aladinGlobal.catalogHiPS(
      url,
      getSourceCatalogOptions(catOpts, filter)
    );
  };

  const createCatalog = (catalog) => {
    const { type, url, options: catOpts } = catalog;

    if (type === "HiPS") {
      //return aladin.setImageSurvey(aladin.createImageSurvey('AKARI FIS Color', 'AKARI FIS Color', url, 'equatorial', 5, {imgFormat: 'png'}));
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

    //aladin.setImageSurvey(aladin.createImageSurvey('AKARI FIS Color', 'AKARI FIS Color',"http://localhost:5000", 'equatorial', 5, {imgFormat: 'png'}));

    setCats(aladinCats);
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
      // console.log('marks', markerLayerCatalog);
    });
  };

  const addJpgs = (jpgs) => {
    jpgs.forEach((jpg) => {
      aladin.displayJPG(jpg);
    });
  };

  const filter = (source) => {
    return source.data.score < filters.score;
  };

  return (
    <>
      <AladinCatalogsProvider value={{ cats, setCats }}>
        <Controls />
        <div id="aladin-lite-div" className="aladin-container" />
        <ShadowCanvas catalog={markerLayers ? markerLayers[0].markers : null} />
      </AladinCatalogsProvider>
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
  filterFunc: PropTypes.func,
};
