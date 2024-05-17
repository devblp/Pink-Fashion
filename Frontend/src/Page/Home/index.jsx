import React, { useEffect, useState } from "react";
import { Avatar, Box, Typography, Button, Rating } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCreative, FreeMode } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/less/pagination";
import "./style.css";

import brandss from "../../img/brandA.png";
import imageLearmMore from "../../img/imageLearmMore.png";
import m1 from "../../img/image21.jpg";
import m2 from "../../img/image21321.jpg";
import iconBox from "../../img/iconBox.png";
import iconMap from "../../img/iconMap.png";
import iconS from "../../img/iconS.png";
import footerImg from "../../img/footerImg.png";

import fetchData from "../../Utils/fetchData";
import CardCategory from "../../Components/CardCategory";

export default function Home() {
  const navigate = useNavigate();

  // Swiper pagination configuration
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"> 0' + (index + 1) + "</span>";
    },
  };

  // URL from environment variables
  const url = import.meta.env.VITE_BASE_URL;

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

  // State variables for fetched data
  const [sliders, setSliders] = useState();
  const [brands, setBrands] = useState();
  const [cards, setCards] = useState();
  const [value, setValue] = useState(5);
  const [userProductsUser, setUserProductsUser] = useState();
  const [cartCategory, setCardCategory] = useState();

  // Utility function to fetch data from an endpoint
  const fetchDataAsync = async (url) => {
    try {
      const res = await fetchData(url);
      return res.data;
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    (async () => {
      const fetchedSliders = await fetchDataAsync("sliders?populate=*");
      setSliders(fetchedSliders);
      const fetchedBrands = await fetchDataAsync("brand-imgs?populate=*");
      setBrands(fetchedBrands);

      const fetchedCards = await fetchDataAsync("cards?populate=*");
      setCards(fetchedCards);

      const fetchedCategories = await fetchDataAsync("categories?populate=*");
      setCardCategory(fetchedCategories);

      const fetchedUserProducts = await fetchDataAsync(
        "image-produts-users?populate=*"
      );
      setUserProductsUser(fetchedUserProducts);
    })();
  }, []);

  // Extract image URLs from sliders
  const imageSlider =
    sliders?.map((e) => e?.attributes?.image?.data?.attributes?.url) || [];
  const videoSlider =
    sliders?.map((e) => e?.attributes?.video?.data?.attributes?.url) || [];
  const sliderBrand =
    brands?.map((e) => e?.attributes?.image?.data?.attributes?.url) || [];

  // Map categories to CardCategory components
  const cartCategorys =
    cartCategory?.map((e, index) => (
      <Link to={`products/all-product/all-category`}>
        <CardCategory
          key={index}
          name={e?.attributes?.name}
          image={e?.attributes?.image?.data?.attributes?.url}
        />
      </Link>
    )) || [];
  // Map user product images to SwiperSlide components
  const sliderImgUserPrd =
    userProductsUser?.map((e, index) => (
      <SwiperSlide key={index}>
        <Avatar
          sx={{ borderRadius: 0, width: 225, height: 225 }}
          src={url + e?.attributes?.image?.data[0]?.attributes?.url}
        />
      </SwiperSlide>
    )) || [];

  // Imports:Import necessary modules and components.State
  // Variables:Declare state variables for handling videos, fetched data, and other necessary states.Toggle
  // Functions:Define functions to toggle the state of video variables.Data Fetching
  // Function:fetchDataAsync is a utility function to fetch data from an endpoint and handle errors.useEffect
  // Hook:Use a single useEffect hook to fetch all necessary data when the component mounts.Data
  // Mapping:Map fetched data to the required formats or components.

  return (
    <Box>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        height={"1440px"}
        className="slider-swiper"
      >
        <SwiperSlide className="swiper-slide1">
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
                    right: "88%",
                    top: "178px",
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
                    width: 559,
                    height: 597,
                    borderRadius: 0,
                    position: "absolute",
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
                    right: "70%",
                    top: "110px",
                    transform: "translate(50%)",
                    fontFamily: "'MaisonNeueBook', sans-serif",
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
                    fontFamily: "'MaisonNeueBook', sans-serif",
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
                    fontFamily: "'MaisonNeueBook', sans-serif",
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
      <Box className="brands-logo">
        <Swiper
          slidesPerView={9}
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
              sx={{ borderRadius: 0, width: "200px", height: "30px", py: 7 }}
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
              sx={{ borderRadius: 0, width: "200px", height: "30px", py: 7 }}
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
              sx={{ borderRadius: 0, width: "200px", height: "30px", py: 7 }}
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
              sx={{ borderRadius: 0, width: "230px", height: "30px", py: 7 }}
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
              sx={{ borderRadius: 0, width: "150px", height: "40px", py: 7 }}
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
      </Box>
      <Box>
        <Grid container xs={12}>
          <Grid
            container
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box sx={{ py: 3 }}>
              <Typography fontSize={"19px"} fontWeight={500}>
                Shop by Category
              </Typography>
            </Box>
          </Grid>
          <Grid container xs={12} sx={{ justifyContent: "center", gap: 3 }}>
            {cartCategorys.slice(0, 7)}
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid
          container
          xs={12}
          sx={{ justifyContent: "center", py: 18, position: "relative" }}
        >
          <Box sx={{ width: "1600px" }}>
            <Avatar
              src={imageLearmMore}
              sx={{
                width: "100%",
                height: 301,
                borderRadius: 0,
              }}
            />
          </Box>

          <Box
            sx={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              top: "45%",
              color: "primary.ws",
            }}
          >
            <Typography sx={{ fontSize: 32 }}>
              We’re on a Mission To Clean Up the Industry
            </Typography>
            <Typography sx={{ fontSize: 15 }}>
              Read about our progress in our latest Impact Report.
            </Typography>
            <Button
              sx={{
                bgcolor: "primary.ws",
                "&:hover": { bgcolor: "primary.main" },
                color: "primary.bk",
                my: 3,
                px: 10,
              }}
            >
              LEARN MORE
            </Button>
          </Box>
        </Grid>
      </Box>
      <Box>
        <Grid container xs={12} sx={{ justifyContent: "center" }}>
          <Grid container xs={10} sx={{ justifyContent: "center" }}>
            <Typography sx={{ fontSize: 24 }}>Everlane Favorites</Typography>
          </Grid>
          <Grid container xs={10} sx={{ justifyContent: "center" }}>
            <Typography sx={{ fontSize: 17 }}>
              Beautifully Functional. Purposefully Designed. Consciously
              Crafted.
            </Typography>
          </Grid>
          <Grid container xs={10} sx={{ py: 2 }}>
            <Swiper slidesPerView={5} spaceBetween={30} className="mySwiper">
              <SwiperSlide>
                <Box>
                  <Box>
                    <Avatar
                      src={
                        cards
                          ? url +
                            cards[0].attributes?.image?.data?.attributes?.url
                          : []
                      }
                      sx={{ width: "282px", height: "461px", borderRadius: 0 }}
                    />
                  </Box>
                  <Grid container xs={12} sx={{ p: 1 }}>
                    <Grid xs={10}>
                      <Typography sx={{ fontSize: "12px" }}>
                        {cards ? cards[0].attributes?.title : []}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "12px", color: "primary.bkk" }}
                      >
                        {cards ? cards[0].attributes?.brandName : []}
                      </Typography>
                    </Grid>
                    <Grid xs={2}>
                      <Typography sx={{ fontSize: "12px" }}>
                        $ {cards ? cards[0].attributes?.current : []}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box>
                  <Box>
                    <Avatar
                      src={
                        cards
                          ? url +
                            cards[1].attributes?.image?.data?.attributes?.url
                          : []
                      }
                      sx={{ width: "282px", height: "461px", borderRadius: 0 }}
                    />
                  </Box>
                  <Grid container xs={12} sx={{ p: 1 }}>
                    <Grid xs={10}>
                      <Typography sx={{ fontSize: "12px" }}>
                        {cards ? cards[1].attributes?.title : []}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "12px", color: "primary.bkk" }}
                      >
                        {cards ? cards[1].attributes?.brandName : []}
                      </Typography>
                    </Grid>
                    <Grid xs={2}>
                      <Typography sx={{ fontSize: "12px" }}>
                        $ {cards ? cards[1].attributes?.current : []}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box>
                  <Box>
                    <Avatar
                      src={
                        cards
                          ? url +
                            cards[2].attributes?.image?.data?.attributes?.url
                          : []
                      }
                      sx={{ width: "282px", height: "461px", borderRadius: 0 }}
                    />
                  </Box>
                  <Grid container xs={12} sx={{ p: 1 }}>
                    <Grid xs={10}>
                      <Typography sx={{ fontSize: "12px" }}>
                        {cards ? cards[2].attributes?.title : []}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "12px", color: "primary.bkk" }}
                      >
                        {cards ? cards[2].attributes?.brandName : []}
                      </Typography>
                    </Grid>
                    <Grid xs={2}>
                      <Typography sx={{ fontSize: "12px" }}>
                        $ {cards ? cards[2].attributes?.current : []}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box>
                  <Box>
                    <Avatar
                      src={
                        cards
                          ? url +
                            cards[3].attributes?.image?.data?.attributes?.url
                          : []
                      }
                      sx={{ width: "282px", height: "461px", borderRadius: 0 }}
                    />
                  </Box>
                  <Grid container xs={12} sx={{ p: 1 }}>
                    <Grid xs={10}>
                      <Typography sx={{ fontSize: "12px" }}>
                        {cards ? cards[3].attributes?.title : []}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "12px", color: "primary.bkk" }}
                      >
                        {cards ? cards[3].attributes?.brandName : []}
                      </Typography>
                    </Grid>
                    <Grid xs={2}>
                      <Typography sx={{ fontSize: "12px" }}>
                        $ {cards ? cards[3].attributes?.current : []}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box>
                  <Box>
                    <Avatar
                      src={
                        cards
                          ? url +
                            cards[4].attributes?.image?.data?.attributes?.url
                          : []
                      }
                      sx={{ width: "282px", height: "461px", borderRadius: 0 }}
                    />
                  </Box>
                  <Grid container xs={12} sx={{ p: 1 }}>
                    <Grid xs={10}>
                      <Typography sx={{ fontSize: "12px" }}>
                        {cards ? cards[4].attributes?.title : []}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "12px", color: "primary.bkk" }}
                      >
                        {cards ? cards[4].attributes?.brandName : []}
                      </Typography>
                    </Grid>
                    <Grid xs={2}>
                      <Typography sx={{ fontSize: "12px" }}>
                        $ {cards ? cards[4].attributes?.current : []}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box>
                  <Box>
                    <Avatar
                      src={
                        cards
                          ? url +
                            cards[0].attributes?.image?.data?.attributes?.url
                          : []
                      }
                      sx={{ width: "282px", height: "461px", borderRadius: 0 }}
                    />
                  </Box>
                  <Grid container xs={12} sx={{ p: 1 }}>
                    <Grid xs={10}>
                      <Typography sx={{ fontSize: "12px" }}>
                        {cards ? cards[0].attributes?.title : []}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "12px", color: "primary.bkk" }}
                      >
                        {cards ? cards[0].attributes?.brandName : []}
                      </Typography>
                    </Grid>
                    <Grid xs={2}>
                      <Typography sx={{ fontSize: "12px" }}>
                        $ {cards ? cards[0].attributes?.current : []}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box>
                  <Box>
                    <Avatar
                      src={
                        cards
                          ? url +
                            cards[1].attributes?.image?.data?.attributes?.url
                          : []
                      }
                      sx={{ width: "282px", height: "461px", borderRadius: 0 }}
                    />
                  </Box>
                  <Grid container xs={12} sx={{ p: 1 }}>
                    <Grid xs={10}>
                      <Typography sx={{ fontSize: "12px" }}>
                        {cards ? cards[1].attributes?.title : []}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "12px", color: "primary.bkk" }}
                      >
                        {cards ? cards[1].attributes?.brandName : []}
                      </Typography>
                    </Grid>
                    <Grid xs={2}>
                      <Typography sx={{ fontSize: "12px" }}>
                        $ {cards ? cards[1].attributes?.current : []}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box>
                  <Box>
                    <Avatar
                      src={
                        cards
                          ? url +
                            cards[2].attributes?.image?.data?.attributes?.url
                          : []
                      }
                      sx={{ width: "282px", height: "461px", borderRadius: 0 }}
                    />
                  </Box>
                  <Grid container xs={12} sx={{ p: 1 }}>
                    <Grid xs={10}>
                      <Typography sx={{ fontSize: "12px" }}>
                        {cards ? cards[2].attributes?.title : []}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "12px", color: "primary.bkk" }}
                      >
                        {cards ? cards[2].attributes?.brandName : []}
                      </Typography>
                    </Grid>
                    <Grid xs={2}>
                      <Typography sx={{ fontSize: "12px" }}>
                        $ {cards ? cards[2].attributes?.current : []}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box>
                  <Box>
                    <Avatar
                      src={
                        cards
                          ? url +
                            cards[3].attributes?.image?.data?.attributes?.url
                          : []
                      }
                      sx={{ width: "282px", height: "461px", borderRadius: 0 }}
                    />
                  </Box>
                  <Grid container xs={12} sx={{ p: 1 }}>
                    <Grid xs={10}>
                      <Typography sx={{ fontSize: "12px" }}>
                        {cards ? cards[3].attributes?.title : []}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "12px", color: "primary.bkk" }}
                      >
                        {cards ? cards[3].attributes?.brandName : []}
                      </Typography>
                    </Grid>
                    <Grid xs={2}>
                      <Typography sx={{ fontSize: "12px" }}>
                        $ {cards ? cards[3].attributes?.current : []}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box>
                  <Box>
                    <Avatar
                      src={
                        cards
                          ? url +
                            cards[4].attributes?.image?.data?.attributes?.url
                          : []
                      }
                      sx={{ width: "282px", height: "461px", borderRadius: 0 }}
                    />
                  </Box>
                  <Grid container xs={12} sx={{ p: 1 }}>
                    <Grid xs={10}>
                      <Typography sx={{ fontSize: "12px" }}>
                        {cards ? cards[4].attributes?.title : []}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "12px", color: "primary.bkk" }}
                      >
                        {cards ? cards[4].attributes?.brandName : []}
                      </Typography>
                    </Grid>
                    <Grid xs={2}>
                      <Typography sx={{ fontSize: "12px" }}>
                        $ {cards ? cards[4].attributes?.current : []}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Swiper
          slidesPerView={1}
          grabCursor={true}
          spaceBetween={10}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-120%", 0, -500],
            },
            next: {
              shadow: true,
              translate: ["120%", 0, -500],
            },
          }}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 3000,
          }}
          modules={[EffectCreative, Autoplay]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <Grid container xs={12} sx={{ justifyContent: "center", py: 18 }}>
              <Grid xs={5} container sx={{ justifyContent: "center" }}>
                <Box py={20}>
                  <Typography py={5}>People Are Talking</Typography>
                  <Rating value={value} readOnly />
                  <Typography fontSize={24}>
                    “Love this shirt! Fits perfectly and
                    <br /> the fabric is thick without
                    <br />
                    being stiff.”
                  </Typography>
                  <Typography py={5}>
                    -- JonSnSF, The Heavyweight Overshirt
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={5} container sx={{ justifyContent: "center" }}>
                <Avatar
                  sx={{ width: 530, height: 695, borderRadius: 0 }}
                  src={
                    cards
                      ? url + cards[3].attributes?.image?.data?.attributes?.url
                      : []
                  }
                />
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container xs={12} sx={{ justifyContent: "center", py: 18 }}>
              <Grid xs={5} container sx={{ justifyContent: "center" }}>
                <Box py={20}>
                  <Typography py={5}>People Are Talking</Typography>
                  <Rating value={value} readOnly />
                  <Typography fontSize={24}>
                    “Love this shirt! Fits perfectly and
                    <br /> the fabric is thick without
                    <br />
                    being stiff.”
                  </Typography>
                  <Typography py={5}>
                    -- JonSnSF, The Heavyweight Overshirt
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={5} container sx={{ justifyContent: "center" }}>
                <Avatar
                  sx={{ width: 530, height: 695, borderRadius: 0 }}
                  src={
                    cards
                      ? url + cards[2].attributes?.image?.data?.attributes?.url
                      : []
                  }
                />
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container xs={12} sx={{ justifyContent: "center", py: 18 }}>
              <Grid xs={5} container sx={{ justifyContent: "center" }}>
                <Box py={20}>
                  <Typography py={5}>People Are Talking</Typography>
                  <Rating value={value} readOnly />
                  <Typography fontSize={24}>
                    “Love this shirt! Fits perfectly and
                    <br /> the fabric is thick without
                    <br />
                    being stiff.”
                  </Typography>
                  <Typography py={5}>
                    -- JonSnSF, The Heavyweight Overshirt
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={5} container sx={{ justifyContent: "center" }}>
                <Avatar
                  sx={{ width: 530, height: 695, borderRadius: 0 }}
                  src={
                    cards
                      ? url + cards[1].attributes?.image?.data?.attributes?.url
                      : []
                  }
                />
              </Grid>
            </Grid>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            height: "1px",
            width: "85%",
            bgcolor: "primary.bk",
            my: "10px",
          }}
          className="border-top"
        />
      </Box>
      <Box py={18}>
        <Grid container xs={12} justifyContent={"center"}>
          <Grid container xs={5} justifyContent={"center"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography py={2}>Our Holiday Gift Picks</Typography>
              <Avatar
                src={m1}
                sx={{ width: 660, height: 770, borderRadius: 0 }}
              />
              <Typography fontSize={13} py={2}>
                The best presents for everyone on your list.
              </Typography>
              <Button>Read More</Button>
            </Box>
          </Grid>
          <Grid container xs={5} justifyContent={"center"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography py={2}>Cleaner Fashion</Typography>
              <Avatar
                src={m2}
                sx={{ width: 660, height: 770, borderRadius: 0 }}
              />
              <Typography fontSize={13} py={2}>
                See the sustainability efforts behind each of our products.
              </Typography>
              <Button>Read More</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            height: "1px",
            width: "85%",
            bgcolor: "primary.bk",
            my: "10px",
          }}
          className="border-bootum"
        />
      </Box>
      <Box py={18}>
        <Grid container xs={12} justifyContent={"center"}>
          <Grid
            container
            xs={12}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Typography fontSize={"32px"}>Everlane On You</Typography>
            <Typography py={2}>
              Share your latest look with #EverlaneOnYou for a chance to be
              featured.
            </Typography>
            <Typography py={1}>Add Your Photo</Typography>
          </Grid>
          <Grid
            container
            xs={10}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode]}
              className="mySwiper"
            >
              {sliderImgUserPrd}
            </Swiper>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid container xs={10}>
          <Grid container xs={4} flexDirection={"column"} alignItems={"center"}>
            <Avatar sx={{ width: 78, height: 78 }} src={iconBox} />{" "}
            <Typography fontSize={18} fontWeight={500}>
              Complimentary Shipping
            </Typography>{" "}
            <Typography>
              Enjoy free shipping on U.S. orders over $100.
            </Typography>
          </Grid>
          <Grid container xs={4} flexDirection={"column"} alignItems={"center"}>
            <Avatar sx={{ width: 78, height: 78 }} src={iconMap} />{" "}
            <Typography fontSize={18} fontWeight={500}>
              Consciously Crafted
            </Typography>{" "}
            <Typography>Designed with you and the planet in mind.</Typography>
          </Grid>
          <Grid container xs={4} flexDirection={"column"} alignItems={"center"}>
            <Avatar sx={{ width: 78, height: 78 }} src={iconS} />{" "}
            <Typography fontSize={18} fontWeight={500}>
              Come Say Hi
            </Typography>{" "}
            <Typography>We have 11 stores across the U.S.</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box p={"150px 0px 0px 0px"}>
        <Grid
          container
          xs={12}
          py={15}
          sx={{
            width: "100%",
            height: "354px",
            bgcolor: "#E2E2E2",
            position: "relative",
          }}
        >
          <Grid
            container
            xs={6}
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography fontSize={24}>Subscribe To Our Newsletter</Typography>
            <Typography py={3} color={"#8A8A8A"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis <br /> ultrices sollicitudin aliquam sem.
              Scelerisque duis ultrices sollicitudin
            </Typography>
            <Button>Subscribe Now</Button>
          </Grid>
          <Grid
            container
            xs={6}
            sx={{
              position: "absolute",
              right: 20,
              bottom: -30,
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ width: 394, height: 520 }} src={footerImg} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
