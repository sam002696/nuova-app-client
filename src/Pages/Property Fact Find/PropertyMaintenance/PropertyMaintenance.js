import React from "react";
import AdditionalInfo from "./AdditionalInfo";
import ContactDetails from "./ContactDetails";
import PreferredContractors from "./PreferredContractors";
import SafetyCertificates from "./SafetyCertificates";
import ServiceContractors from "./ServiceContractors";
import Warranties from "./Warranties";

const PropertyMaintenance = ({ register }) => {
  return (
    <>
      <div className="space-y-6">
        <div className="pt-5">
          <p className=" text-lg text-white font-semibold bg-gray-500 pl-1">
            Section 4: Property Maintenance
          </p>
        </div>
        {/* Approved repair limit */}

        <div>
          <p className=" text-lg text-gray-900 font-semibold pb-2">
            4.a Approved Repair Limit (&#163;)
          </p>
          <div className="mt-1">
            <input
              type="number"
              name="project-name"
              id="project-name"
              className="block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>

        <hr className=" border-1 border-gray-400" />

        <ContactDetails register={register} />

        <hr className=" border-1 border-gray-400" />

        <PreferredContractors register={register} />

        <ServiceContractors register={register} />

        <hr className=" border-1 border-gray-400" />

        <SafetyCertificates register={register} />

        <hr className=" border-1 border-gray-400" />

        <Warranties register={register} />

        <hr className=" border-1 border-gray-400" />

        <AdditionalInfo register={register} />
      </div>
    </>
  );
};

export default PropertyMaintenance;
