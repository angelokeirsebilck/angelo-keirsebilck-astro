import type { CollectionEntry } from "astro:content";

export type BackgroundColor =
  | "green"
  | "pink"
  | "blue"
  | "white"
  | "black"
  | "transparent";
export type CardTitleBackground = "green" | "pink" | "blue";
export type SpacingSize = "sm" | "md" | "lg";
export type XPosition = "left" | "right";
export type techStack =
  CollectionEntry<"textTechStack">["data"]["techStack"][0];
export type SeoContent = CollectionEntry<"home">["data"]["seoContent"];
