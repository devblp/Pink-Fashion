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
  const {user,token} = useSelector((state) => state.auth)
  const [imgAuth, setImgAuth] = useState();
  const [toast, setToast] = useState({ type: "info", message: " " });
  const dispatch = useDispatch()
  
  const handelCheng = (e)=>{
    const {name, value} = e.target
    dispatch(login({user:{...user,[name]:value}}))
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
    try {
      setToast({ type: "info", message: " " })
      if (user.password && user.identifier) {
        const res = await fetchData("auth/local?populate=*" , {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json'
          }
        } )
        if (res.jwt) {
          setToast({ type: "success", message: "Login Success"})
          setInterval(() => {
            dispatch(login({token:res.jwt}))
          }, 2000);
        }else{
          setToast({ type: "error", message: "username and password not found"})
        }
      }
    } catch (error) {
      setToast({type:"error",message:"err"})
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
              py: 10,
            }}
          >
            <Box sx={{display:"flex",gap:1,alignItems:"center"}}>
            <KeyboardBackspaceIcon sx={{fontSize:"15px"}}/>
            <Typography ><Link to={"/"}>back to home</Link></Typography>
            </Box>
            <Typography variant="h2" textAlign={"center"}>
              LOGIN
            </Typography>
            <Box
              sx={{ width: "40ch", p: "20px 0px 20px 0px", borderBottom: 1 }}
            />
            <TextField
              label="UserName"
              type="email"
              name="identifier"
              onChange={handelCheng}
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
            <Toast type={toast.type} message={toast.message}/>
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
