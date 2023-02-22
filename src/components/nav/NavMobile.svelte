<script lang="ts">
  import { isNavOpen } from "@stores/nav";
  import logo from "@assets/svg/angelo-keirsebilck-web-dev-black.svg";
  import cross from "@assets/svg/cross.svg";
  import Socials from "@components/base/Socials.svelte";
  import type { CollectionEntry } from "astro:content";

  export let locale: string;
  export let navList: CollectionEntry<"pages">[];
</script>

<nav
  class="h-100 w-full flex justify-between flex-col fixed inset-0 bg-white z-[9999] opacity-0 pointer-events-none transition-all duration-300 ease-in-out [&.navOpen]:opacity-100 [&.navOpen]:pointer-events-auto"
  class:navOpen={$isNavOpen}
>
  <div class="container">
    <div class="py-6">
      <div class="flex justify-between items-center">
        <a href={`/${locale}/`} rel="prefetch" class="block w-40 lg:w-[257px]">
          <img
            src={logo}
            alt="Angelo Keirsebilck Web Development Logo"
            width="257"
            height="69"
          />
        </a>
        <button
          aria-label="Close menu"
          on:click={() => isNavOpen.set(!$isNavOpen)}
          class="lg:hover:rotate-90 transition-all duration-300"
        >
          <img src={cross} alt="Cross illustration" />
        </button>
      </div>
    </div>
  </div>
  <div class="container">
    <ul class="flex items-center gap-y-4 flex-col">
      {#each navList as item}
        <li>
          <a class="font-bebas text-4xl" href={`/${item.slug}/`}
            >{item.data.title}</a
          >
        </li>
      {/each}
    </ul>
  </div>
  <div class="container mb-16">
    <div class="flex gap-x-10 justify-center">
      <Socials />
    </div>
  </div>
</nav>
