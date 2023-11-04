import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Link to={"login"}>
      <Button variant="outlined" size="small">
        Login
      </Button>
    </Link>
  );
};

export default SignUp;
