module.exports = {
  siteMetadata: {
    title: `Deep Work Studio`,
    longTitle: `Deep Work Studio | Blockchain Design Studio`,
    description: `Releasing User-Focused Blockchain Products`,
    author: `@deepwork_studio`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `deepwork-studio`,
        short_name: `deepwork`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/deepwork-logo.png` // This path is relative to the root of the site.
      }
    }
  ]
};
