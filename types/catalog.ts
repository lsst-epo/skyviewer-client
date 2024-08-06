export type FilterableCatalog = "star" | "galaxy" | "nebula" | "transient";
export type TourCatalog = "goal" | "landmark";
export type RubinCatalog = FilterableCatalog & TourCatalog;

export interface Catalog {
  id: string;
  path: string;
  title: RubinCatalog;
  icon: Array<{ path: string }>;
}
