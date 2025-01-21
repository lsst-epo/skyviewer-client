import z from "zod";
import clamp from "lodash/clamp";
import { SurveyImage } from "./api/survey";

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
