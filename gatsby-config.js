module.exports = {
  siteMetadata: {
    title: `Platform One Engineering Practices`,
    description: `Recommendations for teams wanting to deliver high-value applications using Platform One`,
    author: `Platform One`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    require.resolve(`./plugins/build-menu`),
    `@dream-bit-de/gatsby-plugin-better-page-tree`,
    {
      resolve: '@stackbit/gatsby-plugin-menus',
      options: {
        // Gatsby node types from which we extract menus (optional, see "Advanced usage")
        // sourceNodeType: 'MarkdownRemark',
        // // the relative node path where we can find the 'menus' container (optional)
        // sourceDataPath: 'frontmatter',
        // the relative node path where we can find the page's URL (required)
        sourceUrlPath: 'fields.url',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      // If you want to use styled components, in conjunction to Material-UI, you should:
      // - Change the injection order
      // - Add the plugin
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
      // 'gatsby-plugin-styled-components',
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
