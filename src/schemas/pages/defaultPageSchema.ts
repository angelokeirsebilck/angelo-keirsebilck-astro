import { z } from "astro:content";
import { cta } from "../blocks/ctaSchema";
import { seoContent } from "@schemas/fields/seoContent";
export const defaultPageSchema = z.object({
  title: z.string(),
  seoContent,
  sitemap: z.boolean().default(true),
  menuOrder: z.number().default(1),
  uid: z.enum(["projects", "method", "contact", "thanks"]),
  cta,
});
