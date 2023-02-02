<script lang="ts">
  // import TwicPics svelte3 components
  import { installTwicPics, TwicImg } from "@twicpics/components/sveltekit";
  // import TwicPics components css
  import "@twicpics/components/style.css";

  installTwicPics({
    // domain is mandatory
    domain: `https://angelokeirsebilck.twic.pics`,
  });
</script>

<TwicImg
  class="self-center w-full"
  ratio="471:322"
  src="https://angelokeirsebilck.ams3.cdn.digitaloceanspaces.com/ak-astro/svg/person-pc-illu.svg"
/>
