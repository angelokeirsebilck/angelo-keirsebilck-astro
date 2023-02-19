import { z } from "astro:content";

export const bgColor = z.enum(["green", "pink", "blue", "black", "white"]);
