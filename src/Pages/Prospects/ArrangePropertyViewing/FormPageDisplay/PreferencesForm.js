import React from "react";

const PreferencesForm = () => {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold leading-6 text-gray-900 pb-5">
          Your preferences
        </h1>
      </div>

      <div className=" grid grid-cols-2 gap-5 pt-5">
        <div className="col-span-1">
          <label
            htmlFor="Max Rent"
            className="block text-sm font-medium text-gray-700"
          >
            Max Rent
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="Max Rent"
              id="Max Rent"
              defaultValue="6000"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="Max Beds"
            className="block text-sm font-medium text-gray-700"
          >
            Max Beds
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="Max Beds"
              id="Max Beds"
              defaultValue="3"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-900 ">
            Your Preference
          </label>
          <select
            id="preference"
            name="preference"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          >
            <option>Select</option>
            <option>Furnished</option>
            <option>Pets Allowed</option>
          </select>
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-900 ">
            Parking
          </label>
          <select
            id="preference"
            name="preference"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          >
            <option>Select</option>
            <option>Unspecified</option>
            <option>Off Street</option>
            <option>On Street</option>
            <option>Residents Parking</option>
            <option>Underground Parking</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default PreferencesForm;
