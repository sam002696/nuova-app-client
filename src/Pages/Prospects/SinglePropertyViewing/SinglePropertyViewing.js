import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SinglePropertyDetails from "./SinglePropertyDetails";
import HeaderNavbarTwo from "../../Shared/Header/HeaderNavbar/HeaderNavbarTwo";

const SinglePropertyViewing = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HeaderNavbarTwo />
      <SinglePropertyDetails />
      <Footer />
    </div>
  );
};

export default SinglePropertyViewing;
