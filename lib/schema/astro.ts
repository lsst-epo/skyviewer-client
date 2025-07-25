import { z } from "zod/v4";

export const ra = z.coerce.number<number>().min(0).max(360);
export const dec = z.coerce.number<number>().min(-90).max(90);
export const fov = z.coerce.number<number>().min(0);
export const position = z.tuple([ra, dec]);
export const target = z
  .string()
  .transform((val) => val.split(" ").map(parseFloat))
  .pipe(position)
  .transform((val) => val.join(" "));
