import React from "react";
import { StaticQuery, graphql } from "gatsby";
import get from "lodash/get";
import SEO from "../components/seo";
import PrimaryLayout from "../components/layout/primary/primary";
import HomeBanner from "../components/home-banner/home-banner";
import CategoryBlocks from "../components/category-blocks/primary/primary";
import LatestProducts from "../components/latest-products/latest-products-home";
import HowItWorks from "../components/how-it-works/primary/primary";
import FeaturedProducts from "../components/featured-products/featured-products-home";
import TrendingProducts from "../components/trending-products/trending-products-home";
import CallusBanner from "../components/call-us-banner/call-us-banner";
import ImageSlider from "../components/image-slider/image-slider";

const indexPageStaticQuery = graphql`
  query {
    allPrismicHome {
      edges {
        node {
          data {
            category_section_short_intro {
              text
            }
            category_section_title {
              text
            }
            category_block {
              category_title {
                text
              }
              image {
                fluid {
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                }
              }
              category_slug
            }
            banner {
              fluid {
                src
                srcSet
                srcSetWebp
                srcWebp
              }
            }
            banner_slider {
              banner_description {
                text
              }
              banner_subtitle1 {
                text
              }
              banner_title1 {
                text
              }
              image {
                fluid {
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                }
              }
            }
            how_it_works_group {
              image {
                fluid {
                  srcWebp
                  srcSet
                }
              }
              title {
                text
              }
              description {
                text
              }
            }
            call_us_banner {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
                srcWebp
                srcSetWebp
              }
              url
            }
            call_us_title {
              text
            }
            call_us_button_text {
              text
            }
            banner_title {
              text
            }
            banner_subtitle {
              text
            }
            banner_button_text {
              text
            }
            how_it_works_subtitle {
              text
            }
            how_it_works_title {
              text
            }
            trending_block_title {
              text
            }
            view_more_text {
              text
            }
          }
        }
      }
    }
  }
`;

const IndexPage: React.FC<{}> = () => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${indexPageStaticQuery}`}
    render={(data) => {
      const node = get(data, "allPrismicHome.edges[0].node.data");
      console.log("node", node);
      const banner = node.banner.url;
      const bannerTitle = node.banner_title;
      const bannerSubTitle = node.banner_subtitle;
      const bannerButtonText = node.banner_button_text;
      const categoryBlock = node.category_block;
      const callUsBanner = node.call_us_banner;
      const callUsTitle = node.call_us_title;
      const callUsButtonText = node.call_us_button_text;
      const howItWorksTitle = node.how_it_works_title;
      const howItWorksSubtitle = node.how_it_works_subtitle;
      const howItWorksGroup = node.how_it_works_group;
      const bannerSlideBlock = node.banner_slider;

      console.log("node", node);

      return (
        <PrimaryLayout>
          <SEO title="Home" />
          {/* End of home seo */}
          {/* <HomeBanner
            banner={banner}
            bannerTitle={bannerTitle}
            bannerSubTitle={bannerSubTitle}
            bannerButtonText={bannerButtonText}
          /> */}
          <ImageSlider bannerSlideBlock={bannerSlideBlock} />
          <CategoryBlocks categoryBlock={categoryBlock} />
          <FeaturedProducts withLink />
          <TrendingProducts withLink />
          <HowItWorks
            howItWorksTitle={howItWorksTitle}
            howItWorksSubtitle={howItWorksSubtitle}
            howItWorksGroup={howItWorksGroup}
          />
          <LatestProducts />
          <CallusBanner
            callUsBanner={callUsBanner}
            callUsTitle={callUsTitle}
            callUsButtonText={callUsButtonText}
          />
        </PrimaryLayout>
      );
    }}
  />
);

export default IndexPage;
