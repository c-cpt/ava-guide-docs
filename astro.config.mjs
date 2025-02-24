// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      head: [
        // Example: add Fathom analytics script tag.
        {
          tag: "script",
          attrs: {
            src: "/plugins/theme.js",
          },
        },
      ],
      favicon: "/favicon.ico",
      title: "",
      social: {
        github: "https://github.com/ava-labs",
      },
      editLink: {
        baseUrl: "https://github.com/c-cpt/ava-guide-docs/edit/main/",
      },
      logo: {
        src: "./imgs/dev_logo.svg",
        replacesTitle: true,
      },
      components: {
        Hero: "./src/components/Hero.astro",
        Footer: "./src/components/Footer.astro",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Getting Started With Blockchain Development",
              slug: "guides/getting_started_with_blockchain_development",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
    react(),
  ],
});
