// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AgriCraft',
  tagline: 'Agricultural farming extended',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://ketheroth.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/agricraft.github.io',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ketheroth', // Usually your GitHub org/user name.
  projectName: 'agricraft.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/AgriCraft/agricraft.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'AgriCraft',
        logo: {
          alt: 'AgriCraft Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'customizationSidebar',
            position: 'left',
            label: 'Customization',
          },
          {
            type: 'docSidebar',
            sidebarId: 'wikiSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {
            href: 'https://www.curseforge.com/minecraft/mc-mods/agricraft',
            label: 'CurseForge',
            position: 'right',
          },
          {
            href: 'https://modrinth.com/mod/agricraft',
            label: 'Modrinth',
            position: 'right',
          },
          {
            href: 'https://discord.gg/vyrdwWc',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/AgriCraft',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['json', 'json5']
      },
    }),
};

export default config;
