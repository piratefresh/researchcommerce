require('ts-node').register({ files: true });
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// const reponame = process.env.PRISMIC_REPO_NAME || prismicRepo;
// const apiKey = process.env.PRISMIC_API_KEY || accessToken;
// const prismicReleaseID = process.env.PRISMIC_RELEASE_ID || releaseID;

// const homeSchema = require("./custom_types/home.json");
// const commonSchema = require("./custom_types/Common.json");
// const categorySchema = require("./custom_types/Category.json");
// const homeMinimalSchema = require("./custom_types/HomeMinimal.json");
// const homeModernSchema = require("./custom_types/HomeModern.json");

// const gastbySourcePrismicConfig = {
//   resolve: "gatsby-source-prismic",
//   options: {
//     repositoryName: reponame,
//     accessToken: apiKey,
//     schemas: {
//       home: homeSchema,
//       common: commonSchema,
//       homeMinimal: homeMinimalSchema,
//       category: categorySchema,
//       homeModern: homeModernSchema,
//     },
//   },
// };

module.exports = {
  siteMetadata: {
    title: `PICKSY.`,
    description: `Kick off your next jamstack ecommerce web app with this PICKSY.`,
    author: `@redq`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typegen`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'portal',
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/layout.tsx`),
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
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: process.env.GATSBY_SHOP_NAME, // Load from env
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN, // Load from env
        verbose: true,
        paginationSize: 100,
        includeCollections: ['shop'],
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require('./src/utils/algolia-queries'),
        // enablePartialUpdates: true,
      },
    },
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY, // Load from env
        path: '/preview',
        previews: true,
        sharpKeys: [
          /image|photo|picture/, // (default)
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans\:400,600,700`, `Poppins\:400,600,700`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#333',
        showSpinner: false,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: '95',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // manifest plugin should be before offline
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Picksy`,
        short_name: `Picksy`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#292929`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
