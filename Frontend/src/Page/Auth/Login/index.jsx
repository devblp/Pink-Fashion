import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  FormLabel,
  FormHelperText,
  Grid,
  Avatar,
  Checkbox,
  FormControlLabel,
  IconButton,
  FormGroup,
  OutlinedInput,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import { Link } from "react-router-dom";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useEffect, useState } from "react";
import userFromFields from "../../../Utils/useFromFields";
import fetchData from "../../../Utils/fetchData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [users, handelCheng] = userFromFields();
  console.log(users);

  const [imgAuth, setImgAuth] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchData("img-auth-backgruonds?populate=*");
      if (res) {
        setImgAuth(res.data[0].attributes);
      }
    })();
  }, []);

  const handleLogin = async () => {
    try {
      if (users.password && users.identifier) {
        const {data} = await fetchData("auth/local",{users});
        console.log(data);
        if (data.jwt) {
          
          toast.success("Logged in successfully!", {
            hideProgressBar: true,
          });
        }
      }
    } catch (error) {
      
    }
  };
  

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Grid container spacing={0}>
        <Grid xs={5}>
          <Avatar
            sx={{ borderRadius: 0, height: "881px", width: "100%" }}
            src={
              import.meta.env.VITE_BASE_URL +
              imgAuth?.imgLogin?.data?.attributes?.url
            }
          />
        </Grid>
        <Grid xs={7}>
          <Box
            component={"form"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              py: 20,
            }}
          >
            <Typography variant="h2" textAlign={"center"}>
              LOGIN
            </Typography>
            <Box
              sx={{ width: "40ch", p: "20px 0px 20px 0px", borderBottom: 1 }}
            />
            <TextField
              label="UserName"
              type="text"
              name="identifier"
              onChange={handelCheng}
              defaultValue="Success"
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
                onChange={handelCheng}
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
              onClick={handleLogin}
              sx={{
                backgroundColor: "#FFAFCE",
                color: "black",
                p: 1.5,
                width: "30ch",
                "&:hover": { backgroundColor: "#FFAFCE" },
              }}
            >
              Login
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
              Have an account?<Link to={"/sign-up"}>sign up</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
