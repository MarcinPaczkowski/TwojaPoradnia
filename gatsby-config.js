module.exports = {
  siteMetadata: {
    title: 'Twoja Poradnia Małgorzata Paczkowska',
    author: 'Marcin Paczkowski',
    description: 'A Project to bootstrap your next Gatsby + Bulma site.',
    keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Makefolio',
        short_name: 'Makefolio',
        start_url: '/',
        background_color: '#2980b9',
        theme_color: '#2980b9',
        display: 'standalone',
        icon: 'src/images/logo.png',
        orientation: 'portrait',
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        // this is the path to your routes configuration file
        path: `${__dirname}/src/routes.js`,
      },
    },
    // `gatsby-plugin-sitemap`,
    // {
    // 	resolve: `gatsby-plugin-google-analytics`,
    // 	options: {
    // 		trackingId: 'UA-XXXXXXXX-X',
    // 		// Setting this parameter is optional (requried for some countries such as Germany)
    // 		anonymize: true
    // 	}
    // }
  ],
};
