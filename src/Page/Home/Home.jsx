import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Box } from "@mui/material";
import "./style.css";
import "swiper/less/pagination";
import { motion } from "framer-motion";

export default function Home() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"> 0' + (index + 1) + "</span>";
    },
  };
 
  return (
    <Box>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">s1</SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide>
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          />
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </Box>
  );
}
