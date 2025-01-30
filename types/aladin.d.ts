// Aladin SkyView Lite is declared as `A` in the global scope

type CooFrame = "equatorial" | "ICRS" | "ICRSd" | "j2000" | "gal" | "galactic";
type HiPSImageFormat = "jpg" | "png" | "fits" | "webp";

interface ImageHiPSOptions {
  name?: string;
  successCallback?: () => void;
  errorCallback?: () => void;
  imgFormat?: HiPSImageFormat;
  cooFrame?: CooFrame;
  maxOrder?: number;
  numBitsPerPixel?: number;
  tileSize?: number;
  minOrder?: number;
  longitudeReversed?: boolean;
  opacity?: number;
  colormap?: string;
  stretch?: string;
  reversed?: boolean;
  minCut?: number;
  maxCut?: number;
  additive?: boolean;
  gamma?: number;
  saturation?: number;
  brightness?: number;
  contrast?: number;
}

interface ImageHiPS {
  getAvailableFormats: () => Array<string>;
  isPlanetaryBody: () => boolean;
  setBlendingConfig: (additive?: boolean) => void;
  setBrightness: (brightness?: number) => void;
  // TODO remaining methods
}

interface AladinImage {}

type AladinColorMaps =
  | "cubehelix"
  | "eosb"
  | "rainbow"
  | "grayscale"
  | "native";

interface AladinImageLayer {
  // TODO: What are it's properties?
}

// TODO: Fix callback function declaration
interface AladinCallback {
  success?: (raDec: Float64Array) => void;
  error?: (err?: any) => void;
}

interface AladinHipsImageFormat {
  imgFormat: HiPSImageFormat;
}

type AladinProjection = "SIN" | "MOL" | "AIT" | "ZEA" | "MER";

interface GridOptions {
  /** Color of the grid. Can be specified as a named color (see named colors), as rgb (ex: "rgb(178, 50, 178)"), or as a hex color (ex: "#86D6AE").
   * @default rgb(178,50,178)
   */
  color?: string;
  /** The thickness of the grid, in pixels.
   * @default 2
   */
  thickness?: number;
  /** Opacity of the grid and labels. It is comprised between 0 and 1.
   * @default 0.8
   */
  opacity?: number;
  /** Whether the grid has labels.
   * @default true
   */
  showLabels?: boolean;
  /** The font size of the labels.
   * @default 15
   */
  labelSize?: number;
}

