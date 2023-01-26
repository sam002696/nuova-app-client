import React from "react";

const OtherServices = ({ register }) => {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold leading-6 text-gray-900">
          2.h Other Services
        </h1>
        <div className=" grid grid-cols-2 gap-5 pt-5">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-900 ">
              Is a stair cleaning agreement in place?
            </label>
            <select
              id="smoker"
              name="smoker"
              autoComplete="smoker"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyDetails.otherServices.stairCleaningAgreement.place"
              )}
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
              Provider / Factor
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register(
                  "propertyDetails.otherServices.stairCleaningAgreement.provider"
                )}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-900 ">
              Is a garden maintenance contract in place?
            </label>
            <select
              id="smoker"
              name="smoker"
              autoComplete="smoker"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyDetails.otherServices.gardenMaintenanceContract.place"
              )}
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
              Provider / Factor
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register(
                  "propertyDetails.otherServices.gardenMaintenanceContract.provider"
                )}
              />
            </div>
          </div>
        </div>
        <hr className=" border-1 border-gray-400  my-8" />

        <div className="space-y-3">
          <div className="">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Other (please specify)
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                rows={3}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                defaultValue={""}
                {...register("propertyDetails.otherServices.other")}
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Location of mains water shut-off valve
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                rows={3}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                defaultValue={""}
                {...register(
                  "propertyDetails.otherServices.mainsWaterLocation"
                )}
              />
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-2 gap-5 pt-8">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-900 ">
              Does the property have a phone line and broadband installed?
            </label>
            <select
              id="smoker"
              name="smoker"
              autoComplete="smoker"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.otherServices.phoneLineBroadband")}
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
              If yes, who is the provider?
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register(
                  "propertyDetails.otherServices.phoneLineBroadbandProvider"
                )}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-900 ">
              Does the property have a cable or satellite installation?
            </label>
            <select
              id="smoker"
              name="smoker"
              autoComplete="smoker"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.otherServices.cableSatellite")}
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
              If yes, who is the provider?
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register(
                  "propertyDetails.otherServices.cableSatelliteProvider"
                )}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-900 ">
              Mains Wired Smoke Detection – Legal Requirement
            </label>
            <select
              id="smoker"
              name="smoker"
              autoComplete="smoker"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.otherServices.mainWiredSmoke")}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherServices;
