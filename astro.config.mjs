// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "",
      social: {
        github: "https://github.com/ava-labs",
      },
      editLink: {
        baseUrl: "https://github.com/c-cpt/ava-guide-docs/edit/main/",
      },
      logo: {
        src: "./src/assets/dev_logo.svg",
        replacesTitle: true,
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
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
  ],
});
