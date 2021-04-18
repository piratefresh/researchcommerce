/** @jsx jsx */
import { Link } from "gatsby";
import Img from "gatsby-image";
import { GatsbyImage } from "gatsby-plugin-image";
import { IoMdArrowForward } from "react-icons/io";
import { Box, Heading, Text, jsx } from "theme-ui";
import styles from "./primary.style";

type PropsType = {
  thumbnail: any;
  title: string;
  path: string;
  btnTex?: string;
};

const PrimaryCard: React.FC<PropsType> = ({
  thumbnail,
  title,
  path,
  btnTex,
}) => {
  return (
    <Box sx={styles.wrapper}>
      <Link to={`/collection/${path}`}>
        <Box as="figure" sx={styles.figure}>
          {thumbnail ? <Img fluid={thumbnail} alt={title} /> : null}
          <Box as="figcaption" sx={styles.figcaption}>
            <Heading as="h3">{title}</Heading>
            <Text className="textBtn" sx={styles.textBtn}>
              <Text as="span">{btnTex ? btnTex : "View Items"} </Text>
              <IoMdArrowForward />
            </Text>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default PrimaryCard;
