import { z } from "astro:content";
import { cta } from "./blocks/ctaSchema";
export const homeSchema = z.object({
  uid: z.string(),
  title: z.string(),
  description: z
    .string()
    .max(
      160,
      "For best SEO results, please keep the description under 160 characters."
    ),
  cta,
});
