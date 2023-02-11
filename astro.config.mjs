import { loadEnv } from "vite";

import { defineConfig } from "astro/config";
// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import node from "@astrojs/node";

const { PUBLIC_SITE_URL } = loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_SITE_URL,
  trailingSlash: "never",
  integrations: [
    tailwind(),
    mdx(),
    svelte(),
    sitemap({
      i18n: {
        defaultLocale: "nl",
        locales: {
          en: "en",
          nl: "nl",
        },
      },
    }),
  ],
  output: "server",
  adapter: vercel(),
});
