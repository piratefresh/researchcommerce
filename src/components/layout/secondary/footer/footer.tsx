/** @jsx jsx */
import { StaticQuery, graphql } from "gatsby";
import { Box, Text, jsx } from "theme-ui";
import { RichText } from "prismic-reactjs";
import SocialLinks from "../../../social-links/social-links";
import styles from "./footer.style";

const menuStaticQuery = graphql`
  query {
    allPrismicCommon {
      edges {
        node {
          data {
            copyright_text {
              text
            }
            social_links {
              social_link {
                link_type
                url
              }
              social_type
            }
          }
        }
      }
    }
  }
`;

const getSocialData = (links: any) => {
  const data: any = [];
  links.forEach((link: any) => {
    data.push({ type: link?.social_type, link: link?.social_link?.url });
  });
  return data;
};

const Footer = () => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${menuStaticQuery}`}
    render={(data: any) => {
      const footerData = data?.allPrismicCommon?.edges[0]?.node?.data;
      const socialData = getSocialData(footerData?.social_links || []);
      return (
        <Box as="footer" sx={styles.wrapper}>
          <Text sx={styles.copyright}>
            {footerData?.copyright_text.text || ""}
          </Text>
          <Box sx={styles.socialLinks}>
            <Text as="span">Find us on:</Text>
            <SocialLinks items={socialData} />
          </Box>
        </Box>
      );
    }}
  />
);

export default Footer;
