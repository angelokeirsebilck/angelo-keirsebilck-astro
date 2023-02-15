import { defineCollection } from "astro:content";
import { defaultPageSchema } from "../schemas/pages/defaultPageSchema";
import { homeSchema } from "../schemas/homeSchema";
import { projectSchema } from "../schemas/pages/projectsSchema";

const homeCollection = defineCollection({ schema: homeSchema });
const pagesCollection = defineCollection({ schema: defaultPageSchema });
const projectsCollection = defineCollection({ schema: projectSchema });

export const collections = {
  home: homeCollection,
  projects: projectsCollection,
  pages: pagesCollection,
};
