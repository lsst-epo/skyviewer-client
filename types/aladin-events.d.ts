type AladinPositionChangedEvent = CustomEvent<{ lon: number; lat: number }>;
type AladinZoomChangedEvent = CustomEvent<{ fovX: number; fovY: number }>;
type AladinCanvasEvent = CustomEvent<{
  state: { mode: number; dragging: boolean; rightClickPressed?: boolean };
  type?: "mousemove" | "mouseout" | "mousedown" | "click" | "wheel";
  xy?: { x: number; y: number };
}>;

interface AladinEventMap {
  Wasm: CustomEvent;
  "cooGrid.enabled": CustomEvent;
  "cooGrid.disabled": CustomEvent;
  "cooGrid.updated": CustomEvent;
  "loading.started": CustomEvent;
  "loading.stopped": CustomEvent;
  "BackgroundColor.changed": CustomEvent;
  "cooGrid.enabled": CustomEvent;
  "cooGrid.disabled": CustomEvent;
  "cooGrid.updated": CustomEvent;
  "projection.changed": CustomEvent;
  "frame.changed": CustomEvent;
  "cmap.updated": CustomEvent;
  "position.changed": AladinPositionChangedEvent;
  "zoom.changed": AladinZoomChangedEvent;
  "HiPSLayer.added": CustomEvent;
  "HiPSLayer.removed": CustomEvent;
  "HiPSLayer.renamed": CustomEvent;
  "HiPSLayer.swap": CustomEvent;
  "HiPSCache.updated": CustomEvent;
  "HiPSFavorites.updated": CustomEvent;
  "HiPSLayer.changed": CustomEvent;
  "GraphicOverlayLayer.added": CustomEvent;
  "GraphicOverlayLayer.removed": CustomEvent;
  "GraphicOverlayLayer.changed": CustomEvent;
  "samp.hub": CustomEvent;
  "samp.connected": CustomEvent;
  "samp.disconnected": CustomEvent;
  Event: AladinCanvasEvent;
  "Reticle.changed": CustomEvent;
  "Resource.fetched": CustomEvent;
  fetch: CustomEvent;
  mode: CustomEvent;
  "fullscreen.toggled": CustomEvent;
}

type ListenerCallback =
  | "select"
  | "objectsSelected"
  | "objectClicked"
  | "objectHovered"
  | "objectHoveredStop"
  | "footprintClicked"
  | "footprintHovered"
  | "positionChanged"
  | "zoomChanged"
  | "click"
  | "rightClickMove"
  | "mouseMove"
  | "fullScreenToggled"
  | "cooFrameChanged"
  | "resizeChanged"
  | "projectionChanged"
  | "layerChanged";

type ScreenPosition = {
  x: number;
  y: number;
};

type CoordinatePosition = {
  dec: number;
  ra: number;
};

type MousePositionEvent = ScreenPosition & CoordinatePosition;

interface ClickEvent extends MousePositionEvent {
  isDragging: boolean;
}

type ObjectClicked = ScreenPosition &
  CoordinatePosition & {
    catalog: any;
    data: {
      brightness: string;
      distance: string;
      id: string;
      img: string;
      type: string;
      _DEC: string;
      _RA: string;
      _score: string;
    };
    isHovered: boolean;
    isSelected: boolean;
    isShowing: boolean;
    marker: boolean;
  };

type AladinGenericCallback = (...args: any) => void;
type ClickCallback = (event: ClickEvent) => void;
type ObjectClickedCallback = (
  object: ObjectClicked,
  mousePosition: ScreenPosition
) => void;
type CooFrameChangedCallback = (event: string) => void;
type FullScreenToggledCallback = (event: boolean) => void;
type LayerChangedCallback = (
  layer: any,
  stack: string,
  action: "ADDED" | "REMOVED"
) => void;
type MouseMoveCallback = (event: MousePositionEvent) => void;
type ZoomChangedCallback = (fov: number) => void;
type SizeChangedCallback = (width: number, height: number) => void;
type PositionChangedCallback = (props: {
  ra: number;
  dec: number;
  dragging: boolean;
}) => void;

interface AladinCallbackMap {
  objectHovered: AladinGenericCallback;
  select: AladinGenericCallback;
  objectsSelected: AladinGenericCallback;
  objectClicked: ObjectClickedCallback;
  objectHovered: AladinGenericCallback;
  objectHoveredStop: AladinGenericCallback;
  footprintClicked: AladinGenericCallback;
  footprintHovered: AladinGenericCallback;
  positionChanged: PositionChangedCallback;
  zoomChanged: ZoomChangedCallback;
  click: ClickCallback;
  rightClickMove: AladinGenericCallback;
  mouseMove: MouseMoveCallback;
  fullScreenToggled: FullScreenToggledCallback;
  cooFrameChanged: CooFrameChangedCallback;
  resizeChanged: SizeChangedCallback;
  projectionChanged: AladinGenericCallback;
  layerChanged: LayerChangedCallback;
}
