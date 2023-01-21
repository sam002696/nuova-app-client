import React from "react";

const StageTwo = ({ register }) => {
  return (
    <>
      <p className=" text-lg  font-semibold pt-5 underline underline-offset-4">
        The property you are applying for:
      </p>
      <div className="grid grid-cols-2 gap-5 pt-8">
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Address of property :
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyApplyingFor.addressOfProperty")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Desired entry date :
          </label>
          <div className="mt-1">
            <input
              type="date"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyApplyingFor.desiredEntryDate")}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Rent :
          </label>
          <div className="mt-1">
            <input
              type="number"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyApplyingFor.rent")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Deposit :
          </label>
          <div className="mt-1">
            <input
              type="number"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyApplyingFor.deposit")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StageTwo;
