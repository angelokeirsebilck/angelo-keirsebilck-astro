import { z } from "astro:content";

export const seoContent = z.object({
  title: z
    .string()
    .max(65, "For best SEO results, please keep the title under 65 characters.")
    .optional(),
  description: z
    .string()
    .max(
      160,
      "For best SEO results, please keep the description under 160 characters."
    ),
  og: z.object({
    image: z.string(),
    title: z.string(),
  }),
});
