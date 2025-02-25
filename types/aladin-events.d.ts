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
  positionChanged: AladinGenericCallback;
  zoomChanged: ZoomChangedCallback;
  click: ClickCallback;
  rightClickMove: AladinGenericCallback;
  mouseMove: MouseMoveCallback;
  fullScreenToggled: FullScreenToggledCallback;
  cooFrameChanged: CooFrameChangedCallback;
  resizeChanged: SizeChangedCallback;
  projectionChanged: PositionChangedCallback;
  layerChanged: LayerChangedCallback;
}
