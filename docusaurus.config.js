// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AgriCraft',
  tagline: 'Agricultural farming extended',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://agricraft.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AgriCraft', // Usually your GitHub org/user name.
  projectName: 'agricraft.github.io', // Usually your repo name.

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/AgriCraft/agricraft.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['json', 'json5']
      },
    }),
};

module.exports = config;
