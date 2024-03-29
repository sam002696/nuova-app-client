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
        <ul className=" text-md text-white font-semibold bg-gray-500 px-4 py-4">
          <li>
            {" "}
            1 Photographic ID (driving license, passport,National Insurance
            Number)
          </li>
          <li>1 credit check per tenant</li>
          <li>3 months most recent bank statements per tenant</li>
          <li>
            3 most recent pay slips per tenant or an altenative demonstrating
            proof of affordability
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StageOne;
