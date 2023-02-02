import { defaultPageSchema } from "../schemas/pages/defaultPageSchema";
import { defineCollection } from "astro:content";
import { homeSchema } from "../schemas/homeSchema";

const homeCollection = defineCollection({ schema: homeSchema });
const pagesCollection = defineCollection({ schema: defaultPageSchema });

export const collections = {
  home: homeCollection,
  pages: pagesCollection,
};
