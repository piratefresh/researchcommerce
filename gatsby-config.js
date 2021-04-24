require("ts-node").register({ files: true });
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// const reponame = process.env.PRISMIC_REPO_NAME;
// const apiKey = process.env.PRISMIC_API_KEY;
// const prismicReleaseID = process.env.PRISMIC_RELEASE_ID;

// const homeSchema = require("./customTypes/home.json");
// const commonSchema = require("./customTypes/Common.json");
// const categorySchema = require("./customTypes/Category.json");
// const homeMinimalSchema = require("./customTypes/HomeMinimal.json");
// const homeModernSchema = require("./customTypes/HomeModern.json");

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
    "gatsby-plugin-postcss",
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: "portal",
        id: "portal",
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
        // includeCollections: ["shop"],
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries"),
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        // The name of your prismic.io repository. This is required.
        // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
        // is 'gatsby-source-prismic-test-site.prismic.io'.
        repositoryName: "demostoremagnus",

        // An API access token to your prismic.io repository. This is optional.
        // You can generate an access token in the "API & Security" section of
        // your repository settings. Setting a "Callback URL" is not necessary.
        // The token will be listed under "Permanent access tokens".
        accessToken:
          "MC5ZR3pvLUJNQUFDSUFnRlA3.77-9Ze-_ve-_ve-_ve-_vSzvv70U77-977-977-9HO-_vTPvv70E77-977-977-977-9VSbvv73vv71WPndAJjZ2",
        schemas: {
          home: require("./src/schemas/home.json"),
          common: require("./src/schemas/Common.json"),
          category: require("./src/schemas/Category.json"),
          homeMinimal: require("./src/schemas/HomeMinimal.json"),
          homeModern: require("./src/schemas/HomeModern.json"),
        },
        lang: "*",
      },
    },
    // {
    //   resolve: `gatsby-source-prismic-graphql`,
    //   options: {
    //     repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY, // Load from env
    //     path: "/preview",
    //     previews: true,
    //     sharpKeys: [
    //       /image|photo|picture/, // (default)
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans\:400,600,700`, `Poppins\:400,600,700`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#333",
        showSpinner: false,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: "95",
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
