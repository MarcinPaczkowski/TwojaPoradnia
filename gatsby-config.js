require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Twoja Pora Dnia - ${process.env.GATSBY_env}`,
    author: 'Małgorzata Paczkowska',
    description: 'Twoja Pora Dnia',
    keywords: `Nauka czytania, Korepetycje, Matematyka, Września, Poznań, Mosina`,
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
        icon: 'src/images/icon.png',
        orientation: 'portrait',
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `@kentico/gatsby-source-kontent`,
      options: {
        projectId: process.env.GATSBY_kontentProjectId,
        authorizationKey: process.env.GATSBY_kontentPreviewApiKey,
        usePreviewUrl: process.env.GATSBY_kontentIsPreviewMode === 'true',
        languageCodenames: [`pl-PL`],
        includeTypes: true,
      },
    },
    {
      resolve: `@rshackleton/gatsby-transformer-kontent-image`,
      options: {
        local: true,
      },
    },
    {
      resolve: '@bakkenbaeck/gatsby-plugin-rename-routes',
      options: {
        rename: {
          '/about/': '/o-mnie/',
          '/classes/': '/zajecia/',
          '/developments/': '/rozwoj-i-wychowanie/',
          '/books/': '/ksiazki/',
          '/games/': '/gry/',
          '/teachingResources/': '/materialy/',
          '/courses/': '/szkolenia/',
          '/contact/': '/kontakt/',
          '/404/': '/404/',
        },
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900',
          ],
        },
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
