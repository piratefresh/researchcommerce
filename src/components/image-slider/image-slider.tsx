import React from "react";
import { Box } from "theme-ui";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "./image-slider.style";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ImageSlider = ({ bannerSlideBlock }: any) => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      centeredSlides
      loop
      autoplay={{ delay: 3000 }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      sx={styles.banner}
    >
      {bannerSlideBlock.map((item: any) => (
        <SwiperSlide key={item.banner_title1}>
          <img
            src={item.imageSharp.childImageSharp.fluid.srcWebp}
            alt=""
            srcSet={item.imageSharp.childImageSharp.fluid.srcSet}
            className="object-cover rounded-md"
            style={{
              width: "100%",
              height: "350px",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
