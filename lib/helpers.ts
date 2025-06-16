import { z } from "zod/v4";
import { ReadonlyURLSearchParams } from "next/navigation";
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
        .number<number>()
        .min(fovRange[0])
        .max(fovRange[1])
        .catch(({ value }) => {
          return clamp(value as number, fovRange[0], fovRange[1]);
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

export const clientInitialPosition = ({
  searchParams,
  fovRange = [0, 180],
}: {
  searchParams: ReadonlyURLSearchParams;
  fovRange?: Array<number>;
}) => {
  return z
    .object({
      fov: z.coerce
        .number<number>()
        .min(fovRange[0])
        .max(fovRange[1])
        .catch(({ value }) => {
          return clamp(value as number, fovRange[0], fovRange[1]);
        })
        .optional(),
      target: z
        .string()
        .transform((val) => val.split(" ").map(parseFloat))
        .pipe(position)
        .transform((val) => val.join(" "))
        .optional(),
    })
    .optional()
    .safeParse(Object.fromEntries(searchParams)).data;
};
