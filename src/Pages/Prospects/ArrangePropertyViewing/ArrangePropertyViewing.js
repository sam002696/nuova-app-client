import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import PropertyViewingForm from "./PropertyViewingForm";

const ArrangePropertyViewing = () => {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <PropertyViewingForm id={id} />
    </>
  );
};

export default ArrangePropertyViewing;
