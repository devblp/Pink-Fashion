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
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Fragment } from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import imageUsa from "../../img/USA.png";
import logo from "../../img/logo.png"

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';

export default function Footer() {
  const { token, user, avatar } = useSelector((state) => state.auth);
  const navigate = useNavigate();
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
        <Grid container xs={12} sx={{ height: 75 ,display: "flex" ,alignItems:"center" }}>
          <Grid xs={4}>
            <Box sx={{ display: "flex", justifyContent: "center",gap:"20px" }}>
              <Typography className="filter-menu-nav">Women</Typography>
              <Typography className="filter-menu-nav">Men</Typography>
              <Typography className="filter-menu-nav">About</Typography>
              <Typography className="filter-menu-nav">Everworld Stories</Typography>
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box sx={{ display: "flex", justifyContent: "center" }}><Link to={"/"}><Avatar src={logo} sx={{ width: 108, height: 55, borderRadius: 0 }}/></Link></Box>
          </Grid>
          <Grid xs={4}>
            <Box sx={{ display: "flex", justifyContent: "center",gap:"20px" }}>
              <Link className="link-navbar-icon"><SearchIcon /></Link>
              <Link to={"/dashbord"} className="link-navbar-icon"><PermIdentityIcon /></Link>
              <Link className="link-navbar-icon"><LocalMallIcon /></Link>
            </Box>
          </Grid>
        </Grid>
        <Grid container xs={12} sx={{ height: 56 }}>
          item 3
        </Grid>
      </Box>
    </>
  );
}
