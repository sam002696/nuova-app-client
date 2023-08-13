import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import PropertyViewingForm from "./PropertyViewingForm";
import HeaderNavbarTwo from "../../Shared/Header/HeaderNavbar/HeaderNavbarTwo";

const ArrangePropertyViewing = () => {
  const { id } = useParams();
  return (
    <>
      {/* <Navbar /> */}
      <HeaderNavbarTwo />
      <PropertyViewingForm id={id} />
    </>
  );
};

export default ArrangePropertyViewing;
