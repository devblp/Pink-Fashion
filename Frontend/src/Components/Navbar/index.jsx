import {
  Button,
  Box,
  Menu,
  Typography,
  Avatar,
  Drawer,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import imageUsa from "../../img/USA.png";
import logo from "../../img/logo.png";
import Frame1 from "../../img/Frame1.png";
import Frame2 from "../../img/Frame3.png";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { addItem, clear, removeItem } from "../../Sore/Slices/Cart";

export default function Footer() {
  const url = import.meta.env.VITE_BASE_URL;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handelOpenMegaMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handelClosMegaMenu = () => {
    setAnchorEl(null);
  };
  // start Cart
  const [openDrawer, setOpenDrawer] = useState(false);
  const { list } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let totalPrice = 0;
  const items = list.map((e, index) => {
    totalPrice += e.attributes.price * e.quantity;
    return (
      <Grid container xs={12} key={index} my={3}>
        <Grid container xs={2}>
          <Avatar
            alt={e.name}
            src={url + e.attributes.images.data[0].attributes.url}
            sx={{ width: "70px", height: "100px", borderRadius: "0" }}
          />
        </Grid>
        <Grid
          container
          xs={2}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Box>{e.attributes.name}</Box>
          <Box>$ {e.attributes.price}</Box>
        </Grid>
        <Grid container xs={3} alignItems={"center"}justifyContent={"center"}>
          <Box>
            <Button onClick={() => dispatch(clear(e.id))} sx={{ height: "30px" }}>
              <DeleteOutlineIcon sx={{color:"red"}} />
            </Button>
          </Box>
          <Box>
            <Button
              sx={{ height: "30px" }}
              onClick={() => dispatch(removeItem(e.id))}
            >
              -
            </Button>
            {e.quantity}
            <Button
              sx={{ height: "30px" }}
              onClick={() => dispatch(addItem(e))}
            >
              +
            </Button>
          </Box>
        </Grid>
      </Grid>
    );
  });
  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };
  return (
    <>
      <Box component={"div"} className="navbar">
        <Grid
          container
          xs={12}
          sx={{ bgcolor: "primary.bk", color: "primary.ws", height: 30 }}
        >
          <Grid xs={7} sx={{ display: "flex", justifyContent: "right" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Get early access on launches and offers.</Typography>
              <Link to={"/auth"} className="link-navbar link-to">
                Sign Up For Texts
              </Link>
              <ArrowForwardIcon fontSize="14" />
            </Box>
          </Grid>
          <Grid
            xs={5}
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
              gap: "10px",
              paddingRight: "30px",
            }}
          >
            <Avatar
              src={imageUsa}
              sx={{ width: 21, height: 15, borderRadius: 0 }}
            />
            <Typography>USA</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          sx={{ height: 75, display: "flex", alignItems: "center" }}
        >
          <Grid xs={4}>
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: "20px" }}
            >
              <Link
                to={"/products/2/all-category"}
                className="link-navbar-menu"
              >
                <Typography className="filter-menu-nav">Women</Typography>
              </Link>
              <Link
                to={"/products/1/all-category"}
                className="link-navbar-menu"
              >
                <Typography className="filter-menu-nav">Men</Typography>
              </Link>
              <Link to={""} className="link-navbar-menu">
                <Typography className="filter-menu-nav">About</Typography>
              </Link>
              <Link to={""} className="link-navbar-menu">
                {" "}
                <Typography className="filter-menu-nav">
                  Everworld Stories
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Link to={"/"}>
                <Avatar
                  src={logo}
                  sx={{ width: 108, height: 55, borderRadius: 0 }}
                />
              </Link>
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: "20px" }}
            >
              <Link to={"/search"} className="link-navbar-icon">
                <SearchIcon />
              </Link>
              <Link to={"/dashbord"} className="link-navbar-icon">
                <PermIdentityIcon />
              </Link>
              <Link onClick={toggleDrawer(true)} className="link-navbar-icon">
                <Box sx={{position:"relative"}}>
                <LocalMallIcon  />
                {list.length>0? (<Box sx={{borderRadius:100 ,width:"10px",height:"10px",bgcolor:"red",position:"absolute" , bottom:0,textAlign:"center",color:"primary.ws",fontSize:"14px"}}></Box>):""}
                </Box>
                
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          sx={{ height: 56, display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            <Link
              to={"/products/all-product/all-category"}
              className="link-navbar-menu"
            >
              <Typography className="filter-menu-nav">
                Product's
              </Typography>
            </Link>
            <Link to={""} className="link-navbar-menu">
              <Typography className="filter-menu-nav">New Arrivals</Typography>
            </Link>
            <Link to={""} className="link-navbar-menu">
              <Typography className="filter-menu-nav">Best-Sellers</Typography>
            </Link>
            <Link to={""} className="link-navbar-menu">
              <Typography className="filter-menu-nav">
                Tops & Sweaters
              </Typography>
            </Link>
            <Link to={""} className="link-navbar-menu">
              <Typography className="filter-menu-nav">Pants & Jeans</Typography>
            </Link>
            <Link to={""} className="link-navbar-menu">
              <Typography className="filter-menu-nav">Outerwear</Typography>
            </Link>
            <Link to={""} className="link-navbar-menu">
              <Typography className="filter-menu-nav">Shoes & Bags</Typography>
            </Link>
            <Link to={""} className="link-navbar-menu">
              <Button
                className="filter-menu-nav mega-menu-button"
                sx={{
                  color: "primary.main",
                  ":hover": { bgcolor: "primary.ws" },
                }}
                onClick={handelOpenMegaMenu}
              >
                Sale
              </Button>
            </Link>
            <Menu
              className="mega-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handelClosMegaMenu}
              sx={{ width: "100%" }}
            >
              <Grid container xs={12} py={1}>
                <Grid
                  container
                  xs={3}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box>
                    <Typography
                      component={"h4"}
                      sx={{ color: "#737373", py: 3, fontSize: "10px" }}
                    >
                      HIGHLIGHTS
                    </Typography>
                    <Link className="link-navbar-menu-mega">
                      <Typography py={1} fontSize={"14px"}>
                        The Gift Guide
                      </Typography>
                    </Link>
                    <Link className="link-navbar-menu-mega">
                      <Typography py={1} fontSize={"14px"}>
                        New Bottoms
                      </Typography>
                    </Link>
                    <Link className="link-navbar-menu-mega">
                      <Typography py={1} fontSize={"14px"}>
                        New Tops
                      </Typography>
                    </Link>
                    <Link className="link-navbar-menu-mega">
                      <Typography py={1} fontSize={"14px"}>
                        T-Shirt Bundles
                      </Typography>
                    </Link>
                    <Link className="link-navbar-menu-mega">
                      <Typography py={1} fontSize={"14px"}>
                        Under $100
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
                <Grid
                  container
                  xs={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box>
                    <Typography
                      component={"h4"}
                      sx={{ color: "#737373", py: 3, fontSize: "10px" }}
                    >
                      FEATURED SHOPS
                    </Typography>
                    <Link className="link-navbar-menu-mega">
                      <Typography py={1} fontSize={"14px"}>
                        The Holiday Outfit Edit
                      </Typography>
                    </Link>
                    <Link className="link-navbar-menu-mega">
                      <Typography py={1} fontSize={"14px"}>
                        Giftable Sweaters
                      </Typography>
                    </Link>
                    <Link className="link-navbar-menu-mega">
                      <Typography py={1} fontSize={"14px"}>
                        Uniform & Capsule
                      </Typography>
                    </Link>
                    <Link className="link-navbar-menu-mega">
                      <Typography py={1} fontSize={"14px"}>
                        The Performance Chino Shop
                      </Typography>
                    </Link>
                    <Link className="link-navbar-menu-mega">
                      <Typography py={1} fontSize={"14px"}>
                        Top Rated Men’s Clothing
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
                <Grid
                  container
                  xs={5}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Box sx={{ display: "flex", gap: 3 }}>
                    <Link to={""}>
                      <Avatar
                        src={Frame1}
                        sx={{
                          width: "262px",
                          height: "262px",
                          borderRadius: 0,
                        }}
                      />
                    </Link>
                    <Link to={""}>
                      <Avatar
                        src={Frame2}
                        sx={{
                          width: "262px",
                          height: "262px",
                          borderRadius: 0,
                        }}
                      />
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Menu>
          </Box>
        </Grid>
      </Box>
      <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
        <Grid container xs={12} px={3}>
          <Grid container xs={12} gap={2}>
            <Typography sx={{ fontSize: 24, fontWeight: 500 }} color="initial">
              Your Cart
            </Typography>
            <Grid container xs={12} flexDirection={"column"} gap={1}>
              {list.length > 0 ? <Box display={"flex"} flexDirection={"column"}>{items}</Box> : <h2>cart is empty</h2>}
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={2}
          >
            <Grid
              container
              xs={12}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box>
                <Typography>Subtotal (  itmeS  )</Typography>
              </Box>
              <Box>$ {totalPrice}</Box>
            </Grid>
            <Grid container xs={12} flexDirection={"column"}>
              <Button
                variant="contained"
                sx={{ bgcolor: "primary.bkNero", color: "primary.ws" }}
              >
                CONTINUE TO CHECKOUT
              </Button>
              <br />
              <Button
                variant="contained"
                onClick={() => dispatch(clear())}
                sx={{ bgcolor: "red", color: "primary.ws" }}
              >
                clear
              </Button>
            </Grid>
            <Typography>Psst, get it now before it sells out.</Typography>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
}
