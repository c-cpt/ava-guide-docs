// import colors from "tailwindcss/colors";
import starlightPlugin from "@astrojs/starlight-tailwind";

// Generated color palettes
const accent = {
  200: "#FF394A",
  600: "#a40021",
  900: "#600c14",
  950: "#421012",
};
const gray = {
  100: "#f6f6f7",
  200: "#ededef",
  300: "#c2c2c4",
  400: "#8b8b8f",
  500: "#58585b",
  700: "#38383b",
  800: "#262629",
  900: "#181819",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  themes: ["starlight-dark"],
  //   theme: {
  //     extend: {
  //       colors: {
  //         // Your preferred accent color. Indigo is closest to Starlight’s defaults.
  //         accent: accent,
  //         // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
  //         // gray: colors.zinc,
  //         gray: gray,
  //       },
  //     },
  //   },
  theme: {
    colorScheme: "dark", // Set the default color scheme to 'dark'
  },
  useStarlightDarkModeSwitch: false,
  plugins: [starlightPlugin()],
};
