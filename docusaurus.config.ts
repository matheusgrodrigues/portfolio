import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Matheus Gomes',
    tagline: 'Programador Frontend apaixonado por criação de interfaces inovadoras.',
    favicon: 'img/foto.jpeg',
    url: 'https://matheusgomesdev.com.br/',
    baseUrl: '/',
    organizationName: 'facebook',
    projectName: 'docusaurus',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/foto.jpeg',
        colorMode: {
            defaultMode: 'dark',
        },
        navbar: {
            logo: {
                alt: 'GomesDev',
                src: 'img/foto.jpeg',
                className: 'rounded-full',
            },
            items: [
                {
                    label: 'Processos',
                    position: 'right',
                    href: '/docs/visao-geral',
                },
                {
                    label: 'Github',
                    position: 'right',
                    href: 'https://github.com/matheusgrodrigues',
                },
                {
                    label: 'Linkedin',
                    position: 'right',
                    href: 'https://www.linkedin.com/in/matheusgomes/',
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
                name: 'docusaurus-tailwindcss',
                configurePostCss(postcssOptions) {
                    postcssOptions.plugins.push(require('tailwindcss'));
                    postcssOptions.plugins.push(require('autoprefixer'));
                    return postcssOptions;
                },
            };
        },
    ],
};

export default config;
