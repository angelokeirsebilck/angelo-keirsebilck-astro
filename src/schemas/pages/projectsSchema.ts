import { z } from "astro:content";

export const testSchema = z.object({
  title: z.string(),
  uid: z.enum(["kerotec", "demo-payload-sveltekit"]),
});
