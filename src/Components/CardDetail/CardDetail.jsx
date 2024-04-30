import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import React from "react";

export default function CardDetail({name,img}) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 , borderRadius:"10px", boxShadow:"0px 3px 10px 1px" ,p:"20px"}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="240px"
          image={`https://${img}`}
          sx={{ borderRadius:"10px"}}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: "Acme" }}
          >
            {name}
          </Typography>
          <Typography
            gutterBottom
            component="div"
            sx={{ fontFamily: "Acme",fontSize:"12px", color: "text.secondary" }}
          >
            Al Karam
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            sx={{ fontFamily: "Acme", fontWeight: 600 }}
          >
            (4.1k) Customer Reviews
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
        >
          <Typography gutterBottom sx={{ fontFamily: "Acme" }}>
            $95.50
          </Typography>
          <Button
            variant="contained"

            sx={{
              bgcolor: "#FFAFCF",
              borderRadius: 5,
              color: "black",
              "&:hover": { bgcolor: "#FFAFCF" },
              fontFamily: "Acme",
              fontSize:"10px"
            }}
          >
            Buy
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
