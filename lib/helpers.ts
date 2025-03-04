import z from "zod";
import clamp from "lodash/clamp";
import defaultSurveyView from "@/fixtures/defaultSurveyView";
import { position } from "./schema/astro";

export const buildSurveyImage = (survey: unknown) => {
  const { fovMin, fovMax, ...rest } = surveyImageSchema.parse(survey);

  return {
    fovRange: [fovMin, fovMax],
    ...rest,
  };
};

export type SurveyImage = ReturnType<typeof buildSurveyImage>;

export const initialPosition = (
  searchParams: SearchParams,
  { target, fovRange, fov }: SurveyImage
) => {
  const positionSchema = z
    .object({
      fov: z.coerce
        .number()
        .min(fovRange[0])
        .max(fovRange[1])
        .catch(({ input }) => {
          return clamp(input, fovRange[0], fovRange[1]);
        })
        .default(fov),
      target: z
        .string()
        .transform((val) => val.split(" ").map(parseFloat))
        .pipe(position)
        .transform((val) => val.join(" "))
        .catch(target)
        .default(target),
    })
    .default({ fov, target });

  return positionSchema.parse(searchParams);
};

const surveyImageSchema = z.object({
  fovMin: z.coerce
    .number()
    .catch(defaultSurveyView.fovMin)
    .default(defaultSurveyView.fovMin),
  fovMax: z.coerce
    .number()
    .catch(defaultSurveyView.fovMax)
    .default(defaultSurveyView.fovMax),
  fov: z.coerce
    .number()
    .catch(defaultSurveyView.fov)
    .default(defaultSurveyView.fov),
  target: z
    .string()
    .catch(defaultSurveyView.target)
    .default(defaultSurveyView.target),
  imgFormat: z
    .enum(["jpeg", "png", "fits", "webp"])
    .catch(defaultSurveyView.imgFormat)
    .default(defaultSurveyView.imgFormat),
  cooFrame: z
    .enum(["j2000", "equatorial", "ICRS", "ICRSd", "gal", "galactic"])
    .catch(defaultSurveyView.cooFrame)
    .default(defaultSurveyView.cooFrame),
  maxOrder: z
    .number()
    .min(0)
    .max(12)
    .catch(defaultSurveyView.maxOrder)
    .default(defaultSurveyView.maxOrder),
  tileSize: z
    .union([
      z.literal(32),
      z.literal(64),
      z.literal(128),
      z.literal(256),
      z.literal(512),
    ])
    .catch(defaultSurveyView.tileSize)
    .default(defaultSurveyView.tileSize),
  title: z.string().nullable().optional(),
  path: z.string(),
});
