import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
   title: "GomesDev",
   tagline: "Conheça as técnicas e processos utilizados em meus projetos",
   favicon: "img/foto.jpeg",
   url: "https://matheusgomesdev.com.br/",
   baseUrl: "/",
   organizationName: "facebook",
   projectName: "docusaurus",
   onBrokenLinks: "throw",
   onBrokenMarkdownLinks: "warn",

   i18n: {
      defaultLocale: "en",
      locales: ["en"],
   },

   presets: [
      [
         "classic",
         {
            docs: {
               sidebarPath: "./sidebars.ts",
            },
            blog: {
               showReadingTime: true,
            },
            theme: {
               customCss: "./src/css/custom.css",
            },
         } satisfies Preset.Options,
      ],
   ],

   themeConfig: {
      image: "img/foto.jpeg",
      colorMode: {
         defaultMode: "dark",
      },
      navbar: {
         title: "GomesDev",
         logo: {
            alt: "GomesDev",
            src: "img/foto.jpeg",
         },
         items: [
            {
               label: "Visão Geral",
               position: "right",
               href: "/docs/visao-geral",
            },
            {
               label: "Code Review",
               position: "right",
               href: "/docs/category/code-review",
            },
            {
               label: "Versionamento",
               position: "right",
               href: "/docs/category/versionamento",
            },
         ],
      },
      footer: {
         copyright: `Copyright © ${new Date().getFullYear()}. GomesDev.`,
      },
      prism: {
         theme: prismThemes.github,
         darkTheme: prismThemes.dracula,
      },
   } satisfies Preset.ThemeConfig,

   plugins: [
      async function myPlugin(context, options) {
         return {
            name: "docusaurus-tailwindcss",
            configurePostCss(postcssOptions) {
               postcssOptions.plugins.push(require("tailwindcss"));
               postcssOptions.plugins.push(require("autoprefixer"));
               return postcssOptions;
            },
         };
      },
   ],
};

export default config;
