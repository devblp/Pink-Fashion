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
import img3 from "../../img/img3.png";
import img4 from "../../img/img4.png";
import vid1 from "../../video/slider1.mp4";

export default function Home() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"> 0' + (index + 1) + "</span>";
    },
  };
  const [video, setVideo] = useState(false);
  const [videoTo, setVideoTo] = useState(false);
  const [videoTr, setVideoTr] = useState(false);
  const [videoFr, setVideoFr] = useState(false);
  const handleVideo = () => {
    setVideo(!video);
  };
  const handelVideoTo = () => {
    setVideoTo(!videoTo);
    console.log(videoTo);
  };
  const handelVideoTr = () => {
    setVideoTr(!videoTr);
  };
  const handelVideoFr = () => {
    setVideoFr(!videoFr);
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
          {videoTo ? (
            <Box>
              <video autoPlay loop muted posta={vid1}>
                <source src={vid1} />
              </video>
              <Button
                onClick={handelVideoTo}
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
                onClick={handelVideoTo}
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
          {videoTr ? (
            <Box>
              <video autoPlay loop muted posta={vid1}>
                <source src={vid1} />
              </video>
              <Button
                onClick={handelVideoTr}
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
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.8,
                }}
              >
                <Box
                  sx={{
                    width: "86px",
                    height: "86px",
                    background: "#FEC9DE",
                    borderRadius: "100%",
                    position: "absolute",
                    right: "55%",
                    top: "150px",
                  }}
                ></Box>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.8,
                }}
              >
                <Box
                  sx={{
                    width: "917.35px",
                    height: "937.98px",
                    background: "#FEC9DE",
                    borderRadius: "100%",
                    position: "absolute",
                    right: "8%",
                    top: "213px",
                  }}
                ></Box>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    right: "70%",
                    top: "178px",
                    fontFamily: "Suez One",
                    fontSize: "96px",
                    fontWeight: "400",
                  }}
                >
                  %50 off
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    right: "68%",
                    top: "320px",
                    transform: "translate(50%)",
                    fontFamily: "Suez One",
                    fontSize: "96px",
                    fontWeight: "400",
                    color: "rgba(255, 255, 255, 0)",
                    WebkitTextStroke: "2px white",
                  }}
                >
                  Winter
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    right: "45%",
                    top: "450px",
                    fontFamily: "Suez One",
                    fontSize: "96px",
                    fontWeight: "400",
                  }}
                >
                  fashion
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 2000 }}
                animate={{ opacity: 1, y: 800 }}
                transition={{ duration: 0.7 }}
              >
                <Avatar
                  sx={{
                    width: 530,
                    height: 794,
                    borderRadius: 0,
                    position: "absolute",
                    right: "27%",
                    transform: "translate(50%)",
                    bottom: 1,
                  }}
                  src={img3}
                />
              </motion.div>
              <Button
                onClick={handelVideoTr}
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
          {videoFr ? (
            <Box>
              <video autoPlay loop muted posta={vid1}>
                <source src={vid1} />
              </video>
              <Button
                onClick={handelVideoFr}
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
                initial={{ opacity: 0, y: 2000 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  sx={{
                    width: "231px",
                    height: "550px",
                    position: "absolute",
                    right: "15%",
                    top: "150px",
                    backgroundColor: "#FEC9DE",
                    borderRadius: "100px",
                  }}
                ></Box>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 2000 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    width: "231px",
                    height: "690px",
                    position: "absolute",
                    right: "30%",
                    top: "70px",
                    backgroundColor: "#D9D9D9",
                    borderRadius: "100px",
                  }}
                ></Box>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 2000 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Box
                  sx={{
                    width: "231px",
                    height: "550px",
                    position: "absolute",
                    right: "45.1%",
                    top: "150px",
                    backgroundColor: "#FEC9DE",
                    borderRadius: "100px",
                  }}
                ></Box>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9 }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    right: "80%",
                    top: "178px",
                    fontFamily: "Acme",
                    fontSize: "64px",
                    fontWeight: "400",
                  }}
                >
                  Children's
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    right: "74%",
                    top: "250px",
                    fontFamily: "Acme",
                    fontSize: "64px",
                    fontWeight: "400",
                  }}
                >
                  collection
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    right: "75%",
                    top: "350px",
                    fontFamily: "Acme",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  To see all kinds of children's clothes from 1 month to 14
                  <br />
                  years, just click on the button below.
                </Typography>
                <Button
                  size="md"
                  sx={{
                    position: "absolute",
                    color: "white",
                    right: "82%",
                    top: "430px",
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
                initial={{ opacity: 0, y: 1 }}
                animate={{ opacity: 1, y: 800 }}
                transition={{ duration: 0.7 }}
              >
                <Avatar
                  sx={{
                    width: 716,
                    height: 808,
                    borderRadius: 0,
                    position: "absolute",
                    right: "36%",
                    transform: "translate(50%)",
                    bottom: 1,
                  }}
                  src={img4}
                />
              </motion.div>
              <Button
                onClick={handelVideoFr}
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
