const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  safelist: ["swiper-button-disabled", "swiper-button-lock"],
  theme: {
    fontFamily: {
      bebas: ["Bebas Neue", "Bebas Neue Fallback", "sans-serif"],
      poppins: ["Poppins", "Poppins Fallback", "sans-serif"],
    },
    extend: {
      colors: {
        black: {
          default: "#121212",
        },
        error: {
          default: "#DB6262",
        },
        green: {
          default: "#57B79D",
          50: "#f3faf8",
          100: "#d5f2e8",
          200: "#abe4d1",
          300: "#7aceb5",
          400: "#57b79d",
          500: "#34987e",
          600: "#287966",
          700: "#236254",
          800: "#204f45",
          900: "#1f423b",
        },
        pink: {
          default: "#F2B9CE",
          50: "#fcf3f6",
          100: "#fae9f0",
          200: "#f6d4e1",
          300: "#f2b9ce",
          400: "#e680a3",
          500: "#db5982",
          600: "#c83a60",
          700: "#ac2a49",
          800: "#8f253d",
          900: "#782336",
        },
        blue: {
          default: "#5BC0C8",
          50: "#f0fbfb",
          100: "#d9f4f4",
          200: "#b7e8ea",
          300: "#86d6da",
          400: "#5bc0c8",
          500: "#319ea9",
          600: "#2c818e",
          700: "#296875",
          800: "#295761",
          900: "#264a53",
        },
      },
      gridTemplateColumns: {
        18: "repeat(18, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-14": "span 14 / span 14",
      },
      gridColumnStart: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
      },
      maxWidth: {
        container: "1536px",
      },
      backgroundSize: {
        full: "100%",
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        "neo-2px": "2px 2px 0px #000000",
        "neo-2px-hover": "-2px -2px 0px #000000",
        "neo-4px": "5px 5px 0px #000000",
        "neo-4px-hover": "-3px -3px 0px #000000",
      },
      borderRadius: {
        20: "20px",
        inherit: "inherit",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("flowbite/plugin"),
    formKitTailwind,
  ],
};
