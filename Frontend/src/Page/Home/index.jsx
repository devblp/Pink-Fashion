import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Typography,
  Button,
  Backdrop,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import Slider from "./Silder";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/less/pagination";
import "./style.css";

import imageLearmMore from "../../img/imageLearmMore.png";
import m1 from "../../img/image21.jpg";
import m2 from "../../img/image21321.jpg";
import iconBox from "../../img/iconBox.png";
import iconMap from "../../img/iconMap.png";
import iconS from "../../img/iconS.png";
import footerImg from "../../img/footerImg.png";
import fetchData from "../../Utils/fetchData";
import CardCategory from "../../Components/CardCategory";
import { useSelector } from "react-redux";

export default function Home() {
  const { token } = useSelector((state) => state.auth);

  // URL from environment variables
  const url = import.meta.env.VITE_BASE_URL;

  // State variables for fetched data
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
      const fetchedCategories = await fetchDataAsync("categories?populate=*");
      setCardCategory(fetchedCategories);
    })();
  }, []);

  // Map categories to CardCategory components
  const cartCategorys =
    cartCategory?.map((e, index) => (
      <CardCategory
        key={index}
        name={e?.attributes?.name}
        image={e?.attributes?.image?.data?.attributes?.url}
      />
    )) || [];

  // Imports:Import necessary modules and components.State
  // Variables:Declare state variables for handling videos, fetched data, and other necessary states.Toggle
  // Functions:Define functions to toggle the state of video variables.Data Fetching
  // Function:fetchDataAsync is a utility function to fetch data from an endpoint and handle errors.useEffect
  // Hook:Use a single useEffect hook to fetch all necessary data when the component mounts.Data
  // Mapping:Map fetched data to the required formats or components.
  const [openDialog, setOpenDialog] = useState(true);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      {token ? (
        [""]
      ) : (
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"ho ho wellcome?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              If you want to login Please SingUp
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
      <Grid container xs={12} gap={10}>
        {/* {slider} */}
        <Grid xs={12}>
          <Slider />
        </Grid>
        {/* {Category} */}
        <Grid container xs={12}>
          <Grid container xs={12} justifyContent={"center"} sx={{ py: 2 }}>
            <Typography fontSize={"1.3vw"} fontWeight={500}>
              Shop by Category
            </Typography>
          </Grid>
          <Grid container xs={12} justifyContent={"center"} gap={5}>
            {cartCategorys.slice(0, 7)}
          </Grid>
        </Grid>
        {/* {slider} */}
        <Grid
          container
          xs={12}
          sx={{ justifyContent: "center", position: "relative" }}
        >
          <Box sx={{ width: "100%" }}>
            <Avatar
              src={imageLearmMore}
              sx={{
                width: "100%",
                height: "40vh",
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
              top: "30%",
              color: "primary.ws",
            }}
          >
            <Typography sx={{ fontSize: "2vw" }}>
              We’re on a Mission To Clean Up the Industry
            </Typography>
            <Typography sx={{ fontSize: "1vw" }}>
              Read about our progress in our latest Impact Report.
            </Typography>
            <Button
              sx={{
                width:"30vh",
                height:"5vh",
                bgcolor: "primary.ws",
                fontSize:"1vw",
                "&:hover": { bgcolor: "primary.main" },
                color: "primary.bk",
                my: 3,
              }}
            >
              LEARN MORE
            </Button>
          </Box>
        </Grid>
        {/* {slider} */}
        <Grid container xs={12} justifyContent={"center"}>
          <Grid container xs={6} justifyContent={"center"}>
            <Box
              sx={{
                width: "80%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography fontSize={"3vh"} py={2}>
                Our Holiday Gift Picks
              </Typography>
              <Avatar
                src={m1}
                sx={{ width: "100%", height: "70vh", borderRadius: 0 }}
              />
              <Typography fontSize={"2vh"} py={2}>
                The best presents for everyone on your list.
              </Typography>
              <Button >Read More</Button>
            </Box>
          </Grid>
          <Grid container xs={6} justifyContent={"center"}>
            <Box
              sx={{
                width: "80%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography fontSize={"3vh"} py={2}>
                Cleaner Fashion
              </Typography>
              <Avatar
                src={m2}
                sx={{ width: "100%", height: "70vh", borderRadius: 0 }}
              />
              <Typography fontSize={"2vh"} py={2}>
                See the sustainability efforts behind each of our products.
              </Typography>
              <Button>Read More</Button>
            </Box>
          </Grid>
        </Grid>
        {/* {slider} */}
        <Grid
          container
          xs={12}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Grid container xs={3} flexDirection={"column"} alignItems={"center"}>
            <Avatar
              sx={{ width: "7vh", height: "7vh", borderRadius: 0 }}
              src={iconBox}
            />
            <Typography fontSize={"1vw"} fontWeight={500}>
              Complimentary Shipping
            </Typography>
            <Typography fontSize={"0.7vw"}>
              Enjoy free shipping on U.S. orders over $100.
            </Typography>
          </Grid>
          <Grid container xs={3} flexDirection={"column"} alignItems={"center"}>
            <Avatar sx={{ width: "7vh", height: "7vh" }} src={iconMap} />
            <Typography fontSize={"1vw"} fontWeight={500}>
              Consciously Crafted
            </Typography>
            <Typography fontSize={"0.7vw"}>
              Designed with you and the planet in mind.
            </Typography>
          </Grid>
          <Grid container xs={3} flexDirection={"column"} alignItems={"center"}>
            <Avatar sx={{ width: "7vh", height: "7vh" }} src={iconS} />
            <Typography fontSize={"1vw"} fontWeight={500}>
              Come Say Hi
            </Typography>
            <Typography fontSize={"0.7vw"}>
              We have 11 stores across the U.S.
            </Typography>
          </Grid>
        </Grid>
        {/* {} */}
        <Grid
          container
          xs={12}
          sx={{
            width: "100%",
            height: "30vh",
            bgcolor: "#E2E2E2",
            position: "relative",
          }}
        >
          <Grid
            container
            xs={9}
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap:2,
            }}
          >
            <Typography fontSize={"1.2vw"}>Subscribe To Our Newsletter</Typography>
            <Typography  color={"#8A8A8A"} fontSize={"0.8vw"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis <br /> ultrices sollicitudin aliquam sem.
              Scelerisque duis ultrices sollicitudin
            </Typography>
            <Button fontSize={"1vw"} >Subscribe Now</Button>
          </Grid>
          <Grid
            container
            xs={6}
            sx={{
              position: "absolute",
              right: 0,
              bottom: -20,
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ width: "20vh", height: "39vh", borderRadius:0 }} src={footerImg} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
