import { defineCollection } from "astro:content";
import { defaultPageSchema } from "../schemas/pages/defaultPageSchema";
import { homeSchema } from "../schemas/homeSchema";
import { testSchema } from "../schemas/pages/projectsSchema";

const homeCollection = defineCollection({ schema: homeSchema });
const pagesCollection = defineCollection({ schema: defaultPageSchema });
const testCollection = defineCollection({ schema: testSchema });

export const collections = {
  home: homeCollection,
  projects: testCollection,
  pages: pagesCollection,
};
