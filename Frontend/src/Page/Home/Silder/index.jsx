import React, { useEffect, useState } from "react";
import { Box, Button, Typography, Avatar , useMediaQuery } from '@mui/material';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import brandss from "../../../img/brandA.png";

import fetchData from "../../../Utils/fetchData";


export default function Slider() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  // Swiper pagination configuration
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"> 0' + (index + 1) + "</span>";
    },
  };

  // State variables for video toggles
  const [video, setVideo] = useState(false);
  const [videoTo, setVideoTo] = useState(false);
  const [videoTr, setVideoTr] = useState(false);
  const [videoFr, setVideoFr] = useState(false);

  // Toggle functions for videos
  const handleVideo = () => setVideo(!video);
  const handelVideoTo = () => setVideoTo(!videoTo);
  const handelVideoTr = () => setVideoTr(!videoTr);
  const handelVideoFr = () => setVideoFr(!videoFr);

  // Utility function to fetch data from an endpoint
  const fetchDataAsync = async (url) => {
    try {
      const res = await fetchData(url);
      return res.data;
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
    }
  };

  // State variables for fetched data
  const [sliders, setSliders] = useState();
  const [brands, setBrands] = useState();

  // Fetch data on component mount
  useEffect(() => {
    (async () => {
      const fetchedSliders = await fetchDataAsync("sliders?populate=*");
      setSliders(fetchedSliders);
      const fetchedBrands = await fetchDataAsync("brand-imgs?populate=*");
      setBrands(fetchedBrands);
    })();
  }, []);

  // Extract image URLs from sliders
  const imageSlider =
    sliders?.map((e) => e?.attributes?.image?.data?.attributes?.url) || [];
  const videoSlider =
    sliders?.map((e) => e?.attributes?.video?.data?.attributes?.url) || [];
  const sliderBrand =
    brands?.map((e) => e?.attributes?.image?.data?.attributes?.url) || [];

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="slider-swiper"
      >
        <SwiperSlide className="swiper-slide1" >
          {video ? (
            <Box>
              <video
                autoPlay
                loop
                muted
                posta={import.meta.env.VITE_BASE_URL + videoSlider[0]}
              >
                <source src={import.meta.env.VITE_BASE_URL + videoSlider[0]} />
              </video>
              <Button
                onClick={handleVideo}
                sx={{
                  color: "white",
                  position: "absolute",
                  bottom: "30px",
                  left: "30px",
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
                    right: isSmallScreen ? "73%" : "81%",
                    top: isSmallScreen ? 130 : 170,
                    fontFamily: "'MaisonNeueBook', sans-serif",
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
                    fontSize: isSmallScreen ? 100 : 230,
                  }}
                  fontFamily="zen tokyo zoo"
                >
                  FASHION
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    right: isSmallScreen ? "20%" : "17%",
                    top: isSmallScreen? 240 :"400px",
                    fontFamily: "'MaisonNeueBook', sans-serif",
                  }}
                >
                  Discover and Buy
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 2000 }}
                animate={{ opacity: 1, y: 620 }}
                transition={{ duration: 0.7 }}
              >
                <Avatar
                  sx={{
                    width: isSmallScreen ? 400 : 530,
                    height: isSmallScreen ? 400 : 530,
                    borderRadius: 0,
                    position: "absolute",
                    Button:0,
                    right: "50%",
                    transform: "translate(50%)",
                    bottom: 1,
                  }}
                  src={import.meta.env.VITE_BASE_URL + imageSlider[0]}
                />
              </motion.div>
              <Button
                onClick={handleVideo}
                sx={{
                  color: "white",
                  position: "absolute",
                  bottom: "30px",
                  left: "30px",
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
              <video
                autoPlay
                loop
                muted
                posta={import.meta.env.VITE_BASE_URL + videoSlider[1]}
              >
                <source src={import.meta.env.VITE_BASE_URL + videoSlider[1]} />
              </video>
              <Button
                onClick={handelVideoTo}
                sx={{
                  color: "white",
                  position: "absolute",
                  bottom: "30px",
                  left: "30px",
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
                    right: isSmallScreen ? "73%" : "70%",
                    top: "110px",
                    transform: "translate(50%)",
                    fontFamily: "'MaisonNeueBook', sans-serif",
                    fontSize: isSmallScreen ? "50px":"91px",
                    fontWeight: "500",
                  }}
                >
                  ULTIMATE
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    right: isSmallScreen ? "54%" : "54%",
                    top: "160px",
                    fontFamily: "'MaisonNeueBook', sans-serif",
                    fontSize: isSmallScreen ? "120px":"187px",
                    color: "rgba(255, 255, 255, 0)",
                    WebkitTextStroke: "2px #FFAFCF",
                  }}
                >
                  SALE
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    right: isSmallScreen ? "62%" :"65%",
                    top: isSmallScreen ? "330px":"400px",
                    fontFamily: "'MaisonNeueBook', sans-serif",
                    fontSize: isSmallScreen ? "18px":"20px",
                    fontWeight: "400",
                  }}
                >
                  NEW COLLECTION
                </Typography>
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
                  src={import.meta.env.VITE_BASE_URL + imageSlider[1]}
                />
              </motion.div>
              <Button
                onClick={handelVideoTo}
                sx={{
                  color: "white",
                  position: "absolute",
                  bottom: "30px",
                  left: "30px",
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
              <video
                autoPlay
                loop
                muted
                posta={import.meta.env.VITE_BASE_URL + videoSlider[2]}
              >
                <source src={import.meta.env.VITE_BASE_URL + videoSlider[2]} />
              </video>
              <Button
                onClick={handelVideoTr}
                sx={{
                  color: "white",
                  position: "absolute",
                  bottom: "30px",
                  left: "30px",
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
                    fontFamily: "'MaisonNeueBook', sans-serif",
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
                    fontFamily: "'MaisonNeueBook', sans-serif",
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
                    fontFamily: "'MaisonNeueBook', sans-serif",
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
                  src={import.meta.env.VITE_BASE_URL + imageSlider[2]}
                />
              </motion.div>
              <Button
                onClick={handelVideoTr}
                sx={{
                  color: "white",
                  position: "absolute",
                  bottom: "30px",
                  left: "30px",
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
              <video
                autoPlay
                loop
                muted
                posta={import.meta.env.VITE_BASE_URL + videoSlider[3]}
              >
                <source src={import.meta.env.VITE_BASE_URL + videoSlider[3]} />
              </video>
              <Button
                onClick={handelVideoFr}
                sx={{
                  color: "white",
                  position: "absolute",
                  bottom: "30px",
                  left: "30px",
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
                    fontFamily: "'MaisonNeueBook', sans-serif",
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
                    fontFamily: "'MaisonNeueBook', sans-serif",
                    fontSize: "64px",
                    fontWeight: "400",
                  }}
                >
                  collection
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    right: "70%",
                    top: "350px",
                    fontFamily: "'MaisonNeueBook', sans-serif",
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
                  src={import.meta.env.VITE_BASE_URL + imageSlider[3]}
                />
              </motion.div>
              <Button
                onClick={handelVideoFr}
                sx={{
                  color: "white",
                  position: "absolute",
                  bottom: "30px",
                  left: "30px",
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
      <Swiper
        slidesPerView={isSmallScreen ? 4:9}
        spaceBetween={10}
        speed={2000}
        autoplay={{
          delay: 1,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="item-swaper-slider-brand">
          <Avatar
            sx={{
              borderRadius: 0,
              width: "200px",
              height: "30px",
              py: 7,
            }}
            src={import.meta.env.VITE_BASE_URL + sliderBrand[0]}
          />
        </SwiperSlide>
        <SwiperSlide className="item-swaper-slider-brand">
          <Avatar
            sx={{ borderRadius: 0, width: "50px", height: "30px", py: 7 }}
            src={brandss}
          />
        </SwiperSlide>
        <SwiperSlide className="item-swaper-slider-brand">
          <Avatar
            sx={{
              borderRadius: 0,
              width: "200px",
              height: "30px",
              py: 7,
            }}
            src={import.meta.env.VITE_BASE_URL + sliderBrand[1]}
          />
        </SwiperSlide>
        <SwiperSlide className="item-swaper-slider-brand">
          <Avatar
            sx={{ borderRadius: 0, width: "50px", height: "30px", py: 7 }}
            src={brandss}
          />
        </SwiperSlide>
        <SwiperSlide className="item-swaper-slider-brand">
          <Avatar
            sx={{
              borderRadius: 0,
              width: "200px",
              height: "30px",
              py: 7,
            }}
            src={import.meta.env.VITE_BASE_URL + sliderBrand[2]}
          />
        </SwiperSlide>
        <SwiperSlide className="item-swaper-slider-brand">
          <Avatar
            sx={{ borderRadius: 0, width: "50px", height: "30px", py: 7 }}
            src={brandss}
          />
        </SwiperSlide>
        <SwiperSlide className="item-swaper-slider-brand">
          <Avatar
            sx={{
              borderRadius: 0,
              width: "230px",
              height: "30px",
              py: 7,
            }}
            src={import.meta.env.VITE_BASE_URL + sliderBrand[3]}
          />
        </SwiperSlide>
        <SwiperSlide className="item-swaper-slider-brand">
          <Avatar
            sx={{ borderRadius: 0, width: "50px", height: "30px", py: 7 }}
            src={brandss}
          />
        </SwiperSlide>
        <SwiperSlide className="item-swaper-slider-brand">
          <Avatar
            sx={{
              borderRadius: 0,
              width: "150px",
              height: "40px",
              py: 7,
            }}
            src={import.meta.env.VITE_BASE_URL + sliderBrand[4]}
          />
        </SwiperSlide>
        <SwiperSlide className="item-swaper-slider-brand">
          <Avatar
            sx={{ borderRadius: 0, width: "50px", height: "30px", py: 7 }}
            src={brandss}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
