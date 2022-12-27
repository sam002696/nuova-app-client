import React from "react";
import Footer from "../../Shared/Footer/Footer";
import HeaderNavbar from "../../Shared/Header/HeaderNavbar/HeaderNavbarTwo";
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import Pros from "../Pros/Pros";

const Home = () => {
  return (
    <>
      <HeaderNavbar />
      <Banner />
      <Benefits />
      <Pros />
      <Footer />
    </>
  );
};

export default Home;
