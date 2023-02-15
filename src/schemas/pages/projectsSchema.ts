import { z } from "astro:content";
import { cta } from "../blocks/ctaSchema";
export const projectSchema = z.object({
  title: z.string(),
  uid: z.enum(["kerotec", "demo-payload-sveltekit"]),
  cta,
  techStack: z.array(
    z.enum([
      "nextjs",
      "craftcms",
      "astro",
      "sveltekit",
      "gsap",
      "supabase",
      "skeletonui",
      "payloadcms",
      "tailwind",
    ] as const)
  ),
});
