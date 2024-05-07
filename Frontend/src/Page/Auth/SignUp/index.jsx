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
import "react-toastify/dist/ReactToastify.css";
import Toast from "../../../Components/Toast";

export default function SignUp() {
  const [users, handelCheng] = userFromFields({});
  console.log(users);
  const [imgAuth, setImgAuth] = useState();
  const [toast, setToast] = useState({ type: "info", message: "" });
  console.log(toast);
  useEffect(() => {
    (async () => {
      const res = await fetchData("img-auth-backgruonds?populate=*");
      if (res) {
        setImgAuth(res.data[0].attributes);
      }
    })();
  }, []);

  const HandelSignUp = async () => {
    try {
      setToast({ type: "info", message: " " });
      if (users.username && users.email && users.password) {
        const res = await fetchData("auth/local/register", { users });
        console.log(res);
        if (!!res) {
          console.log("ok");
          handelCheng(users)
        }
      } else {
        console.log("not password");
      }
    } catch (error) {
      setToast({ type: "error", message: error.message });
      console.log("no");
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
              imgAuth?.imgSigUp?.data?.attributes?.url
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
              py: 9,
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
              name="username"
              value={users.username}
              onChange={handelCheng}
              sx={{ m: 1, width: "40ch" }}
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              value={users.email}
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
                value={users.password}
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
              onClick={HandelSignUp}
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
            <Toast type={toast.type} message={toast.message} />
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
              Have an account?<Link to={"/auth"}>Login</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
