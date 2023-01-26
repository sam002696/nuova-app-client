import React from "react";

const Warranties = ({ register }) => {
  return (
    <>
      <div className="space-y-3">
        <p className=" text-lg text-gray-900 font-semibold ">4.f Warranties</p>
        <p className=" text-base text-gray-600">
          Please list any items which are covered under any other type of
          warranty and who the warranty agreement is with.
        </p>
      </div>
      <div className=" grid grid-cols-4 gap-5">
        <div className="col-span-1">
          <label
            htmlFor="item"
            className="block text-sm font-medium text-gray-700"
          >
            1. Item
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="item"
              id="item"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.0.item")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="manufacturer"
            className="block text-sm font-medium text-gray-700"
          >
            Manufacturer
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="manufacturer"
              id="manufacturer"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.0.manufacturer")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="model"
            className="block text-sm font-medium text-gray-700"
          >
            Model
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="model"
              id="model"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.0.model")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="warrantyExpiryDate"
            className="block text-sm font-medium text-gray-700"
          >
            Warranty expiry date
          </label>
          <div className="mt-1">
            <input
              type="date"
              name="warrantyExpiryDate"
              id="warrantyExpiryDate"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.warranties.0.warrantyExpiryDate"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="provider"
            className="block text-sm font-medium text-gray-700"
          >
            Provider
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="provider"
              id="provider"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.0.provider")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="contactDetails"
            className="block text-sm font-medium text-gray-700"
          >
            Contact details
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="contactDetails"
              id="contactDetails"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.0.contactDetails")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="refNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Reference number
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="refNumber"
              id="refNumber"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.0.refNumber")}
            />
          </div>
        </div>
      </div>
      <hr className=" border-1 border-gray-400" />

      <div className=" grid grid-cols-4 gap-5">
        <div className="col-span-1">
          <label
            htmlFor="item"
            className="block text-sm font-medium text-gray-700"
          >
            2. Item
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="item"
              id="item"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.1.item")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="manufacturer"
            className="block text-sm font-medium text-gray-700"
          >
            Manufacturer
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="manufacturer"
              id="manufacturer"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.1.manufacturer")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="model"
            className="block text-sm font-medium text-gray-700"
          >
            Model
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="model"
              id="model"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.1.model")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="warrantyExpiryDate"
            className="block text-sm font-medium text-gray-700"
          >
            Warranty expiry date
          </label>
          <div className="mt-1">
            <input
              type="date"
              name="warrantyExpiryDate"
              id="warrantyExpiryDate"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.warranties.1.warrantyExpiryDate"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="provider"
            className="block text-sm font-medium text-gray-700"
          >
            Provider
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="provider"
              id="provider"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.1.provider")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="contactDetails"
            className="block text-sm font-medium text-gray-700"
          >
            Contact details
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="contactDetails"
              id="contactDetails"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.1.contactDetails")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="refNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Reference number
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="refNumber"
              id="refNumber"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.1.refNumber")}
            />
          </div>
        </div>
      </div>

      <hr className=" border-1 border-gray-400" />

      <div className=" grid grid-cols-4 gap-5">
        <div className="col-span-1">
          <label
            htmlFor="item"
            className="block text-sm font-medium text-gray-700"
          >
            3. Item
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="item"
              id="item"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.2.item")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="manufacturer"
            className="block text-sm font-medium text-gray-700"
          >
            Manufacturer
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="manufacturer"
              id="manufacturer"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.2.manufacturer")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="model"
            className="block text-sm font-medium text-gray-700"
          >
            Model
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="model"
              id="model"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.2.model")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="warrantyExpiryDate"
            className="block text-sm font-medium text-gray-700"
          >
            Warranty expiry date
          </label>
          <div className="mt-1">
            <input
              type="date"
              name="warrantyExpiryDate"
              id="warrantyExpiryDate"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.warranties.2.warrantyExpiryDate"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="provider"
            className="block text-sm font-medium text-gray-700"
          >
            Provider
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="provider"
              id="provider"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.2.provider")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="contactDetails"
            className="block text-sm font-medium text-gray-700"
          >
            Contact details
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="contactDetails"
              id="contactDetails"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.2.contactDetails")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="refNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Reference number
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="refNumber"
              id="refNumber"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.2.refNumber")}
            />
          </div>
        </div>
      </div>

      <hr className=" border-1 border-gray-400" />

      <div className=" grid grid-cols-4 gap-5">
        <div className="col-span-1">
          <label
            htmlFor="item"
            className="block text-sm font-medium text-gray-700"
          >
            4. Item
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="item"
              id="item"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.3.item")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="manufacturer"
            className="block text-sm font-medium text-gray-700"
          >
            Manufacturer
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="manufacturer"
              id="manufacturer"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.3.manufacturer")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="model"
            className="block text-sm font-medium text-gray-700"
          >
            Model
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="model"
              id="model"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.3.model")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="warrantyExpiryDate"
            className="block text-sm font-medium text-gray-700"
          >
            Warranty expiry date
          </label>
          <div className="mt-1">
            <input
              type="date"
              name="warrantyExpiryDate"
              id="warrantyExpiryDate"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "propertyMaintenance.warranties.3.warrantyExpiryDate"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="provider"
            className="block text-sm font-medium text-gray-700"
          >
            Provider
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="provider"
              id="provider"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.3.provider")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="contactDetails"
            className="block text-sm font-medium text-gray-700"
          >
            Contact details
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="contactDetails"
              id="contactDetails"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.3.contactDetails")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="refNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Reference number
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="refNumber"
              id="refNumber"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyMaintenance.warranties.3.refNumber")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Warranties;
