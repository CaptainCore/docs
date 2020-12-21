module.exports = {
  lang: 'en-US',
  title: 'CaptainCore',
  description: 'WordPress management toolkit for geeky maintenance professionals.',

  head: [
    ['link', { rel: 'icon', href: '/assets/img/logo.png' } ]
  ],

  themeConfig: {
    repo: 'captaincore/docs',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit on GitHub',
    lastUpdated: 'Last Updated',
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
        '/': getSidebar(),
        '/guide/': getSidebar(),
        '/features/': getSidebar()
      }
  }
}
function getSidebar() {
return [
  {
    text: 'Introduction',
    children: [
      { text: 'What is CaptainCore?', link: '/' },
      { text: 'Features', link: '/features/' },
      { text: 'Getting Started', link: '/guide/' },
    ]
  },
  {
    text: 'Advanced',
    children: [
      { text: 'CLI', link: '/guide/cli' },
    ]
  }
]
}