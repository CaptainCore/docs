module.exports = {
  lang: 'en-US',
  title: 'CaptainCore',
  description: 'WordPress management toolkit for geeky maintenance professionals.',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/assets/img/logo.png' } ]
  ],

  markdown: {
    theme: "material-default"
  },

  themeConfig: {
    repo: 'captaincore/docs',
    docsDir: 'docs',
    docsBranch: 'main',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/captaincore/docs' },
    ],
    editLink: {
      pattern: 'https://github.com/captaincore/docs/edit/main/docs/:path',
      text: 'Edit on GitHub'
    },
    lastUpdatedText: 'Last Updated',
    logo: '/assets/img/logo.png',
    nav: [
      {
        text: 'Home',
        link: 'https://captaincore.io'
      },
      {
        text: 'Development Updates',
        link: 'https://captaincore.io/development-updates/'
      }
    ],
    sidebar: {
        '/': sidebarMain(),
        '/guide/': sidebarMain(),
        '/features/': sidebarMain()
      }
  }
}

function sidebarMain() {
  return [
    {
      text: 'Introduction',
      items: [
        { text: 'What is CaptainCore?', link: '/' },
        { text: 'Features', link: '/features/' },
        { text: 'Getting Started', link: '/guide/' },
      ]
    },
    {
      text: 'Advanced',
      items: [
        { text: 'CLI', link: '/guide/cli.html' },
      ]
    }
  ]
}