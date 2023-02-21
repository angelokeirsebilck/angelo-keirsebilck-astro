<script lang="ts">
  import { isNavOpen } from "@stores/nav";
</script>

<button on:click={() => isNavOpen.set(!$isNavOpen)}>Hamburger</button>
