import { z } from "astro:content";

export const cta = z
  .object({
    title: z.string(),
    text: z.string(),
    uri: z.string(),
    linkLabel: z.string(),
  })
  .optional();
