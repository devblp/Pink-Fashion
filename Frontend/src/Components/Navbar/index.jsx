import {
  Button,
  Box,
  MenuItem,
  Menu,
  Typography,
  Toolbar,
  AppBar,
  Avatar,
  Icon,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import imageUsa from "../../img/USA.png";
import logo from "../../img/logo.png";
import Frame1 from "../../img/Frame1.png"
import Frame2 from "../../img/Frame3.png"



import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";

export default function Footer() {
  const { token, user, avatar } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  console.log(anchorEl);
  const open = Boolean(anchorEl);
  const handelOpenMegaMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handelClosMegaMenu = () => {
    setAnchorEl(null);
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
              <Link to={""} className="link-navbar-menu">
                <Typography className="filter-menu-nav">Women</Typography>
              </Link>
              <Link to={""} className="link-navbar-menu">
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
              <Link className="link-navbar-icon">
                <SearchIcon />
              </Link>
              <Link to={"/dashbord"} className="link-navbar-icon">
                <PermIdentityIcon />
              </Link>
              <Link className="link-navbar-icon">
                <LocalMallIcon />
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
            <Link to={""} className="link-navbar-menu">
              <Typography className="filter-menu-nav">
                Holiday Gifting
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
            >
              <Grid container xs={12} py={1}>
                <Grid container xs={3} sx={{display:"flex" ,justifyContent:"center"}}>
                  <Box >
                    <Typography component={"h4"} sx={{color:"#737373",py:3,fontSize:"10px"}}>HIGHLIGHTS</Typography>
                    <Link className="link-navbar-menu-mega"><Typography py={1} fontSize={"14px"} >The Gift Guide</Typography></Link>
                    <Link className="link-navbar-menu-mega"><Typography py={1} fontSize={"14px"}>New Bottoms</Typography></Link>
                    <Link className="link-navbar-menu-mega"><Typography py={1} fontSize={"14px"}>New Tops</Typography></Link>
                    <Link className="link-navbar-menu-mega"><Typography py={1} fontSize={"14px"}>T-Shirt Bundles</Typography></Link>
                    <Link className="link-navbar-menu-mega"><Typography py={1} fontSize={"14px"}>Under $100</Typography></Link>
                  </Box>
                </Grid>
                <Grid container xs={4} sx={{display:"flex" ,justifyContent:"center",}}>
                  <Box>
                    <Typography component={"h4"} sx={{color:"#737373",py:3,fontSize:"10px"}}>FEATURED SHOPS</Typography>
                    <Link className="link-navbar-menu-mega"><Typography py={1} fontSize={"14px"}>The Holiday Outfit Edit</Typography></Link>
                    <Link className="link-navbar-menu-mega"><Typography py={1} fontSize={"14px"}>Giftable Sweaters</Typography></Link>
                    <Link className="link-navbar-menu-mega"><Typography py={1} fontSize={"14px"}>Uniform & Capsule</Typography></Link>
                    <Link className="link-navbar-menu-mega"><Typography py={1} fontSize={"14px"}>The Performance Chino Shop</Typography></Link>
                    <Link className="link-navbar-menu-mega"><Typography py={1} fontSize={"14px"}>Top Rated Men’s Clothing</Typography></Link>
                  </Box>
                </Grid>
                <Grid container xs={5} sx={{display:"flex" ,justifyContent:"center" ,flexDirection:"row"}}>
                  <Box sx={{display:"flex" ,gap:3}}>
                    <Link to={""}><Avatar src={Frame1} sx={{width:"262px",height:"262px",borderRadius:0}}/></Link>
                    <Link to={""}><Avatar src={Frame2} sx={{width:"262px",height:"262px",borderRadius:0}}/></Link>
                  </Box>
                </Grid>
              </Grid>
            </Menu>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
