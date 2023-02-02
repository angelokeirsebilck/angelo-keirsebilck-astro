<script lang="ts">
  // import TwicPics svelte3 components
  import { installTwicPics, TwicImg } from "@twicpics/components/sveltekit";
  // import TwicPics components css
  import "@twicpics/components/style.css";

  installTwicPics({
    // domain is mandatory
    domain: `https://angelokeirsebilck.twic.pics`,
  });
  export let src: string;
  export let ratio: string = "none";
</script>

<TwicImg {ratio} {src} />
