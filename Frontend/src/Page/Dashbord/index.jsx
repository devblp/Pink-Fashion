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
import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Sore/Slices/Auth';

export default function Dashbord() {
  
  const dispach = useDispatch()
  return (
    <Box sx={{bgcolor:"#202020",height:"100vh"}}>
      <Grid container xs={12}>
        <Grid container xs={2} sx={{flexDirection:"column",p:"60px",gap:10}}>
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
              <Link to={"/"} style={{color:"white"}} ><SearchIcon /></Link>
              </IconButton>
              <IconButton sx={{color:"primary.ws"}}>
              <Link to={"/"} style={{color:"white"}} ><NotificationsIcon/></Link>
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
          <Grid container xs={9} sx={{bgcolor:"black", height:"80vh" ,width:"151vh", borderRadius:"30px",my:"10px"}}>
            <Box >

            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
