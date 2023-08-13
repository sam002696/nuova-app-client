import React from "react";

import PricingHeader from "../PricingComponents/PricingHeader";
import PricingPlans from "../PricingComponents/PricingPlans";
// import PricingFAQ from "../PricingComponents/PricingFAQ";
import PricingFooter from "../PricingComponents/PricingFooter";
import HeaderNavbar from "../../Shared/Header/HeaderNavbar/HeaderNavbar";
import HeaderNavbarTwo from "../../Shared/Header/HeaderNavbar/HeaderNavbarTwo";
import Footer from "../../Shared/Footer/Footer";

const PricingHome = () => {
  return (
    <div className=" bg-white">
      <HeaderNavbarTwo />
      <PricingPlans />

      {/* <PricingFAQ /> */}
      <Footer />
    </div>
  );
};
export default PricingHome;
