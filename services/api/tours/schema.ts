"server-only";
import z from "zod";
import { MinimalAssetSchema } from "@/lib/schema/canto";
import { dec, ra } from "@/lib/schema/astro";

const complexity = z.coerce.number();
const duration = z.coerce.number();
const thumbnail = z.array(MinimalAssetSchema).transform((output) => output[0]);
const textBlock = z.object({ id: z.string(), text: z.string() });

export const TourCard = z.object({
  id: z.string(),
  title: z.string(),
  uri: z.string(),
  complexity,
  duration,
  thumbnail,
});

export const TourMetadata = z.object({
  slug: z.string(),
  title: z.string(),
  backgroundImage: thumbnail,
  complexity,
  duration,
});

export const Tour = z.object({
  title: z.string(),
  slug: z.string(),
  thumbnail,
  introHeading: z.string(),
  introSubheading: z.string(),
  introContentBlocks: z.array(textBlock),
  factsHeading: z.string(),
  factsContentBlocks: z.array(textBlock),
});

export const TourInitial = z
  .object({
    fov: z.coerce.number(),
    astroObject: z
      .array(z.object({ ra, dec }))
      .min(1)
      .transform((objects) => objects[0]),
  })
  .transform(({ fov, astroObject }) => {
    return { fov, target: `${astroObject.ra} ${astroObject.dec}` };
  });

export const AstroObject = z.object({
  title: z.string(),
  id: z.string().nullable(),
  ra,
  dec,
  characteristics: z.string().nullable(),
});

export const Poi = z.object({
  id: z.string(),
  description: z.string(),
  fov: z.coerce.number(),
  object: z.array(AstroObject).transform((arg) => arg[0]),
});
