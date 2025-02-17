import z from "zod";
import clamp from "lodash/clamp";
import defaultSurveyView from "@/fixtures/defaultSurveyView";

export const buildSurveyImage = (survey: unknown) => {
  const { fovMin, fovMax, ...rest } = surveyImageSchema.parse(survey);

  return {
    fovRange: [fovMin, fovMax],
    ...rest,
  };
};

export type SurveyImage = ReturnType<typeof buildSurveyImage>;

const ra = z.number().min(0).max(360);
const dec = z.number().min(-90).max(90);

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
        .pipe(z.tuple([ra, dec]))
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
    .enum(["jpg", "png", "fits", "webp"])
    .catch(defaultSurveyView.imgFormat)
    .default(defaultSurveyView.imgFormat),
  title: z.string().nullable(),
  path: z.string(),
});
