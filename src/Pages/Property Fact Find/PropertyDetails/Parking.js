import React from "react";

const Parking = ({ register }) => {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold leading-6 text-gray-900">
          2.d Parking
        </h1>
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
              {...register("propertyDetails.parking.permitSuppliedBy")}
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
              {...register("propertyDetails.parking.spaceNumber")}
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
              {...register("propertyDetails.parking.permitsPerProperty")}
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
              {...register("propertyDetails.parking.spaceLocation")}
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
              {...register("propertyDetails.parking.entryCode")}
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
            {...register("propertyDetails.parking.remoteFob")}
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
              {...register("propertyDetails.parking.suppliedBy")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Parking;
