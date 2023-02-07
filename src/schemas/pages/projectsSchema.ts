import { z } from "astro:content";

export const testSchema = z.object({
  title: z.string(),
  uid: z.string(),
  // type: z.enum(["pages", "projects"]),
});
