import React from "react";

const StageOne = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold leading-6 text-cyan-700 pb-6 tracking-wide">
          Dear Applicant,
        </h1>
        <h1 className="text-xl font-semibold leading-6 text-gray-900 pb-6">
          Thank you for you interest in renting with Nuova
        </h1>
        <h1 className="text-xl font-semibold leading-6 text-gray-900 pb-6">
          Before you proceed, please make sure you have the following :
        </h1>
        <ul className=" text-lg text-white font-semibold bg-gray-500 pl-1 py-2">
          <li> Photographic ID (driving license, passport)</li>
          <li> credit check per tenant</li>
          <li> months most recent bank statements</li>
          <li> most recent pay slips</li>
        </ul>
      </div>
    </div>
  );
};

export default StageOne;
