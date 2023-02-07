import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export const useGetLocalizedData = async (
  pages: CollectionEntry<"pages">[]
) => {
  let localizedData: { locale: string; uri: string; slug: string }[] = [];

  pages.forEach((page) => {
    const [locale] = page.id.split("/");
    localizedData.push({
      locale,
      uri: page.data.uri,
      slug: page.slug,
    });
  });
};
