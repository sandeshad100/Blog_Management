import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const BlogView = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Typography variant="h3" sx={{ pt: 3, pb: 2, textAlign: "center" }}>
        How to blog
      </Typography>

      {/* <img src={blog.image} style={{ width: "100%", height: "500px" }} /> */}
      <Typography sx={{ pt: 3, pb: 2 }}>sandesh adhikari</Typography>
      <Divider />
      <Typography sx={{ pt: 3 }}>dfdfdfdfdfd ddjf </Typography>
    </Box>
  );
};

export default BlogView;
