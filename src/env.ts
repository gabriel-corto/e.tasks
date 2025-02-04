import { z } from "zod";

const envScheme = z.object({
  VITE_API_URL: z.string().url(),
});
export const env = envScheme.parse(import.meta.env);
