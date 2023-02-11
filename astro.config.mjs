import { loadEnv } from "vite";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
const {
  PUBLIC_SITE_URL
} = loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_SITE_URL,
  trailingSlash: "always",
  integrations: [tailwind(), prefetch(), mdx(), svelte(), sitemap({
    i18n: {
      defaultLocale: "nl",
      locales: {
        en: "en",
        nl: "nl"
      }
    }
  })],
  output: "server",
  adapter: vercel()
});