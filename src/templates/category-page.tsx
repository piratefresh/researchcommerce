import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import PrimaryLayout from "../components/layout/primary/primary";
import CategoryBanner from "../components/category-banner/category-banner";
import ProductGrid from "../components/product-grid/product-grid";

const CategoryPage = ({ data, pageContext }: any) => {
  const { image, products } = data.shopifyCollection;
  const productsType = pageContext?.handle;
  const title = productsType.charAt(0).toUpperCase() + productsType.slice(1);
  if (!products) return <div>Loading...</div>;
  console.log("products", products);
  return (
    <PrimaryLayout>
      <SEO title={title} />
      <h2 className="text-2xl font-bold my-2">{title}</h2>
      {/* <CategoryBanner title={title} bgImage={image} /> */}
      <ProductGrid
        id="category"
        products={products}
        isCategoryProduct={true}
        withLink
      />
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
  }
`;

export default CategoryPage;
