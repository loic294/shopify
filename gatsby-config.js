module.exports = {
  siteMetadata: {
    title: 'My Github Favorites',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'My Github Favorites',
        short_name: 'Favorites',
        start_url: '/',
        background_color: '#7433F1',
        theme_color: '#7433F1',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sass`
  ],
}
