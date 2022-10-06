import React from "react";
import Agent from "./Agent";
import OwnerOne from "./OwnerOne";
import OwnerTwo from "./OwnerTwo";

const Engagement = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="pt-5 ">
          <p className=" text-lg text-white font-semibold bg-gray-500 pl-1 mb-3">
            Section 6: Engagement of Nuova System
          </p>
          <p className=" text-base text-gray-900 pt-3">
            You have instructed us to act as agent on your behalf to provide
            letting and property management services in connection with the
            Property noted under Section 1. Other information, including details
            of our fees and charges, are contained in our Letting and Property
            Management Agreement which will form the basis of our legal
            relationship with you.
          </p>
          <p className=" text-base text-gray-900 pt-5">
            By signing this form, you confirm that all information provided in
            the preceding pages is true and accurate as far as you are aware.
          </p>
        </div>

        <OwnerOne />

        <hr className=" border-1 border-gray-400" />

        <OwnerTwo />

        <hr className=" border-1 border-gray-400" />

        <Agent />
      </div>
    </>
  );
};

export default Engagement;
