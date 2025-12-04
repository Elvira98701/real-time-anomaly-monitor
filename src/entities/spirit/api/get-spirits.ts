import { SpiritsListSchema, type Spirit } from "@/entities/spirit";
import { jsonApiInstance } from "@/shared/api";

export const getSpirits = async ({ signal }: { signal: AbortSignal }) => {
  const data = await jsonApiInstance<unknown>(`/api/spirits`, {
    signal,
  });

  const parsed = SpiritsListSchema.safeParse(data);

  if (!parsed.success) {
    console.error("Invalid spirits payload:", parsed.error);
    throw new Error("Invalid spirits data");
  }

  return parsed.data as Spirit[];
};