/** Options for configuring the Aladin Lite instance. */
interface AladinOptions {
  /** URL or ID of the survey to use
   * @default "CDS/P/DSS2/color"
   */
  survey?: string;
  /** Array of URLs for the survey images. This replaces the survey parameter. */
  surveyUrl?: Array<string>;
  /** A list of predefined HiPS for the Aladin instance. This option is used for searching for a HiPS in a list of surveys This list can have string item (either a CDS ID or an HiPS url) or an object that describes the HiPS more exhaustively. See the example below to see the different form that this item can have to describe a HiPS. */
  hipsList?: Array<string> | Array<object>;
  /** Target coordinates for the initial view.
   * @default "0 +0"
   */
  target?: string;
  /** Coordinate frame.
   * @default "J2000"
   */
  cooFrame?: CooFrame;
  /** Field of view in degrees.
   * @default 60
   */
  fov?: number;
  /** North pole orientation in degrees. By default it is set to 0 deg i.e. the north pole will be found vertically north to the view. Positive orientation goes towards east i.e. in counter clockwise order as the east lies in the left direction of the view.
   * @default 0
   */
  northPoleOrientation?: number;
  /** Background color in RGB format.
   * @default "rgb(60,60,60)"
   */
  backgroundColor?: string;
  /** Whether to show the zoom control toolbar. This element belongs to the FoV UI thus its CSS class is `aladin-fov`
   * @default true
   */
  showZoomControl?: boolean;
  /** Whether to show the layers control toolbar. CSS class for that button is `aladin-stack-control`
   * @default true
   */
  showLayersControl?: boolean;
  /** Whether to show the stack box opened at starting CSS class for the stack box is `aladin-stack-box`
   * @default true
   */
  expandLayersControl?: boolean;
  /** Whether to show the fullscreen control toolbar. CSS class for that button is `aladin-fullScreen-control`
   * @default true
   */
  showFullscreenControl?: boolean;
  /** Whether to show the Simbad pointer control toolbar. CSS class for that button is `aladin-simbadPointer-control`
   * @default true
   */
  showSimbadPointerControl?: boolean;
  /** Whether to show the coordinate grid control toolbar. CSS class for that button is `aladin-grid-control`
   * @default false
   */
  showCooGridControl?: boolean;
  /** Whether to show the settings control toolbar. CSS class for that button is `aladin-settings-control`
   * @default false
   */
  showSettingsControl?: boolean;
  /** Whether to show the share control toolbar. CSS class for that button is `aladin-share-control`
   * @default false
   */
  showShareControl?: boolean;
  /** Whether to show the status bar. Enabled by default. CSS class for that button is `aladin-status-bar`
   * @default true
   */
  showStatusBar?: boolean;
  /** Whether to show the viewport frame. CSS class for that button is `aladin-cooFrame`
   * @default true
   */
  showFrame?: boolean;
  /** Whether to show the field of view indicator. CSS class for that button is `aladin-fov`
   * @default true
   */
  showFov?: boolean;
  /** Whether to show the coordinate location indicator. CSS class for that button is `aladin-location`
   * @default true
   */
  showCooLocation?: boolean;
  /** Whether to show the projection control toolbar. CSS class for that button is `aladin-projection-control`
   * @default true
   */
  showProjectionControl?: boolean;
  /** Whether to show the context menu.
   * @default false
   */
  showContextMenu?: boolean;
  /** Whether to show the context menu.
   * @default true
   */
  showReticle?: boolean;
  /** Whether to show the catalog.
   * @default true
   */
  showCatalog?: boolean;
  /** Whether the coordinates grid should be shown at startup.
   * @default true
   */
  showCooGrid?: boolean;
  /** Whether to start in full-screen mode.
   * @default false
   */
  fullScreen?: boolean;
  /** Color of the reticle in RGB format.
   * @default "rgb(178,50,178)"
   */
  reticleColor?: string;
  /** Size of the reticle.
   * @default 22
   */
  reticleSize?: number;
  /** Color of the grid in RGB format. Is overshadowed by gridOptions.color if defined.
   * @default "rgb(178,50,178)"
   */
  gridColor?: string;
  /** Opacity of the grid (0 to 1). Is overshadowed by gridOptions.opacity if defined.
   * @default 0.8
   */
  gridOpacity?: string;
  /** More options for the grid. */
  gridOptions?: GridOptions;
  /** Projection type. Can be 'SIN' for orthographic, 'MOL' for mollweide, 'AIT' for hammer-aitoff, 'ZEA' for zenital equal-area or 'MER' for mercator
   * @default "SIN"
   */
  projection?: AladinProjection;
  /** Whether to log events.
   * @default true
   */
  log?: boolean;
  /** Whether to enable SAMP (Simple Application Messaging Protocol).
   * @default false
   */
  samp?: boolean;
  /** Whether to use real fullscreen mode.
   * @default false
   */
  realFullscreen?: boolean;
  /** Whether to pixelate the canvas.
   * @default true
   */
  pixelateCanvas?: boolean;
}

interface AladinSource {
  data: any;
}

interface AladinCatalog {
  readonly addSources: (sources: AladinSource | AladinSource[]) => void;
  readonly show: () => void;
  readonly hide: () => void;
  readonly remove: (source: AladinSource) => void;
  readonly reportChange: () => void;

  name: string;
  filter: (source: AladinSource) => boolean;
  filterFn: (source: AladinSource) => boolean;
}

interface AladinView {
  fov: number;
  minFoV: number;
  maxFoV: number;
  catalogs: Array<AladinCatalog>;
}

interface GetViewData {
  (
    dataType: "url",
    imgType?: "image/png" | "image/jpeg" | "image/webp",
    withLogo?: boolean
  ): Promise<string>;
  (
    dataType: "arraybuffer",
    imgType?: "image/png" | "image/jpeg" | "image/webp",
    withLogo?: boolean
  ): Promise<ArrayBuffer>;
  (
    dataType: "blob",
    imgType?: "image/png" | "image/jpeg" | "image/webp",
    withLogo?: boolean
  ): Promise<Blob>;
}

