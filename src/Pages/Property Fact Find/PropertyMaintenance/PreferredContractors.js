import React from "react";

const PreferredContractors = ({ register }) => {
  return (
    <>
      <div className="space-y-3">
        <p className=" text-lg text-gray-900 font-semibold ">
          4.c Preferred Contractors
        </p>
        <p className=" text-base text-gray-600 ">
          The Owner must provide the Agent with details of any preferred
          contractors to contact in the first instance and book if they are
          available to respond within a reasonable timescale. If they are
          unavailable to attend, the Agent will revert to its preferred
          contractors.
        </p>
      </div>

      <div className=" grid grid-cols-2 gap-5">
        <div className="col-span-1">
          <label
            htmlFor="contractorName"
            className="block text-sm font-medium text-gray-700"
          >
            1. Contractor name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="contractorName"
              id="contractorName"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.preferredcontractors.contractorOne.contractorName"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="contractorPhone"
            className="block text-sm font-medium text-gray-700"
          >
            Telephone number
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="contractorPhone"
              id="contractorPhone"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.preferredcontractors.contractorOne.contractorPhone"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="contractorTrade"
            className="block text-sm font-medium text-gray-700"
          >
            Trade
          </label>
          <div className="mt-1">
            <input
              type="tel"
              name="contractorTrade"
              id="contractorTrade"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.preferredcontractors.contractorOne.contractorTrade"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="contractorEmail"
              id="contractorEmail"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.preferredcontractors.contractorOne.contractorEmail"
              )}
            />
          </div>
        </div>
      </div>

      <hr className=" border-1 border-gray-400" />

      <div className=" grid grid-cols-2 gap-5">
        <div className="col-span-1">
          <label
            htmlFor="contractorName"
            className="block text-sm font-medium text-gray-700"
          >
            2. Contractor name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="contractorName"
              id="contractorName"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.preferredcontractors.contractorTwo.contractorName"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="contractorPhone"
            className="block text-sm font-medium text-gray-700"
          >
            Telephone number
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="contractorPhone"
              id="contractorPhone"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.preferredcontractors.contractorTwo.contractorPhone"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="contractorTrade"
            className="block text-sm font-medium text-gray-700"
          >
            Trade
          </label>
          <div className="mt-1">
            <input
              type="tel"
              name="contractorTrade"
              id="contractorTrade"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.preferredcontractors.contractorTwo.contractorTrade"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="contractorEmail"
              id="contractorEmail"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.preferredcontractors.contractorTwo.contractorEmail"
              )}
            />
          </div>
        </div>
      </div>

      <hr className=" border-1 border-gray-400" />

      <div className=" grid grid-cols-2 gap-5">
        <div className="col-span-1">
          <label
            htmlFor="contractorName"
            className="block text-sm font-medium text-gray-700"
          >
            3. Contractor name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="contractorName"
              id="contractorName"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.preferredcontractors.contractorThree.contractorName"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="contractorPhone"
            className="block text-sm font-medium text-gray-700"
          >
            Telephone number
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="contractorPhone"
              id="contractorPhone"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.preferredcontractors.contractorThree.contractorPhone"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="contractorTrade"
            className="block text-sm font-medium text-gray-700"
          >
            Trade
          </label>
          <div className="mt-1">
            <input
              type="tel"
              name="contractorTrade"
              id="contractorTrade"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.preferredcontractors.contractorThree.contractorTrade"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="contractorEmail"
              id="contractorEmail"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.preferredcontractors.contractorThree.contractorEmail"
              )}
            />
          </div>
        </div>
      </div>

      <hr className=" border-1 border-gray-400" />

      <div className=" grid grid-cols-2 gap-5">
        <div className="col-span-1">
          <label
            htmlFor="contractorName"
            className="block text-sm font-medium text-gray-700"
          >
            4. Contractor name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="contractorName"
              id="contractorName"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.preferredcontractors.contractorFour.contractorName"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="contractorPhone"
            className="block text-sm font-medium text-gray-700"
          >
            Telephone number
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="contractorPhone"
              id="contractorPhone"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.preferredcontractors.contractorFour.contractorPhone"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="contractorTrade"
            className="block text-sm font-medium text-gray-700"
          >
            Trade
          </label>
          <div className="mt-1">
            <input
              type="tel"
              name="contractorTrade"
              id="contractorTrade"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.preferredcontractors.contractorFour.contractorTrade"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="contractorEmail"
              id="contractorEmail"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.preferredcontractors.contractorFour.contractorEmail"
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreferredContractors;
