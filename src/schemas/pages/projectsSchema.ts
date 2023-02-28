import { z } from "astro:content";
import { cta } from "../blocks/ctaSchema";
import { techStack } from "../fields/techStack";
import { seoContent } from "@schemas/fields/seoContent";
export const projectSchema = z.object({
  title: z.string(),
  seoContent,
  uid: z.enum(["kerotec", "demo-payload-sveltekit", "ak-old"]),
  order: z.number().default(9999),
  cta,
  thumbnailUrl: z.string(),
  thumbnailText: z.string(),
  home: z.boolean().default(false),
  techStack,
});
