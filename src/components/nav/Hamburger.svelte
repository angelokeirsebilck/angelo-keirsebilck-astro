<script lang="ts">
  import { isNavOpen } from "@stores/nav";
</script>

<button
  class="flex flex-col gap-y-1 w-10 group  lg:hidden"
  on:click={() => isNavOpen.set(!$isNavOpen)}
  aria-label="Menu hamburger button"
>
  <div
    class="h-[6px] bg-white border-2 border-black-default shadow-neo-2px w-full transition-transform duration-300  transform origin-right group-hover:scale-x-[85%]"
  />
  <div
    class="h-[6px] bg-white border-2 border-black-default shadow-neo-2px w-full transition-transform duration-300 transform origin-right group-hover:scale-x-[70%]"
  />
  <div
    class="h-[6px] bg-white border-2 border-black-default shadow-neo-2px w-full transition-transform duration-300 transform origin-right group-hover:scale-x-[90%]"
  />
</button>
