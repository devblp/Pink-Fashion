import React, { useState } from "react";
import { Avatar, Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/less/pagination";
import "./style.css";

import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";
import img4 from "../../img/img4.png";
import brand1 from "../../img/brand1.png";
import brand2 from "../../img/brand2.png";
import brand3 from "../../img/brand3.png";
import brand4 from "../../img/brand4.png";
import brand5 from "../../img/brand5.png";
import vid1 from "../../video/slider1.mp4";
import imgCardShop1 from "../../img/imgCardShop1.png";
import imgCardShop2 from "../../img/imgCardShop2.png";
import imgCardShop3 from "../../img/imgCardShop3.png";
import imgCardShop4 from "../../img/imgCardShop4.png";

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
        className="slider-swiper"
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
      <Box
        sx={{
          p: "80px 0px 80px 0px",
        }}
      >
        <Swiper
          slidesPerView={4}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 1 }}
          speed={1000}
          effect="slide"
        >
          <SwiperSlide className="brand">
            <Avatar
              sx={{
                width: 200,
                height: 30,
                borderRadius: 0,
              }}
              src={brand1}
            />
          </SwiperSlide>
          <SwiperSlide className="brand">
            <Avatar
              sx={{
                width: 200,
                height: 30,
                borderRadius: 0,
              }}
              src={brand2}
            />
          </SwiperSlide>
          <SwiperSlide className="brand">
            <Avatar
              sx={{
                width: 200,
                height: 30,
                borderRadius: 0,
              }}
              src={brand3}
            />
          </SwiperSlide>
          <SwiperSlide className="brand">
            <Avatar
              sx={{
                width: 300,
                height: 30,
                borderRadius: 0,
              }}
              src={brand4}
            />
          </SwiperSlide>
          <SwiperSlide className="brand">
            <Avatar
              sx={{
                width: 300,
                height: 30,
                borderRadius: 0,
              }}
              src={brand5}
            />
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box sx={{px:10}}>
        <Grid container spacing={2} my={5}>
          <Grid container xs={7}>
            <Grid xs={12}>
              <Box
                sx={{ position: "relative", bgcolor: "#E2E2E2", height: "318px" }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    left: 30,
                    top: 40,
                    fontFamily: "Actor",
                    fontSize: 15,
                    fontWeight: 400,
                  }}
                >
                  latest design
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    left: 60,
                    top: 50,
                    fontFamily: "Acme",
                    fontSize: 46,
                    fontWeight: 400,
                  }}
                >
                  Summer
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    left: 110,
                    top: 100,
                    fontFamily: "Actor",
                    fontSize: 35,
                    fontWeight: 400,
                  }}
                >
                  collection
                </Typography>
                <Button
                  sx={{
                    position: "absolute",
                    left: 110,
                    top: 200,
                    border: "solid 2px #FFAFCF",
                    borderRadius: 5,
                    color: "black",
                  }}
                >
                  Bay
                </Button>
                <Avatar
                  src={imgCardShop1}
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    borderRadius: 0,
                    width: "330px",
                    height: "318px",
                  }}
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box
                sx={{ position: "relative", bgcolor: "#E2E2E2", height: "308px" }}
              >
                <Typography
                  fontFamily={"Actor"}
                  fontSize={15}
                  fontWeight={400}
                  sx={{
                    position: "absolute",
                    left: 2,
                    top: 40,
                  }}
                >
                  hot season
                </Typography>
                <Typography
                  fontFamily={"Acme"}
                  fontSize={46}
                  fontWeight={400}
                  sx={{
                    position: "absolute",
                    left: 30,
                    top: 50,
                  }}
                >
                  men's
                </Typography>
                <Typography
                  fontFamily={"Actor"}
                  fontSize={35}
                  fontWeight={400}
                  sx={{
                    position: "absolute",
                    left: 20,
                    top: 100,
                  }}
                >
                  jacket
                </Typography>
                <Button
                  sx={{
                    position: "absolute",
                    left: 30,
                    top: 220,
                    border: "solid 2px #FFAFCF",
                    borderRadius: 5,
                    color: "black",
                  }}
                >
                  Bay
                </Button>
                <Avatar
                  src={imgCardShop3}
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    borderRadius: 0,
                    width: "279px",
                    height: "259px",
                  }}
                />
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box
                sx={{ position: "relative", bgcolor: "#E2E2E2", height: "308px" }}
              >
                <Typography
                  fontFamily={"Acme"}
                  fontSize={46}
                  fontWeight={400}
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 20,
                  }}
                >
                  Collection
                </Typography>
                <Typography
                  fontFamily={"Acme"}
                  fontSize={35}
                  fontWeight={400}
                  sx={{
                    position: "absolute",
                    top: 60,
                    left: 70,
                  }}
                >
                  shoes
                </Typography>
                <Button
                  sx={{
                    position: "absolute",
                    left: 230,
                    top: 55,
                    border: "solid 2px #FFAFCF",
                    borderRadius: 5,
                    color: "black",
                  }}
                >
                  Bay
                </Button>
                <Avatar
                  src={imgCardShop4}
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    borderRadius: 0,
                    width: "299px",
                    height: "202px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container xs={5}>
            <Grid xs={12}>
              <Box
                sx={{ position: "relative", bgcolor: "#E2E2E2", height: "645px" }}
              >
                <Typography
                  fontFamily={"Acme"}
                  fontSize={46}
                  fontWeight={400}
                  sx={{
                    position: "absolute",
                    left: 30,
                    top: 40,
                  }}
                >
                  Woman
                </Typography>
                <Typography
                  fontFamily={"Actor"}
                  fontSize={35}
                  fontWeight={400}
                  sx={{
                    position: "absolute",
                    left: 80,
                    top: 90,
                  }}
                >
                  collection
                </Typography>

                <Button
                  sx={{
                    position: "absolute",
                    left: 70,
                    top: 200,
                    border: "solid 2px #FFAFCF",
                    borderRadius: 5,
                    color: "black",
                  }}
                >
                  Bay
                </Button>

                <Avatar
                  src={imgCardShop2}
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    borderRadius: 0,
                    width: "400px",
                    height: "400px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ py: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Acme",
              textAlign: "center",
            }}
          >
            New Arrivals
          </Typography>
          <Typography
          variant="p"
          component="div"
            sx={{
              fontFamily: "Acme",
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            <br /> duis ultrices sollicitudin aliquam sem. Scelerisque duis
            ultrices sollicitudin
          </Typography>
          <Box display={"flex"} justifyContent={"center"} py={5}>
            <Grid container spacing={5}>
              <Grid>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "white",
                      borderRadius: 3,
                      width: "207px",
                      height: "56px",
                      color: "black",
                      ":hover": { bgcolor: "#FFAFCF" },
                    }}
                  >
                    Men's t-shirt
                  </Button>
                </Box>
              </Grid>
              <Grid>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "white",
                      borderRadius: 3,
                      width: "207px",
                      height: "56px",
                      color: "black",
                      ":hover": { bgcolor: "#FFAFCF" },
                    }}
                  >
                    Men's hoodie
                  </Button>
                </Box>
              </Grid>
              <Grid>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "white",
                      borderRadius: 3,
                      width: "207px",
                      height: "56px",
                      color: "black",
                      ":hover": { bgcolor: "#FFAFCF" },
                    }}
                  >
                    Women's dress shirt
                  </Button>
                </Box>
              </Grid>
              <Grid>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "white",
                      borderRadius: 3,
                      width: "207px",
                      height: "56px",
                      color: "black",
                      ":hover": { bgcolor: "#FFAFCF" },
                    }}
                  >
                    skirt
                  </Button>
                </Box>
              </Grid>
              <Grid>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "white",
                      borderRadius: 3,
                      width: "207px",
                      height: "56px",
                      color: "black",
                      ":hover": { bgcolor: "#FFAFCF" },
                    }}
                  >
                    leather jacke
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{
            display:"flex",
            justifyContent:"center",
            flexDirection:"row",
            flexWrap:"wrap",
            gap:"50px"
          }}>
          </Box>
          <Box display={"flex"} justifyContent={"center"} py={4}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#FFAFCF",
                borderRadius: 3,
                width: "207px",
                height: "56px",
                color: "black",
                ":hover": { bgcolor: "#FFAFCF" },
              }}
            >
              View More
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}