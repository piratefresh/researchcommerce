import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import PrimaryLayout from "../components/layout/primary/primary";
import CategoryBanner from "../components/category-banner/category-banner";
import ProductGrid from "../components/product-grid/product-grid";
import Error from "../components/no-products/no-products";
import {
  HierarchicalMenu,
  InstantSearch,
  RefinementList,
} from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";

const searchIndices = [
  { name: `shopify_setvi_products`, title: `shopify_setvi_products` },
  {
    name: `shopify_setvi_collections_tmp`,
    title: `shopify_setvi_collections_tmp`,
  },
];

const CategoryPage = ({ data, pageContext }: any) => {
  const [query, setQuery] = React.useState<String>("");
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID as string,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY as string
  );
  const { image, products } = data.shopifyCollection;
  const prismicData = data.prismicCategory;
  const productsType = pageContext?.handle;
  const title = productsType.charAt(0).toUpperCase() + productsType.slice(1);
  if (!products) return <div>Loading...</div>;
  console.log("prismic data: ", prismicData);
  return (
    <PrimaryLayout>
      <SEO title={title} />
      <h2 className="text-2xl font-bold my-2">
        {prismicData && prismicData.data ? prismicData.data.title.text : title}
      </h2>

      {products.length > 0 ? (
        <ProductGrid
          id="category"
          products={products}
          isCategoryProduct={true}
          withLink
        />
      ) : (
        <div>
          <Error />
        </div>
      )}
    </PrimaryLayout>
  );
};

export const query = graphql`
  query($handle: String!) {
    shopifyCollection(handle: { eq: $handle }) {
      image {
        id
        src
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      products {
        id
        title
        handle
        createdAt
        shopifyId
        availableForSale
        tags
        variants {
          id
          price
          priceV2 {
            amount
            currencyCode
          }
          shopifyId
          availableForSale
        }
        images {
          id
          originalSrc
          localFile {
            childImageSharp {
              fluid(maxWidth: 910, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
    prismicCategory(uid: { eq: $handle }) {
      data {
        title {
          text
        }
      }
    }
  }
`;

export default CategoryPage;
