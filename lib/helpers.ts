import z from "zod";
import clamp from "lodash/clamp";
import { position } from "./schema/astro";

export const initialPosition = (
  searchParams: SearchParams,
  {
    target,
    fovRange,
    fov,
  }: { target: string; fovRange: Array<number>; fov: number }
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
