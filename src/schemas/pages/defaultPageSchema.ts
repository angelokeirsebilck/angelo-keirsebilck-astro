import { z } from "astro:content";
import { cta } from "../blocks/ctaSchema";
export const defaultPageSchema = z.object({
  title: z.string(),
  uid: z.enum(["projects", "method", "contact", "thanks"]),
  cta,
});
