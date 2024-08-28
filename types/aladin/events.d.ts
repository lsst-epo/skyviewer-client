import { AladinCatalog, ImageHiPSOptions } from ".";

type AladinEvent =
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

type AladinGenericEventHandler = (...args: any) => void;

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

export type ClickEventHandler = (event: ClickEvent) => void;
export type ObjectClickedHandler = (
  object: ObjectClicked,
  mousePosition: ScreenPosition
) => void;
export type CooFrameChangedHandler = (event: string) => void;
export type FullScreenToggledHandler = (event: boolean) => void;
export type LayerChangedHandler = (
  layer: any,
  stack: string,
  action: "ADDED" | "REMOVED"
) => void;
export type MouseMoveHandler = (event: MousePositionEvent) => void;
export type ZoomChangedHandler = (fov: number) => void;

export interface AladinEventMap {
  objectHovered: AladinGenericEventHandler;
  select: AladinGenericEventHandler;
  objectsSelected: AladinGenericEventHandler;
  objectClicked: ObjectClickedHandler;
  objectHovered: AladinGenericEventHandler;
  objectHoveredStop: AladinGenericEventHandler;
  footprintClicked: AladinGenericEventHandler;
  footprintHovered: AladinGenericEventHandler;
  positionChanged: AladinGenericEventHandler;
  zoomChanged: ZoomChangedHandler;
  click: ClickEventHandler;
  rightClickMove: AladinGenericEventHandler;
  mouseMove: MouseMoveHandler;
  fullScreenToggled: FullScreenToggledHandler;
  cooFrameChanged: AladinGenericEventHandler;
  resizeChanged: AladinGenericEventHandler;
  projectionChanged: AladinGenericEventHandler;
  layerChanged: LayerChangedHandler;
}