interface AladinInstance {
  readonly getRaDec: () => [number, number];
  readonly getSize: () => [number, number];
  readonly getFov: () => [number, number];
  readonly getFovCorners: (nbSteps?: number) => [number, number][];
  readonly setFov: (degrees: number) => void;
  readonly adjustFovForObject: (target: string) => void;
  readonly setFoVRange: (minFov: number, maxFov: number) => void;
  readonly gotoRaDec: (ra: number, dec: number) => void;
  readonly gotoObject: (target: string, callback?: AladinCallback) => void;
  readonly setImageSurvey: (
    urlOrHiPSOrFITS: string | ImageHiPS | AladinImage
  ) => void;
  readonly getBaseImageLayer: () => AladinImageLayer;
  readonly getColorMap: () => AladinColorMaps;
  readonly displayFITS: (fitsUrl: string) => void;
  readonly addCatalog: (catalog: AladinCatalog) => void;
  /** @deprecated Old method name, use `Aladin.prototype.removeOverlays` instead. */
  readonly removeLayers: () => void;
  readonly on: <T extends keyof AladinCallbackMap>(
    type: T,
    handler: AladinCallbackMap[T]
  ) => void;
  /** @deprecated */
  readonly createImageSurvey: (
    id: string,
    name: string,
    cooFrame: string,
    maxOrder: number,
    options: any
  ) => any;
  readonly getOverlays: () => Array<AladinCatalog>;
  readonly setCooGrid: (options: {
    color?: string;
    opacity?: number;
    labelSize?: number;
    thickness?: number;
    enabled?: boolean;
  }) => void;
  /** Transform world coordinates to pixel coordinates in the view. */
  readonly world2pix: (
    lon: number,
    lat: number,
    frame?: CooFrame
  ) => Float64Array;
  readonly increaseZoom: () => void;
  readonly decreaseZoom: () => void;
  readonly removeOverlays: () => void;
  readonly zoomToFoV: (
    fov: number,
    duration?: number,
    complete?: () => void
  ) => void;
  readonly animateToRaDec: (
    ra: number,
    dec: number,
    duration?: number,
    complete?: () => void
  ) => void;
  readonly getFoVCorners: (nbSteps?: number, frame?: CooFrame) => number[][];
  readonly getViewDataURL: (options?: {
    format?: "image/png" | "image/jpeg";
    width?: number;
    height?: number;
    logo?: boolean;
  }) => Promise<string>;
  readonly getViewData: GetViewData;
  view: AladinView;
  options: Required<AladinOptions>;
}

type CatalogSourceShape =
  | "circle"
  | "plus"
  | "rhomb"
  | "cross"
  | "triangle"
  | "square";

interface AladinCatalogOptions {
  url: string;
  name?: string;
  color?: string;
  sourceSize?: number;
  shape?: CatalogSourceShape | HTMLCanvasElement | HTMLImageElement; // JPEG/PNG also supported, but how?
  limit?: number;
  onClick?: "showTable" | "showPopup" | ((...args: any) => void);
  readOnly?: boolean;
  raField?: string;
  decField?: string;
  filter?: (source: AladinSource) => boolean;
  selectionColor?: string;
  hoverColor?: string;
  displayLabel?: boolean;
  labelColumn?: string;
  labelColor?: string;
  labelFont?: string;
}

type AladinCatalogCallback = (sources: AladinSource[]) => void;

interface Aladin {
  /** Initializes the Aladin Lite library, checking for WebGL2 support. This method must be called before instancing an Aladin Lite object. */
  readonly init: Promise<void>;
  readonly aladin: (
    id: string | HTMLElement,
    options?: AladinOptions
  ) => AladinInstance;
  readonly catalog: (options?: AladinCatalogOptions) => AladinCatalog;
  readonly source: (ra: number, dec: number, data: any) => AladinSource;
  // TODO: add option info
  readonly catalogFromURL: (
    url: string,
    options?: AladinCatalogOptions,
    successCallback?: AladinCatalogCallback,
    useProxy?: boolean
  ) => AladinCatalog;
  readonly catalogHiPS: (
    url: string,
    options: AladinCatalogOptions
  ) => AladinCatalog;
  readonly imageHiPS: (id: string, options: ImageHiPSOptions) => ImageHiPS;
  // TODO Add other catalog methods
  // catalogFromSimbad(<target>, <radius-in-degrees>, <catalog-options>?, <successCallback>?)
  // A.catalogFromVizieR(<vizier-cat-id>, <target>, <radius-in-deg>, <cat-options>?, <successCallback>?)
  // A.catalogFromNED(<target>, <radius-in-degrees>, <catalog-options>?, <successCallback>?)
  // Additional optional query options can be specified as a keyword/value dictionary, eg: {"-loc": 500, "-filter": 0}
  // A.catalogFromSkyBot(<ra>, <dec>, <radius>, <epoch>, <query-options>?, <cat-options>?, <successCallback>?)
  // Markers?
  // A.marker(ra, dec, {popupTitle: <title of the popup>, popupDesc: <text (possibly HTML) for the popup>})

  // TODO: Add the final functions
}
