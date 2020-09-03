require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Twoja Pora Dnia${
      process.env.NODE_ENV !== 'production'
        ? ` - ${process.env.GATSBY_env}`
        : ''
    }`,
    author: 'Małgorzata Paczkowska',
    description: 'Twoja Pora Dnia',
    keywords: `Nauka czytania, Pozytywna Dyscyplina, Edukacja, Korepetycje, Września, Poznań`,
    siteUrl: `https://malgorzatapaczkowska.pl/`,
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
        name: 'Twoja Poradnia Małgorzata Paczkowska',
        short_name: 'Twoja Poradnia',
        start_url: '/',
        background_color: '#d1e1ff',
        theme_color: '#d1e1ff',
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
          '/coursesLectures/': '/szkolenia-i-wyklady/',
          '/courses/': '/szkolenia/',
          '/lectures/': '/wyklady/',
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
            'IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700',
            'Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900',
            'IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700',
            'Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900',
            'Pattaya',
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/layout.js`),
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [
          { userAgent: '*', allow: '/' },
          { userAgent: 'Googlebot-Image', disallow: '/' },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GTAG_trackingId,
        anonymize: false,
      },
    },
  ],
};
