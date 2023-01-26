import React from "react";

const Factoring = ({ register }) => {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold leading-6 text-gray-900">
          2.g Factoring
        </h1>
      </div>
      <div className=" grid grid-cols-2 gap-5 pt-5">
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-900 ">
            Is the property factored?
          </label>
          <select
            id="smoker"
            name="smoker"
            autoComplete="smoker"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            {...register("propertyDetails.factoring.propertyFactored")}
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
            Factoring company
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.factoring.factoringCompany")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.factoring.emailAddress")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Telephone
          </label>
          <div className="mt-1">
            <input
              type="tel"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.factoring.telephone")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <div className="mt-1">
            <textarea
              id="description"
              name="description"
              rows={5}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              defaultValue={""}
              {...register("propertyDetails.factoring.address")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Post Code
          </label>
          <div className="mt-1">
            <input
              type="number"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.factoring.postCode")}
            />
          </div>

          <p className=" text-sm text-gray-500 pt-2">
            *Please note it is the landlord’s responsibility to contact the
            factor directly to set up an account. If no factor has been
            instructed, it is not the Agent's responsibility to maintain
            communal areas.
          </p>
        </div>
      </div>
    </>
  );
};

export default Factoring;
