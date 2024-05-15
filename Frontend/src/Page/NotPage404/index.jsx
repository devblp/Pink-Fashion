import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotPage404() {
  return (
    <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",py:10,gap:2}}>
      <Typography variant="h1" fontSize={"300px"} fontWeight={500}>404</Typography>
      <Typography variant="h2" fontWeight={300} fontSize={"50px"}>Page not found</Typography>
      <Typography>Oops! The page you are looking for does not exist. it might have been moved or delete.</Typography>
      <Button><Link to={"/"}>BACK TO HOME</Link></Button>
    </Box>
  )
}
