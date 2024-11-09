import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Avalanche Developer Series",
      //   social: {
      //     github: "https://github.com/c-cpt/ava-guide-docs",
      //   },
      editLink: {
        baseUrl: "https://github.com/c-cpt/ava-guide-docs/edit/main/",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "9000 Guide", slug: "guides/avalanche9000" },
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
