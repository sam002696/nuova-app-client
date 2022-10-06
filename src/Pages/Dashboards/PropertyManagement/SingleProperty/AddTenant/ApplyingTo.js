import { MailIcon } from "@heroicons/react/solid";
import React from "react";

const ApplyingTo = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Applicant
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>

      <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor=" First Name"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            First Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name=" First Name"
              id="address"
              autoComplete="given-name"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor=" First Name"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Last Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="Last Name"
              id="Last Name"
              autoComplete="given-name"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Email
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MailIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="Phone No"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Phone No
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="tel"
              name="Phone No"
              id="Phone No"
              placeholder="+1 (555) 987-6543"
              autoComplete="given-name"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor=" Total Occupants"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Total Occupants
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="number"
              name=" Total Occupants"
              id=" Total Occupants"
              placeholder="10"
              autoComplete="given-name"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor=" Total Occupants"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Pets
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="number"
              name="pets"
              id="pets"
              placeholder="2"
              autoComplete="given-name"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="about"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Pets Description
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <textarea
              id="about"
              name="about"
              rows={3}
              className="max-w-lg shadow-sm block w-full focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border border-gray-300 rounded-md"
              defaultValue={""}
            />
            <p className="mt-2 text-sm text-gray-500">
              Write a few sentences about the pets.
            </p>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700"
          >
            Photo
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <div className="flex items-center">
              <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <button
                type="button"
                className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Change
              </button>
            </div>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor=" Total Occupants"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Smokes
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <select
              id="smokes"
              name="smokes"
              autoComplete="country-name"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor=" Total Occupants"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Lawsuit
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <select
              id="lawsuit"
              name="lawsuit"
              autoComplete="country-name"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor=" Total Occupants"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Felony
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <select
              id="felony"
              name="felony"
              autoComplete="country-name"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="lawsuit desc"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Felony/Lawsuit Description
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <textarea
              id="lawsuit desc"
              name="lawsuit desc"
              rows={3}
              className="max-w-lg shadow-sm block w-full focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border border-gray-300 rounded-md"
              defaultValue={""}
              placeholder="none"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="Current Income"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Current Income
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="number"
              name="Current Income"
              id="Current Income"
              placeholder="10,000"
              autoComplete="given-name"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="Income Asssistance"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Income Asssistance
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="number"
              name="Income Asssistance"
              id="Income Asssistance"
              placeholder="none"
              autoComplete="given-name"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="Credit Score"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Credit Score
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="number"
              name="Credit Score"
              id="Credit Score"
              placeholder="750 & above"
              autoComplete="given-name"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyingTo;
