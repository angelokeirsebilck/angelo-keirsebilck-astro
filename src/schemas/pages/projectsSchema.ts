import { z } from "astro:content";
import { cta } from "../blocks/ctaSchema";
export const testSchema = z.object({
  title: z.string(),
  uid: z.enum(["kerotec", "demo-payload-sveltekit"]),
  cta,
});
