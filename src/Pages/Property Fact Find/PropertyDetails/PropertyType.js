import React from "react";

const PropertyType = ({ register }) => {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold leading-6 text-gray-900">
          2.a Property Type
        </h1>
      </div>

      <div className="grid grid-cols-6 gap-x-2">
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="propertyType"
              aria-describedby="propertyType-description"
              name="propertyType"
              type="checkbox"
              value="Studio Flat"
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
              {...register("propertyDetails.propertyType")}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="comments" className="font-medium text-gray-700">
              Studio flat
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="propertyType"
              aria-describedby="propertyType-description"
              name="propertyType"
              type="checkbox"
              value="Flat"
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
              {...register("propertyDetails.propertyType")}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="propertyType" className="font-medium text-gray-700">
              Flat
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="propertyType"
              aria-describedby="propertyType-description"
              name="propertyType"
              type="checkbox"
              value="Bungalow"
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
              {...register("propertyDetails.propertyType")}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="propertyType" className="font-medium text-gray-700">
              Bungalow
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="propertyType"
              aria-describedby="propertyType-description"
              name="propertyType"
              type="checkbox"
              value="Terraced house"
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
              {...register("propertyDetails.propertyType")}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="propertyType" className="font-medium text-gray-700">
              Terraced house
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="propertyType"
              aria-describedby="propertyType-description"
              name="propertyType"
              type="checkbox"
              value="Semi-detached house"
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
              {...register("propertyDetails.propertyType")}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="propertyType" className="font-medium text-gray-700">
              Semi-detached house
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="propertyType"
              aria-describedby="propertyType-description"
              name="propertyType"
              type="checkbox"
              value="Detached house"
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
              {...register("propertyDetails.propertyType")}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="propertyType" className="font-medium text-gray-700">
              Detached house
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyType;
