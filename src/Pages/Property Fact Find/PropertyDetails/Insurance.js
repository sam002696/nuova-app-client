import React from "react";

const Insurance = ({ register }) => {
  return (
    <>
      <div className="space-y-4">
        <h1 className="text-xl font-semibold leading-6 text-gray-900">
          2.j Insurance
        </h1>
        <p className="text-base leading-6 text-gray-900">
          The owner(s) have independently arranged for comprehensive landlord’s
          building and contents insurance as below.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 pt-2 bg-gray-200 px-2 py-3">
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Buildings insured with
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.insurance.buildings.insuredWith")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Excess amount
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.insurance.buildings.excessAmount")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Policy number
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.insurance.buildings.policyNumber")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Expiry date
          </label>
          <div className="mt-1">
            <input
              type="date"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.insurance.buildings.expiryDate")}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 pt-2 bg-gray-200 px-2 py-3 ">
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Contents insured with
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.insurance.contents.insuredWith")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Excess amount
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.insurance.contents.excessAmount")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Policy number
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.insurance.contents.policyNumber")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Expiry date
          </label>
          <div className="mt-1">
            <input
              type="date"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.insurance.contents.expiryDate")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Insurance;
