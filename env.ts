import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  emptyStringAsUndefined: true,
  shared: {
    NODE_ENV: z.enum(["development", "test", "production"]).default("test"),
  },
  server: {
    CRAFT_REVALIDATE_SECRET_TOKEN: z.string().min(1),
    CRAFT_SECRET_TOKEN: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().url(),
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_ASTRO_API_URL: z.string().url(),
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_ASTRO_API_URL: process.env.NEXT_PUBLIC_ASTRO_API_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
});
