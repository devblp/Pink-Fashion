import React, { useState ,useEffect} from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
} from "@mui/material";
import fetchData from "../../../Utils/fetchData.js"

export default function BlogCard() {
  const url = import.meta.env.VITE_BASE_URL;
  const [postDt,setPostDt] = useState([])
  
  useEffect(() => {
    (async()=>{
      try {
        const res = await fetchData("posts?populate=*")
        if(res){
          setPostDt(res.data)
          console.log(res);
        }
      } catch (error) {
        console.log(error);
      }
    })()
  }, []);
  return (
    <>
    {postDt?.map((e,index) => (
      <CardActionArea key={index}>
        <Card>
          <CardMedia
            component="img"
            height="140px"
            width='50px'
            image={url + e?.attributes?.image?.data[0]?.attributes?.url}
            alt={e?.attributes?.title}
          />
          <CardContent>
            <Typography gutterBottom variant="p" component="div" fontWeight={600}>
            {e?.attributes?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {e?.attributes?.categories?.data[0]?.attributes?.name}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    ))}
  </>
  );
}
