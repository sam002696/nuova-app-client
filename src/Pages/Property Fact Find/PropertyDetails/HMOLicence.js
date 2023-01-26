import React from "react";

const HMOLicence = ({ register }) => {
  return (
    <>
      <h1 className="text-xl font-semibold leading-6 text-gray-900">
        2.k HMO Licence
        <div className=" grid grid-cols-3 gap-5 pt-4">
          <div className="col-span-1">
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              Does the Property have an HMO licence?
            </label>
            <select
              id="smoker"
              name="smoker"
              autoComplete="smoker"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyDetails.utilitySuppliers.hmoLicenceObject.hmoLicence"
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
              HMO licence reference number
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register(
                  "propertyDetails.utilitySuppliers.hmoLicenceObject.referenceNumber"
                )}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              Licensed number of occupants
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register(
                  "propertyDetails.utilitySuppliers.hmoLicenceObject.noOfOccupants"
                )}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              Renewal date
            </label>
            <div className="mt-1">
              <input
                type="date"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register(
                  "propertyDetails.utilitySuppliers.hmoLicenceObject.renewalDate"
                )}
              />
            </div>
          </div>
          <div className="col-span-2">
            <fieldset className="space-y-5">
              <legend className="sr-only">Choose</legend>
              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="comments"
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    value="HMO administration and renewal to be handled by the Owner(s)"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    {...register(
                      "propertyDetails.utilitySuppliers.hmoLicenceObject.handledBy"
                    )}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="comments"
                    className="font-medium text-gray-700"
                  >
                    HMO administration and renewal to be handled by the Owner(s)
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
                    value="HMO administration and renewal is to be arranged by the
                    Agent"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    {...register(
                      "propertyDetails.utilitySuppliers.hmoLicenceObject.handledBy"
                    )}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="offers" className="font-medium text-gray-700">
                    HMO administration and renewal is to be arranged by the
                    Agent
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </h1>
    </>
  );
};

export default HMOLicence;
