import React from "react";

const UtilitySuppliers = ({ register }) => {
  return (
    <>
      <h1 className="text-xl font-semibold leading-6 text-gray-900">
        2.i Utility suppliers
      </h1>
      <p className="text-lg font-semibold  text-gray-900">Gas</p>

      <div className=" grid grid-cols-3 gap-5 pt-2">
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Gas
          </label>
          <select
            id="smoker"
            name="smoker"
            autoComplete="smoker"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            {...register("propertyDetails.utilitySuppliers.gasObject.gas")}
          >
            <option>Select</option>
            <option>Gas</option>
            <option>No Gas</option>
          </select>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Meter type
          </label>
          <select
            id="smoker"
            name="smoker"
            autoComplete="smoker"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            {...register(
              "propertyDetails.utilitySuppliers.gasObject.meterType"
            )}
          >
            <option>Select</option>
            <option>Smart</option>
            <option>Credit</option>
            <option>Prepay</option>
          </select>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Location of gas meter
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyDetails.utilitySuppliers.gasObject.location"
              )}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Gas supplier
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyDetails.utilitySuppliers.gasObject.supplier"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Gas meter point reference (found on bill)
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyDetails.utilitySuppliers.gasObject.meterPoint"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Gas meter serial number
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyDetails.utilitySuppliers.gasObject.meterSerialNo"
              )}
            />
          </div>
        </div>
      </div>

      <p className="text-lg font-semibold  text-gray-900">Electricity</p>
      <div className=" grid grid-cols-3 gap-5 pt-2">
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Meter type
          </label>
          <select
            id="smoker"
            name="smoker"
            autoComplete="smoker"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            {...register(
              "propertyDetails.utilitySuppliers.electricity.meterType"
            )}
          >
            <option>Select</option>
            <option>Smart</option>
            <option>Credit</option>
            <option>Prepay</option>
          </select>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Location of electricity meter
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyDetails.utilitySuppliers.electricity.location"
              )}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Electricity supplier
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyDetails.utilitySuppliers.electricity.supplier"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Electricity supply number (found on bill)
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyDetails.utilitySuppliers.electricity.supplyNumber"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Electricity meter serial number
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyDetails.utilitySuppliers.electricity.meterSerialNo"
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UtilitySuppliers;
