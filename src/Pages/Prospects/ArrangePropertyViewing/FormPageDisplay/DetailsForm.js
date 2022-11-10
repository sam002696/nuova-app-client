import React from "react";

const DetailsForm = () => {
  return (
    <>
      {/* Move in date */}
      <div>
        <h1 className="text-xl font-semibold leading-6 text-gray-900">
          Your preferred move in date
        </h1>
      </div>

      <div className="my-5">
        <label
          htmlFor="moveindate"
          className="block text-sm font-medium text-gray-700"
        >
          Enter date
        </label>
        <div className="mt-1">
          <input
            type="date"
            name="moveindate"
            id="moveindate"
            className="block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          />
        </div>
      </div>

      {/* Personal Information */}

      <div className=" pt-5">
        <h1 className="text-xl font-semibold leading-6 text-gray-900">
          Personal information
        </h1>
      </div>

      <div className=" grid grid-cols-2 gap-5 pt-5">
        <div className="col-span-1">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="last-name"
              id="last-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="tel"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile
          </label>
          <div className="mt-1">
            <input
              type="tel"
              name="tel"
              id="tel"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-2">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="address"
              id="address"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsForm;
