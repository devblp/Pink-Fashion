import { Avatar, Box, Button, IconButton, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ArticleIcon from '@mui/icons-material/Article';
import WorkIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Sore/Slices/Auth';
import fetchData from '../../Utils/fetchData';

export default function Dashbord() {
  const {user,token} = useSelector((state) => state.auth)
  const [us,setUs] = useState()
console.log(user);
console.log(us);
useEffect(()=>{
  (async()=>{
    try {
      const res = await fetchData("users")
      setUs(res)
    } catch (error) {
      
    }
  })()
},[])
console.log(token);
  const dispach = useDispatch()
  return (
    <Box sx={{bgcolor:"#202020",height:"100%"}}>
      <Grid container xs={12}>
        <Grid container xs={2} sx={{flexDirection:"column",p:"47.8px",gap:10}}>
          <Grid xs={12}>
            <Avatar/>
            <IconButton>

            </IconButton>
          </Grid>
          <Grid container xs={12} sx={{gap:3}}>
            <Link to={""} ><Button startIcon={<StorefrontIcon/>} sx={{color:"primary.ws", ":hover":{color:"primary.main"}, p:"5px 30px 5px 10px"}}>Market</Button></Link>
            <Link to={""}><Button startIcon={<SpaceDashboardIcon/>} sx={{color:"primary.ws", ":hover":{color:"primary.main"}, p:"5px 30px 5px 10px"}}>Dashboard</Button></Link>
            <Link to={""}><Button startIcon={<WorkIcon/>} sx={{color:"primary.ws", ":hover":{color:"primary.main"}, p:"5px 30px 5px 10px"}}>Portfollo</Button></Link>
            <Link to={""}><Button startIcon={<ArticleIcon/> } sx={{color:"primary.ws", ":hover":{color:"primary.main"}, p:"5px 30px 5px 10px"}}>News</Button></Link>
            <Link to={""}><Button startIcon={<SettingsIcon/>} sx={{color:"primary.ws", ":hover":{color:"primary.main"}, p:"5px 30px 5px 10px"}}>Settings</Button></Link>
          </Grid>
          <Grid  xs={12}>
            <Grid xs={12}>
              <Box sx={{bgcolor:"primary.main", width:189, height:212, borderRadius:5,textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}>
                <Typography sx={{fontWeight:500,fontSize:20}}>Investing tips</Typography>
                <Typography>Unlucking thr sexrets to suocful in panels</Typography>
                <Button sx={{bgcolor:"primary.bk",width:"130px",color:"primary.ws",":hover":{bgcolor:"primary.bk"}}}>Get PRO Plan</Button>
              </Box>
            </Grid>
            <Grid xs={12}><Typography></Typography></Grid>
            <Box
              sx={{ width: "19ch", py:2, borderBottom: 1 }}
            />
            <Grid container  xs={12} sx={{color:"primary.ws",alignItems:"center",justifyContent:"space-between",py:1}}>
                <Typography >log out</Typography>
                <IconButton sx={{color:"primary.ws"}} onClick={()=>dispach(logout())} >
                  <LogoutIcon/>
                </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={10}>
          <Grid container xs={3} justifyContent={"space-between"} py={4}>
            <Grid xs={6} color={"primary.ws"} p={"0px 0px 0px 30px"}>
            <Typography>Hello Sina</Typography>
            <Typography color={"primary.main"} fontSize={"20px"} fontWeight={500}>Good Morning</Typography>
            </Grid>
            <Grid container xs={6} alignItems={"center"} p={"0px 90px 0px 0px"} color={"primary.ws"} >
              <IconButton sx={{color:"primary.ws"}}>
              <Link  style={{color:"white"}} ><SearchIcon /></Link>
              </IconButton>
              <IconButton sx={{color:"primary.ws"}}>
              <Link  style={{color:"white"}} ><NotificationsIcon/></Link>
              </IconButton>
              <IconButton >
                <Link to={"/"} style={{color:"white"}} ><HomeIcon/></Link>
              </IconButton>
              <Box sx={{display:"flex",alignItems:"center",bgcolor:"#565656",borderRadius:"30px", height:40}}>
                <Avatar/>
                <Typography px={1}>test</Typography>
                <IconButton sx={{color:"primary.ws"}} >
                  <ExpandMoreIcon/>
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          <Grid container xs={9} sx={{bgcolor:"black", height:"700px" ,width:"95%", borderRadius:"30px",my:"10px"}}>
            <Box >

            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}


// import React, { useState } from "react";
// import { Box, Button, Typography, Avatar, useMediaQuery } from "@mui/material";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";


// const videoSlider = ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4"];
// const imageSlider = ["image1.png", "image2.png", "image3.png", "image4.png"];

// export default function Slider() {
//   const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

//   const [video, setVideo] = useState([false, false, false, false]);

//   const toggleVideo = (index) => {
//     const updatedVideo = [...video];
//     updatedVideo[index] = !updatedVideo[index];
//     setVideo(updatedVideo);
//   };

//   const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">0' + (index + 1) + "</span>";
//     },
//   };

//   const slideContent = (index) => (
//     <Box sx={{ position: "relative", height: "100%" }}>
//       {video[index] ? (
//         <Box>
//           <video autoPlay loop muted src={videoSlider[index]}></video>
//           <Button
//             onClick={() => toggleVideo(index)}
//             sx={{
//               color: "white",
//               position: "absolute",
//               bottom: "30px",
//               left: "30px",
//               ":hover": {
//                 background: "rgba(0, 0, 0, 0)",
//               },
//             }}
//           >
//             Watch a Video
//             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//               <PlayArrowIcon
//                 sx={{
//                   width: "50px",
//                   height: "50px",
//                   backgroundColor: "#323232d7",
//                   borderRadius: "100px",
//                   ml: "20px",
//                   boxShadow: "0px 0px 20px 0px #FFAFCF",
//                 }}
//               />
//             </motion.div>
//           </Button>
//         </Box>
//       ) : (
//         <Box>
//           <motion.div
//             initial={{ opacity: 0, x: -1500 }}
//             animate={{ opacity: 1, x: 1 }}
//             transition={{ duration: 0.7 }}
//           >
//             <Typography
//               sx={{
//                 position: "absolute",
//                 right: isSmallScreen ? "50%" : "50%",
//                 top: "130px",
//                 transform: "translateX(50%)",
//                 fontFamily: "zen tokyo zoo",
//                 fontSize: isSmallScreen ? "100px" : "280px",
//               }}
//             >
//               FASHION
//             </Typography>
//             <Typography
//               sx={{
//                 position: "absolute",
//                 right: isSmallScreen ? "10%" : "10%",
//                 top: "450px",
//                 fontFamily: "'MaisonNeueBook', sans-serif",
//                 fontSize: isSmallScreen ? "16px" : "32px",
//               }}
//             >
//               Discover and Buy
//             </Typography>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 2000 }}
//             animate={{ opacity: 1, y: 620 }}
//             transition={{ duration: 0.7 }}
//           >
//             <Avatar
//               sx={{
//                 width: isSmallScreen ? 300 : 559,
//                 height: isSmallScreen ? 300 : 597,
//                 borderRadius: 0,
//                 position: "absolute",
//                 right: "50%",
//                 transform: "translateX(50%)",
//                 bottom: 0,
//               }}
//               src={imageSlider[index]}
//             />
//           </motion.div>
//           <Button
//             onClick={() => toggleVideo(index)}
//             sx={{
//               color: "white",
//               position: "absolute",
//               bottom: "30px",
//               left: "30px",
//               ":hover": {
//                 background: "rgba(0, 0, 0, 0)",
//               },
//             }}
//           >
//             Watch a Video
//             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//               <PlayArrowIcon
//                 sx={{
//                   width: "50px",
//                   height: "50px",
//                   backgroundColor: "#323232d7",
//                   borderRadius: "100px",
//                   ml: "20px",
//                   boxShadow: "0px 0px 20px 0px #FFAFCF",
//                 }}
//               />
//             </motion.div>
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );

//   return (
//     <Swiper
//       pagination={pagination}
//       modules={[Pagination]}
//       height={"1440px"}
//       className="slider-swiper"
//     >
//       {videoSlider.map((_, index) => (
//         <SwiperSlide key={index} className={`swiper-slide${index + 1}`}>
//           {slideContent(index)}
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }