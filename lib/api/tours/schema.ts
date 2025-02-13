"server-only";
import z from "zod";
import { MinimalAssetSchema } from "@/lib/schema/canto";

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
