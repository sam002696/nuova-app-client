import React from "react";

const FeaturesAppliances = ({ register }) => {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold leading-6 text-gray-900">
          2.c Features and Appliances
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
              value="Gas central heating"
              {...register(
                "propertyDetails.featuresAppliances.featuresAndAppliances"
              )}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
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
              value="White meter heating"
              {...register(
                "propertyDetails.featuresAppliances.featuresAndAppliances"
              )}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
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
              value="Electric central heating"
              {...register(
                "propertyDetails.featuresAppliances.featuresAndAppliances"
              )}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
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
              value="Under floor heating"
              {...register(
                "propertyDetails.featuresAppliances.featuresAndAppliances"
              )}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
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
              value="Double glazing"
              {...register(
                "propertyDetails.featuresAppliances.featuresAndAppliances"
              )}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
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
              value="Tumble dryer"
              {...register(
                "propertyDetails.featuresAppliances.featuresAndAppliances"
              )}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
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
              value="Dishwasher"
              {...register(
                "propertyDetails.featuresAppliances.featuresAndAppliances"
              )}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="offers" className="font-medium text-gray-700">
              Dishwasher
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
              value="TV"
              {...register(
                "propertyDetails.featuresAppliances.featuresAndAppliances"
              )}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="offers" className="font-medium text-gray-700">
              TV
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
              value="Balcony/Terrace"
              {...register(
                "propertyDetails.featuresAppliances.featuresAndAppliances"
              )}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="offers" className="font-medium text-gray-700">
              Balcony/Terrace
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
              value="Private garden"
              {...register(
                "propertyDetails.featuresAppliances.featuresAndAppliances"
              )}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="offers" className="font-medium text-gray-700">
              Private garden
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
              value="Shared Garden"
              {...register(
                "propertyDetails.featuresAppliances.featuresAndAppliances"
              )}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="offers" className="font-medium text-gray-700">
              Shared Garden
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
              value="Washing machine"
              {...register(
                "propertyDetails.featuresAppliances.featuresAndAppliances"
              )}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="offers" className="font-medium text-gray-700">
              Washing machine
            </label>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-2 gap-5 pt-5">
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Other (please specify)
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyDetails.featuresAppliances.featuresAndAppliancesOther"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Other external areas/facilities included with the let property?
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyDetails.featuresAppliances.externalAreasFacilities"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Any shared areas/facilities included with the let property?
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyDetails.featuresAppliances.sharedAreasFacilities"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Any excluded area/facilities?
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyDetails.featuresAppliances.excludedAreaFacilities"
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesAppliances;
