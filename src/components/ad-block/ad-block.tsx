/** @jsx jsx */
import React from "react";
import { Box, Heading, Text, jsx } from "theme-ui";
import styles from "./ad-block.style";
// fallback image
import bannerImg from "../../images/ad-banner/1.jpg";

type Props = {
  tag?: string;
  title: string;
  tagBgColor?: string;
  bannerImage: ImageProps;
  btn?: React.ReactNode;
  shortDescription: string;
};

type ImageProps = {
  src: string;
  srcSet: string;
  srcSetWebp: string;
  srcWebp: string;
};

const AdBlock: React.FC<Props> = ({
  btn,
  tag,
  title,
  tagBgColor,
  bannerImage,
  shortDescription,
}) => {
  console.log(
    "tag",
    tag,
    "title",
    title,
    "short desc",
    shortDescription,
    "banner img",
    bannerImage
  );
  return (
    <Box
      sx={{
        backgroundImage: `url(${
          bannerImage && bannerImage.srcWebp ? bannerImage.srcWebp : bannerImg
        })`,
        ...styles.wrapper,
      }}
    >
      <Box sx={styles.content}>
        {tag && (
          <Box
            as="span"
            sx={{
              backgroundColor: tagBgColor ? tagBgColor : "#AFCD5F",
              ...styles.tag,
            }}
          >
            {tag}
          </Box>
        )}
        <Heading as="h3">{title}</Heading>
        <Text as="p">{shortDescription}</Text>
        {btn && btn}
      </Box>
    </Box>
  );
};

export default AdBlock;
