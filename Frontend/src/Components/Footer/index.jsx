import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <>
      <Grid
        container
        xs={12}
        sx={{ bgcolor: "#F5F4F4", height: 400, justifyContent: "center" }}
      >
        <Grid
          container
          xs={12}
          sx={{
            gap: isSmallScreen ? 3 : 3,
            height: 280,
            py: 10,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Grid xs={2}>
            <Typography
              fontSize={"17px"}
              fontWeight={600}
              p={"0px 0px 20px 0px"}
            >
              Acount
            </Typography>
            <Box>
              <Typography fontSize={13} py={"3px"}>
                <Link className="links-footer">Log In</Link>
              </Typography>
              <Typography fontSize={13} py={"3px"}>
                <Link className="links-footer">Sign Up</Link>
              </Typography>
              <Typography fontSize={13} py={"3px"}>
                <Link className="links-footer">Redeem a Gift Card</Link>
              </Typography>
            </Box>
          </Grid>
          <Grid xs={2}>
            <Typography
              fontSize={"17px"}
              fontWeight={600}
              p={"0px 0px 20px 0px"}
            >
              Company
            </Typography>
            <Box>
              <Typography fontSize={13} py={"3px"}>
                <Link className="links-footer">About</Link>
              </Typography>
              <Typography fontSize={13} py={"3px"}>
                <Link className="links-footer">Environmental Initiatives</Link>
              </Typography>
              <Typography fontSize={13} py={"3px"}>
                <Link className="links-footer">Factories</Link>
              </Typography>
              <Typography fontSize={13} py={"3px"}>
                <Link className="links-footer">DEI</Link>
              </Typography>
              <Typography fontSize={13} py={"3px"}>
                <Link className="links-footer">Careers</Link>
              </Typography>
              <Typography fontSize={13} py={"3px"}>
                <Link className="links-footer">International</Link>
              </Typography>
              <Typography fontSize={13} py={"3px"}>
                <Link className="links-footer">Accessibility</Link>
              </Typography>
            </Box>
          </Grid>
          <Grid xs={2}>
            <Typography
              fontSize={"17px"}
              fontWeight={600}
              p={"0px 0px 20px 0px"}
            >
              Get Help
            </Typography>
            <Box>
              <Typography fontSize={13} py={"3px"}>
                <Link className="links-footer">Help Center</Link>
              </Typography>
              <Typography fontSize={13} py={"3px"}>
                <Link className="links-footer">Return Policy</Link>
              </Typography>
              <Typography fontSize={13} py={"3px"}>
                <Link className="links-footer">Shipping Info</Link>
              </Typography>
              <Typography fontSize={13} py={"3px"}>
                <Link className="links-footer">Bulk Orders</Link>
              </Typography>
            </Box>
          </Grid>
          <Grid xs={2}>
            <Typography
              fontSize={"17px"}
              fontWeight={600}
              p={"0px 0px 20px 0px"}
            >
              Connect
            </Typography>
            <Box>
              <Typography fontSize={13} py={"3px"}>
                <Link className="links-footer">Facebook</Link>
              </Typography>
              <Typography fontSize={13} py={"3px"}>
                <Link className="links-footer">Instagram</Link>
              </Typography>
              <Typography fontSize={13} py={"3px"}>
                <Link className="links-footer">Twitter</Link>
              </Typography>
              <Typography fontSize={13} py={"3px"}>
                <Link className="links-footer">Affiliates</Link>
              </Typography>
              <Typography fontSize={13} py={"3px"}>
                <Link className="links-footer">Out Stores</Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          sx={{
            height: 80,
            p: "50px 0px 0px 0px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            xs={12}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Typography fontSize={13} px={1}>
              <Link className="links-footer">Privacy Policy</Link>
            </Typography>
            <Typography fontSize={13} px={1}>
              <Link className="links-footer">Terms of Service</Link>
            </Typography>
            <Typography fontSize={13} px={1}>
              <Link className="links-footer">
                Do Not Sell or Share My Personal Information
              </Link>
            </Typography>
            <Typography fontSize={13} px={1}>
              <Link className="links-footer">CS Supply Chain Transparency</Link>
            </Typography>
            <Typography fontSize={13} px={1}>
              <Link className="links-footer">Vendor Code of Conduct</Link>
            </Typography>
            <Typography fontSize={13} px={1}>
              <Link className="links-footer">Sitemap Pages</Link>
            </Typography>
            <Typography fontSize={13} px={1}>
              <Link className="links-footer">Sitemap Products</Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={10} sx={{ justifyContent: "center" ,m: "50px 0px 0px 0px"}}>
          <Typography textAlign={"center"}>
            © 2024 All Rights BlP
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
