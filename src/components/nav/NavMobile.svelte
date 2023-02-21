<script lang="ts">
  import { isNavOpen } from "@stores/nav";
  import logo from "@assets/svg/angelo-keirsebilck-web-dev-black.svg";

  export let locale: string;
</script>

<!-- {#if $isNavOpen} -->
<nav
  class="h-100 w-full flex flex-col fixed inset-0 bg-white z-[9999] opacity-0 pointer-events-none transition-all duration-300 ease-in-out [&.navOpen]:opacity-100 [&.navOpen]:pointer-events-auto"
  class:navOpen={$isNavOpen}
>
  <div class="container">
    <div class="py-6">
      <a href={`/${locale}/`} rel="prefetch" class="block w-[257px]">
        <img
          src={logo}
          alt="Angelo Keirsebilck Web Development Logo"
          width="257"
          height="69"
        />
      </a>
    </div>
  </div>

  <button
    on:click={() => isNavOpen.set(!$isNavOpen)}
    class="absolute top-12 right-6 hover:rotate-90 transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="32"
      viewBox="0 0 34 32"
      fill="none"
    >
      <g filter="url(#filter0_d_241_139)">
        <rect
          y="27.5771"
          width="39"
          height="5"
          transform="rotate(-45 0 27.5771)"
          fill="white"
        />
        <rect
          x="0.707107"
          y="27.5771"
          width="38"
          height="4"
          transform="rotate(-45 0.707107 27.5771)"
          stroke="black"
        />
      </g>
      <g filter="url(#filter1_d_241_139)">
        <rect
          x="27.6335"
          y="31.1691"
          width="39"
          height="5"
          transform="rotate(-135 27.6335 31.1691)"
          fill="white"
        />
        <rect
          x="27.6335"
          y="30.462"
          width="38"
          height="4"
          transform="rotate(-135 27.6335 30.462)"
          stroke="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_241_139"
          x="0"
          y="-3.05176e-05"
          width="33.1127"
          height="31.1127"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.858824 0 0 0 0 0.384314 0 0 0 0 0.384314 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_241_139"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_241_139"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_241_139"
          x="0.0563354"
          y="0.056366"
          width="33.1127"
          height="31.1127"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.858824 0 0 0 0 0.384314 0 0 0 0 0.384314 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_241_139"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_241_139"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
    <!-- <div class="relative">
      <div
        class="h-[6px] bg-white border-2 border-black-default shadow-neo-2px w-10  transform -rotate-45 absolute left-0 top-0"
      />
      <div
        class="h-[6px] bg-white border-2 border-black-default shadow-neo-2px w-10  transform rotate-45 absolute left-0 top-0"
      />
    </div> -->
  </button>
</nav>
<!-- {/if} -->
