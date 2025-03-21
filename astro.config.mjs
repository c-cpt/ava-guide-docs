// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ["hast-util-to-html", "zwitch"],
    },
  },
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
        {
          tag: "meta",
          attrs: {
            "og:image": "/imgs/og-cover.png",
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
        src: "./src/assets/dev_logo.svg",
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
          label: "Builder Stories",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "BitNote Builds a Safe Place for Your Most Sensitive Data",
              slug: "builder-stories/bitnote_safe_place",
            },
            {
              label: "Colony Lab Democratizes Early-Stage Investment",
              slug: "builder-stories/colony-lab-emocratizes-early-stage-investment",
            },
          ],
        },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
