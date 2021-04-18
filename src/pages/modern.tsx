import React from "react";
import { StaticQuery, graphql } from "gatsby";
import get from "lodash/get";
import SEO from "../components/seo";
import SecondaryLayout from "../components/layout/secondary/secondary";
import HomeBanner from "../components/home-banner/home-banner";
import AdBanner from "../components/ad-banner/ad-banner";
import AllProducts from "../components/all-products/all-products";

const modernPageStaticQuery = graphql`
  query {
    allPrismicHomeModern {
      edges {
        node {
          data {
            banner_title {
              text
            }
            banner_subtitle {
              text
            }
            banner_image {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
                srcWebp
                srcSetWebp
              }
            }
          }
        }
      }
    }
    allPrismicCommon {
      edges {
        node {
          data {
            ad_blocks {
              badge_title {
                text
              }
              badge_color
              title {
                text
              }
              block_image {
                fluid {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
              short_description {
                text
              }
              add_a_button
              button_title {
                text
              }
            }
          }
        }
      }
    }
  }
`;

const ModernHome: React.FC<{}> = () => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${modernPageStaticQuery}`}
    render={(data) => {
      const homeBanner = get(data, "allPrismicHomeModern.edges[0].node.data");
      const adBlocks = get(
        data,
        "allPrismicCommon.edges[0].node.data.ad_blocks"
      );

      console.log(adBlocks);
      return (
        <SecondaryLayout>
          <SEO title="Home" />
          <HomeBanner
            bannerTitle={homeBanner?.banner_title.text}
            bannerSubTitle={homeBanner?.banner_subtitle.text}
            banner={homeBanner?.banner_image?.fluid}
            showActionBtn={false}
          />
          <AdBanner data={adBlocks} scrollTo="#allProducts" scrollOffset={70} />
          <AllProducts />
        </SecondaryLayout>
      );
    }}
  />
);

export default ModernHome;
