import React from "react";

const ServiceContractors = ({ register }) => {
  return (
    <>
      <p className=" text-lg text-gray-900 font-semibold ">
        4.d Service Contracts
      </p>

      <div className=" grid grid-cols-2 gap-5">
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-900 ">
            Does the Property have a Homecare, or similar, service agreement?
          </label>
          <select
            id="serviceAgreement"
            name="serviceAgreement"
            autoComplete="serviceAgreement"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            {...register(
              "propertyMaintenance.serviceContracts.serviceAgreement"
            )}
          >
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="provider"
            className="block text-sm font-medium text-gray-700"
          >
            If yes, provider
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="provider"
              id="provider"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.serviceContracts.provider")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="typeOfCover"
            className="block text-sm font-medium text-gray-700"
          >
            Type of cover (e.g. Homecare 100)
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="typeOfCover"
              id="typeOfCover"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.serviceContracts.typeOfCover")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="accountNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Account number / Policy number
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="accountNumber"
              id="accountNumber"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.serviceContracts.accountNumber"
              )}
            />
          </div>
        </div>
        <div className="col-span-2">
          <label
            htmlFor="contactTelSuppliedBy"
            className="block text-sm font-medium text-gray-700"
          >
            Contact telephone number Supplied by
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="contactTelSuppliedBy"
              id="contactTelSuppliedBy"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.serviceContracts.contactTelSuppliedBy"
              )}
            />
          </div>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-900 ">
            Does your agreement include the provision of an annual gas safety
            inspection?
          </label>
          <select
            id="annualGasSafetyInspection"
            name="annualGasSafetyInspection"
            autoComplete="annualGasSafetyInspection"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            {...register(
              "propertyMaintenance.serviceContracts.annualGasSafetyInspection"
            )}
          >
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>

      <p className=" text-base text-gray-600 leading-6 ">
        Please provide a copy of your service agreement with this application.
        The Agent is unable to act on the Owner’s behalf in respect to service
        contracts without this. The Agent can also not operate with service
        contracts that require an excess payment to be made prior to any
        callout.
      </p>
    </>
  );
};

export default ServiceContractors;
