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
import {  useState } from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import imageUsa from "../../img/USA.png";
import logo from "../../img/logo.png";

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
          <Grid item xs={7} sx={{ display: "flex", justifyContent: "right" }}>
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
              keepMounted
              open={open}
              onClose={handelClosMegaMenu}
              PaperProps={{sx:{width: '100%' ,left:0, right: 0,display:"block"}}}
            >
              <MenuItem >s</MenuItem>
            </Menu>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
