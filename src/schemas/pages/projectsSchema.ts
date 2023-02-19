import { z } from "astro:content";
import { cta } from "../blocks/ctaSchema";
import { techStack } from "../fields/techStack";

export const projectSchema = z.object({
  title: z.string(),
  uid: z.enum(["kerotec", "demo-payload-sveltekit"]),
  cta,
  thumbnailUrl: z.string(),
  thumbnailText: z.string(),
  home: z.boolean().default(false),
  techStack,
});
