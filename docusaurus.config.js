// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Plazoleta',
  tagline: 'Un cortometraje de Ángela Curzi',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://plazoleta-puce.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'volkova', // Usually your GitHub org/user name.
  projectName: 'plazoleta', // Usually your repo name.

  onBrokenLinks: 'warn',
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
          /*editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',*/
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',*/
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
      // Replace with your project's social card
      image: 'img/plazoleta-social-card.jpg',
      navbar: {
        title: 'Plazoleta',
        logo: {
          alt: 'Plazoleta Logo',
          src: 'img/banyan-tree.png',
        },
        items: [
          {
            type: 'doc',
            docId: '/category/carpeta-de-tesis',
            position: 'left',
            label: 'Proyecto',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Proyecto',
                to: '/docs//category/carpeta-de-tesis',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Redes Sociales',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/AnVolkova10',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/%C3%A1ngela-curzi-572372ba/',
              },
              {
                label: 'Youtube',
                href: 'https://youtube.com/@anvolkova10',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Portfolio',
                href: 'https://portfolio-anvolkova10.vercel.app/',
              },
              {
                label: 'Cátedra TDT',
                href: 'https://www.facebook.com/TDTArtesAudiovisualesUNLP',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Plazoleta, blog built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
