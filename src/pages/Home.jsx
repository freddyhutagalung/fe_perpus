import React from "react";
import { Navbar } from "../componets/Navbar/Navbar";
import { Carousel } from "../componets/Carousel/Carousel";
import Foot from "../componets/Foot/Foot";
import NavLogin from "../componets/NavLogin/NavLogin";

const Home = () => {
  const login = localStorage.getItem("token");
  return (
    <div>
      {!login ? <Navbar /> : <NavLogin />}
      <Carousel />
      <Foot />
    </div>
  );
};

export default Home;
