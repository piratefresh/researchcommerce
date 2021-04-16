const escapeStringRegexp = require("escape-string-regexp");
const pagePath = `content`;
const indexName = `Pages`;

const products = "shopify_products";
const collections = "shopify_collections";
const resources = "Resources";

const searchQuery = `{
  allShopifyProduct {
    edges {
      node {
        id
        title
        description
        handle
        images {
          localFile {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
              }
            }
          }
        }
      }
    }
  }
  allShopifyCollection {
    edges {
      node {
        id
        title
        handle
        image {
          localFile {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
              }
            }
          }
        }
      }
    }
  }
}
`;
function pageToAlgoliaRecord({
  node: { id, frontmatter, fields, ...rest },
}: any) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  };
}
const queries = [
  {
    query: searchQuery,
    transformer: ({ data }: any) =>
      data.allShopifyProduct.edges.map(({ node }: any) => node),
    indexName: products,
  },
  {
    query: searchQuery,
    transformer: ({ data }: any) =>
      data.allShopifyCollection.edges.map(({ node }: any) => node),
    indexName: collections,
  },
];
module.exports = queries;
