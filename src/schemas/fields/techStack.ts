import { z } from "astro:content";

export const techStack = z.array(
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
);
