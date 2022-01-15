module.exports = {
  siteMetadata: {
    title: 'Code notes',
    description: 'A Gatsby theme for storing your code-related notes',
    keywords: [],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'code-notes',
        basePath: '/',
        gitRepoContentPath:
          'https://github.com/mrmartineau/gatsby-theme-code-notes/tree/master/example/code-notes/',
        showDescriptionInSidebar: true,
        showThemeInfo: true,
        logo:
          'https://raw.githubusercontent.com/mrmartineau/gatsby-theme-code-notes/master/assets/logo.png',
        openSearch: {
          siteShortName: `Gatsby Theme Code Notes Example`,
          siteUrl: 'https://code-notes-example.netlify.app',
          siteTags: 'front-end',
          siteContact: 'https://twitter.com/MrMartineau',
          siteDescription: 'A Gatsby theme for storing your code-related notes',
        },
        showDate: true,
      },
    },
  ],
}
