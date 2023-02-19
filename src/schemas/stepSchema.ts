import { z } from "astro:content";

export const stepSchema = z.object({
  title: z.string(),
  borderColor: z.string(),
});
