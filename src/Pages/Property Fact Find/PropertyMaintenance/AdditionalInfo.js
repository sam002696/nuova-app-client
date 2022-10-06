import React from "react";

const AdditionalInfo = () => {
  return (
    <>
      <p className=" text-lg text-gray-900 font-semibold ">
        4.g Additional Information
      </p>

      <div className="pt-1">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Please provide any information which may be unique/helpful to tenants
          and/or the Agent’s maintenance team.
        </label>
        <div className="mt-1">
          <textarea
            id="description"
            name="description"
            rows={5}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            defaultValue={""}
          />
        </div>
      </div>
    </>
  );
};

export default AdditionalInfo;
