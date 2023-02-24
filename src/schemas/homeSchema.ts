import { z } from "astro:content";
import { cta } from "./blocks/ctaSchema";
import { seoContent } from "./fields/seoContent";
export const homeSchema = z.object({
  uid: z.string(),
  title: z.string(),
  seoContent,
  cta,
});
