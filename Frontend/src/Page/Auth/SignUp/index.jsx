import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  Grid,
  Avatar,
  Checkbox,
  FormControlLabel,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import { Link, Navigate } from "react-router-dom";

import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import React, { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../../../Components/Toast";

import { login } from "../../../Sore/Slices/Auth";

export default function SignUp() {
  const { user = {}, token, toast } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  const [imgAuth, setImgAuth] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(login({ user: { ...user, [name]: value }, toast: { type: "info", message: " " } }));
  };

  useEffect(() => {
    (async () => {
      const res = await fetchData("img-auth-backgruonds?populate=*");
      if (res) {
        setImgAuth(res.data[0].attributes);
      }
    })();
  }, []);

  const handleSignUp = async () => {
    try {
      dispatch(login({ toast: { type: "info", message: " " } }));
      if (user.username && user.email && user.password) {
        const res = await fetchData("auth/local/register", {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res) {
          dispatch(login({ toast: { type: "success", message: "Register Success" } }));
          setTimeout(() => {
            dispatch(login({ token: res.jwt }));
          }, 2000);
        }
      } else {
        dispatch(login({ toast: { type: "error", message: "Please fill in all fields" } }));
      }
    } catch (error) {
      dispatch(login({ toast: { type: "error", message: error.toString() } }));
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {token ? <Navigate to={"/dashbord"} /> : (
        <Box>
          <Toast type={toast.type} message={toast.message} />
          <Grid container spacing={0}>
            <Grid item xs={5}>
              {imgAuth && (
                <Avatar
                  sx={{ borderRadius: 0, height: "881px", width: "100%" }}
                  src={
                    import.meta.env.VITE_BASE_URL +
                    imgAuth?.imgSigUp?.data?.attributes?.url
                  }
                />
              )}
            </Grid>

            <Grid item xs={7}>
              <Box
                component={"form"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                  py: 9,
                }}
              >
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <KeyboardBackspaceIcon sx={{ fontSize: "15px" }} />
                  <Typography>
                    <Link to={"/"}>back to home</Link>
                  </Typography>
                </Box>
                <Typography variant="h2" textAlign={"center"}>
                  SignUp
                </Typography>
                <Box
                  sx={{ width: "40ch", p: "20px 0px 20px 0px", borderBottom: 1 }}
                />
                <TextField
                  label="UserName"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  sx={{ m: 1, width: "40ch" }}
                />
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  sx={{ m: 1, width: "40ch" }}
                />
                <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>

                <Button
                  onClick={handleSignUp}
                  sx={{
                    backgroundColor: "#FFAFCE",
                    color: "black",
                    p: 1.5,
                    width: "30ch",
                    "&:hover": { backgroundColor: "#FFAFCE" },
                  }}
                >
                  Sign Up
                </Button>

                <FormControlLabel control={<Checkbox />} label="Save account" />

                <Box sx={{ width: 300, borderBottom: 1 }} />
                <Box component={"div"}>
                  <IconButton>
                    <TelegramIcon />
                  </IconButton>
                  <IconButton>
                    <XIcon />
                  </IconButton>
                  <IconButton>
                    <InstagramIcon />
                  </IconButton>
                </Box>
                <Typography>
                  Have an account? <Link to={"/auth"}>Login</Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}
