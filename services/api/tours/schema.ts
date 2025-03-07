"server-only";
import z from "zod";
import { MinimalAssetSchema } from "@/lib/schema/canto";
import { dec, ra } from "@/lib/schema/astro";

const complexity = z.coerce.number();
const duration = z.coerce.number();
const thumbnail = z.array(MinimalAssetSchema).transform((output) => output[0]);
const textBlock = z.object({ id: z.string(), text: z.string() });
const audio = z
  .object({
    metadata: z.object({
      DurationTime: z.coerce.number(),
      FileTypeExtension: z.string(),
    }),
    additional: z.object({
      TitleEN: z.string().nullable(),
      TitleES: z.string().nullable(),
    }),
    url: z.object({
      directUrlOriginal: z.string().url(),
    }),
  })
  .transform(({ metadata, url, additional }) => {
    return {
      additional,
      duration: metadata.DurationTime,
      format: metadata.FileTypeExtension,
      src: url.directUrlOriginal,
    };
  });

export type TourAudio = z.infer<typeof audio>;

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
  thumbnail,
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
  zoomOutTime: z.coerce
    .number()
    .nullable()
    .default(1)
    .transform((arg) => arg ?? 1),
  zoomInTime: z.coerce
    .number()
    .nullable()
    .default(1)
    .transform((arg) => arg ?? 1),
  zoomOutFov: z.coerce
    .number()
    .nullable()
    .default(10)
    .transform((arg) => arg ?? 10),
  panTime: z.coerce
    .number()
    .nullable()
    .default(2)
    .transform((arg) => arg ?? 2),
  audio: z
    .array(audio)
    .transform((output) => output[0])
    .optional(),
});
