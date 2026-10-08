"server-only";
import { z } from "zod/v4";

const filterableCatalog = z.enum(["star", "galaxy", "nebula", "transient"]);
const tourCatalog = z.enum(["goal", "landmark", "rubinCircle"]);
const rubinCatalog = z.enum([
  ...filterableCatalog.options,
  ...tourCatalog.options,
]);

export const markerShapeSchema = z.enum([
  ...rubinCatalog.options,
])

const baseSchema = z.object({
  title: markerShapeSchema,
  scaleWithSky: z.boolean().default(false),
});

export const catalogSchema = z.discriminatedUnion('isHipsCatalog', [
  // isHipsCatalog is true -> path is strictly REQUIRED
  baseSchema.extend({
    id: z.string(),
    isHipsCatalog: z.literal(true),
    path: z.url(),
  }),
  // isHipsCatalog is false -> path is OPTIONAL
  baseSchema.extend({
    isHipsCatalog: z.literal(false),
    path: z.url().optional(),
  }),
]);

export type Catalog = z.infer<typeof catalogSchema>;
export type RubinCatalog = z.infer<typeof rubinCatalog>;
export type FilterableCatalog = z.infer<typeof filterableCatalog>;
export type TourCatalog = z.infer<typeof tourCatalog>;
export type MarkerShapeSchema = z.infer<typeof markerShapeSchema>;