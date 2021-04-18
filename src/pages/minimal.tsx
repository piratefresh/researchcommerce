import React from "react";
import { StaticQuery, graphql } from "gatsby";
import get from "lodash/get";
import SEO from "../components/seo";
import PrimaryLayout from "../components/layout/primary/primary";
import HomeBanner from "../components/home-banner/home-banner";
import HowItWorks from "../components/how-it-works/secondary/secondary";
import CategoryBlocks from "../components/category-blocks/secondary/secondary";
import FeaturedProducts from "../components/featured-products/featured-products-home";
import AdBanner from "../components/ad-banner/ad-banner";
import TrendingProducts from "../components/trending-products/trending-products-home";
import CallusBanner from "../components/call-us-banner/call-us-banner";

const indexPageStaticQuery = graphql`
  query {
    allPrismicHomeminimal {
      edges {
        node {
          data {
            call_us_banner {
              url
            }
            call_us_banner_content {
              text
            }
            call_us_button_text {
              text
            }
            banner_button_text {
              text
            }
            banner_image {
              url
            }
            banner_title {
              text
            }
            banner_subtitle {
              text
            }
            how_it_works {
              title {
                text
              }
              thumbnail {
                url
              }
              short_description {
                text
              }
            }
          }
        }
      }
    }
    allPrismicHome {
      edges {
        node {
          data {
            category_section_title {
              text
            }
            category_section_short_intro {
              text
            }
            category_block {
              category_slug
              category_title {
                text
              }
              image {
                fluid {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                }
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
                  srcSetWebp
                  srcWebp
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
            copyright_text {
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
      const categorySectionTitle = get(
        data,
        "allPrismicHome.edges[0].node.data.category_section_title"
      );
      const categorySectionIntro = get(
        data,
        "allPrismicHome.edges[0].node.data.category_section_short_intro"
      );
      const categoryItems = get(
        data,
        "allPrismicHome.edges[0].node.data.category_block"
      );
      const node = get(data, "allPrismicHomeminimal.edges[0].node.data");

      const adBlocks = get(
        data,
        "allPrismicCommon.edges[0].node.data.ad_blocks"
      );
      const bannerImage = node.banner_image.url;
      const bannerTitle = node.banner_title.text;
      const bannerSubTitle = node.banner_subtitle.text;
      const bannerButtonText = node.banner_button_text.text;
      const howItworks = node.how_it_works;
      const callUsBanner = node.call_us_banner;
      const callUsBannerContent = node.call_us_banner_content;
      const callUsButtonText = node.call_us_button_text;

      console.log("category items: ", categoryItems);

      return (
        <PrimaryLayout
          fluid={true}
          homeLink="/minimal"
          pathPrefix="/minimal/collection"
          showNoticeBar={false}
        >
          <SEO title="Home" />
          {/* End of home seo */}

          <HomeBanner
            banner={bannerImage}
            bannerTitle={bannerTitle}
            bannerSubTitle={bannerSubTitle}
            bannerButtonText={bannerButtonText}
          />
          {/* End of banner */}

          <HowItWorks items={howItworks} />
          {/* End of how it works */}

          <CategoryBlocks
            title={categorySectionTitle}
            shortIntro={categorySectionIntro}
            categoryItems={categoryItems}
          />
          {/* End of category blocks */}

          <FeaturedProducts withLink={true} />
          {/* End of latest products */}

          <AdBanner
            data={adBlocks}
            scrollTo="#trendingProducts"
            scrollOffset={60}
          />
          {/* End of trending products */}

          <TrendingProducts withLink={true} />
          {/* End of trending products */}

          <CallusBanner
            callUsBanner={callUsBanner}
            callUsTitle={callUsBannerContent}
            callUsButtonText={callUsButtonText}
          />
          {/* End of call us banner */}
        </PrimaryLayout>
      );
    }}
  />
);

export default IndexPage;
