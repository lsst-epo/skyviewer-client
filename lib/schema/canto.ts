import { z } from "zod/v4";

export const UnsupportedCantoScheme = z.enum([
  "audio",
  "presentation",
  "other",
]);
export const SupportedCantoScheme = z.enum(["image", "video", "document"]);
export const CantoScheme = z.enum([
  ...SupportedCantoScheme.options,
  ...UnsupportedCantoScheme.options,
]);
export const AdditionalSchema = z.object({
  AltTextEN: z.string().nullable(),
  AltTextES: z.string().nullable(),
  CaptionEN: z.string().nullable(),
  CaptionES: z.string().nullable(),
  Credit: z.string().nullable(),
  TitleEN: z.string().nullable(),
  TitleES: z.string().nullable(),
});
const AssetDefaultSchema = z.object({
  ContentType: z.string(),
  DateCreated: z.string(),
  DateModified: z.string(),
  DateUploaded: z.string(),
  Size: z.string(),
});
export const AssetUrlSchema = z.object({
  directUrlOriginal: z.string().url(),
  directUrlPreview: z.string().url(),
  directUrlPreviewPlay: z.string().url().nullable(),
});

export const MinimalAssetSchema = z.object({
  additional: AdditionalSchema.pick({ AltTextEN: true, AltTextES: true }),
  width: z.coerce.number(),
  height: z.coerce.number(),
  url: AssetUrlSchema.pick({ directUrlOriginal: true, directUrlPreview: true }),
});

export type MinimalAsset = z.infer<typeof MinimalAssetSchema>;
