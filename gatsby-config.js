module.exports = {
  siteMetadata: {
    title: `Deep Work Studio`,
    longTitle: `Deep Work Studio | Blockchain Design Studio`,
    description: `Releasing User-Focused Blockchain Products`,
    author: `@deepwork_studio`,
    partners: [
      `you`,
      `dYdX`,
      `Centrifuge`,
      `Balance`,
      `Ramp Network`,
      `Nexus Mutual`,
      `Wyre`,
      `N26`,
      `Contentful`,
      `Uniswap`,
      `Hummingbot`,
      `Molecule`
    ]
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
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        // allPageHeaders: [
        //   `Link: </static/Sneak-Regular.woff2> rel=preload as=font crossorigin type=font/woff2`,
        //   `Link: </static/Sneak-Black.woff2> rel=preload as=font crossorigin type=font/woff2`
        // ]
      }
    }
  ]
};
