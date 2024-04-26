import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Avatar, Box, Typography } from "@mui/material";
import "./style.css";
import "swiper/less/pagination";
import { motion } from "framer-motion";
import img1 from "../../img/img1.png";

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
        <SwiperSlide className="swiper-slide1">
        <motion.div
            initial={{ opacity: 0,x:-1500 }}
            animate={{ opacity: 1, x:1 }}
            transition={{duration:0.7}}
          >
            <Typography sx={{
              position: "absolute",
              right: "50%",
              transform: "translate(50%)",
            }} fontFamily="zen tokyo zoo" fontSize={280}>
              FASHION
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y:2000 }}
            animate={{ opacity: 1, y:800  }}
            transition={{duration:0.7}}
          >
            <Avatar
              sx={{
                width: 700,
                height: 700,
                borderRadius: 0,
                position: "absolute",
                right: "50%",
                transform: "translate(50%)",
                bottom: 0,
              }}
              src={img1}
            />
          </motion.div>
          
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </Box>
  );
}
