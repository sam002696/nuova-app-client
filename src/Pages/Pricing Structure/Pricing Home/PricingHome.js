import React from "react";

import PricingHeader from "../PricingComponents/PricingHeader";
import PricingPlans from "../PricingComponents/PricingPlans";
import PricingFAQ from "../PricingComponents/PricingFAQ";
import PricingFooter from "../PricingComponents/PricingFooter";

const PricingHome = () => {
  return (
    <div className=" bg-white">
      <PricingHeader />
      <PricingPlans />

      <PricingFAQ />
      <PricingFooter />
    </div>
  );
};
export default PricingHome;
