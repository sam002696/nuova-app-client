import React from "react";
import Alarm from "./Alarm";
import Factoring from "./Factoring";
import FeaturesAppliances from "./FeaturesAppliances";
import HMOLicence from "./HMOLicence";
import Insurance from "./Insurance";
import Keys from "./Keys";
import OtherServices from "./OtherServices";
import Parking from "./Parking";
import PropertyType from "./PropertyType";
import Rooms from "./Rooms";
import UtilitySuppliers from "./UtilitySuppliers";

const PropertyDetails = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="pt-5">
          <p className=" text-lg text-white font-semibold bg-gray-500 pl-1">
            Section 2: Property Details
          </p>
        </div>

        {/* Property Type */}

        <PropertyType />

        <hr className=" border-1 border-gray-400" />

        {/* Rooms */}

        <Rooms />

        <hr className=" border-1 border-gray-400" />

        {/* Features and Appliances */}

        <FeaturesAppliances />

        <hr className=" border-1 border-gray-400" />

        {/* Parking */}

        <Parking />

        <hr className=" border-1 border-gray-400" />

        {/* Keys */}

        <Keys />

        <hr className=" border-1 border-gray-400" />

        {/*Alarm */}

        <Alarm />

        <hr className=" border-1 border-gray-400" />

        {/*Factoring */}

        <Factoring />

        <hr className=" border-1 border-gray-400" />

        <OtherServices />

        <UtilitySuppliers />

        <hr className=" border-1 border-gray-400" />

        <Insurance />

        <hr className=" border-1 border-gray-400" />

        <HMOLicence />

        <hr className=" border-1 border-gray-400" />
      </div>
    </>
  );
};

export default PropertyDetails;
