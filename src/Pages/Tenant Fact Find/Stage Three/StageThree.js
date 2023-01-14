import React from "react";

const StageThree = ({ register }) => {
  return (
    <>
      <p className=" text-lg  font-semibold pt-5 underline underline-offset-4">
        Tenant Info (Tenant 1) :
      </p>
      <div className="grid grid-cols-2 gap-5 pt-8">
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Title(Mr/Mrs)
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("title")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("fullName")}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Date of birth
          </label>
          <div className="mt-1">
            <input
              type="date"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("dob")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Nationality
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Passport No
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("passportNo")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Telephone No
          </label>
          <div className="mt-1">
            <input
              type="tel"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("telephoneNo")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("email")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Current Address (Years at present address)
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("currentAddress")}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Number of children
          </label>
          <div className="mt-1">
            <input
              type="number"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("numberOfChildren")}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Smoker
          </label>
          <div className="mt-1">
            <input
              type="number"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("smoker")}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Pets
          </label>
          <div className="mt-1">
            <input
              type="number"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("pets")}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Please upload photographic ID :
          </label>
          <div className="mt-1">
            <input
              type="file"
              name="project-name"
              id="project-name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md file:bg-gray-500   file:text-white focus:outline-none focus:border-gray-500 block w-full file:p-2 file:border-none  file:focus:border-gray-500 "
              {...register("photographicId")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StageThree;
