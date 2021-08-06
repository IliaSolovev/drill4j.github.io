module.exports = {
  title: 'Drill4J',
  url: 'https://IliaSolovev.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/logo.svg',
  organizationName: 'IliaSolovev',
  projectName: 'drill4j.github.io',
  noIndex: true,
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      additionalLanguages: ['java'],
    },
    navbar: {
      items: [
        {
          to: 'how-to-start/',
          label: 'How to start',
        },
        {
          to: 'docs/installation/drill-admin',
          label: 'Documentation',
        },
        {
          to: 'install-demo/',
          label: 'Install demo',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Installation',
          items: [
            {
              label: 'Drill Admin',
              href: '/docs/installation/drill-admin',
            },
            {
              label: 'Java Agent',
              href: '/docs/installation/java-agent',
            },
            {
              label: 'Autotest Agent',
              href: '/docs/installation/autotest-agent',
            },
          ],
        },
        {
          title: ' ',
          items: [
            {
              label: 'Microservices',
              href: '/docs/installation/microservices',
            }, {
              label: 'Chrome Extension',
              href: '/docs/installation/extension',
            },
            {
              label: 'Java + JS example App',
              href: '/install-demo',
            },
          ],
        },
        {
          title: 'Drill4J',
          items: [
            {
              label: 'Contact us',
              href: 'https://t.me/drill4j',
            },
            {
              label: 'FAQ',
              href: '/docs/faq/',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
};
