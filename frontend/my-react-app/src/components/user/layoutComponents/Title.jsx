import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Title = (props) => {
  const title = "BlogLine";
  return (
    <Link to={""} style={{ textDecoration: "none" }}>
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flex: 1, textDecoration: "none" }}
      >
        {title}
      </Typography>
    </Link>
  );
};

export default Title;
