import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Avatar, Box, Typography, Button } from "@mui/material";
import "./style.css";
import "swiper/less/pagination";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { motion } from "framer-motion";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import vid1 from "../../video/slider1.mp4";

export default function Home() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"> 0' + (index + 1) + "</span>";
    },
  };
  const [video, setVideo] = useState(false);
  const handleVideo = () => {
    setVideo(!video);
  };
  return (
    <Box>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide1">
          {video ? (
            <Box>
              <video autoPlay loop muted posta={vid1}>
                <source src={vid1} />
              </video>
              <Button
                onClick={handleVideo}
                sx={{
                  color: "white",
                  position: "absolute",
                  bottom: "100px",
                  left: "100px",
                  ":hover": {
                    background: "rgba(0, 0, 0, 0)",
                  },
                }}
              >
                Watch a Video
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <PlayArrowIcon
                    sx={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#323232d7",
                      borderRadius: "100px",
                      ml: "20px",
                      boxShadow: "0px 0px 20px 0px #FFAFCF",
                    }}
                  />
                </motion.div>
              </Button>
            </Box>
          ) : (
            <Box>
              <motion.div
                initial={{ opacity: 0, x: -1500 }}
                animate={{ opacity: 1, x: 1 }}
                transition={{ duration: 0.7 }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    right: "88%",
                    top: "178px",
                    fontFamily: "Capriola",
                  }}
                >
                  Pink
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    right: "50%",
                    top: "130px",
                    transform: "translate(50%)",
                  }}
                  fontFamily="zen tokyo zoo"
                  fontSize={280}
                >
                  FASHION
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    right: "10%",
                    top: "450px",
                    fontFamily: "Capriola",
                  }}
                >
                  Discover and Buy
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 2000 }}
                animate={{ opacity: 1, y: 800 }}
                transition={{ duration: 0.7 }}
              >
                <Avatar
                  sx={{
                    width: 700,
                    height: 700,
                    borderRadius: 0,
                    position: "absolute",
                    right: "50%",
                    transform: "translate(50%)",
                    bottom: 1,
                  }}
                  src={img1}
                />
              </motion.div>
              <Button
                onClick={handleVideo}
                sx={{
                  color: "white",
                  position: "absolute",
                  bottom: "100px",
                  left: "100px",
                  ":hover": {
                    background: "rgba(0, 0, 0, 0)",
                  },
                }}
              >
                Watch a Video
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <PlayArrowIcon
                    sx={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#323232d7",
                      borderRadius: "100px",
                      ml: "20px",
                      boxShadow: "0px 0px 20px 0px #FFAFCF",
                    }}
                  />
                </motion.div>
              </Button>
            </Box>
          )}
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2">
          {video ? (
            <Box>
              <video autoPlay loop muted posta={vid1}>
                <source src={vid1} />
              </video>
              <Button
                onClick={handleVideo}
                sx={{
                  color: "white",
                  position: "absolute",
                  bottom: "100px",
                  left: "100px",
                  ":hover": {
                    background: "rgba(0, 0, 0, 0)",
                  },
                }}
              >
                Watch a Video
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <PlayArrowIcon
                    sx={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#323232d7",
                      borderRadius: "100px",
                      ml: "20px",
                      boxShadow: "0px 0px 20px 0px #FFAFCF",
                    }}
                  />
                </motion.div>
              </Button>
            </Box>
          ) : (
            <Box>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    right: "70%",
                    top: "110px",
                    transform: "translate(50%)",
                    fontFamily: "Poppins",
                    fontSize: "91px",
                    fontWeight: "500",
                  }}
                >
                  ULTIMATE
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    right: "57.5%",
                    top: "160px",
                    fontFamily: "Poppins",
                    fontSize: "187PX",
                    color: "rgba(255, 255, 255, 0)",
                    WebkitTextStroke: "2px #FFAFCF",
                  }}
                >
                  SALE
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    right: "65%",
                    top: "400px",
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: "400",
                  }}
                >
                  NEW COLLECTION
                </Typography>
                <Button
                  size="md"
                  sx={{
                    position: "absolute",
                    color: "white",
                    right: "67%",
                    top: "500px",
                    backgroundColor: "#323232d7",
                    borderRadius: "20px",
                    padding: "10px 20px 10px 20px",
                    ":hover": {
                      backgroundColor: "#323232d7",
                      color: "#FFAFCF",
                    },
                  }}
                >
                  open shop
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 2000 }}
                animate={{ opacity: 1, y: 800 }}
                transition={{ duration: 0.7 }}
              >
                <Avatar
                  sx={{
                    width: 350,
                    height: 750,
                    borderRadius: 0,
                    position: "absolute",
                    right: "30%",
                    transform: "translate(50%)",
                    bottom: 0,
                  }}
                  src={img2}
                />
              </motion.div>
              <Button
                onClick={handleVideo}
                sx={{
                  color: "white",
                  position: "absolute",
                  bottom: "100px",
                  left: "100px",
                  ":hover": {
                    background: "rgba(0, 0, 0, 0)",
                  },
                }}
              >
                Watch a Video
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <PlayArrowIcon
                    sx={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#323232d7",
                      borderRadius: "100px",
                      ml: "20px",
                      boxShadow: "0px 0px 20px 0px #FFAFCF",
                    }}
                  />
                </motion.div>
              </Button>
            </Box>
          )}
        </SwiperSlide>
        <SwiperSlide className="swiper-slide3">
          {video ? (
            <Box>
              <video autoPlay loop muted posta={vid1}>
                <source src={vid1} />
              </video>
              <Button
                onClick={handleVideo}
                sx={{
                  color: "white",
                  position: "absolute",
                  bottom: "100px",
                  left: "100px",
                  ":hover": {
                    background: "rgba(0, 0, 0, 0)",
                  },
                }}
              >
                Watch a Video
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <PlayArrowIcon
                    sx={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#323232d7",
                      borderRadius: "100px",
                      ml: "20px",
                      boxShadow: "0px 0px 20px 0px #FFAFCF",
                    }}
                  />
                </motion.div>
              </Button>
            </Box>
          ) : (
            <Box>
              <motion.div
                initial={{ opacity: 0, x: -1500 }}
                animate={{ opacity: 1, x: 1 }}
                transition={{ duration: 0.7 }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    right: "88%",
                    top: "178px",
                    fontFamily: "Capriola",
                  }}
                >
                  Pink
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    right: "50%",
                    top: "130px",
                    transform: "translate(50%)",
                  }}
                  fontFamily="zen tokyo zoo"
                  fontSize={280}
                >
                  FASHION
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    right: "10%",
                    top: "450px",
                    fontFamily: "Capriola",
                  }}
                >
                  Discover and Buy
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 2000 }}
                animate={{ opacity: 1, y: 800 }}
                transition={{ duration: 0.7 }}
              >
                <Avatar
                  sx={{
                    width: 700,
                    height: 700,
                    borderRadius: 0,
                    position: "absolute",
                    right: "50%",
                    transform: "translate(50%)",
                    bottom: 1,
                  }}
                  src={img1}
                />
              </motion.div>
              <Button
                onClick={handleVideo}
                sx={{
                  color: "white",
                  position: "absolute",
                  bottom: "100px",
                  left: "100px",
                  ":hover": {
                    background: "rgba(0, 0, 0, 0)",
                  },
                }}
              >
                Watch a Video
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <PlayArrowIcon
                    sx={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#323232d7",
                      borderRadius: "100px",
                      ml: "20px",
                      boxShadow: "0px 0px 20px 0px #FFAFCF",
                    }}
                  />
                </motion.div>
              </Button>
            </Box>
          )}
        </SwiperSlide>
        <SwiperSlide className="swiper-slide4">
          {video ? (
            <Box>
              <video autoPlay loop muted posta={vid1}>
                <source src={vid1} />
              </video>
              <Button
                onClick={handleVideo}
                sx={{
                  color: "white",
                  position: "absolute",
                  bottom: "100px",
                  left: "100px",
                  ":hover": {
                    background: "rgba(0, 0, 0, 0)",
                  },
                }}
              >
                Watch a Video
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <PlayArrowIcon
                    sx={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#323232d7",
                      borderRadius: "100px",
                      ml: "20px",
                      boxShadow: "0px 0px 20px 0px #FFAFCF",
                    }}
                  />
                </motion.div>
              </Button>
            </Box>
          ) : (
            <Box>
              <motion.div
                initial={{ opacity: 0, x: -1500 }}
                animate={{ opacity: 1, x: 1 }}
                transition={{ duration: 0.7 }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    right: "88%",
                    top: "178px",
                    fontFamily: "Capriola",
                  }}
                >
                  Pink
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    right: "50%",
                    top: "130px",
                    transform: "translate(50%)",
                  }}
                  fontFamily="zen tokyo zoo"
                  fontSize={280}
                >
                  FASHION
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    right: "10%",
                    top: "450px",
                    fontFamily: "Capriola",
                  }}
                >
                  Discover and Buy
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 2000 }}
                animate={{ opacity: 1, y: 800 }}
                transition={{ duration: 0.7 }}
              >
                <Avatar
                  sx={{
                    width: 700,
                    height: 700,
                    borderRadius: 0,
                    position: "absolute",
                    right: "50%",
                    transform: "translate(50%)",
                    bottom: 1,
                  }}
                  src={img1}
                />
              </motion.div>
              <Button
                onClick={handleVideo}
                sx={{
                  color: "white",
                  position: "absolute",
                  bottom: "100px",
                  left: "100px",
                  ":hover": {
                    background: "rgba(0, 0, 0, 0)",
                  },
                }}
              >
                Watch a Video
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <PlayArrowIcon
                    sx={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#323232d7",
                      borderRadius: "100px",
                      ml: "20px",
                      boxShadow: "0px 0px 20px 0px #FFAFCF",
                    }}
                  />
                </motion.div>
              </Button>
            </Box>
          )}
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
