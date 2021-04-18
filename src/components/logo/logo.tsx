/** @jsx jsx */
import { Link, StaticQuery, graphql } from "gatsby";
import { Box, Image, jsx } from "theme-ui";
import styles from "./logo.style";

type PropsType = {
  imgSrc?: string;
  imgAlt?: string;
  path?: string;
};

const logoStaticQuery = graphql`
  query {
    allPrismicCommon {
      edges {
        node {
          data {
            logo {
              fluid {
                srcWebp
                srcSetWebp
                srcSet
                src
              }
              alt
            }
          }
        }
      }
    }
  }
`;

const Logo: React.FC<PropsType> = ({ imgSrc, imgAlt, path = "/" }) => {
  return (
    <StaticQuery<GatsbyTypes.Query>
      query={`${logoStaticQuery}`}
      render={({ allPrismicCommon }) => {
        const logo = allPrismicCommon.edges[0].node?.data?.logo;

        return (
          <Box className="logo" sx={styles.wrapper}>
            <Link to={path}>
              <Image
                sx={styles.logo}
                src={imgSrc ? imgSrc : logo?.fluid?.srcWebp}
                alt={imgAlt ? imgAlt : logo?.alt}
              />
            </Link>
          </Box>
        );
      }}
    />
  );
};

export default Logo;
