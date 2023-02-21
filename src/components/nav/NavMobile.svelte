<script lang="ts">
  import { isNavOpen } from "@stores/nav";
</script>

{#if $isNavOpen}
  <nav class="h-100 w-full fixed inset-0 bg-blue-100 z-[9999]">NAv</nav>
{/if}
