import React from "react";

const ContactDetails = () => {
  return (
    <>
      <div className="space-y-3">
        <p className=" text-lg text-gray-900 font-semibold ">
          4.b Maintenance Contact Details
        </p>
        <p className=" text-base text-gray-600 ">
          If the Owner would like the Agent to use specific contact details
          different from those stated in section 3.a when arranging and
          authorising maintenance works, please list these below.
        </p>
      </div>
      <div className=" grid grid-cols-2 gap-5">
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Full name
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
            Relationship to Owner
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
            Telephone
          </label>
          <div className="mt-1">
            <input
              type="tel"
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
            Email address
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
