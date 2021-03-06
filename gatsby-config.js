module.exports = {
  siteMetadata: {
    title: `artebella`,
    description: `l'arte è una sciocchezza`,
    author: `@artebella`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/news/`
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `artebella.it`,
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
        background_color: `#f4f7f6`,
        theme_color: `#f4f7f6`,
        display: `minimal-ui`,
        icon: `src/images/artebella-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `public sans\:300,700,900`
        ],
      },
    }
  ],
}
