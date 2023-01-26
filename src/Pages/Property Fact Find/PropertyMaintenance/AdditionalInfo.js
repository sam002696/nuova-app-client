import React from "react";

const AdditionalInfo = ({ register }) => {
  return (
    <>
      <p className=" text-lg text-gray-900 font-semibold ">
        4.g Additional Information
      </p>

      <div className="pt-1">
        <label
          htmlFor="additionalInformation"
          className="block text-sm font-medium text-gray-700"
        >
          Please provide any information which may be unique/helpful to tenants
          and/or the Agent’s maintenance team.
        </label>
        <div className="mt-1">
          <textarea
            id="additionalInformation"
            name="additionalInformation"
            rows={5}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            {...register("propertyMaintenance.additionalInformation")}
            defaultValue={""}
          />
        </div>
      </div>
    </>
  );
};

export default AdditionalInfo;
