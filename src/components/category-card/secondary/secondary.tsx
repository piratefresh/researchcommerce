/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { Box, Heading, jsx } from "theme-ui";
import styles from "./secondary.style";

type PropsType = {
  path: string;
  title: any;
  thumbnail: any;
};

type ImageProps = {
  srcWebp: string;
  src: string;
};

const CategoryBlock: React.FC<PropsType> = ({ path, title, thumbnail }) => {
  console.log("category title: ", title);
  const categoryTitle = title;

  return (
    <Box sx={styles.wrapper}>
      <Link to={path}>
        {thumbnail ? <Img fluid={thumbnail.fluid} alt={categoryTitle} /> : null}
        <Heading as="h3">{categoryTitle}</Heading>
      </Link>
    </Box>
  );
};

export default CategoryBlock;
