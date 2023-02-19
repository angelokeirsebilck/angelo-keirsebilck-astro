import { z } from "astro:content";
import { bgColor } from "../fields/bgColor";
import { textPos } from "../fields/textPos";
import { techStack } from "../fields/techStack";

export const textTechStackSchema = z.object({
  title: z.string(),
  bgColor,
  textPos,
  techStack,
});
