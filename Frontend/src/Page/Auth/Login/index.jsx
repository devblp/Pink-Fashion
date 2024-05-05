import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import React from "react";
import userFromFields from "../../../Utils/useFromFields";

export default function Login() {
  const [users, handelCheng,handleSubmit] = userFromFields();
  
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography>username: </Typography>
      <TextField
          id=""
          label="text"
          type="text"
          name="userName"
          onChange={handelCheng}
        />
        <TextField
          id=""
          label="Password"
          type="password"
          name="password"
          onChange={handelCheng}
        />
        <Button type="submit">submit</Button>
    </Box>
  );
}
