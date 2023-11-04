import React from "react";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
import Blog from "../../components/user/Blog";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Blog />
    </div>
  );
};

export default Home;
