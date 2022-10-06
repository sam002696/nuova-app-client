import React from "react";

const SafetyCertificates = () => {
  return (
    <>
      <div className="space-y-3">
        <p className=" text-lg text-gray-900 font-semibold ">
          4.e Safety Tests & Essential Certificates
        </p>
        <p className=" text-base text-gray-600 italic">
          Please take care completing this section
        </p>
      </div>

      <div className="grid grid-cols-6 gap-5">
        {/* GSC */}
        <div className=" col-span-1">
          <p className=" text-gray-900 text-base pt-2">
            Gas Safety Certificate (GSC)
          </p>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700 pb-1"
          >
            N/A
            <br /> No gas
          </label>

          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700 pb-1"
          >
            Owner(s)
            <br /> will provide
          </label>

          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700 pb-1"
          >
            Owner(s) instruct
            <br /> the Agent to arrange
          </label>

          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Certificate expiry date
          </label>
          <div className="mt-1">
            <input
              type="date"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700 pb-1"
          >
            Owner(s) instruct
            <br /> the Agent to renew
          </label>

          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* EPC */}
        <div className=" col-span-1">
          <p className=" text-gray-900 text-base pt-2">
            Energy Performance Certificate (EPC)
          </p>
        </div>
        <div className="col-span-1">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-10"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-10"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-10"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="mt-1">
            <input
              type="date"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-10"
            />
          </div>
        </div>

        {/* LRA */}

        <div className=" col-span-1">
          <p className=" text-gray-900 text-base pt-2">
            Legionnaires Risk Assessment (LRA)
          </p>
        </div>
        <div className="col-span-1">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-10"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-10"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-10"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="mt-1">
            <input
              type="date"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-10"
            />
          </div>
        </div>

        {/*EICR  */}
        <div className=" col-span-1">
          <p className=" text-gray-900 text-base pt-2">
            Electrical Installation Condition Report (EICR)
          </p>
        </div>
        <div className="col-span-1">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-10"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-10"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-10"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="mt-1">
            <input
              type="date"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-10"
            />
          </div>
        </div>

        {/* PAT */}
        <div className=" col-span-1">
          <p className=" text-gray-900 text-base pt-2">
            Portable Appliance Testing (PAT)
          </p>
        </div>
        <div className="col-span-1">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-10"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-10"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-10"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="mt-1">
            <input
              type="date"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-10"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 pt-4">
        <div className="col-span-2">
          <p className=" text-base text-gray-900 leading-6 pt-2">
            The Owner requests that the Agent arrange a quote for the
            installation of fully approved interlinked{" "}
            <span className="font-bold">smoke and heat detector</span>
          </p>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700 pt-2"
          >
            Yes
          </label>

          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700 pt-2"
          >
            No
          </label>

          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      <div>
        <p className=" text-base text-gray-900 leading-6 pt-2">
          If selected to provide above, it is the Owner’s responsibility to
          supply valid certificates to the Agent no less than 48 hours prior to
          the commencement of the first tenancy. If these are not received, the
          Agent reserves the right to arrange for new certificates on the
          Owner’s behalf, and at the Owner’s expense, to comply with current
          legislation.
        </p>
      </div>
    </>
  );
};

export default SafetyCertificates;
