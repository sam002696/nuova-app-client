import React from "react";

const OwnerOne = ({ register }) => {
  return (
    <>
      <div className="">
        <p className=" text-lg text-gray-900 font-semibold pb-2">Owner 1</p>
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-1">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("engagementOfNuova.ownerOne.firstName")}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="surname"
              className="block text-sm font-medium text-gray-700"
            >
              Surname
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="surname"
                id="surname"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("engagementOfNuova.ownerOne.surname")}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700"
            >
              Date of birth
            </label>
            <div className="mt-1">
              <input
                type="date"
                name="dob"
                id="dob"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("engagementOfNuova.ownerOne.dob")}
              />
            </div>
          </div>
          <div className="col-span-3">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <div className="mt-1">
              <textarea
                id="address"
                name="address"
                rows={3}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("engagementOfNuova.ownerOne.address")}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="signature"
              className="block text-sm font-medium text-gray-700"
            >
              Signature
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="signature"
                id="signature"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("engagementOfNuova.ownerOne.signature")}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="todaysDate"
              className="block text-sm font-medium text-gray-700"
            >
              Today’s date (dd/mm/yyyy)
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="todaysDate"
                id="todaysDate"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("engagementOfNuova.ownerOne.todaysDate")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerOne;
