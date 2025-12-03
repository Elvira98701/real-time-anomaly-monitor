import { z } from "zod";

export const threatLevelSchema = z.object({
  value: z.enum(["Low", "Medium", "High", "Critical"]),
  color: z.string().regex(/^#([0-9A-F]{3}|[0-9A-F]{6})$/i),
});

export const spiritSchema = z.object({
  id: z.string(),
  name: z.string(),
  threatLevel: threatLevelSchema,
  location: z.string(),
  status: z.enum(["Active", "Captured"]),
  image: z.string(),
});

export const SpiritsListSchema = z.array(spiritSchema);

export type Spirit = z.infer<typeof spiritSchema>;
