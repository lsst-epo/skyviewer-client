import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod/v4";

const COERCED_BOOLEAN = z
  .string()
  // transform to boolean using preferred coercion logic
  .transform((s) => s !== "false" && s !== "0");

export const env = createEnv({
  emptyStringAsUndefined: true,
  shared: {
    NODE_ENV: z.enum(["development", "test", "production"]).default("test"),
  },
  server: {
    CLOUD_ENV: z.enum(["PROD", "INT", "DEV"]).default("DEV"),
    CRAFT_REVALIDATE_SECRET_TOKEN: z.string().min(1),
    CRAFT_SECRET_TOKEN: z.string().min(1),
    PLAUSIBLE_DOMAIN: z.string().min(1).optional(),
    /** if enabled, will add a forced Cache-Control header to RSC responses */
    NEXT_RSC_CACHE_CONTROL: COERCED_BOOLEAN.optional().default(true),
    NEXT_IMAGE_MINIMUM_CACHE_TTL: z.coerce
      .number()
      .int()
      .catch(3600)
      .default(3600),
  },
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().url(),
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_ASTRO_API_URL: z.string().url(),
    NEXT_PUBLIC_ASTRO_OBJECTS_API_TOKEN: z.string().min(1),
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_ASTRO_API_URL: process.env.NEXT_PUBLIC_ASTRO_API_URL,
    NEXT_PUBLIC_ASTRO_OBJECTS_API_TOKEN:
      process.env.NEXT_PUBLIC_ASTRO_OBJECTS_API_TOKEN,
    NODE_ENV: process.env.NODE_ENV,
  },
});
