import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import HeaderNavbarTwo from "../../Shared/Header/HeaderNavbar/HeaderNavbarTwo";

const Prospects = () => {
  const [allProspects, setAllProspects] = useState([]);

  useEffect(() => {
    const handleAllProperties = async () => {
      try {
        const res = await axios.get(`http://localhost:5500/api/properties`);
        console.log(res.data);
        setAllProspects(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleAllProperties();
  }, []);
  return (
    <div>
      {/* <Navbar /> */}
      <HeaderNavbarTwo />
      <Banner allProspects={allProspects} />
      <Footer />
    </div>
  );
};

export default Prospects;
