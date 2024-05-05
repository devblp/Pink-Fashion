import { Button, Box, MenuItem, Menu, Typography, Toolbar, AppBar, Avatar } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Fragment } from "react";
import "./style.css";
import {useNavigate, Link } from "react-router-dom";
import {useSelector} from "react-redux"

export default function Footer() {
  const {token} = useSelector(state=>state.auth)
  const navigate = useNavigate()
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(PopupState) => (
        <Fragment>
          <Box>
            <AppBar
              position="static"
              sx={{
                backgroundColor: "#1F1F1F",
                boxShadow: "none",
                padding: 2,
              }}
            >
              <Toolbar
                sx={{
                  boxShadow: "none",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                    logo
                  </Typography>
                </Box>
                <Box sx={{ display: "flex",background:"#323232d7", borderRadius:18, padding:"0px 50px 0px 50px" }}>
                  <Button
                    disableRipple
                    sx={{
                      my: 2,
                      margin:0,
                      padding:2,
                      color: "white",
                      display: "block",
                      ":hover": { color: "#FFAFCF",backgroundColor:"rgba(0, 0, 0, 0)", },
                    }}
                  >
                    <Link className="link-navbar" to={"/"}>Home</Link>
                  </Button>
                  <Button
                    disableRipple
                    sx={{
                      my: 2,
                      margin:0,
                      padding:2,
                      color: "white",
                      display: "block",
                      ":hover": {
                        color: "#FFAFCF",
                        backgroundColor:"rgba(0, 0, 0, 0)",
                      },
                    }}
                    {...bindTrigger(PopupState)}
                  >
                    <Link className="link-navbar" to={"/products/:detailId/:detailName"}>Shop</Link>
                  </Button>
                  <Menu {...bindMenu(PopupState)}>
                    <MenuItem
                      onClick={PopupState.close}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem  onClick={PopupState.close}>My account</MenuItem>
                    <MenuItem onClick={PopupState.close}>Logout</MenuItem>
                    <MenuItem onClick={PopupState.close}>Logout</MenuItem>
                    <MenuItem onClick={PopupState.close}>Logout</MenuItem>
                    <MenuItem onClick={PopupState.close}>Logout</MenuItem>
                    <MenuItem onClick={PopupState.close}>Logout</MenuItem>
                    <MenuItem onClick={PopupState.close}>Logout</MenuItem>
                    <MenuItem onClick={PopupState.close}>Logout</MenuItem>
                    <MenuItem onClick={PopupState.close}>Logout</MenuItem>
                    <MenuItem onClick={PopupState.close}>Logout</MenuItem>
                  </Menu>
                  <Button
                    disableRipple
                    sx={{
                      my: 2,
                      margin:0,
                      padding:2,
                      color: "white",
                      display: "block",
                      ":hover": { color: "#FFAFCF",backgroundColor:"rgba(0, 0, 0, 0)", },
                    }}
                  >
                    <Link className="link-navbar" to={"/abaut"}>Abous us</Link>
                  </Button>
                  <Button
                    disableRipple
                    sx={{
                      my: 2,
                      margin:0,
                      padding:2,
                      color: "white",
                      display: "block",
                      ":hover": { color: "#F9C7DB",backgroundColor:"rgba(0, 0, 0, 0)", },
                    }}
                  >
                    <Link className="link-navbar" to={"/products/:detailId/:detailName"}>Contact</Link>
                  </Button>
                </Box>
                <Box  sx={{backgroundColor:"#323232d7",width:"200px",height:"44px",borderRadius:"20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Avatar/>
                    <Button onClick={()=>token?navigate("/dashbord"):navigate("/auth")} disableRipple sx={{color: "white",":hover": { color: "#F9C7DB",backgroundColor:"rgba(0, 0, 0, 0)", },}}><Typography sx={{px:"20px",fontSize:"13px"}}>{token?null:"Login / LogOut"}</Typography></Button>
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
        </Fragment>
      )}
    </PopupState>
  );
}
