import { z } from "astro:content";
import { bgColor } from "../fields/bgColor";

export const textSchema = z.object({
  title: z.string(),
  bgColor,
});
