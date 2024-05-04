import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled, alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Fragment } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    background: "#FFAFCF",
    borderRadius: 100,
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(1)})`,
      paddingRight: `calc(1em + ${theme.spacing(3)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

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
                    <Link to={"/"}>Home</Link>
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
                    <Link to={"/products/:detailId/:detailName"}>Shop</Link>
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
                    Abous us
                  </Button>
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
                    Contact
                  </Button>
                </Box>
                <Box>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search..."
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
        </Fragment>
      )}
    </PopupState>
  );
}
