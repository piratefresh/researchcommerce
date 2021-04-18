/** @jsx jsx */
import { StaticQuery, graphql } from "gatsby";
import get from "lodash/get";
import { RichText } from "prismic-reactjs";
import { Box, Text, jsx } from "theme-ui";
import Container from "../../../container/container";
import SocialLinks from "../../../social-links/social-links";
import styles from "./footer.styles";

const footerStaticQuery = graphql`
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
                id
              }
              social_type
            }
          }
        }
      }
    }
  }
`;

const getSocialData = (links) => {
  const data = [];
  links.forEach((link) => {
    data.push({ type: link.social_type, link: link.social_link.url });
  });
  return data;
};

const Footer: React.FC<{ fluid?: boolean }> = ({ fluid }) => (
  <StaticQuery<GatsbyTypes.Query>
    query={`${footerStaticQuery}`}
    render={(data) => {
      const footerData = get(data, "allPrismicCommon.edges[0].node.data");
      const socialData = getSocialData(footerData.social_links);
      return (
        <Box as="footer" sx={styles.footer}>
          <Container fluid={fluid}>
            <Text className="copyright" sx={styles.copyright}>
              {RichText.render(footerData.copyright_text.text)}
            </Text>
            <SocialLinks items={socialData} />
          </Container>
        </Box>
      );
    }}
  />
);

export default Footer;
