"server-only";
import { z } from "zod";

const filterableCatalog = z.enum(["star", "galaxy", "nebula", "transient"]);
const tourCatalog = z.enum(["goal", "landmark"]);
const rubinCatalog = z.enum([
  ...filterableCatalog.options,
  ...tourCatalog.options,
]);

export const catalogSchema = z.object({
  id: z.string(),
  path: z.string().url(),
  title: rubinCatalog,
  icon: z.array(z.object({ path: z.string().url() })),
});

export type Catalog = z.infer<typeof catalogSchema>;
export type RubinCatalog = z.infer<typeof rubinCatalog>;
export type FilterableCatalog = z.infer<typeof filterableCatalog>;
export type TourCatalog = z.infer<typeof tourCatalog>;
