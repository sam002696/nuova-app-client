import React from "react";

const Applicant = () => {
  return (
    <div>
      <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Applying to
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Use a permanent address where you can receive mail.
          </p>
        </div>
        <div className="space-y-6 sm:space-y-5">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Address
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="address"
                id="address"
                autoComplete="given-name"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="Unit Number"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Unit Number
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="number"
                name="Unit Number"
                id="Unit Number"
                autoComplete="family-name"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              City
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                id="city"
                name="city"
                type="text"
                autoComplete="city"
                className="block max-w-lg w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              State
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                id="state"
                name="state"
                type="text"
                autoComplete="state"
                className="block max-w-lg w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor=" Zip Code"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Zip Code
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="number"
                name=" Zip Codes"
                id=" Zip Codes"
                autoComplete="street-address"
                className="block max-w-lg w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="monthly rent"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Monthly Rent
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="number"
                name="monthly rent"
                id="monthly rent"
                autoComplete="address-level2"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="Lease Start Date"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Lease Start Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="date"
                name="Lease Start Date"
                id="Lease Start Date"
                autoComplete="address-level1"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="Lease End Date"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Lease End Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="date"
                name="Lease End Date"
                id="Lease End Date"
                autoComplete="postal-code"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applicant;
