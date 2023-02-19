import { defineCollection } from "astro:content";
import { defaultPageSchema } from "../schemas/pages/defaultPageSchema";
import { homeSchema } from "../schemas/homeSchema";
import { stepSchema } from "../schemas/stepSchema";
import { projectSchema } from "../schemas/pages/projectsSchema";
import { textTechStackSchema } from "../schemas/blocks/textTechStackSchema";

const homeCollection = defineCollection({ schema: homeSchema });
const pagesCollection = defineCollection({ schema: defaultPageSchema });
const projectsCollection = defineCollection({ schema: projectSchema });
const stepsCollection = defineCollection({ schema: stepSchema });
const textTechStackCollection = defineCollection({
  schema: textTechStackSchema,
});

export const collections = {
  home: homeCollection,
  projects: projectsCollection,
  pages: pagesCollection,
  steps: stepsCollection,
  textTechStack: textTechStackCollection,
};
