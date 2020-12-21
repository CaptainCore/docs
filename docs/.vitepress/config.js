module.exports = {
  lang: 'en-US',
  title: 'CaptainCore',
  description: 'WordPress management toolkit for geeky maintenance professionals.',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/logo.png' } ]
  ],

  themeConfig: {
    repo: 'captaincore/docs',
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