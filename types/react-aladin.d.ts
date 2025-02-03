interface ReactAladinCallbacks {
  onObjectsSelected?: AladinCallbackMap["objectsSelected"];
  onObjectClicked?: AladinCallbackMap["objectClicked"];
  onObjectHovered?: AladinCallbackMap["objectHovered"];
  onObjectHoveredStop?: AladinCallbackMap["objectHoveredStop"];
  onFootprintClicked?: AladinCallbackMap["footprintClicked"];
  onFootprintHovered?: AladinCallbackMap["footprintHovered"];
  onPositionChanged?: AladinCallbackMap["positionChanged"];
  onZoomChanged?: AladinCallbackMap["zoomChanged"];
  onClick?: AladinCallbackMap["click"];
  onRightClickMove?: AladinCallbackMap["rightClickMove"];
  onMouseMove?: AladinCallbackMap["mouseMove"];
  onFullScreenToggled?: AladinCallbackMap["fullScreenToggled"];
  onCooFrameChanged?: AladinCallbackMap["cooFrameChanged"];
  onResizeChanged?: AladinCallbackMap["resizeChanged"];
  onProjectionChanged?: AladinCallbackMap["projectionChanged"];
  onLayerChanged?: AladinCallbackMap["layerChanged"];
}

interface AdditionalAladinCallbacks {
  onLoaded?: (args: { aladin: AladinInstance; A: Aladin }) => void;
  onFocused?: () => void;
  onBlur?: () => void;
}

interface UseAladinProps {
  callbacks?: ReactAladinCallbacks & AdditionalAladinCallbacks;
}
