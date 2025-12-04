import { jsonApiInstance } from "@/shared/api";

export const captureSpirit = (id: string) =>
  jsonApiInstance(`/api/spirits/${id}`, { method: "POST" });
