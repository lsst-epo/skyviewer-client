"server-only";
import { z } from "zod/v4";
import tagStore from "@/services/api/tags";
import { parseHIPSProperties } from "@/lib/aladin/properties";

const PropertiesSchema = z.object({
  collection: z.string().optional(),
  obs_title: z.string().optional(),
  obs_description: z.string().optional(),
  hips_creator: z.string(),
  hips_release_date: z.iso
    .datetime()
    .catch(({ value }) => new Date(value as string).toISOString())
    .transform((output) => new Date(output)),
});

export type SurveyProperties = z.infer<typeof PropertiesSchema>;

export const getProperties = async (path: string) => {
  const response = await fetch(path, {
    next: { tags: [tagStore.surveys], revalidate: 60 * 60 * 24 },
  });

  if (response.ok) {
    const text = await response.text();

    return PropertiesSchema.parse(parseHIPSProperties(text));
  } else {
    throw new Error(response.statusText);
  }
};
