/** @jsx jsx */
import React from "react";
import { Grid, jsx } from "theme-ui";
import FeatureCard from "../../feature-card/feature-card";
import styles from "./secondary.style";

// type Props = {
// 	thumbnail: string;
// 	title: string
// }

const HowItWorks: React.FC<any> = ({ items }) => {
  console.log("how it works items: ", items);
  return (
    <Grid sx={styles.wrapper}>
      {items.map((item: any, index: number) => {
        console.log("item how it works: ", item);
        return (
          <FeatureCard
            key={index}
            thumbnail={item.thumbnail.url}
            title={item.title[0].text}
            shortInfo={item.short_description[0].text}
          />
        );
      })}
    </Grid>
  );
};

export default HowItWorks;
