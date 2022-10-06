import React from "react";

const Parking = () => {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold leading-6 text-gray-900">
          2.d Parking
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-x-2">
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="comments" className="font-medium text-gray-700">
              Gas central heating
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="offers"
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="offers" className="font-medium text-gray-700">
              White meter heating
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="offers"
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="offers" className="font-medium text-gray-700">
              Electric central heating
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="offers"
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="offers" className="font-medium text-gray-700">
              Under floor heating
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="offers"
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="offers" className="font-medium text-gray-700">
              Double glazing
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="offers"
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="offers" className="font-medium text-gray-700">
              Tumble dryer
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="offers"
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="offers" className="font-medium text-gray-700">
              Dishwasher
            </label>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-3 gap-5 pt-5">
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Permit supplied by
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Space number
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            No. of permits per property
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Space location
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Entry Code
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-900 ">
            Remote/Fob required
          </label>
          <select
            id="smoker"
            name="smoker"
            autoComplete="smoker"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          >
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Supplied by
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Parking;
