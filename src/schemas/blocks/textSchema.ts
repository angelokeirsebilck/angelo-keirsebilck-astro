import { z } from "astro:content";
import { bgColor } from "../fields/bgColor";

export const textSchema = z.object({
  title: z.string(),
  bgColor,
  textCenter: z.boolean().default(true),
  mt0: z.boolean().default(false),
});
