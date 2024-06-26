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
import { Link } from "react-router-dom";

import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import React, { useEffect, useState } from "react";
import fetchData from "../../../Utils/fetchData";
import 'react-toastify/dist/ReactToastify.css';
import Toast from "../../../Components/Toast";
import { login } from "../../../Sore/Slices/Auth";
import { useDispatch,useSelector } from "react-redux";

export default function Login() {
  const {user,token,toast} = useSelector((state) => state.auth)
  console.log(user);
  const [imgAuth, setImgAuth] = useState();
  const dispatch = useDispatch()
  
  const handelCheng = (e)=>{
    const {name, value} = e.target
    dispatch(login({user:{...user,[name]:value},toast:{ type: "info", message: " "}}))
  }
  useEffect(() => {
    (async () => {
      const res = await fetchData("img-auth-backgruonds?populate=*");
      if (res) {
        setImgAuth(res.data[0].attributes);
      }
    })();
  }, []);

  const HandleLogin = async () => {
    console.log(toast)
    try {
      if (user.password) {
        const res = await fetchData("auth/local?populate=*" , {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json'
          }
        } )
        if (res.jwt) {
          dispatch(login({toast:{ type: "success", message: "Login Success"}}))
          setTimeout(() => {
            dispatch(login({ token: res.jwt }));
          }, 2000);
        }else{
          dispatch(login({toast:{ type: "error", message: "username and password not found"}}))
        }
      }else {
        dispatch(login({toast:{ type: "error", message: "password is required"}}))
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
      <Toast type={toast.type} message={toast.message}/>
      <Grid container spacing={0}>
        <Grid xs={5}>
          <Avatar
            sx={{ borderRadius: 0, height: "100vh", width: "100%" }}
            src={
              import.meta.env.VITE_BASE_URL +
              imgAuth?.imgLogin?.data?.attributes?.url
            }
          />
        </Grid>
        <Grid xs={7} py={"3%"}>
          <Box
            component={"form"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Box sx={{display:"flex",gap:1,alignItems:"center"}}>
            <KeyboardBackspaceIcon sx={{fontSize:"15px"}}/>
            <Typography ><Link to={"/"}>back to home</Link></Typography>
            </Box>
            <Typography variant="h5" textAlign={"center"}>
              LOGIN
            </Typography>
            <Box
              sx={{ width: "50%",  borderBottom: 1 }}
            />
            <TextField
              label="UserName"
              type="email"
              name="identifier"
              onChange={handelCheng}
              sx={{ m: 1, width: "40%" }}
            />
            <FormControl sx={{ m: 1, width: "40%" }} variant="outlined">
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
              onClick={HandleLogin}
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

            <Box sx={{ width: "50%", borderBottom: 1 }} />
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
