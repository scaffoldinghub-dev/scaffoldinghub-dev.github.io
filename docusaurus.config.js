// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Scaffolding Hub',
  tagline: 'Welcome 👋 let\'s get started writing apps faster',
  url: 'https://scaffoldinghub.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'scaffoldinghub-dev',
  projectName: 'scaffoldinghub-dev.github.io', 

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
          editUrl:
            'https://github.com/scaffoldinghub-dev/scaffoldinghub-dev.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/scaffoldinghub-dev/scaffoldinghub-dev.github.io/tree/main/',
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
        title: 'Scaffolding Hub',
        logo: {
          alt: 'ScaffoldingHub Logo',
          src: 'img/scaffoldinghub.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            
            href:'https://github.com/sjhorn/mason_bricks',
            position: 'left',
            label: 'Mason Bricks',
          },
          {href: 'https://pub.dev/packages/scaffolding', label: 'Pub.dev', position: 'left'},
          {
            href: 'https://github.com/scaffoldinghub-dev/scaffoldinghub-dev.github.io',
            position: 'right',
            className: 'navbar-github-icon',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          
          {
            title: 'Resources',
            items: [
              {
                label: 'pub.dev Package',
                href: 'https://pub.dev/packages/scaffolding',
              },
              {
                label: 'GitHub for package',
                href: 'https://github.com/sjhorn/scaffolding',
              },
              {
                label: 'GitHub for mason bricks',
                href: 'https://github.com/sjhorn/mason_bricks',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Open an issue',
                href: 'https://github.com/sjhorn/scaffolding/issues',
              },
            ],
          },
        ],
        copyright: `🚀 Develop and 🧐 learn faster with scaffolding - Copyright © ${new Date().getFullYear()}.`,
      },
      prism: {
        additionalLanguages: ['bash', 'dart', 'yaml'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
