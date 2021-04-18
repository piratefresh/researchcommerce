/** @jsx jsx */
import { Link, StaticQuery, graphql } from "gatsby";
import { Box, Image, jsx } from "theme-ui";
import Img from "gatsby-image";

type PropsType = {
  imgSrc?: string;
  imgAlt?: string;
  path?: string;
};

const errorStaticQuery = graphql`
  query {
    allPrismicCommon {
      edges {
        node {
          data {
            error {
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
  }
`;

const Error: React.FC<PropsType> = ({ imgSrc, imgAlt, path = "/" }) => {
  return (
    <StaticQuery<GatsbyTypes.Query>
      query={`${errorStaticQuery}`}
      render={({ allPrismicCommon }) => {
        const error = allPrismicCommon.edges[0].node?.data?.error[0];
        console.log("error data: ", error.image);
        return (
          <Box className="error">
            <Link to={path}>Return to Home Page</Link>
            <h4 className="text-2xl font-bold my-8 mx-auto">
              No Products Found
            </h4>
            <Img fluid={error && error.image ? error.image.fluid : null} />
          </Box>
        );
      }}
    />
  );
};

export default Error;
