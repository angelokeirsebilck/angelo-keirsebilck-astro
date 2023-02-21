import { loadEnv } from "vite";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import vue from "@astrojs/vue";

const { PUBLIC_SITE_URL } = loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_SITE_URL,
  trailingSlash: "always",
  integrations: [
    tailwind(),
    prefetch(),
    mdx(),
    svelte(),
    sitemap({
      filter: (page) => !page.includes("thanks") && !page.includes("bedankt"),
      i18n: {
        defaultLocale: "nl",
        locales: {
          en: "en",
          nl: "nl",
        },
      },
    }),
    vue({
      appEntrypoint: "/src/pages/_app",
    }),
  ],
  output: "server",
  adapter: vercel(),
});
