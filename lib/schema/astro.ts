"server-only";
import z from "zod";

export const ra = z.number().min(0).max(360);
export const dec = z.number().min(-90).max(90);
export const position = z.tuple([ra, dec]);
