"server-only";

import z from "zod";

const imgFormat: HiPSImageFormat = "png";
const cooFrame: CooFrame = "ICRS";
const tileSize: TileSize = 512;

const defaults = {
  fovMin: 2,
  fovMax: 90,
  fov: 60,
  target: "267.0208333333 -24.7800000000",
  imgFormat,
  cooFrame,
  maxOrder: 11,
  tileSize,
};

export const surveyImageSchema = z
  .object({
    id: z.string(),
    fovMin: z.coerce.number().catch(defaults.fovMin).default(defaults.fovMin),
    fovMax: z.coerce.number().catch(defaults.fovMax).default(defaults.fovMax),
    fov: z.coerce.number().catch(defaults.fov).default(defaults.fov),
    target: z.string().catch(defaults.target).default(defaults.target),
    imgFormat: z
      .enum(["jpeg", "png", "fits", "webp"])
      .catch(defaults.imgFormat)
      .default(defaults.imgFormat),
    cooFrame: z
      .enum(["j2000", "equatorial", "ICRS", "ICRSd", "gal", "galactic"])
      .catch(defaults.cooFrame)
      .default(defaults.cooFrame),
    maxOrder: z
      .number()
      .min(0)
      .max(12)
      .catch(defaults.maxOrder)
      .default(defaults.maxOrder),
    tileSize: z
      .union([
        z.literal(32),
        z.literal(64),
        z.literal(128),
        z.literal(256),
        z.literal(512),
      ])
      .catch(defaults.tileSize)
      .default(defaults.tileSize),
    title: z.string().nullable().optional(),
    path: z.string(),
  })
  .transform(({ fovMin, fovMax, ...output }) => {
    return {
      ...output,
      fovRange: [fovMin, fovMax],
    };
  });

export type SurveyImage = z.infer<typeof surveyImageSchema>;

export const surveyLayerSchema = z
  .object({
    id: z.string(),
    opacity: z.coerce.number().min(0).max(1).default(1).catch(1),
    survey: z
      .array(surveyImageSchema)
      .min(1)
      .max(1)
      .transform((output) => output[0]),
  })
  .transform(({ id, opacity, survey }) => {
    return { id, survey: { opacity, ...survey } };
  });

export type SurveyLayer = z.infer<typeof surveyLayerSchema>;
