import React from "react";

const Keys = ({ register }) => {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold leading-6 text-gray-900">
          2.e Keys
        </h1>
        <p className="text-base pt-3 text-gray-600">
          Nuova requires a set of keys for each tenant, plan an additional two
          set of keys for office use.
        </p>
      </div>
      <div className=" grid grid-cols-3 gap-5 pt-5">
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            No. of key sets provided
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.keys.keySetsProvided")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            No. of key sets to be cut by Nuova System
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.keys.keySetsCut")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            No. of keys making up a set to gain access
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.keys.keySetsMakeUp")}
            />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Additional keys supplied (e.g. garage, bike shed)
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.keys.additionalKeys")}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Details for requesting any security key replacements
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.keys.securityKeyReplacement")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Keys;
