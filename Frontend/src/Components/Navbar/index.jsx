import {
  Button,
  Box,
  MenuItem,
  Menu,
  Typography,
  Toolbar,
  AppBar,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Fragment } from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Footer() {
  const { token, user, avatar } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <>
      <Box component={"div"} className="navbar">
        <Grid container xs={12} sx={{bgcolor:"primary.main"}}>
          <Grid xs={7}>item 11</Grid>
          <Grid xs={5}>item 1</Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid xs={4}>item 2</Grid>
          <Grid xs={4}>item 2</Grid>
          <Grid xs={4}>item 2</Grid>
        </Grid>
        <Grid container xs={12}>
          item 3
        </Grid>
      </Box>
    </>
  );
}
